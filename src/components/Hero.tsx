
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
    <section className="relative min-h-screen bg-gradient-hero text-white overflow-hidden">
      {/* Ultra-Modern Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-haby-accent/60 to-transparent rounded-full mix-blend-screen filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-l from-haby-primary/50 to-transparent rounded-full mix-blend-screen filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/4 w-80 h-80 bg-gradient-to-tr from-haby-secondary/40 to-transparent rounded-full mix-blend-screen filter blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Elegant Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
        backgroundSize: '4rem 4rem'
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen flex items-center py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center w-full">
          <motion.div 
            className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: capabilities.isMobile ? 0 : -50 }}
            animate={animationsEnabled ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: capabilities.isMobile ? 0.4 : 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/30 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={animationsEnabled ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Sparkles className="w-5 h-5 text-haby-accent" />
              <span className="tracking-wide">Innovación & Tecnología</span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black leading-[0.95] tracking-tighter"
              variants={titleVariants}
              initial="hidden"
              animate={animationsEnabled ? "visible" : "visible"}
              aria-label="HABY OPEN THE DOORS"
            >
              <span className="bg-gradient-to-r from-white via-haby-accent to-haby-accent bg-clip-text text-transparent">
                HABY
              </span>
              <br />
              <span className="text-haby-accent drop-shadow-2xl">OPEN</span>{' '}
              <span className="text-white/90">THE</span>
              <br />
              <span className="bg-gradient-to-r from-haby-accent to-white bg-clip-text text-transparent">DOORS</span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light tracking-wide"
              variants={paragraphVariants}
              initial="hidden"
              animate={animationsEnabled ? "visible" : "visible"}
            >
              <span className="text-white/95 font-medium">Soluciones web </span>
              <span className="bg-gradient-to-r from-haby-accent to-white bg-clip-text text-transparent font-semibold">innovadoras</span>
              <span className="text-white/85"> que transforman ideas en experiencias digitales extraordinarias.</span>
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-center lg:justify-start pt-4 w-full sm:w-auto"
              variants={buttonsVariants}
              initial="hidden"
              animate={animationsEnabled ? "visible" : "visible"}
            >
              <Link 
                to="/contacto" 
                className="group relative w-full sm:w-auto min-h-[52px] px-8 py-4 bg-gradient-to-r from-haby-accent to-haby-primary rounded-xl text-white font-semibold text-base shadow-2xl shadow-haby-accent/50 hover:shadow-haby-accent/70 hover:scale-105 transition-all duration-300 touch-manipulation overflow-hidden"
                aria-label="Contáctanos ahora para iniciar tu proyecto"
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Contáctanos ahora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                to="/servicios" 
                className="group w-full sm:w-auto min-h-[52px] px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-xl text-white font-semibold text-base hover:bg-white/20 hover:border-white/50 transition-all duration-300 touch-manipulation"
                aria-label="Explorar todos nuestros servicios de desarrollo web"
              >
                <span className="flex items-center justify-center gap-2">
                  Nuestros servicios
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </Link>
            </motion.div>

            <motion.div 
              className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-10 pt-8 sm:pt-10 lg:pt-14 border-t border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={animationsEnabled ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-haby-accent mb-1">100+</div>
                <div className="text-xs sm:text-sm lg:text-base text-white/70 font-medium">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-haby-accent mb-1">24/7</div>
                <div className="text-xs sm:text-sm lg:text-base text-white/70 font-medium">Soporte</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-haby-accent mb-1">99%</div>
                <div className="text-xs sm:text-sm lg:text-base text-white/70 font-medium">Satisfacción</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[650px] order-1 lg:order-2"
            initial={{ opacity: 0, scale: capabilities.isMobile ? 1 : 0.8 }}
            animate={animationsEnabled ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: capabilities.isMobile ? 0.4 : 0.8, delay: 0.4 }}
          >
            <div className="w-full h-full flex items-center justify-center relative">
              <VisualComponent />
              
              <motion.div 
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-haby-accent via-haby-primary to-haby-secondary px-8 py-4 rounded-2xl text-white font-bold text-base sm:text-lg shadow-2xl border border-white/30 backdrop-blur-sm"
                initial={{ y: capabilities.isMobile ? 20 : 50, opacity: 0 }}
                animate={animationsEnabled ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: capabilities.isMobile ? 0.5 : 1 }}
              >
                <span className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                  <span className="tracking-wider">OPEN THE DOORS</span>
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70"
        animate={animationsEnabled ? { y: [0, 12, 0] } : {}}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm font-medium tracking-wider">Scroll</span>
          <div className="w-[2px] h-10 bg-gradient-to-b from-white/50 to-transparent rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
