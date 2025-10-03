-- Fix critical security vulnerability: Remove RLS policies that expose admin credentials
-- The admin_users table should ONLY be accessible through secure server-side functions

-- Drop the dangerous SELECT policy that exposes password hashes
DROP POLICY IF EXISTS "Admin users can view their own data" ON public.admin_users;

-- Drop the UPDATE policy as well - updates should only happen through secure functions
DROP POLICY IF EXISTS "Admin users can update their own data" ON public.admin_users;

-- The admin_users table now has:
-- - RLS enabled (protection layer)
-- - No SELECT/UPDATE/DELETE policies (complete lockdown from client)
-- - INSERT policy that denies all direct inserts
-- - Access only through security definer functions: verify_admin_auth() and create_admin_user()

-- This ensures:
-- 1. Password hashes can NEVER be queried from the client
-- 2. Admin authentication happens only server-side
-- 3. No privilege escalation attacks possible
-- 4. Admin operations are auditable through function calls