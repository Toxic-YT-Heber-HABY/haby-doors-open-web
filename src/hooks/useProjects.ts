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

  const createProject = async (
    projectData: Omit<Project, 'id' | 'created_at' | 'updated_at' | 'created_by'>
  ) => {
    try {
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast.error('Sesión de administrador inválida. Inicia sesión de nuevo.');
        throw new Error('Not authenticated');
      }

      const { data, error } = await supabase
        .from('projects')
        .insert({
          title: projectData.title,
          description: projectData.description,
          category: projectData.category,
          image: projectData.image,
          url: projectData.url || null,
          client: projectData.client || null,
          created_by: user.id,
        })
        .select()
        .single();

      if (error) throw error;

      setProjects((prev) => [data as Project, ...prev]);
      toast.success('Proyecto creado correctamente');
      return data as Project;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al crear el proyecto';
      toast.error(message);
      throw new Error('Error creating project');
    }
  };

  const updateProject = async (
    id: string,
    projectData: Partial<Omit<Project, 'id' | 'created_at' | 'updated_at' | 'created_by'>>
  ) => {
    try {
      // Get current user to verify auth
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast.error('Sesión de administrador inválida. Inicia sesión de nuevo.');
        throw new Error('Not authenticated');
      }

      const { data, error } = await supabase
        .from('projects')
        .update({
          title: projectData.title,
          description: projectData.description,
          category: projectData.category,
          image: projectData.image,
          url: projectData.url || null,
          client: projectData.client || null,
          updated_at: new Date().toISOString(),
        })
        .eq('id', id)
        .select()
        .single();

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
      // Get current user to verify auth
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast.error('Sesión de administrador inválida. Inicia sesión de nuevo.');
        throw new Error('Not authenticated');
      }

      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) throw error;

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
