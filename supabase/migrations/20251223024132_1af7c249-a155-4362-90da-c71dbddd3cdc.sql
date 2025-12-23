-- Remove unused custom admin authentication system
-- The application uses Supabase Auth with user_roles table instead

-- First, drop the foreign key constraint on admin_sessions
ALTER TABLE IF EXISTS public.admin_sessions 
  DROP CONSTRAINT IF EXISTS admin_sessions_admin_id_fkey;

-- Drop unused custom auth tables
DROP TABLE IF EXISTS public.admin_login_attempts CASCADE;
DROP TABLE IF EXISTS public.admin_sessions CASCADE;
DROP TABLE IF EXISTS public.admin_users CASCADE;

-- Drop unused custom auth functions
DROP FUNCTION IF EXISTS public.admin_create_session(text, text);
DROP FUNCTION IF EXISTS public.admin_validate_session(text);
DROP FUNCTION IF EXISTS public.admin_revoke_session(text);
DROP FUNCTION IF EXISTS public.verify_admin_auth(text, text);
DROP FUNCTION IF EXISTS public.create_admin_user(text, text);
DROP FUNCTION IF EXISTS public.check_login_rate_limit(text);
DROP FUNCTION IF EXISTS public.log_login_attempt(text, boolean);
DROP FUNCTION IF EXISTS public.admin_create_project(text, text, text, text, text, text, text);
DROP FUNCTION IF EXISTS public.admin_update_project(text, uuid, text, text, text, text, text, text);
DROP FUNCTION IF EXISTS public.admin_delete_project(text, uuid);

-- Update projects table: remove created_by foreign key reference to dropped admin_users table
ALTER TABLE public.projects 
  DROP CONSTRAINT IF EXISTS projects_created_by_fkey;