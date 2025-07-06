-- Primero habilitar pgcrypto y luego crear el admin
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Eliminar el admin existente si existe para recrearlo
DELETE FROM public.admin_users WHERE email = 'admin@haby.com';

-- Crear el usuario administrador con las credenciales correctas
INSERT INTO public.admin_users (email, password_hash, is_active) 
VALUES ('admin@haby.com', crypt('admin123', gen_salt('bf')), true);