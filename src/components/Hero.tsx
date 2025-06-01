
/**
 * Hero Component
 * 
 * Componente principal optimizado para máximo rendimiento en móviles
 * con fallbacks inteligentes y experiencia visual consistente
 */

import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThreeDModel from './ThreeDModel';
import { useAnimations } from './AnimationController';
import { useDeviceCapabilities } from '@/hooks/useDeviceCapabilities';
import { lazy, Suspense } from 'react';
import MobileOptimizedVisual from './MobileOptimizedVisual';

// Carga diferida solo para dispositivos de alta capacidad
const LazyThreeDModel = lazy(() => import('./ThreeDModel'));

const Hero = () => {
  const capabilities = useDeviceCapabilities();
  const { animationsEnabled } = useAnimations();
  
  // Variantes de animación optimizadas según el dispositivo
  const getAnimationVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { 
          duration: capabilities.isMobile ? 0.3 : 0.5,
          ease: "easeOut" 
        } 
      }
    };
    
    if (capabilities.performanceLevel === 'low') {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } }
      };
    }
    
    return baseVariants;
  };

  const titleVariants = getAnimationVariants();
  const paragraphVariants = {
    ...titleVariants,
    visible: {
      ...titleVariants.visible,
      transition: {
        ...titleVariants.visible.transition,
        delay: capabilities.isMobile ? 0.1 : 0.3
      }
    }
  };

  const buttonsVariants = {
    hidden: { opacity: 0, y: capabilities.isMobile ? 10 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: capabilities.isMobile ? 0.3 : 0.5,
        delay: capabilities.isMobile ? 0.2 : 0.5,
        ease: "easeOut" 
      } 
    }
  };

  // Componente visual optimizado según el dispositivo
  const VisualComponent = () => {
    if (capabilities.isMobile || capabilities.preferredRenderMode === 'static') {
      return <MobileOptimizedVisual type="hero" animate={animationsEnabled} />;
    }
    
    if (capabilities.preferredRenderMode === 'fallback') {
      return (
        <Suspense fallback={<MobileOptimizedVisual type="hero" />}>
          <LazyThreeDModel />
        </Suspense>
      );
    }
    
    return (
      <Suspense fallback={<MobileOptimizedVisual type="hero" />}>
        <LazyThreeDModel />
      </Suspense>
    );
  };

  return (
    <section className="bg-gradient-to-br from-haby-dark via-haby-secondary to-haby-primary text-white py-12 sm:py-16 lg:py-24 xl:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contenido textual optimizado para móviles */}
          <motion.div 
            className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: capabilities.isMobile ? 0 : -50 }}
            animate={animationsEnabled ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: capabilities.isMobile ? 0.4 : 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              variants={titleVariants}
              initial="hidden"
              animate={animationsEnabled ? "visible" : "visible"}
              aria-label="HABY OPEN THE DOORS"
            >
              HABY <span className="text-haby-accent block sm:inline">OPEN</span> THE{' '}
              <span className="text-haby-accent block sm:inline">DOORS</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto lg:mx-0"
              variants={paragraphVariants}
              initial="hidden"
              animate={animationsEnabled ? "visible" : "visible"}
            >
              Soluciones web innovadoras que resuelven problemas cotidianos y optimizan tu tiempo.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
              variants={buttonsVariants}
              initial="hidden"
              animate={animationsEnabled ? "visible" : "visible"}
            >
              <Link 
                to="/contacto" 
                className="btn-primary bg-haby-accent hover:bg-opacity-90 text-center w-full sm:w-auto transform transition-transform hover:scale-105"
                aria-label="Contáctanos ahora"
              >
                Contáctanos ahora
              </Link>
              <Link 
                to="/servicios" 
                className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:bg-opacity-10 flex items-center justify-center group w-full sm:w-auto"
                aria-label="Ver nuestros servicios"
              >
                Nuestros servicios 
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Sección visual optimizada */}
          <motion.div 
            className="relative h-64 sm:h-80 lg:h-96 xl:h-[500px] order-1 lg:order-2"
            initial={{ opacity: 0, scale: capabilities.isMobile ? 1 : 0.8 }}
            animate={animationsEnabled ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: capabilities.isMobile ? 0.4 : 0.8, delay: 0.4 }}
          >
            <div className="w-full h-full flex items-center justify-center relative">
              <VisualComponent />
              
              {/* Badge informativo optimizado para móviles */}
              <motion.div 
                className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 bg-haby-accent px-3 py-1 sm:px-6 sm:py-2 rounded-full text-white font-bold text-sm sm:text-base"
                initial={{ y: capabilities.isMobile ? 20 : 50, opacity: 0 }}
                animate={animationsEnabled ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: capabilities.isMobile ? 0.5 : 1 }}
              >
                OPEN THE DOORS
              </motion.div>
            </div>
            
            {/* Elementos decorativos solo en dispositivos de alto rendimiento */}
            {animationsEnabled && capabilities.performanceLevel !== 'low' && (
              <>
                <motion.div 
                  className="absolute top-1/4 right-1/4 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-haby-accent rounded-full opacity-20"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut"
                  }}
                  aria-hidden="true"
                />
                
                <motion.div 
                  className="absolute bottom-1/3 left-1/4 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-haby-primary rounded-full opacity-30"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.4, 0.3]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  aria-hidden="true"
                />
              </>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Formas decorativas de fondo solo en dispositivos de escritorio */}
      {!capabilities.isMobile && capabilities.performanceLevel !== 'low' && (
        <>
          <motion.div 
            className="absolute top-0 right-0 w-1/3 h-full opacity-0"
            initial={{ opacity: 0 }}
            animate={animationsEnabled ? { opacity: 0.1 } : { opacity: 0.1 }}
            transition={{ duration: 1.5 }}
            aria-hidden="true"
          >
            <div className="w-full h-full bg-gradient-to-b from-haby-accent to-transparent transform rotate-45" />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-0"
            initial={{ opacity: 0 }}
            animate={animationsEnabled ? { opacity: 0.1 } : { opacity: 0.1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            aria-hidden="true"
          >
            <div className="w-full h-full bg-gradient-to-t from-haby-accent to-transparent transform -rotate-45" />
          </motion.div>
        </>
      )}
    </section>
  );
};

export default Hero;
