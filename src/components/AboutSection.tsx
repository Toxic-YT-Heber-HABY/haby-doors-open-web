
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import ImageOptimized from './ImageOptimized';

/**
 * AboutSection component
 * 
 * This component displays information about HABY, including:
 * - A profile photo of the founder
 * - Company description
 * - The concept behind "HABY OPEN THE DOORS"
 * 
 * Enhanced with responsive design and animations for a better user experience
 * across all devices and browsers.
 */
const AboutSection = () => {
  const isMobile = useIsMobile();
  
  // Animation variants for consistent motion effects
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="section py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <div className="relative mx-auto max-w-md">
              <div className="aspect-square w-full bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                {/* Optimized image with lazy loading and proper sizing */}
                <ImageOptimized 
                  src="/lovable-uploads/90ffa1ad-1f42-465a-b17e-61918ab82862.png" 
                  alt="Heber Zadkiel García Pérez - Fundador de HABY" 
                  className="w-full h-full object-cover"
                  aspectRatio="square"
                  lazy={!isMobile}
                />
              </div>
              <motion.div 
                className="absolute -bottom-5 -right-5 bg-white p-4 shadow-lg rounded-lg max-w-[250px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-haby-primary font-medium">Fundador de HABY</p>
                <p className="text-gray-600 text-sm mt-1">Visionario detrás de "HABY OPEN THE DOORS"</p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { 
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.span 
              variants={fadeInUp} 
              className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Sobre Nosotros
            </motion.span>
            
            <motion.h2 
              variants={fadeInUp} 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600"
            >
              El concepto <span className="text-gradient-primary">HABY OPEN THE DOORS</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp} 
              className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-medium"
            >
              En HABY nos especializamos en el desarrollo de soluciones web innovadoras que resuelven problemas cotidianos. 
              Nuestra misión es ayudar a nuestros clientes a optimizar su tiempo, eliminando tareas repetitivas 
              y permitiéndoles enfocarse en lo que realmente importa.
            </motion.p>
            
            <motion.p 
              variants={fadeInUp} 
              className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-medium"
            >
              Nuestro fundador, Heber Zadkiel García Pérez, creó HABY con una visión clara: abrir puertas 
              a nuevas posibilidades mediante el desarrollo web personalizado y centrado en soluciones prácticas.
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <Link to="/sobre-nosotros" className="inline-flex items-center text-haby-primary hover:text-haby-secondary font-medium group transition-all duration-300">
                Conoce más sobre HABY 
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
