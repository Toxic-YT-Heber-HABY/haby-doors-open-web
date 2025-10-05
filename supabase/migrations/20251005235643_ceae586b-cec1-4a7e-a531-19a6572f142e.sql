-- Security Enhancement: Block UPDATE access to admin_users table
-- This prevents any direct modification of admin credentials from the client
-- Updates MUST only happen through security definer functions

CREATE POLICY "Block all direct updates to admin credentials"
ON public.admin_users
FOR UPDATE
TO public
USING (false);

-- Security Note: Delete operations are already blocked by the restrictive INSERT policy
-- Only security definer functions can modify admin_users data

-- Add comment to document the security model
COMMENT ON TABLE public.admin_users IS 
'Admin authentication table with restrictive RLS policies. 
All access (SELECT, INSERT, UPDATE, DELETE) is blocked for direct client queries.
Authentication MUST go through security definer functions:
- verify_admin_auth(): Verifies credentials and returns admin ID
- create_admin_user(): Creates new admin with hashed password

SECURITY WARNING: This table uses custom authentication with localStorage.
For production, consider migrating to Supabase Auth with role-based access control (RBAC).';

-- Add security documentation for the projects table
COMMENT ON TABLE public.projects IS 
'Projects table with RLS policies requiring authentication.
Current implementation: Uses custom admin auth (admin_users + localStorage).
The created_by field is not enforced by RLS policies because auth.uid() is NULL 
when using custom authentication instead of Supabase Auth.

SECURITY LIMITATION: Any authenticated admin can modify any project.
To enable per-user ownership verification, migrate to Supabase Auth and implement:
1. Create app_role enum and user_roles table for RBAC
2. Update RLS policies to check has_role(auth.uid(), ''admin'')
3. Add trigger to auto-populate created_by with auth.uid() on INSERT
4. Add policies for UPDATE/DELETE checking created_by = auth.uid()';