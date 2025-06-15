
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThreeDModel from './ThreeDModel';
import { useAnimations } from './AnimationController';
import { useDeviceCapabilities } from '@/hooks/useDeviceCapabilities';
import { lazy, Suspense } from 'react';
import MobileOptimizedVisual from './MobileOptimizedVisual';

const LazyThreeDModel = lazy(() => import('./ThreeDModel'));

const Hero = () => {
  const capabilities = useDeviceCapabilities();
  const { animationsEnabled } = useAnimations();
  
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

  const VisualComponent = () => {
    if (capabilities.isMobile || capabilities.preferredRenderMode === 'static') {
      return <MobileOptimizedVisual type="hero" animate={animationsEnabled} />;
    }
    
    return (
      <Suspense fallback={<MobileOptimizedVisual type="hero" />}>
        <LazyThreeDModel />
      </Suspense>
    );
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-haby-dark via-haby-secondary to-haby-primary text-white overflow-hidden">
      {/* Elementos decorativos optimizados */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-haby-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          <motion.div 
            className="space-y-8 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: capabilities.isMobile ? 0 : -50 }}
            animate={animationsEnabled ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: capabilities.isMobile ? 0.4 : 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={animationsEnabled ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Sparkles className="w-4 h-4 text-haby-accent" />
              <span>Innovación y Tecnología</span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              variants={titleVariants}
              initial="hidden"
              animate={animationsEnabled ? "visible" : "visible"}
              aria-label="HABY OPEN THE DOORS"
            >
              <span className="bg-gradient-to-r from-haby-accent to-purple-600 bg-clip-text text-transparent font-extrabold">
                HABY
              </span>
              <br />
              <span className="text-haby-accent font-extrabold">OPEN</span>{' '}
              <span className="text-white">THE</span>{' '}
              <span className="text-haby-accent font-extrabold">DOORS</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl lg:text-3xl text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
              variants={paragraphVariants}
              initial="hidden"
              animate={animationsEnabled ? "visible" : "visible"}
            >
              <span className="text-white">Soluciones web </span>
              <span className="bg-gradient-to-r from-haby-accent to-purple-600 bg-clip-text text-transparent font-semibold">innovadoras</span>
              <span className="text-white"> que resuelven problemas cotidianos y optimizan tu tiempo con tecnología de vanguardia.</span>
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start pt-4"
              variants={buttonsVariants}
              initial="hidden"
              animate={animationsEnabled ? "visible" : "visible"}
            >
              <Link 
                to="/contacto" 
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-haby-accent hover:bg-haby-accent/90 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-haby-accent/25 w-full sm:w-auto"
                aria-label="Contáctanos ahora"
              >
                <span className="relative z-10">Contáctanos ahora</span>
                <div className="absolute inset-0 bg-gradient-to-r from-haby-accent to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link 
                to="/servicios" 
                className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-haby-dark font-semibold rounded-full transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                aria-label="Ver nuestros servicios"
              >
                <span>Nuestros servicios</span>
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" aria-hidden="true" />
              </Link>
            </motion.div>

            <motion.div 
              className="grid grid-cols-3 gap-8 pt-12 border-t border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={animationsEnabled ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-haby-accent">100+</div>
                <div className="text-sm text-white">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-haby-accent">24/7</div>
                <div className="text-sm text-white">Soporte</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-haby-accent">99%</div>
                <div className="text-sm text-white">Satisfacción</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative h-96 sm:h-[500px] lg:h-[600px] order-1 lg:order-2"
            initial={{ opacity: 0, scale: capabilities.isMobile ? 1 : 0.8 }}
            animate={animationsEnabled ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: capabilities.isMobile ? 0.4 : 0.8, delay: 0.4 }}
          >
            <div className="w-full h-full flex items-center justify-center relative">
              <VisualComponent />
              
              <motion.div 
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-haby-accent to-purple-600 px-6 py-3 rounded-full text-white font-bold text-sm sm:text-base shadow-2xl border border-white/20"
                initial={{ y: capabilities.isMobile ? 20 : 50, opacity: 0 }}
                animate={animationsEnabled ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: capabilities.isMobile ? 0.5 : 1 }}
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>OPEN THE DOORS</span>
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={animationsEnabled ? { y: [0, 10, 0] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Scroll</span>
          <div className="w-0.5 h-8 bg-white/40 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
