
/**
 * MobileOptimizedVisual Component
 * 
 * Componente optimizado para dispositivos móviles que proporciona
 * una experiencia visual atractiva sin la complejidad del 3D.
 * Incluye animaciones suaves y efectos visuales adaptados
 * para un mejor rendimiento en móviles.
 */
import { motion } from "framer-motion";
import ImageOptimized from "./ImageOptimized";

interface MobileOptimizedVisualProps {
  type?: "logo" | "door" | "text";
  animate?: boolean;
  className?: string;
}

const MobileOptimizedVisual = ({ 
  type = "logo", 
  animate = true, 
  className = "" 
}: MobileOptimizedVisualProps) => {
  
  // Seleccionar la imagen y configuración basada en el tipo
  const getVisualConfig = () => {
    switch (type) {
      case "door":
        return {
          imageSrc: "/lovable-uploads/d3be837f-42a6-40ff-a75e-ea4c473f067e.png",
          alt: "HABY Door Design",
          gradientFrom: "haby-primary/30",
          gradientTo: "haby-accent/20"
        };
      case "text":
        return {
          imageSrc: "/lovable-uploads/f3e5eff1-a976-44c3-97a2-1e1e73c75a36.png",
          alt: "HABY Text Logo",
          gradientFrom: "haby-accent/30",
          gradientTo: "haby-secondary/20"
        };
      case "logo":
      default:
        return {
          imageSrc: "/lovable-uploads/f3e5eff1-a976-44c3-97a2-1e1e73c75a36.png",
          alt: "HABY Logo",
          gradientFrom: "haby-primary/25",
          gradientTo: "haby-accent/15"
        };
    }
  };

  const config = getVisualConfig();

  // Animaciones optimizadas para móviles
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = animate ? {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  } : {};

  const pulseAnimation = animate ? {
    scale: [1, 1.05, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  } : {};

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Fondo con gradiente dinámico */}
      <div 
        className={`absolute inset-0 bg-gradient-radial from-${config.gradientFrom} via-transparent to-${config.gradientTo} opacity-70`}
      />
      
      {/* Contenedor principal con animación */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        variants={containerVariants}
        initial={animate ? "hidden" : "visible"}
        animate="visible"
      >
        {/* Imagen principal con efecto flotante */}
        <motion.div
          className="relative z-10 w-3/4 h-3/4 max-w-sm max-h-sm"
          animate={floatingAnimation}
        >
          <ImageOptimized
            src={config.imageSrc}
            alt={config.alt}
            className="w-full h-full object-contain drop-shadow-2xl"
            priority={type === "logo"}
          />
        </motion.div>

        {/* Efectos de partículas decorativas */}
        {animate && (
          <>
            <motion.div
              className="absolute top-1/4 right-1/4 w-8 h-8 bg-haby-accent/40 rounded-full blur-sm"
              animate={pulseAnimation}
            />
            <motion.div
              className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-haby-primary/50 rounded-full blur-sm"
              animate={{
                ...pulseAnimation,
                transition: {
                  ...pulseAnimation.transition,
                  delay: 1.5
                }
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/6 w-4 h-4 bg-haby-secondary/60 rounded-full blur-sm"
              animate={{
                ...pulseAnimation,
                transition: {
                  ...pulseAnimation.transition,
                  delay: 2.5
                }
              }}
            />
          </>
        )}
      </motion.div>

      {/* Overlay sutil para mejorar el contraste */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/5 pointer-events-none" />
      
      {/* Elementos decorativos de borde */}
      <div className="absolute inset-0 border border-haby-accent/10 rounded-lg pointer-events-none" />
    </div>
  );
};

export default MobileOptimizedVisual;
