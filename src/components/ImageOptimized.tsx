
/**
 * ImageOptimized Component
 * 
 * Un componente optimizado para mostrar imágenes de manera eficiente,
 * soportando lazy loading, fallbacks, y compatibilidad cross-browser
 * con mejoras específicas para calidad visual.
 * 
 * @param {string} src - URL de la imagen
 * @param {string} alt - Texto alternativo para la imagen
 * @param {string} className - Clases CSS para la imagen
 * @param {string} aspectRatio - Relación de aspecto (square, video, etc.)
 * @param {boolean} lazy - Si la imagen debe cargarse con lazy loading
 * @param {string} fallback - URL de imagen de respaldo si la principal falla
 * @param {React.CSSProperties} style - Estilos adicionales
 */

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ImageOptimizedProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "square" | "video" | "auto";
  lazy?: boolean;
  fallback?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const ImageOptimized = ({
  src,
  alt,
  className = "",
  aspectRatio = "auto",
  lazy = true,
  fallback = "/placeholder.svg",
  style,
  onClick,
}: ImageOptimizedProps) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Reset state when src changes
  useEffect(() => {
    setImgSrc(src);
    setIsLoaded(false);
    setError(false);
  }, [src]);

  // Handle image load error
  const handleError = () => {
    if (!error && fallback) {
      setError(true);
      setImgSrc(fallback);
    }
  };

  // Define container class based on aspect ratio
  const containerClasses = cn(
    "overflow-hidden relative",
    {
      "aspect-square": aspectRatio === "square",
      "aspect-video": aspectRatio === "video",
    },
    className
  );

  // Define image classes with enhanced quality settings - fix duplicate object-fit
  const imgClasses = cn(
    "w-full h-full transition-opacity duration-300 select-none",
    {
      "object-cover": aspectRatio === "square" || aspectRatio === "video",
      "object-contain": aspectRatio === "auto",
      "opacity-0": !isLoaded,
      "opacity-100": isLoaded,
    }
  );

  // Enhanced style object for better image quality - fix invalid CSS properties
  const enhancedStyle: React.CSSProperties = {
    imageRendering: 'crisp-edges',
    msInterpolationMode: 'bicubic' as any, // Cast to any for IE compatibility
    ...style
  };

  return (
    <div className={containerClasses} style={style} onClick={onClick}>
      <img
        src={imgSrc}
        alt={alt}
        className={imgClasses}
        style={enhancedStyle}
        loading={lazy ? "lazy" : "eager"}
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        draggable={false}
      />
      
      {/* Placeholder/Loading state mejorado */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse flex items-center justify-center rounded-lg">
          <div className="w-12 h-12 border-4 border-haby-primary/20 border-t-haby-primary rounded-full animate-spin" />
          <span className="sr-only">Cargando imagen...</span>
        </div>
      )}
    </div>
  );
};

export default ImageOptimized;
