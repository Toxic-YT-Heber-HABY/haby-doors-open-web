
import { Link } from 'react-router-dom';
import { ExternalLink, Star, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import ImageZoom from './ImageZoom';
import ValidatedExternalLink from './ValidatedExternalLink';
import { getFeaturedProjects } from '@/data/projectsData';

// Obtener solo proyectos destacados y públicos para la sección principal
const projects = getFeaturedProjects();

// Variantes para las animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
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

const PortfolioSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-haby-light/30 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-32 left-10 w-72 h-72 bg-haby-accent/20 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-32 right-10 w-72 h-72 bg-haby-primary/20 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-haby-primary to-haby-accent text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4" />
            Nuestro Portafolio
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Proyectos que{' '}
            <span className="bg-gradient-to-r from-haby-primary to-haby-accent bg-clip-text text-transparent">
              abren puertas
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Descubre cómo hemos ayudado a nuestros clientes a solucionar problemas cotidianos 
            y optimizar su tiempo a través de soluciones web personalizadas e innovadoras.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
              className={index < 2 ? "lg:col-span-1" : "lg:col-span-1"}
            >
              <motion.div
                className="h-full group cursor-pointer"
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-full overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:bg-white">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <ImageZoom 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-haby-accent to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        ⭐ Destacado
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-haby-primary bg-haby-light px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        {project.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-haby-primary transition-colors leading-tight">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pb-4 flex-grow">
                    <CardDescription className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                      {project.description}
                    </CardDescription>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                      <User className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="font-medium">Cliente:</span> 
                      <span className="truncate">{project.client || 'Proyecto Personal'}</span>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 border-t border-gray-100 gap-3 sm:gap-0">
                    {project.url ? (
                      <ValidatedExternalLink
                        url={project.url}
                        className="text-haby-primary hover:text-haby-secondary font-semibold transition-all duration-300 group-hover:translate-x-1 text-sm sm:text-base"
                      >
                        Ver proyecto
                      </ValidatedExternalLink>
                    ) : (
                      <span className="text-gray-400 text-sm sm:text-base">
                        Proyecto privado
                      </span>
                    )}

                    <Link 
                      to={`/portafolio/${project.id}`}
                      className="text-xs sm:text-sm text-gray-500 hover:text-haby-primary transition-colors font-medium"
                    >
                      Más detalles →
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link 
            to="/portafolio" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-haby-primary to-haby-secondary text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-haby-primary/25 transition-all duration-300 transform hover:scale-105"
          >
            Ver todos los proyectos
            <Star className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
