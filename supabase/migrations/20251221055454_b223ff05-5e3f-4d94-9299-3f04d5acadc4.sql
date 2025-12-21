-- ============================================
-- SECURITY FIX: Rate Limiting and Session Expiration
-- ============================================

-- 1. Create table for tracking login attempts (rate limiting)
CREATE TABLE IF NOT EXISTS public.admin_login_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  attempted_at timestamptz NOT NULL DEFAULT now(),
  success boolean NOT NULL DEFAULT false
);

-- Enable RLS on login attempts table
ALTER TABLE public.admin_login_attempts ENABLE ROW LEVEL SECURITY;

-- Block all direct access to login attempts table
CREATE POLICY "Block all direct access to login attempts"
ON public.admin_login_attempts
AS RESTRICTIVE
FOR ALL
USING (false);

-- 2. Create index for efficient rate limiting queries
CREATE INDEX IF NOT EXISTS idx_admin_login_attempts_email_time 
ON public.admin_login_attempts (email, attempted_at DESC);

-- 3. Create function to check rate limiting
CREATE OR REPLACE FUNCTION public.check_login_rate_limit(p_email text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  v_attempts_15min int;
  v_attempts_1hr int;
BEGIN
  -- Count failed attempts in last 15 minutes
  SELECT COUNT(*) INTO v_attempts_15min
  FROM public.admin_login_attempts
  WHERE email = p_email
    AND success = false
    AND attempted_at > now() - interval '15 minutes';

  -- Count failed attempts in last hour
  SELECT COUNT(*) INTO v_attempts_1hr
  FROM public.admin_login_attempts
  WHERE email = p_email
    AND success = false
    AND attempted_at > now() - interval '1 hour';

  -- Block if >5 failed attempts in 15 minutes or >10 in 1 hour
  IF v_attempts_15min >= 5 OR v_attempts_1hr >= 10 THEN
    RETURN false;
  END IF;

  RETURN true;
END;
$$;

-- 4. Create function to log login attempt
CREATE OR REPLACE FUNCTION public.log_login_attempt(p_email text, p_success boolean)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  INSERT INTO public.admin_login_attempts (email, success)
  VALUES (p_email, p_success);
  
  -- Cleanup old entries (keep last 30 days)
  DELETE FROM public.admin_login_attempts
  WHERE attempted_at < now() - interval '30 days';
END;
$$;

-- 5. Update admin_create_session to include rate limiting and shorter expiration
CREATE OR REPLACE FUNCTION public.admin_create_session(admin_email text, admin_password text)
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public, extensions'
AS $$
DECLARE
  v_admin_id uuid;
  v_token uuid;
  v_token_hash text;
  v_is_allowed boolean;
BEGIN
  -- Check rate limiting first
  v_is_allowed := public.check_login_rate_limit(admin_email);
  IF NOT v_is_allowed THEN
    -- Log the blocked attempt
    PERFORM public.log_login_attempt(admin_email, false);
    RAISE EXCEPTION 'Too many login attempts. Please try again later.';
  END IF;

  -- Verify credentials
  v_admin_id := public.verify_admin_auth(admin_email, admin_password);
  
  IF v_admin_id IS NULL THEN
    -- Log failed attempt
    PERFORM public.log_login_attempt(admin_email, false);
    RETURN NULL;
  END IF;

  -- Log successful attempt
  PERFORM public.log_login_attempt(admin_email, true);

  -- Generate session token
  v_token := gen_random_uuid();
  v_token_hash := encode(digest(v_token::text, 'sha256'), 'hex');

  -- Create session with 2-hour expiration (reduced from 30 days)
  INSERT INTO public.admin_sessions (admin_id, token_hash, last_used_at, expires_at)
  VALUES (v_admin_id, v_token_hash, now(), now() + interval '2 hours');

  -- Cleanup expired sessions
  DELETE FROM public.admin_sessions
  WHERE expires_at < now();

  RETURN v_token::text;
END;
$$;

-- 6. Update admin_validate_session to implement sliding session (extends on use)
CREATE OR REPLACE FUNCTION public.admin_validate_session(session_token text)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public, extensions'
AS $$
DECLARE
  v_hash text;
  v_admin_id uuid;
BEGIN
  IF session_token IS NULL OR length(session_token) = 0 THEN
    RETURN NULL;
  END IF;

  v_hash := encode(digest(session_token, 'sha256'), 'hex');

  SELECT s.admin_id
  INTO v_admin_id
  FROM public.admin_sessions s
  WHERE s.token_hash = v_hash
    AND s.expires_at > now()
  LIMIT 1;

  IF v_admin_id IS NULL THEN
    RETURN NULL;
  END IF;

  -- Sliding session: extend expiration by 2 hours on each validation
  UPDATE public.admin_sessions
  SET last_used_at = now(),
      expires_at = now() + interval '2 hours'
  WHERE token_hash = v_hash;

  RETURN v_admin_id;
END;
$$;

-- 7. Cleanup: delete expired sessions
DELETE FROM public.admin_sessions WHERE expires_at < now();