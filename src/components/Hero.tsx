
/**
 * Hero Component
 * 
 * Componente principal de la página de inicio que presenta la marca HABY
 * con elementos visuales atractivos, animaciones optimizadas y total compatibilidad
 * cross-browser.
 * 
 * Características:
 * - Diseño totalmente responsivo
 * - Animaciones suaves y elegantes con Framer Motion
 * - Compatibilidad con navegadores antiguos mediante fallbacks
 * - Optimización de carga y renderizado
 * - Accesibilidad mejorada
 */

import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThreeDModel from './ThreeDModel';
import ThreeDModelFallback from './ThreeDModelFallback';
import { useAnimations } from './AnimationController';
import useBrowserDetection from '@/hooks/useBrowserDetection';
import { lazy, Suspense, useState, useEffect } from 'react';

// Carga diferida del modelo 3D para mejorar el rendimiento inicial
const LazyThreeDModel = lazy(() => import('./ThreeDModel'));

const Hero = () => {
  // Detectar capacidades del navegador
  const browser = useBrowserDetection();
  
  // Control de animaciones
  const { animationsEnabled, reducedMotion } = useAnimations();
  
  // Estado para determinar si se debe mostrar el modelo 3D o la alternativa
  const [showFallback, setShowFallback] = useState(true);
  
  // Determinar si se puede mostrar el modelo 3D basado en las capacidades del navegador
  useEffect(() => {
    // Permitir modelos 3D en navegadores modernos no IE
    setShowFallback(browser.isIE || browser.version === "0");
    
    // Opcional: habilitar para dispositivos de baja potencia
    const isLowPoweredDevice = navigator.hardwareConcurrency 
      ? navigator.hardwareConcurrency < 4 
      : false;
      
    if (isLowPoweredDevice) {
      setShowFallback(true);
    }
  }, [browser]);
  
  // Variantes de animación para el título
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        delay: 0.3,
        ease: "easeOut" 
      } 
    }
  };
  
  // Variantes de animación para el párrafo
  const paragraphVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        delay: 0.5,
        ease: "easeOut" 
      } 
    }
  };
  
  // Variantes de animación para los botones
  const buttonsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: 0.7,
        ease: "easeOut" 
      } 
    }
  };
  
  // Variantes para elementos decorativos
  const decorativeVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 0.1,
      transition: { duration: 1.5 }
    }
  };

  return (
    <section className="bg-gradient-to-br from-haby-dark via-haby-secondary to-haby-primary text-white py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido textual */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={animationsEnabled ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              variants={titleVariants}
              initial="hidden"
              animate={animationsEnabled ? "visible" : "visible"}
              aria-label="HABY OPEN THE DOORS"
            >
              HABY <span className="text-haby-accent">OPEN</span> THE <span className="text-haby-accent">DOORS</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-200"
              variants={paragraphVariants}
              initial="hidden"
              animate={animationsEnabled ? "visible" : "visible"}
            >
              Soluciones web innovadoras que resuelven problemas cotidianos y optimizan tu tiempo.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={buttonsVariants}
              initial="hidden"
              animate={animationsEnabled ? "visible" : "visible"}
            >
              <Link 
                to="/contacto" 
                className="btn-primary bg-haby-accent hover:bg-opacity-90 text-center transform transition-transform hover:scale-105"
                aria-label="Contáctanos ahora"
              >
                Contáctanos ahora
              </Link>
              <Link 
                to="/servicios" 
                className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:bg-opacity-10 flex items-center justify-center group"
                aria-label="Ver nuestros servicios"
              >
                Nuestros servicios 
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Modelo 3D o Fallback */}
          <motion.div 
            className="relative lg:h-[500px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={animationsEnabled ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-full h-full flex items-center justify-center">
              {showFallback ? (
                <ThreeDModelFallback />
              ) : (
                <Suspense fallback={<ThreeDModelFallback />}>
                  <LazyThreeDModel />
                </Suspense>
              )}
            </div>
            
            <motion.div 
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-haby-accent px-6 py-2 rounded-full text-white font-bold"
              initial={{ y: 50, opacity: 0 }}
              animate={animationsEnabled ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              OPEN THE DOORS
            </motion.div>
            
            {/* Elementos decorativos animados */}
            {animationsEnabled && (
              <>
                <motion.div 
                  className="absolute top-1/4 right-1/4 w-20 h-20 bg-haby-accent rounded-full opacity-20"
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
                  className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-haby-primary rounded-full opacity-30"
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
      
      {/* Formas decorativas de fondo */}
      <motion.div 
        className="absolute top-0 right-0 w-1/3 h-full opacity-0"
        variants={decorativeVariants}
        initial="hidden"
        animate={animationsEnabled ? "visible" : { opacity: 0.1 }}
        aria-hidden="true"
      >
        <div className="w-full h-full bg-gradient-to-b from-haby-accent to-transparent transform rotate-45" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-0"
        variants={decorativeVariants}
        initial="hidden"
        animate={animationsEnabled ? "visible" : { opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        aria-hidden="true"
      >
        <div className="w-full h-full bg-gradient-to-t from-haby-accent to-transparent transform -rotate-45" />
      </motion.div>
    </section>
  );
};

export default Hero;
