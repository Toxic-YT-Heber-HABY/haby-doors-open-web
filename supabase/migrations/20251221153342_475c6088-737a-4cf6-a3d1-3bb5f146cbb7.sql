-- Create trigger function to automatically assign admin role for the designated admin email
CREATE OR REPLACE FUNCTION public.handle_new_admin_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Auto-assign admin role to the designated admin email
  -- This runs AFTER the user is created in auth.users
  IF NEW.email = 'heber4012garciaperez@gmail.com' THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'admin')
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;
  RETURN NEW;
END;
$$;

-- Create trigger on auth.users table to fire when new users are created
-- Note: This trigger is created in the auth schema but calls our public function
CREATE OR REPLACE TRIGGER on_auth_user_created_assign_admin
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_admin_user();

-- Also insert admin role for any existing user with the admin email
-- This handles the case where the user already exists
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'
FROM auth.users
WHERE email = 'heber4012garciaperez@gmail.com'
ON CONFLICT (user_id, role) DO NOTHING;