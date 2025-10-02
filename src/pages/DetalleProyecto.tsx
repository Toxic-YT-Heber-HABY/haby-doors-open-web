
import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Lock, Shield } from "lucide-react";
import { getProjectById } from "@/data/projectsData";
import ValidatedExternalLink from "@/components/ValidatedExternalLink";

const DetalleProyecto = () => {
  const { id } = useParams();
  const proyecto = getProjectById(id || "");

  if (!proyecto) {
    return <Navigate to="/portafolio" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {proyecto.isPrivate ? (
          // Vista para proyectos privados
          <div className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <Link 
                to="/portafolio" 
                className="inline-flex items-center text-haby-primary hover:text-haby-secondary mb-8"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al portafolio
              </Link>

              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative">
                    <img 
                      src={proyecto.image} 
                      alt={proyecto.title}
                      className="w-full h-64 md:h-96 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Lock className="h-16 w-16 mx-auto mb-4 opacity-80" />
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">{proyecto.title}</h1>
                        <span className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
                          Proyecto Privado
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
                      <div className="flex items-start">
                        <Shield className="h-6 w-6 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-bold text-orange-800 mb-2">
                            Acceso Restringido
                          </h3>
                          <p className="text-orange-700">
                            Debido a nuestros términos y condiciones, así como a nuestra política de privacidad, 
                            nos vemos limitados a únicamente mencionar la existencia de dicho proyecto y a proporcionar 
                            una breve descripción del mismo. Esto se debe a que este proyecto en particular es de 
                            carácter privado y, por lo tanto, no está abierto al acceso público general. 
                            Agradecemos profundamente su comprensión al respecto.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Información General</h2>
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-semibold text-gray-700">Descripción</h3>
                            <p className="text-gray-600">{proyecto.description}</p>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-700">Categoría</h3>
                            <span className="inline-block bg-haby-light text-haby-primary px-3 py-1 rounded">
                              {proyecto.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tecnologías Utilizadas</h2>
                        <div className="flex flex-wrap gap-2">
                          {proyecto.technologies?.map((tech, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {proyecto.features && (
                      <div className="mt-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Características Principales</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {proyecto.features.slice(0, 4).map((caracteristica, index) => (
                            <div key={index} className="flex items-center">
                              <div className="w-2 h-2 bg-haby-primary rounded-full mr-3"></div>
                              <span className="text-gray-600">{caracteristica}</span>
                            </div>
                          ))}
                        </div>
                        {proyecto.features.length > 4 && (
                          <p className="text-gray-500 text-sm mt-2">
                            Y {proyecto.features.length - 4} características adicionales...
                          </p>
                        )}
                      </div>
                    )}

                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          ¿Interesado en un proyecto similar?
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Contáctanos para discutir cómo podemos ayudarte con tu proyecto.
                        </p>
                        <Link 
                          to="/contacto" 
                          className="btn-primary"
                        >
                          Solicitar cotización
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Vista normal para proyectos públicos
          <div className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <Link 
                to="/portafolio" 
                className="inline-flex items-center text-haby-primary hover:text-haby-secondary mb-8"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al portafolio
              </Link>

              <motion.div 
                className="max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={proyecto.image} 
                    alt={proyecto.title}
                    className="w-full h-64 md:h-96 object-cover"
                    loading="lazy"
                  />
                  
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{proyecto.title}</h1>
                        <span className="inline-block bg-haby-light text-haby-primary px-3 py-1 rounded">
                          {proyecto.category}
                        </span>
                      </div>
                      <div className="flex gap-4 mt-4 md:mt-0">
                        {proyecto.url && (
                          <ValidatedExternalLink 
                            url={proyecto.url}
                            className="btn-primary"
                            showIcon={false}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Ver sitio
                          </ValidatedExternalLink>
                        )}
                        {proyecto.github && (
                          <ValidatedExternalLink 
                            url={proyecto.github}
                            className="btn-secondary"
                            showIcon={false}
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Ver código
                          </ValidatedExternalLink>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Descripción del Proyecto</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">{proyecto.descriptionComplete || proyecto.description}</p>
                        
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Características Principales</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          {proyecto.features?.map((caracteristica, index) => (
                            <div key={index} className="flex items-center">
                              <div className="w-2 h-2 bg-haby-primary rounded-full mr-3"></div>
                              <span className="text-gray-600">{caracteristica}</span>
                            </div>
                          ))}
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Desafíos y Soluciones</h2>
                        <p className="text-gray-600 mb-6">{proyecto.challenges}</p>

                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Resultados</h2>
                        <p className="text-gray-600">{proyecto.results}</p>
                      </div>

                      <div className="space-y-6">
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h3 className="text-lg font-bold text-gray-800 mb-4">Detalles del Proyecto</h3>
                          <div className="space-y-3">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 text-haby-primary mr-2" />
                              <div>
                                <div className="text-sm text-gray-500">Inicio</div>
                                <div className="font-medium">{proyecto.startDate}</div>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 text-haby-primary mr-2" />
                              <div>
                                <div className="text-sm text-gray-500">Duración</div>
                                <div className="font-medium">{proyecto.duration}</div>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <Users className="h-4 w-4 text-haby-primary mr-2 mt-1" />
                              <div>
                                <div className="text-sm text-gray-500">Equipo</div>
                                <div className="space-y-1">
                                  {proyecto.team?.map((miembro, index) => (
                                    <div key={index} className="text-sm font-medium">{miembro}</div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h3 className="text-lg font-bold text-gray-800 mb-4">Tecnologías</h3>
                          <div className="flex flex-wrap gap-2">
                            {proyecto.technologies?.map((tech, index) => (
                              <span key={index} className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-center bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    ¿Te gustó este proyecto?
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Nos encantaría trabajar contigo en tu próximo proyecto. Contáctanos para discutir 
                    cómo podemos ayudarte a alcanzar tus objetivos.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/contacto" className="btn-primary">
                      Iniciar mi proyecto
                    </Link>
                    <Link to="/portafolio" className="btn-secondary">
                      Ver más proyectos
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default DetalleProyecto;
