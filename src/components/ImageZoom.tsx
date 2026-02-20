
import { useState, useRef, MouseEvent, TouchEvent, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ZoomIn, ZoomOut, X, Move } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageZoomProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageZoom = ({ src, alt, className }: ImageZoomProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    setIsMobile(mql.matches);
    
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    // Reset zoom and position when opening
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const zoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.25, 3));
  };

  const zoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.25, 0.5));
  };

  const handleMouseDown = (e: MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: TouchEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <>
      <div 
        className={cn(
          "cursor-zoom-in overflow-hidden relative group", 
          className
        )}
        onClick={handleOpen}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
          loading="lazy"
          decoding="async"
          ref={imageRef}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <ZoomIn 
            className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
            size={32} 
          />
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent 
          className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden bg-black/90 border-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute top-4 right-4 z-50 flex gap-2">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                zoomIn();
              }}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
            >
              <ZoomIn className="text-white" size={20} />
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                zoomOut();
              }}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
            >
              <ZoomOut className="text-white" size={20} />
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
            >
              <X className="text-white" size={20} />
            </button>
          </div>
          
          {scale > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 px-4 py-2 rounded-full flex items-center gap-2">
              <Move size={16} className="text-white" />
              <span className="text-white text-sm">
                {isMobile ? "Desliza para mover" : "Arrastra para mover"}
              </span>
            </div>
          )}
          
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src={src} 
              alt={alt}
              style={{
                transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                transition: isDragging ? 'none' : 'transform 0.3s ease',
                cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
              }}
              className="max-w-[95%] max-h-[95%] object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageZoom;
