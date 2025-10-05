import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminAuth from "@/components/AdminAuth";
import { toast } from 'sonner';
import { 
  PlusCircle, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Loader2, 
  ExternalLink 
} from 'lucide-react';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { useProjects, Project } from '@/hooks/useProjects';

const DEFAULT_IMAGE = "/lovable-uploads/7d27120f-0c6b-4fdf-989a-e0b32feb1843.png";

const Admin = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading: authLoading } = useAdminAuth();
  const { projects, isLoading: projectsLoading, createProject, updateProject, deleteProject } = useProjects();
  const [editingProject, setEditingProject] = useState<Partial<Project> | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      // Don't redirect, just show the auth form
    }
  }, [authLoading, isAuthenticated, navigate]);

  const handleAddProject = () => {
    setEditingProject({
      title: '',
      description: '',
      category: '',
      image: DEFAULT_IMAGE,
      url: '',
      client: ''
    });
    setIsFormOpen(true);
  };

  const handleEditProject = (project: Project) => {
    setEditingProject({...project});
    setIsFormOpen(true);
  };

  const handleDeleteProject = async (id: string) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este proyecto?')) {
      await deleteProject(id);
    }
  };

  const handleSaveProject = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!editingProject) return;
    
    try {
      if (editingProject.id) {
        // Update existing project
        await updateProject(editingProject.id, {
          title: editingProject.title!,
          description: editingProject.description!,
          category: editingProject.category!,
          image: editingProject.image!,
          url: editingProject.url || null,
          client: editingProject.client || null
        });
      } else {
        // Create new project
        await createProject({
          title: editingProject.title!,
          description: editingProject.description!,
          category: editingProject.category!,
          image: editingProject.image!,
          url: editingProject.url || null,
          client: editingProject.client || null
        });
      }
      
      setEditingProject(null);
      setIsFormOpen(false);
    } catch (error) {
      // Security: Don't log error details
      toast.error('Error al guardar el proyecto');
    }
  };

  const handleAuthSuccess = () => {
    // Auth successful, component will re-render with isAuthenticated = true
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <Loader2 className="animate-spin h-8 w-8 text-haby-primary" />
          <span className="ml-2 text-haby-primary">Cargando...</span>
        </div>
        <Footer />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminAuth onAuthSuccess={handleAuthSuccess} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Panel de Administración de Proyectos</h1>
              <button 
                onClick={handleAddProject}
                className="bg-haby-primary hover:bg-haby-secondary text-white font-medium py-2 px-4 rounded-md flex items-center"
              >
                <PlusCircle className="h-5 w-5 mr-1" />
                Nuevo Proyecto
              </button>
            </div>

            {isFormOpen && editingProject && (
              <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {editingProject.id ? 'Editar Proyecto' : 'Nuevo Proyecto'}
                  </h2>
                  <button 
                    onClick={() => {
                      setIsFormOpen(false);
                      setEditingProject(null);
                    }}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <form onSubmit={handleSaveProject} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título</label>
                    <input
                      id="title"
                      type="text"
                      value={editingProject.title || ''}
                      onChange={(e) => setEditingProject({...editingProject, title: e.target.value})}
                      className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-haby-primary focus:outline-none focus:ring-1 focus:ring-haby-primary"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Categoría</label>
                    <input
                      id="category"
                      type="text"
                      value={editingProject.category || ''}
                      onChange={(e) => setEditingProject({...editingProject, category: e.target.value})}
                      className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-haby-primary focus:outline-none focus:ring-1 focus:ring-haby-primary"
                      required
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción</label>
                    <textarea
                      id="description"
                      value={editingProject.description || ''}
                      onChange={(e) => setEditingProject({...editingProject, description: e.target.value})}
                      rows={4}
                      className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-haby-primary focus:outline-none focus:ring-1 focus:ring-haby-primary"
                      required
                    ></textarea>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="url" className="block text-sm font-medium text-gray-700">URL del proyecto</label>
                    <input
                      id="url"
                      type="url"
                      value={editingProject.url || ''}
                      onChange={(e) => setEditingProject({...editingProject, url: e.target.value})}
                      className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-haby-primary focus:outline-none focus:ring-1 focus:ring-haby-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="client" className="block text-sm font-medium text-gray-700">Cliente</label>
                    <input
                      id="client"
                      type="text"
                      value={editingProject.client || ''}
                      onChange={(e) => setEditingProject({...editingProject, client: e.target.value})}
                      className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-haby-primary focus:outline-none focus:ring-1 focus:ring-haby-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">URL de la imagen</label>
                    <input
                      id="image"
                      type="text"
                      value={editingProject.image || ''}
                      onChange={(e) => setEditingProject({...editingProject, image: e.target.value})}
                      className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-haby-primary focus:outline-none focus:ring-1 focus:ring-haby-primary"
                    />
                    <p className="text-xs text-gray-500">
                      Si no tienes una URL, usa la predeterminada
                    </p>
                  </div>

                  <div className="md:col-span-2 flex justify-end mt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsFormOpen(false);
                        setEditingProject(null);
                      }}
                      className="bg-gray-200 text-gray-700 mr-2 py-2 px-4 rounded-md hover:bg-gray-300"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="bg-haby-primary hover:bg-haby-secondary text-white font-medium py-2 px-4 rounded-md flex items-center"
                    >
                      <Save className="h-5 w-5 mr-1" />
                      Guardar Proyecto
                    </button>
                  </div>
                </form>
              </div>
            )}

            {projectsLoading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="animate-spin h-8 w-8 text-haby-primary" />
                <span className="ml-2">Cargando proyectos...</span>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider border-b">Título</th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider border-b">Categoría</th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider border-b">Cliente</th>
                      <th className="py-3 px-4 text-right text-sm font-medium text-gray-700 uppercase tracking-wider border-b">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map(project => (
                      <tr key={project.id} className="hover:bg-gray-50 border-b">
                        <td className="py-3 px-4">{project.title}</td>
                        <td className="py-3 px-4">{project.category}</td>
                        <td className="py-3 px-4">{project.client}</td>
                        <td className="py-3 px-4 text-right space-x-2">
                          {project.url && project.url !== '#' && (
                            <a 
                              href={project.url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-flex items-center text-haby-primary hover:text-haby-secondary"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          )}
                          <button 
                            onClick={() => handleEditProject(project)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <Edit className="h-5 w-5" />
                          </button>
                          <button 
                            onClick={() => handleDeleteProject(project.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {projects.length === 0 && (
                      <tr>
                        <td colSpan={4} className="py-4 text-center text-gray-500">
                          No hay proyectos disponibles
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
