
/**
 * MobileOptimizedVisual Component
 * 
 * Componente especialmente diseñado para dispositivos móviles
 * que proporciona una experiencia visual rica sin depender de WebGL o 3D
 */
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MobileOptimizedVisualProps {
  type?: 'logo' | 'hero' | 'showcase';
  className?: string;
  animate?: boolean;
}

const MobileOptimizedVisual = ({
  type = 'logo',
  className,
  animate = true
}: MobileOptimizedVisualProps) => {
  const getVisualContent = () => {
    switch (type) {
      case 'hero':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Fondo con gradiente animado */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-haby-primary/20 via-haby-accent/30 to-haby-secondary/20 rounded-2xl"
              animate={animate ? {
                background: [
                  'linear-gradient(45deg, rgba(126,105,171,0.2), rgba(217,70,239,0.3), rgba(110,89,165,0.2))',
                  'linear-gradient(135deg, rgba(217,70,239,0.3), rgba(110,89,165,0.2), rgba(126,105,171,0.2))',
                  'linear-gradient(45deg, rgba(126,105,171,0.2), rgba(217,70,239,0.3), rgba(110,89,165,0.2))'
                ]
              } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            
            {/* Logo principal */}
            <motion.div
              className="relative z-10 text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-haby-primary mb-4"
                animate={animate ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                HABY
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl text-haby-accent font-semibold"
                animate={animate ? { opacity: [0.7, 1, 0.7] } : {}}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                OPEN THE DOORS
              </motion.p>
            </motion.div>
            
            {/* Elementos decorativos */}
            {animate && (
              <>
                <motion.div
                  className="absolute top-1/4 right-1/4 w-12 h-12 bg-haby-accent/30 rounded-full blur-sm"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                    x: [0, 10, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-haby-primary/40 rounded-full blur-sm"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.7, 0.4],
                    x: [0, -8, 0],
                    y: [0, 8, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
              </>
            )}
          </div>
        );
        
      case 'showcase':
        return (
          <div className="grid grid-cols-2 gap-4 p-4">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                className="aspect-square bg-gradient-to-br from-haby-light to-haby-accent/20 rounded-lg flex items-center justify-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="w-8 h-8 bg-haby-primary rounded-full mx-auto mb-2" />
                  <p className="text-xs text-haby-primary font-medium">Función {item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        );
        
      default: // logo
        return (
          <motion.div
            className="relative w-32 h-32 mx-auto"
            initial={{ rotate: -10, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-haby-primary to-haby-accent rounded-2xl shadow-lg"
              animate={animate ? { rotate: [0, 5, 0, -5, 0] } : {}}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="absolute inset-4 bg-white rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-haby-primary">H</div>
                <div className="text-xs text-haby-accent">OPEN</div>
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className={cn('w-full h-full', className)}>
      {getVisualContent()}
    </div>
  );
};

export default MobileOptimizedVisual;
