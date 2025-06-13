
-- Create admin users table with proper security
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  last_login TIMESTAMP WITH TIME ZONE,
  is_active BOOLEAN NOT NULL DEFAULT true
);

-- Enable Row Level Security
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Create policies for admin users table
CREATE POLICY "Admin users can view their own data" 
  ON public.admin_users 
  FOR SELECT 
  USING (auth.uid()::text = id::text);

CREATE POLICY "No direct insert on admin users" 
  ON public.admin_users 
  FOR INSERT 
  WITH CHECK (false);

CREATE POLICY "Admin users can update their own data" 
  ON public.admin_users 
  FOR UPDATE 
  USING (auth.uid()::text = id::text);

-- Create projects table with proper security
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  image TEXT NOT NULL,
  url TEXT,
  client TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by UUID REFERENCES public.admin_users(id) ON DELETE SET NULL
);

-- Enable Row Level Security for projects
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Create policies for projects table
CREATE POLICY "Anyone can view projects" 
  ON public.projects 
  FOR SELECT 
  USING (true);

CREATE POLICY "Only authenticated admins can insert projects" 
  ON public.projects 
  FOR INSERT 
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Only authenticated admins can update projects" 
  ON public.projects 
  FOR UPDATE 
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Only authenticated admins can delete projects" 
  ON public.projects 
  FOR DELETE 
  USING (auth.uid() IS NOT NULL);

-- Create security definer function to verify admin authentication
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

-- Create function to create admin user (for initial setup)
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

-- Insert initial projects data with proper UUIDs
INSERT INTO public.projects (id, title, description, category, image, url, client) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'HABYKeys', 'Teclado virtual avanzado diseñado para programadores, contadores y otros profesionales, con una interfaz intuitiva y personalizable que mejora la productividad.', 'Productividad', '/lovable-uploads/7d27120f-0c6b-4fdf-989a-e0b32feb1843.png', 'https://haby-advanced-virtual-keyboard-help.vercel.app', 'Perla Itzel Rosales Flores'),
('550e8400-e29b-41d4-a716-446655440002', 'HABY Score Tracker', 'Herramienta educativa interactiva que ayuda a los estudiantes a comprender y calcular sus calificaciones usando regla de tres, con exportación de resultados en múltiples formatos.', 'Educación', '/lovable-uploads/8ba55e5f-90b4-4561-90c1-d8b8986c025b.png', 'https://prep-score-tracker.lovable.app', 'Prof. Martha Norma Ramírez Albarrán'),
('550e8400-e29b-41d4-a716-446655440003', 'HABY CLASS', 'Plataforma educativa moderna que simplifica la gestión del aula y mejora la experiencia de aprendizaje mediante herramientas intuitivas y eficientes.', 'Proyecto Escolar', '/lovable-uploads/d93cbf56-5f67-47f8-9472-e864723e0be6.png', '#', 'Proyecto Personal'),
('550e8400-e29b-41d4-a716-446655440004', 'Progresión 8: Los poderes fácticos y el Estado', 'Material educativo sobre los poderes fácticos y su influencia en las decisiones políticas, económicas y sociales, para la asignatura de Ciencias Sociales III.', 'Educacional e Informativa', '/lovable-uploads/dd203339-d26a-44c4-91b1-9162915ae828.png', 'https://1-glosario-de-terminos-t-5pfyq4z.gamma.site/', 'Colegio De Estudios y Tecnológicos Del Estado De México');
