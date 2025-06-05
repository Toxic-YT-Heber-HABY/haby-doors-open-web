
import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Lock, Shield } from "lucide-react";

// Datos completos de proyectos incluyendo privados
const proyectosCompletos = [
  {
    id: 1,
    titulo: "Plataforma E-commerce",
    descripcion: "Tienda online completa con sistema de pagos integrado y gestión de inventario.",
    descripcionCompleta: "Una plataforma de comercio electrónico robusta y escalable diseñada para empresas medianas. La solución incluye un sistema completo de gestión de productos, carrito de compras intuitivo, procesamiento seguro de pagos, y un panel administrativo para gestión de pedidos e inventario.",
    imagen: "/lovable-uploads/8ba55e5f-90b4-4561-90c1-d8b8986c025b.png",
    tecnologias: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
    categoria: "E-commerce",
    url: "https://example-ecommerce.com",
    github: "https://github.com/ejemplo/ecommerce",
    fechaInicio: "Enero 2024",
    duracion: "3 meses",
    equipo: ["Frontend Developer", "Backend Developer", "UI/UX Designer"],
    caracteristicas: [
      "Sistema de autenticación seguro",
      "Integración con múltiples pasarelas de pago",
      "Panel administrativo completo",
      "Sistema de reviews y calificaciones",
      "Gestión de inventario en tiempo real",
      "Optimización SEO",
      "Responsive design"
    ],
    desafios: "El principal desafío fue integrar múltiples sistemas de pago y crear una experiencia de usuario fluida que manejara grandes volúmenes de transacciones.",
    resultados: "Incremento del 40% en conversiones y reducción del 25% en tiempo de carga.",
    esPrivado: false
  },
  {
    id: 2,
    titulo: "Sistema de Gestión Médica",
    descripcion: "Aplicación web para gestión de citas médicas y historiales de pacientes.",
    descripcionCompleta: "Sistema integral de gestión hospitalaria que permite administrar citas médicas, historiales de pacientes y gestión de recursos médicos de manera eficiente y segura.",
    imagen: "/lovable-uploads/90ffa1ad-1f42-465a-b17e-61918ab82862.png",
    tecnologias: ["Vue.js", "Express", "MongoDB", "JWT", "Socket.io"],
    categoria: "Salud",
    url: null,
    github: null,
    fechaInicio: "Marzo 2024",
    duracion: "6 meses",
    equipo: ["Full Stack Developer", "Security Specialist", "Healthcare Consultant"],
    caracteristicas: [
      "Gestión segura de datos médicos",
      "Sistema de citas en línea",
      "Historiales médicos digitales",
      "Comunicación médico-paciente",
      "Reportes y estadísticas"
    ],
    desafios: "Cumplir con estrictas regulaciones de privacidad médica y crear interfaces intuitivas para diferentes tipos de usuarios.",
    resultados: "Mejora del 60% en eficiencia administrativa y alta satisfacción del personal médico.",
    esPrivado: true
  },
  {
    id: 3,
    titulo: "Dashboard Analítico",
    descripcion: "Panel de control con visualización de datos en tiempo real para empresas.",
    descripcionCompleta: "Un potente dashboard que permite a las empresas visualizar y analizar sus datos en tiempo real, con gráficos interactivos y reportes personalizables que facilitan la toma de decisiones estratégicas.",
    imagen: "/lovable-uploads/d93cbf56-5f67-47f8-9472-e864723e0be6.png",
    tecnologias: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "WebSocket"],
    categoria: "Analytics",
    url: "https://example-dashboard.com",
    github: "https://github.com/ejemplo/dashboard",
    fechaInicio: "Febrero 2024",
    duracion: "4 meses",
    equipo: ["Data Analyst", "Frontend Developer", "Backend Developer"],
    caracteristicas: [
      "Visualizaciones interactivas en tiempo real",
      "Reportes personalizables",
      "Alertas automáticas",
      "Exportación de datos",
      "Dashboard responsive",
      "Integración con múltiples fuentes de datos"
    ],
    desafios: "Optimizar el rendimiento para manejar grandes volúmenes de datos y crear visualizaciones que fueran tanto informativas como estéticamente atractivas.",
    resultados: "Reducción del 50% en tiempo de generación de reportes y mejor comprensión de KPIs empresariales.",
    esPrivado: false
  },
  {
    id: 4,
    titulo: "App de Delivery",
    descripcion: "Aplicación móvil para delivery de comida con seguimiento en tiempo real.",
    descripcionCompleta: "Aplicación móvil completa para delivery de comida que conecta restaurantes, repartidores y clientes, con seguimiento GPS en tiempo real y sistema de pagos integrado.",
    imagen: "/lovable-uploads/dd203339-d26a-44c4-91b1-9162915ae828.png",
    tecnologias: ["React Native", "Firebase", "Google Maps", "Stripe", "Node.js"],
    categoria: "Mobile",
    url: null,
    github: null,
    fechaInicio: "Mayo 2024",
    duracion: "5 meses",
    equipo: ["Mobile Developer", "Backend Developer", "UX Designer"],
    caracteristicas: [
      "Seguimiento GPS en tiempo real",
      "Sistema de pedidos intuitivo",
      "Gestión de múltiples restaurantes",
      "Sistema de calificaciones",
      "Notificaciones push"
    ],
    desafios: "Optimizar el consumo de batería del GPS y crear una experiencia fluida para tres tipos de usuarios diferentes.",
    resultados: "Lanzamiento exitoso con más de 10,000 descargas en el primer mes.",
    esPrivado: true
  },
  {
    id: 5,
    titulo: "CRM Empresarial",
    descripcion: "Sistema completo de gestión de relaciones con clientes para empresas medianas.",
    descripcionCompleta: "Plataforma CRM personalizada que permite a las empresas gestionar eficientemente sus relaciones con clientes, automatizar procesos de ventas y generar insights valiosos sobre el comportamiento del cliente.",
    imagen: "/lovable-uploads/7d27120f-0c6b-4fdf-989a-e0b32feb1843.png",
    tecnologias: ["Angular", "Spring Boot", "MySQL", "Redis", "Docker"],
    categoria: "Business",
    url: null,
    github: null,
    fechaInicio: "Abril 2024",
    duracion: "7 meses",
    equipo: ["Frontend Developer", "Backend Developer", "Business Analyst"],
    caracteristicas: [
      "Gestión completa de contactos",
      "Automatización de procesos de venta",
      "Reportes y analytics avanzados",
      "Integración con email marketing",
      "Sistema de tareas y recordatorios"
    ],
    desafios: "Migrar datos existentes sin pérdida de información y entrenar al equipo en el nuevo sistema.",
    resultados: "Aumento del 35% en productividad del equipo de ventas y mejor seguimiento de leads.",
    esPrivado: true
  },
  {
    id: 6,
    titulo: "Plataforma Educativa",
    descripcion: "LMS (Learning Management System) para instituciones educativas.",
    descripcionCompleta: "Sistema de gestión de aprendizaje completo que permite a instituciones educativas crear, gestionar y entregar contenido educativo de manera efectiva, con herramientas para estudiantes, profesores y administradores.",
    imagen: "/lovable-uploads/d3be837f-42a6-40ff-a75e-ea4c473f067e.png",
    tecnologias: ["Next.js", "Prisma", "PostgreSQL", "WebRTC", "Socket.io"],
    categoria: "Educación",
    url: "https://example-lms.com",
    github: "https://github.com/ejemplo/lms",
    fechaInicio: "Junio 2024",
    duracion: "6 meses",
    equipo: ["Full Stack Developer", "Education Specialist", "UI/UX Designer"],
    caracteristicas: [
      "Creación de cursos interactivos",
      "Sistema de evaluaciones",
      "Videoconferencias integradas",
      "Foros de discusión",
      "Seguimiento del progreso",
      "Certificaciones automáticas"
    ],
    desafios: "Crear una plataforma escalable que pudiera manejar miles de estudiantes simultáneos durante clases virtuales.",
    resultados: "Implementación exitosa en 5 instituciones educativas con alto nivel de satisfacción.",
    esPrivado: false
  }
];

const DetalleProyecto = () => {
  const { id } = useParams();
  const proyecto = proyectosCompletos.find(p => p.id === parseInt(id || ""));

  if (!proyecto) {
    return <Navigate to="/portafolio" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {proyecto.esPrivado ? (
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
                      src={proyecto.imagen} 
                      alt={proyecto.titulo}
                      className="w-full h-64 md:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Lock className="h-16 w-16 mx-auto mb-4 opacity-80" />
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">{proyecto.titulo}</h1>
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
                            <p className="text-gray-600">{proyecto.descripcion}</p>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-700">Categoría</h3>
                            <span className="inline-block bg-haby-light text-haby-primary px-3 py-1 rounded">
                              {proyecto.categoria}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tecnologías Utilizadas</h2>
                        <div className="flex flex-wrap gap-2">
                          {proyecto.tecnologias.map((tech, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {proyecto.caracteristicas && (
                      <div className="mt-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Características Principales</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {proyecto.caracteristicas.slice(0, 4).map((caracteristica, index) => (
                            <div key={index} className="flex items-center">
                              <div className="w-2 h-2 bg-haby-primary rounded-full mr-3"></div>
                              <span className="text-gray-600">{caracteristica}</span>
                            </div>
                          ))}
                        </div>
                        {proyecto.caracteristicas.length > 4 && (
                          <p className="text-gray-500 text-sm mt-2">
                            Y {proyecto.caracteristicas.length - 4} características adicionales...
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
                    src={proyecto.imagen} 
                    alt={proyecto.titulo}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{proyecto.titulo}</h1>
                        <span className="inline-block bg-haby-light text-haby-primary px-3 py-1 rounded">
                          {proyecto.categoria}
                        </span>
                      </div>
                      <div className="flex gap-4 mt-4 md:mt-0">
                        {proyecto.url && (
                          <a 
                            href={proyecto.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary flex items-center"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Ver sitio
                          </a>
                        )}
                        {proyecto.github && (
                          <a 
                            href={proyecto.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary flex items-center"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Ver código
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Descripción del Proyecto</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">{proyecto.descripcionCompleta}</p>
                        
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Características Principales</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          {proyecto.caracteristicas?.map((caracteristica, index) => (
                            <div key={index} className="flex items-center">
                              <div className="w-2 h-2 bg-haby-primary rounded-full mr-3"></div>
                              <span className="text-gray-600">{caracteristica}</span>
                            </div>
                          ))}
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Desafíos y Soluciones</h2>
                        <p className="text-gray-600 mb-6">{proyecto.desafios}</p>

                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Resultados</h2>
                        <p className="text-gray-600">{proyecto.resultados}</p>
                      </div>

                      <div className="space-y-6">
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h3 className="text-lg font-bold text-gray-800 mb-4">Detalles del Proyecto</h3>
                          <div className="space-y-3">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 text-haby-primary mr-2" />
                              <div>
                                <div className="text-sm text-gray-500">Inicio</div>
                                <div className="font-medium">{proyecto.fechaInicio}</div>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 text-haby-primary mr-2" />
                              <div>
                                <div className="text-sm text-gray-500">Duración</div>
                                <div className="font-medium">{proyecto.duracion}</div>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <Users className="h-4 w-4 text-haby-primary mr-2 mt-1" />
                              <div>
                                <div className="text-sm text-gray-500">Equipo</div>
                                <div className="space-y-1">
                                  {proyecto.equipo?.map((miembro, index) => (
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
                            {proyecto.tecnologias.map((tech, index) => (
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
