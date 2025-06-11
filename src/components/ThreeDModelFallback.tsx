
/**
 * ThreeDModelFallback Component
 * 
 * Componente que proporciona una alternativa para navegadores que no soportan WebGL
 * o tienen problemas con Three.js. Ofrece una representación estática pero visualmente
 * similar del modelo 3D con calidad optimizada.
 * 
 * @param {string} type - Tipo de modelo (logo, door, text, hero)
 * @param {string} className - Clases CSS adicionales
 */
import { motion } from "framer-motion";
import ImageOptimized from "./ImageOptimized";

interface ThreeDModelFallbackProps {
  type?: "logo" | "door" | "text" | "hero";
  className?: string;
}

const ThreeDModelFallback = ({ 
  type = "logo", 
  className = "" 
}: ThreeDModelFallbackProps) => {
  // Seleccionar la imagen estática basada en el tipo
  const getImageSrc = () => {
    switch (type) {
      case "door":
        return "/lovable-uploads/d3be837f-42a6-40ff-a75e-ea4c473f067e.png";
      case "text":
        return "/lovable-uploads/f3e5eff1-a976-44c3-97a2-1e1e73c75a36.png";
      case "hero":
        return "/lovable-uploads/f3e5eff1-a976-44c3-97a2-1e1e73c75a36.png";
      case "logo":
      default:
        return "/lovable-uploads/f3e5eff1-a976-44c3-97a2-1e1e73c75a36.png";
    }
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Efecto de iluminación para simular 3D */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-haby-accent/20 to-transparent pointer-events-none" />
      
      {/* Imagen principal con animación y calidad optimizada */}
      <motion.div
        className="w-full h-full flex items-center justify-center p-4"
        animate={{ rotateY: [0, 10, 0, -10, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="relative w-full h-full max-w-md max-h-md">
          <ImageOptimized
            src={getImageSrc()}
            alt="HABY Logo"
            className="w-full h-full object-contain filter drop-shadow-2xl"
            aspectRatio="square"
          />
          
          {/* Overlay para mejorar la definición */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 pointer-events-none rounded-lg" />
        </div>
      </motion.div>
      
      {/* Elementos decorativos mejorados para el efecto 3D */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-haby-accent/40 blur-2xl"
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-16 h-16 rounded-full bg-haby-primary/40 blur-xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
      
      {/* Efecto de brillo adicional */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/10 blur-3xl"
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
      />
    </div>
  );
};

export default ThreeDModelFallback;
