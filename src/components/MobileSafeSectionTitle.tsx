
import { motion } from 'framer-motion';

/**
 * MobileSafeSectionTitle Component
 * 
 * Un componente de título de sección optimizado específicamente para dispositivos móviles
 * que garantiza la legibilidad del texto en todos los dispositivos y navegadores.
 */
interface MobileSafeSectionTitleProps {
  subtitle: string;
  title: React.ReactNode;
  description?: string;
  center?: boolean;
  className?: string;
  textColor?: 'light' | 'dark' | 'accent';
}

const MobileSafeSectionTitle = ({ 
  subtitle, 
  title, 
  description, 
  center = false,
  className = "",
  textColor = 'dark'
}: MobileSafeSectionTitleProps) => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Clases de color seguras para móviles
  const getTextColorClasses = () => {
    switch (textColor) {
      case 'light':
        return {
          subtitle: 'text-haby-primary force-visible-mobile',
          title: 'text-white-safe force-visible-mobile',
          description: 'text-white-safe force-visible-mobile'
        };
      case 'accent':
        return {
          subtitle: 'text-haby-accent force-visible-mobile',
          title: 'text-gradient-safe force-visible-mobile',
          description: 'text-haby-primary force-visible-mobile'
        };
      case 'dark':
      default:
        return {
          subtitle: 'text-haby-primary force-visible-mobile',
          title: 'text-gray-800 force-visible-mobile',
          description: 'text-gray-600 force-visible-mobile'
        };
    }
  };

  const colorClasses = getTextColorClasses();
  
  return (
    <motion.div 
      className={`space-y-4 ${center ? 'text-center mx-auto' : ''} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 }
        }
      }}
    >
      <motion.div 
        variants={fadeInUp} 
        className={`inline-block bg-haby-light px-4 py-2 rounded-full text-sm font-medium ${colorClasses.subtitle}`}
      >
        <span className="force-visible-mobile">{subtitle}</span>
      </motion.div>
      
      <motion.h2 
        variants={fadeInUp} 
        className={`text-3xl md:text-4xl font-bold ${colorClasses.title}`}
      >
        <span className="force-visible-mobile">{title}</span>
      </motion.h2>
      
      {description && (
        <motion.p 
          variants={fadeInUp} 
          className={`max-w-3xl ${colorClasses.description}`}
        >
          <span className="force-visible-mobile">{description}</span>
        </motion.p>
      )}
    </motion.div>
  );
};

export default MobileSafeSectionTitle;
