
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  url: string;
  client: string;
  features?: string[];
  results?: string;
}

const DetalleProyecto = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);

  useEffect(() => {
    // En una implementación real, esto sería una llamada a una API
    const fetchProject = () => {
      try {
        const savedProjects = localStorage.getItem('habyProjects');
        let projects: Project[] = [];
        
        if (savedProjects) {
          projects = JSON.parse(savedProjects);
        } else {
          // Proyectos iniciales si no hay nada en localStorage
          projects = [
            {
              id: "1",
              title: "HABYKeys",
              description: "Teclado virtual avanzado diseñado para programadores, contadores y otros profesionales, con una interfaz intuitiva y personalizable que mejora la productividad.",
              image: "/lovable-uploads/7d27120f-0c6b-4fdf-989a-e0b32feb1843.png",
              category: "Productividad",
              url: "https://haby-advanced-virtual-keyboard-help.vercel.app",
              client: "Perla Itzel Rosales Flores",
              features: [
                "Diseño personalizable para diferentes tipos de usuarios",
                "Atajos y combinaciones de teclas configurables",
                "Integración con múltiples aplicaciones",
                "Modo de accesibilidad mejorada",
                "Estadísticas de productividad"
              ],
              results: "Mejora de hasta un 35% en la eficiencia de entrada de datos y reducción del 25% en errores de digitación."
            },
            {
              id: "2",
              title: "HABY Score Tracker",
              description: "Herramienta educativa interactiva que ayuda a los estudiantes a comprender y calcular sus calificaciones usando regla de tres, con exportación de resultados en múltiples formatos.",
              image: "/lovable-uploads/8ba55e5f-90b4-4561-90c1-d8b8986c025b.png",
              category: "Educación",
              url: "https://prep-score-tracker.lovable.app",
              client: "Prof. Martha Norma Ramírez Albarrán",
              features: [
                "Cálculos automáticos mediante regla de tres",
                "Visualización gráfica de resultados",
                "Exportación en múltiples formatos (PDF, Excel)",
                "Sistema de metas y objetivos",
                "Historial de calificaciones"
              ],
              results: "Incremento del 40% en el compromiso de los estudiantes con su rendimiento académico y mejora del 22% en las calificaciones promedio."
            },
            {
              id: "3",
              title: "HABY CLASS",
              description: "Plataforma educativa moderna que simplifica la gestión del aula y mejora la experiencia de aprendizaje mediante herramientas intuitivas y eficientes.",
              image: "/lovable-uploads/d93cbf56-5f67-47f8-9472-e864723e0be6.png",
              category: "Proyecto Escolar",
              url: "#",
              client: "Proyecto Personal",
              features: [
                "Sistema de gestión de asistencia",
                "Calendario integrado para entregas y exámenes",
                "Comunicación directa entre profesores y estudiantes",
                "Repositorio de materiales educativos",
                "Análisis de rendimiento por alumno"
              ],
              results: "Mejora del 55% en la organización del aula y reducción del 30% en el tiempo dedicado a tareas administrativas por parte de los profesores."
            }
          ];
          localStorage.setItem('habyProjects', JSON.stringify(projects));
        }

        const foundProject = projects.find(p => p.id === id);
        if (foundProject) {
          setProject(foundProject);
          
          // Encontrar proyectos relacionados (misma categoría)
          const related = projects
            .filter(p => p.id !== id && p.category === foundProject.category)
            .slice(0, 2);
          setRelatedProjects(related);
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar el proyecto:", error);
        setLoading(false);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-haby-primary"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center py-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Proyecto no encontrado</h1>
          <p className="text-gray-600 mb-6">Lo sentimos, el proyecto que buscas no existe o ha sido eliminado.</p>
          <Link to="/portafolio" className="btn-primary">
            Ver todos los proyectos
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero del proyecto */}
        <div className="bg-gradient-to-r from-haby-dark to-haby-primary text-white py-20">
          <div className="container mx-auto px-4">
            <Link to="/portafolio" className="inline-flex items-center text-gray-200 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Volver a todos los proyectos
            </Link>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {project.title}
            </motion.h1>
            <motion.div 
              className="flex items-center mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-haby-accent font-medium mr-4">
                {project.category}
              </span>
              <span className="text-gray-300">
                Cliente: {project.client}
              </span>
            </motion.div>
            <motion.p 
              className="text-xl text-gray-200 max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {project.description}
            </motion.p>
            {project.url && project.url !== '#' && (
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center bg-white text-haby-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
                >
                  Ver proyecto en vivo
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </motion.div>
            )}
          </div>
        </div>

        {/* Contenido del proyecto */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div 
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Acerca del proyecto</h2>
                <p className="text-gray-700 mb-8">
                  {project.description}
                </p>

                {project.features && project.features.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Características principales</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 * index, duration: 0.5 }}
                        >
                          <CheckCircle className="h-5 w-5 text-haby-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.results && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Resultados</h3>
                    <div className="bg-gray-50 border-l-4 border-haby-primary pl-4 py-3">
                      <p className="text-gray-700">{project.results}</p>
                    </div>
                  </div>
                )}
              </motion.div>

              <motion.div 
                className="order-1 lg:order-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-96 object-cover object-center"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Proyectos relacionados */}
        {relatedProjects.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Proyectos relacionados</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedProjects.map((relProject, index) => (
                  <motion.div 
                    key={relProject.id}
                    className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index, duration: 0.5 }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={relProject.image} 
                        alt={relProject.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-sm font-medium text-haby-primary">{relProject.category}</span>
                      <h3 className="text-xl font-bold text-gray-800 mt-1 mb-2">{relProject.title}</h3>
                      <p className="text-gray-600 line-clamp-2 mb-4">{relProject.description}</p>
                      <Link 
                        to={`/portafolio/${relProject.id}`} 
                        className="inline-flex items-center text-haby-primary hover:text-haby-secondary font-medium"
                      >
                        Ver detalles
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-haby-primary to-haby-secondary rounded-lg shadow-xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Te interesa un proyecto similar?</h2>
              <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
                Podemos ayudarte a desarrollar una solución personalizada que se adapte a tus necesidades específicas.
              </p>
              <Link to="/contacto" className="btn-primary bg-white text-haby-primary hover:bg-gray-100">
                Hablemos de tu proyecto
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DetalleProyecto;
