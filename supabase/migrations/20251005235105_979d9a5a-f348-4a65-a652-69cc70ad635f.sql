-- Block all direct SELECT access to admin_users table
-- Authentication MUST go through security definer functions only
CREATE POLICY "Block all direct access to admin credentials"
ON public.admin_users
FOR SELECT
TO public
USING (false);

-- This ensures that password hashes and emails can NEVER be read directly by clients
-- Authentication is only possible through the verify_admin_auth() security definer function