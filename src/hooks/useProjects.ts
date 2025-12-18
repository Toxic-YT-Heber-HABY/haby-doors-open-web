
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  url: string | null;
  client: string | null;
  created_at: string;
  updated_at: string;
  created_by: string | null;
}

const TOKEN_STORAGE_KEY = 'admin_session_token';

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch {
      toast.error('Error al cargar los proyectos');
    } finally {
      setIsLoading(false);
    }
  };

  const getAdminTokenOrThrow = () => {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    if (!token) {
      toast.error('Sesión de administrador inválida. Inicia sesión de nuevo.');
      throw new Error('Missing admin session token');
    }
    return token;
  };

  const createProject = async (
    projectData: Omit<Project, 'id' | 'created_at' | 'updated_at' | 'created_by'>
  ) => {
    try {
      const token = getAdminTokenOrThrow();

      const { data, error } = await supabase.rpc('admin_create_project', {
        session_token: token,
        p_title: projectData.title,
        p_description: projectData.description,
        p_category: projectData.category,
        p_image: projectData.image,
        p_url: projectData.url ?? '',
        p_client: projectData.client ?? '',
      });

      if (error) throw error;

      setProjects((prev) => [data as Project, ...prev]);
      toast.success('Proyecto creado correctamente');
      return data as Project;
    } catch {
      toast.error('Error al crear el proyecto');
      throw new Error('Error creating project');
    }
  };

  const updateProject = async (
    id: string,
    projectData: Partial<Omit<Project, 'id' | 'created_at' | 'updated_at' | 'created_by'>>
  ) => {
    try {
      const token = getAdminTokenOrThrow();

      const { data, error } = await supabase.rpc('admin_update_project', {
        session_token: token,
        p_project_id: id,
        p_title: projectData.title ?? '',
        p_description: projectData.description ?? '',
        p_category: projectData.category ?? '',
        p_image: projectData.image ?? '',
        p_url: projectData.url ?? '',
        p_client: projectData.client ?? '',
      });

      if (error) throw error;

      setProjects((prev) => prev.map((p) => (p.id === id ? (data as Project) : p)));
      toast.success('Proyecto actualizado correctamente');
      return data as Project;
    } catch {
      toast.error('Error al actualizar el proyecto');
      throw new Error('Error updating project');
    }
  };

  const deleteProject = async (id: string) => {
    try {
      const token = getAdminTokenOrThrow();

      const { data, error } = await supabase.rpc('admin_delete_project', {
        session_token: token,
        p_project_id: id,
      });

      if (error) throw error;
      if (!data) throw new Error('Delete failed');

      setProjects((prev) => prev.filter((p) => p.id !== id));
      toast.success('Proyecto eliminado correctamente');
    } catch {
      toast.error('Error al eliminar el proyecto');
      throw new Error('Error deleting project');
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return {
    projects,
    isLoading,
    fetchProjects,
    createProject,
    updateProject,
    deleteProject,
  };
};

