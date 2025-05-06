
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import ImageZoom from './ImageZoom';

const projects = [
  {
    title: "HABYKeys",
    description: "Teclado virtual avanzado diseñado para programadores, contadores y otros profesionales, con una interfaz intuitiva y personalizable que mejora la productividad.",
    image: "/lovable-uploads/7d27120f-0c6b-4fdf-989a-e0b32feb1843.png",
    category: "Productividad",
    url: "https://haby-advanced-virtual-keyboard-help.vercel.app",
    client: "Perla Itzel Rosales Flores"
  },
  {
    title: "HABY Score Tracker",
    description: "Herramienta educativa interactiva que ayuda a los estudiantes a comprender y calcular sus calificaciones usando regla de tres, con exportación de resultados en múltiples formatos.",
    image: "/lovable-uploads/8ba55e5f-90b4-4561-90c1-d8b8986c025b.png",
    category: "Educación",
    url: "https://prep-score-tracker.lovable.app",
    client: "Prof. Martha Norma Ramírez Albarrán"
  },
  {
    title: "HABY CLASS",
    description: "Plataforma educativa moderna que simplifica la gestión del aula y mejora la experiencia de aprendizaje mediante herramientas intuitivas y eficientes.",
    image: "/lovable-uploads/d93cbf56-5f67-47f8-9472-e864723e0be6.png",
    category: "Proyecto Escolar",
    client: "Proyecto Personal",
    url: "#"
  },
  {
    title: "Progresión 8: Los poderes fácticos y el Estado",
    description: "Material educativo sobre los poderes fácticos y su influencia en las decisiones políticas, económicas y sociales, para la asignatura de Ciencias Sociales III.",
    image: "/lovable-uploads/dd203339-d26a-44c4-91b1-9162915ae828.png",
    category: "Educacional e Informativa",
    url: "https://1-glosario-de-terminos-t-5pfyq4z.gamma.site/",
    client: "Colegio De Estudios y Tecnológicos Del Estado De México"
  }
];

// Variantes para las animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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
      damping: 10
    }
  }
};

// Variantes para el efecto hover
const cardHoverVariants = {
  initial: { 
    scale: 1,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
  },
  hover: { 
    scale: 1.05, 
    boxShadow: "0 10px 25px rgba(126, 105, 171, 0.3)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

const PortfolioSection = () => {
  return (
    <section className="section bg-white py-20">
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Nuestro Portafolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Proyectos que abren puertas
          </h2>
          <p className="text-gray-600">
            Descubre cómo hemos ayudado a nuestros clientes a solucionar problemas cotidianos 
            y optimizar su tiempo a través de soluciones web personalizadas.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
            >
              <motion.div
                className="h-full"
                initial="initial"
                whileHover="hover"
                variants={cardHoverVariants}
              >
                <Card className="h-full overflow-hidden transition-all duration-300 flex flex-col">
                  <div className="aspect-video w-full overflow-hidden">
                    <ImageZoom 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="text-sm text-haby-primary font-medium">{project.category}</div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-haby-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2 flex-grow">
                    <CardDescription className="text-gray-600">{project.description}</CardDescription>
                    <div className="text-sm text-gray-500 mt-3">
                      Cliente: {project.client}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-haby-primary hover:text-haby-secondary font-medium inline-flex items-center group"
                    >
                      Ver proyecto 
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>

                    <Link 
                      to={`/portafolio/${index + 1}`}
                      className="text-sm text-gray-500 hover:text-haby-primary transition-colors"
                    >
                      Más detalles
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/portafolio" className="btn-primary">
            Ver todos los proyectos
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
