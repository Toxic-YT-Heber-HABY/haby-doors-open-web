-- Forzar la reinstalación de pgcrypto y verificar que funciona
DROP EXTENSION IF EXISTS pgcrypto CASCADE;
CREATE EXTENSION pgcrypto;

-- Verificar que la función crypt funciona
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_proc WHERE proname = 'crypt') THEN
    RAISE EXCEPTION 'La extensión pgcrypto no se instaló correctamente';
  END IF;
END $$;

-- Eliminar el usuario admin existente
DELETE FROM public.admin_users WHERE email = 'admin@haby.com';

-- Crear el usuario administrador con contraseña hasheada correctamente
INSERT INTO public.admin_users (email, password_hash, is_active) 
VALUES ('admin@haby.com', crypt('admin123', gen_salt('bf')), true);

-- Recrear las funciones de verificación y creación de admin
CREATE OR REPLACE FUNCTION public.verify_admin_auth(admin_email TEXT, admin_password TEXT)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  admin_id UUID;
  stored_hash TEXT;
BEGIN
  -- Get the admin user
  SELECT id, password_hash INTO admin_id, stored_hash
  FROM public.admin_users
  WHERE email = admin_email AND is_active = true;

  -- Check if user exists and password matches
  IF admin_id IS NOT NULL AND crypt(admin_password, stored_hash) = stored_hash THEN
    -- Update last login
    UPDATE public.admin_users 
    SET last_login = now(), updated_at = now()
    WHERE id = admin_id;
    
    RETURN admin_id;
  ELSE
    RETURN NULL;
  END IF;
END;
$$;

CREATE OR REPLACE FUNCTION public.create_admin_user(admin_email TEXT, admin_password TEXT)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  new_admin_id UUID;
  password_hash TEXT;
BEGIN
  -- Check if admin already exists
  IF EXISTS (SELECT 1 FROM public.admin_users WHERE email = admin_email) THEN
    RAISE EXCEPTION 'Admin user already exists';
  END IF;

  -- Hash the password
  password_hash := crypt(admin_password, gen_salt('bf'));
  
  -- Insert new admin
  INSERT INTO public.admin_users (email, password_hash)
  VALUES (admin_email, password_hash)
  RETURNING id INTO new_admin_id;
  
  RETURN new_admin_id;
END;
$$;