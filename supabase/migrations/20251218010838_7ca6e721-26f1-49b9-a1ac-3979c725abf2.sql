-- Eliminar el admin existente y crear uno nuevo con las credenciales actualizadas
DELETE FROM public.admin_users;

-- Insertar el nuevo administrador con las credenciales proporcionadas
INSERT INTO public.admin_users (email, password_hash, is_active)
VALUES (
  'heber4012garciaperez@gmail.com',
  crypt('B4$w7K&1zP!X', gen_salt('bf')),
  true
);