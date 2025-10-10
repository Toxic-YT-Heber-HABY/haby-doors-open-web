
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
    <section 
      className="relative min-h-screen text-white overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(250 100% 12%), hsl(250 70% 60%), hsl(280 100% 70%))'
      }}
    >
      {/* Animated gradient orbs premium */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>
      
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen flex items-center py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center w-full">
          <motion.div 
            className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: capabilities.isMobile ? 0 : -50 }}
            animate={animationsEnabled ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: capabilities.isMobile ? 0.4 : 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-2xl"
              initial={{ opacity: 0, y: -20 }}
              animate={animationsEnabled ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.5)' }}
            >
              <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
              <span className="tracking-wide">Innovación & Tecnología</span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black leading-[0.95] tracking-tighter"
              variants={titleVariants}
              initial="hidden"
              animate={animationsEnabled ? "visible" : "visible"}
              aria-label="HABY OPEN THE DOORS"
              style={{
                textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 2px 8px rgba(139,92,246,0.3)'
              }}
            >
              <span className="bg-gradient-to-r from-white via-yellow-200 to-pink-200 bg-clip-text text-transparent"
                style={{ filter: 'drop-shadow(0 2px 10px rgba(236,72,153,0.5))' }}
              >
                HABY
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">OPEN</span>{' '}
              <span className="text-white/90">THE</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text text-transparent"
                style={{ filter: 'drop-shadow(0 2px 10px rgba(236,72,153,0.5))' }}
              >DOORS</span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light tracking-wide"
              variants={paragraphVariants}
              initial="hidden"
              animate={animationsEnabled ? "visible" : "visible"}
              style={{
                textShadow: '0 2px 8px rgba(0,0,0,0.4)'
              }}
            >
              <span className="text-white font-medium">Soluciones web </span>
              <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent font-semibold">innovadoras</span>
              <span className="text-white/90"> que transforman ideas en experiencias digitales extraordinarias.</span>
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-center lg:justify-start pt-4 w-full sm:w-auto"
              variants={buttonsVariants}
              initial="hidden"
              animate={animationsEnabled ? "visible" : "visible"}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/contacto" 
                  className="group relative w-full sm:w-auto min-h-[52px] px-8 py-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 hover:from-yellow-500 hover:via-pink-600 hover:to-purple-600 rounded-full text-white font-bold text-base shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 touch-manipulation overflow-hidden inline-flex items-center justify-center"
                  aria-label="Contáctanos ahora para iniciar tu proyecto"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Contáctanos ahora
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/servicios" 
                  className="group w-full sm:w-auto min-h-[52px] px-8 py-4 bg-white/5 backdrop-blur-md border-2 border-white/40 rounded-full text-white font-bold text-base hover:bg-white/20 transition-all duration-300 touch-manipulation inline-flex items-center justify-center shadow-lg"
                  aria-label="Explorar todos nuestros servicios de desarrollo web"
                >
                  <span className="flex items-center gap-2">
                    Nuestros servicios
                    <Sparkles className="w-5 h-5" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-10 pt-8 sm:pt-10 lg:pt-14 border-t border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={animationsEnabled ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { value: "100+", label: "Proyectos" },
                { value: "24/7", label: "Soporte" },
                { value: "99%", label: "Satisfacción" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 sm:p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl hover:bg-white/20 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-white mb-1"
                    style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-white/80 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
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
