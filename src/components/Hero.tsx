import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAnimations } from './AnimationController';
import { useDeviceCapabilities } from '@/hooks/useDeviceCapabilities';
import MobileOptimizedVisual from './MobileOptimizedVisual';
import LazyThreeDModel from './LazyThreeDModel';

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
    
    return <LazyThreeDModel type="hero" />;
  };

  return (
    <section 
      className="relative min-h-screen text-white overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(250 100% 8%) 0%, hsl(260 90% 15%) 50%, hsl(270 85% 25%) 100%)'
      }}
    >
      {/* Elegant gradient orbs - Solo en desktop */}
      {!capabilities.isMobile && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-haby-accent/20 rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-haby-primary/15 rounded-full blur-[140px]"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{ duration: 12, repeat: Infinity, delay: 2, ease: "easeInOut" }}
          />
        </div>
      )}
      
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>

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
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black leading-[1] tracking-[-0.02em]"
              variants={titleVariants}
              initial="hidden"
              animate={animationsEnabled ? "visible" : "visible"}
              aria-label="HABY OPEN THE DOORS"
              style={{
                textShadow: '0 2px 40px rgba(139,92,246,0.4)'
              }}
            >
              <span className="bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
                HABY
              </span>
              <br />
              <span className="text-white/95">OPEN THE</span>
              <br />
              <span className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 bg-clip-text text-transparent">
                DOORS
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
              variants={paragraphVariants}
              initial="hidden"
              animate={animationsEnabled ? "visible" : "visible"}
              style={{
                textShadow: '0 1px 4px rgba(0,0,0,0.3)'
              }}
            >
              Transformamos <span className="text-white font-semibold">ideas innovadoras</span> en <span className="text-purple-200 font-semibold">experiencias digitales</span> extraordinarias que impulsan tu negocio.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-center lg:justify-start pt-6 w-full sm:w-auto"
              variants={buttonsVariants}
              initial="hidden"
              animate={animationsEnabled ? "visible" : "visible"}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  to="/contacto" 
                  className="group relative w-full sm:w-auto px-8 py-3.5 bg-white text-haby-primary rounded-xl font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 touch-manipulation overflow-hidden inline-flex items-center justify-center"
                  aria-label="Contáctanos ahora para iniciar tu proyecto"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Comenzar ahora
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  to="/servicios" 
                  className="group w-full sm:w-auto px-8 py-3.5 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl text-white font-semibold text-base hover:bg-white/20 hover:border-white/50 transition-all duration-300 touch-manipulation inline-flex items-center justify-center"
                  aria-label="Explorar todos nuestros servicios de desarrollo web"
                >
                  <span className="flex items-center gap-2">
                    Ver servicios
                    <Sparkles className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-10 sm:pt-12"
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
                  className="text-center p-4 sm:p-5 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/70 font-medium">
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
