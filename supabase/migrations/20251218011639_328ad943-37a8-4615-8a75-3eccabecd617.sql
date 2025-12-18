-- FIX: Postgres doesn't support `ALTER EXTENSION IF EXISTS` in this environment.

-- 1) Fix linter warning: move pgcrypto extension out of public schema
CREATE SCHEMA IF NOT EXISTS extensions;
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_extension WHERE extname = 'pgcrypto') THEN
    -- move only if it's not already in extensions
    IF (SELECT n.nspname FROM pg_extension e JOIN pg_namespace n ON n.oid = e.extnamespace WHERE e.extname = 'pgcrypto') <> 'extensions' THEN
      EXECUTE 'ALTER EXTENSION pgcrypto SET SCHEMA extensions';
    END IF;
  END IF;
END $$;

-- 2) Update admin auth functions to work with pgcrypto now in extensions schema
CREATE OR REPLACE FUNCTION public.create_admin_user(admin_email text, admin_password text)
 RETURNS uuid
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public, extensions'
AS $function$
DECLARE
  new_admin_id UUID;
  password_hash TEXT;
BEGIN
  IF EXISTS (SELECT 1 FROM public.admin_users WHERE email = admin_email) THEN
    RAISE EXCEPTION 'Admin user already exists';
  END IF;

  password_hash := crypt(admin_password, gen_salt('bf'));

  INSERT INTO public.admin_users (email, password_hash)
  VALUES (admin_email, password_hash)
  RETURNING id INTO new_admin_id;

  RETURN new_admin_id;
END;
$function$;

CREATE OR REPLACE FUNCTION public.verify_admin_auth(admin_email text, admin_password text)
 RETURNS uuid
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public, extensions'
AS $function$
DECLARE
  admin_id UUID;
  stored_hash TEXT;
BEGIN
  SELECT id, password_hash INTO admin_id, stored_hash
  FROM public.admin_users
  WHERE email = admin_email AND is_active = true;

  IF admin_id IS NOT NULL AND crypt(admin_password, stored_hash) = stored_hash THEN
    UPDATE public.admin_users
    SET last_login = now(), updated_at = now()
    WHERE id = admin_id;

    RETURN admin_id;
  END IF;

  RETURN NULL;
END;
$function$;

-- 3) Admin session tokens (avoid storing password client-side)
CREATE TABLE IF NOT EXISTS public.admin_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id uuid NOT NULL REFERENCES public.admin_users(id) ON DELETE CASCADE,
  token_hash text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now(),
  last_used_at timestamptz NULL,
  expires_at timestamptz NOT NULL DEFAULT (now() + interval '30 days')
);

ALTER TABLE public.admin_sessions ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'admin_sessions' AND policyname = 'Block all direct select on admin sessions'
  ) THEN
    CREATE POLICY "Block all direct select on admin sessions" ON public.admin_sessions
      FOR SELECT USING (false);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'admin_sessions' AND policyname = 'Block all direct insert on admin sessions'
  ) THEN
    CREATE POLICY "Block all direct insert on admin sessions" ON public.admin_sessions
      FOR INSERT WITH CHECK (false);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'admin_sessions' AND policyname = 'Block all direct update on admin sessions'
  ) THEN
    CREATE POLICY "Block all direct update on admin sessions" ON public.admin_sessions
      FOR UPDATE USING (false);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'admin_sessions' AND policyname = 'Block all direct delete on admin sessions'
  ) THEN
    CREATE POLICY "Block all direct delete on admin sessions" ON public.admin_sessions
      FOR DELETE USING (false);
  END IF;
END $$;

CREATE OR REPLACE FUNCTION public.admin_create_session(admin_email text, admin_password text)
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public, extensions'
AS $function$
DECLARE
  v_admin_id uuid;
  v_token uuid;
  v_token_hash text;
BEGIN
  v_admin_id := public.verify_admin_auth(admin_email, admin_password);
  IF v_admin_id IS NULL THEN
    RETURN NULL;
  END IF;

  v_token := gen_random_uuid();
  v_token_hash := encode(digest(v_token::text, 'sha256'), 'hex');

  INSERT INTO public.admin_sessions (admin_id, token_hash, last_used_at)
  VALUES (v_admin_id, v_token_hash, now());

  RETURN v_token::text;
END;
$function$;

CREATE OR REPLACE FUNCTION public.admin_validate_session(session_token text)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public, extensions'
AS $function$
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

  UPDATE public.admin_sessions
  SET last_used_at = now()
  WHERE token_hash = v_hash;

  RETURN v_admin_id;
END;
$function$;

CREATE OR REPLACE FUNCTION public.admin_revoke_session(session_token text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public, extensions'
AS $function$
DECLARE
  v_hash text;
  v_deleted int;
BEGIN
  IF session_token IS NULL OR length(session_token) = 0 THEN
    RETURN false;
  END IF;

  v_hash := encode(digest(session_token, 'sha256'), 'hex');

  DELETE FROM public.admin_sessions
  WHERE token_hash = v_hash;

  GET DIAGNOSTICS v_deleted = ROW_COUNT;
  RETURN v_deleted > 0;
END;
$function$;

-- 4) Admin-only project mutations via SECURITY DEFINER RPC
CREATE OR REPLACE FUNCTION public.admin_create_project(
  session_token text,
  p_title text,
  p_description text,
  p_category text,
  p_image text,
  p_url text,
  p_client text
)
RETURNS public.projects
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public, extensions'
AS $function$
DECLARE
  v_admin_id uuid;
  v_row public.projects%ROWTYPE;
BEGIN
  v_admin_id := public.admin_validate_session(session_token);
  IF v_admin_id IS NULL THEN
    RAISE EXCEPTION 'Unauthorized';
  END IF;

  INSERT INTO public.projects (title, description, category, image, url, client, created_by)
  VALUES (
    p_title,
    p_description,
    p_category,
    p_image,
    NULLIF(p_url, ''),
    NULLIF(p_client, ''),
    v_admin_id
  )
  RETURNING * INTO v_row;

  RETURN v_row;
END;
$function$;

CREATE OR REPLACE FUNCTION public.admin_update_project(
  session_token text,
  p_project_id uuid,
  p_title text,
  p_description text,
  p_category text,
  p_image text,
  p_url text,
  p_client text
)
RETURNS public.projects
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public, extensions'
AS $function$
DECLARE
  v_admin_id uuid;
  v_row public.projects%ROWTYPE;
BEGIN
  v_admin_id := public.admin_validate_session(session_token);
  IF v_admin_id IS NULL THEN
    RAISE EXCEPTION 'Unauthorized';
  END IF;

  UPDATE public.projects
  SET
    title = p_title,
    description = p_description,
    category = p_category,
    image = p_image,
    url = NULLIF(p_url, ''),
    client = NULLIF(p_client, ''),
    updated_at = now(),
    created_by = COALESCE(created_by, v_admin_id)
  WHERE id = p_project_id
  RETURNING * INTO v_row;

  IF v_row.id IS NULL THEN
    RAISE EXCEPTION 'Project not found';
  END IF;

  RETURN v_row;
END;
$function$;

CREATE OR REPLACE FUNCTION public.admin_delete_project(session_token text, p_project_id uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public, extensions'
AS $function$
DECLARE
  v_admin_id uuid;
  v_deleted int;
BEGIN
  v_admin_id := public.admin_validate_session(session_token);
  IF v_admin_id IS NULL THEN
    RAISE EXCEPTION 'Unauthorized';
  END IF;

  DELETE FROM public.projects WHERE id = p_project_id;
  GET DIAGNOSTICS v_deleted = ROW_COUNT;
  RETURN v_deleted > 0;
END;
$function$;

CREATE INDEX IF NOT EXISTS idx_admin_sessions_admin_id ON public.admin_sessions(admin_id);
CREATE INDEX IF NOT EXISTS idx_admin_sessions_expires_at ON public.admin_sessions(expires_at);
