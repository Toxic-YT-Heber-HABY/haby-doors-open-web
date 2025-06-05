
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ExternalLink, Github, Lock } from "lucide-react";
import { Link } from "react-router-dom";

// Lista completa de proyectos incluyendo privados
const proyectos = [
  {
    id: 1,
    titulo: "Plataforma E-commerce",
    descripcion: "Tienda online completa con sistema de pagos integrado y gestión de inventario.",
    imagen: "/lovable-uploads/8ba55e5f-90b4-4561-90c1-d8b8986c025b.png",
    tecnologias: ["React", "Node.js", "PostgreSQL", "Stripe"],
    categoria: "E-commerce",
    url: "https://example-ecommerce.com",
    github: "https://github.com/ejemplo/ecommerce",
    esPrivado: false
  },
  {
    id: 2,
    titulo: "Sistema de Gestión Médica",
    descripcion: "Aplicación web para gestión de citas médicas y historiales de pacientes.",
    imagen: "/lovable-uploads/90ffa1ad-1f42-465a-b17e-61918ab82862.png",
    tecnologias: ["Vue.js", "Express", "MongoDB", "JWT"],
    categoria: "Salud",
    url: null,
    github: null,
    esPrivado: true
  },
  {
    id: 3,
    titulo: "Dashboard Analítico",
    descripcion: "Panel de control con visualización de datos en tiempo real para empresas.",
    imagen: "/lovable-uploads/d93cbf56-5f67-47f8-9472-e864723e0be6.png",
    tecnologias: ["React", "D3.js", "Python", "FastAPI"],
    categoria: "Analytics",
    url: "https://example-dashboard.com",
    github: "https://github.com/ejemplo/dashboard",
    esPrivado: false
  },
  {
    id: 4,
    titulo: "App de Delivery",
    descripcion: "Aplicación móvil para delivery de comida con seguimiento en tiempo real.",
    imagen: "/lovable-uploads/dd203339-d26a-44c4-91b1-9162915ae828.png",
    tecnologias: ["React Native", "Firebase", "Google Maps"],
    categoria: "Mobile",
    url: null,
    github: null,
    esPrivado: true
  },
  {
    id: 5,
    titulo: "CRM Empresarial",
    descripcion: "Sistema completo de gestión de relaciones con clientes para empresas medianas.",
    imagen: "/lovable-uploads/7d27120f-0c6b-4fdf-989a-e0b32feb1843.png",
    tecnologias: ["Angular", "Spring Boot", "MySQL"],
    categoria: "Business",
    url: null,
    github: null,
    esPrivado: true
  },
  {
    id: 6,
    titulo: "Plataforma Educativa",
    descripcion: "LMS (Learning Management System) para instituciones educativas.",
    imagen: "/lovable-uploads/d3be837f-42a6-40ff-a75e-ea4c473f067e.png",
    tecnologias: ["Next.js", "Prisma", "PostgreSQL"],
    categoria: "Educación",
    url: "https://example-lms.com",
    github: "https://github.com/ejemplo/lms",
    esPrivado: false
  }
];

const Portafolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header mejorado */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-haby-dark via-haby-primary to-haby-secondary opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          <div className="relative bg-gradient-to-r from-haby-dark to-haby-primary text-white py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  Nuestro Portafolio
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Conoce algunos de nuestros proyectos más destacados y las soluciones innovadoras que hemos desarrollado para nuestros clientes.
                </p>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-haby-accent/20 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>

        {/* Grid de proyectos */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {proyectos.map((proyecto) => (
                <motion.div
                  key={proyecto.id}
                  variants={itemVariants}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="relative">
                    <img 
                      src={proyecto.imagen} 
                      alt={proyecto.titulo}
                      className="w-full h-48 object-cover"
                    />
                    {proyecto.esPrivado && (
                      <div className="absolute top-3 right-3 bg-gray-800 text-white px-2 py-1 rounded-full text-xs flex items-center">
                        <Lock className="h-3 w-3 mr-1" />
                        Privado
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-block bg-haby-light text-haby-primary px-2 py-1 rounded text-sm">
                        {proyecto.categoria}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{proyecto.titulo}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{proyecto.descripcion}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {proyecto.tecnologias.slice(0, 3).map((tech, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {proyecto.tecnologias.length > 3 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          +{proyecto.tecnologias.length - 3} más
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Link 
                        to={`/portafolio/${proyecto.id}`}
                        className="text-haby-primary hover:text-haby-secondary font-medium flex items-center"
                      >
                        Ver detalles
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </Link>
                      
                      {!proyecto.esPrivado && (
                        <div className="flex gap-2">
                          {proyecto.url && (
                            <a 
                              href={proyecto.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-haby-primary transition-colors"
                              title="Ver sitio"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                          {proyecto.github && (
                            <a 
                              href={proyecto.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-haby-primary transition-colors"
                              title="Ver código"
                            >
                              <Github className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-haby-primary to-haby-secondary rounded-lg shadow-xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
                Nos encantaría ser parte de tu próximo proyecto. Contáctanos y conversemos sobre cómo podemos ayudarte a convertir tu idea en realidad.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contacto" className="btn-primary bg-white text-haby-primary hover:bg-gray-100">
                  Iniciar proyecto
                </Link>
                <Link to="/servicios" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:bg-opacity-10">
                  Ver servicios
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portafolio;
