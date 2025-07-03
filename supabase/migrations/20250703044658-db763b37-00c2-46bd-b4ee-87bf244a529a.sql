-- Crear un usuario administrador directamente con hash simple
INSERT INTO public.admin_users (email, password_hash, is_active) 
VALUES ('admin@haby.com', crypt('admin123', gen_salt('bf')), true);