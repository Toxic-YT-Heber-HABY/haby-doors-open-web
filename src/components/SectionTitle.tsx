
import { motion } from 'framer-motion';

interface SectionTitleProps {
  subtitle: string;
  title: React.ReactNode;
  description?: string;
  center?: boolean;
  className?: string;
  variant?: 'default' | 'gradient' | 'accent';
}

const SectionTitle = ({ 
  subtitle, 
  title, 
  description, 
  center = false,
  className = "",
  variant = 'default'
}: SectionTitleProps) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const getTitleClasses = () => {
    switch (variant) {
      case 'gradient':
        return "text-3xl md:text-4xl font-bold bg-gradient-to-r from-haby-primary to-haby-accent bg-clip-text text-transparent";
      case 'accent':
        return "text-3xl md:text-4xl font-bold text-haby-accent";
      default:
        return "text-3xl md:text-4xl font-bold text-gray-800";
    }
  };
  
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
        className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium"
      >
        {subtitle}
      </motion.div>
      
      <motion.h2 
        variants={fadeInUp} 
        className={getTitleClasses()}
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p 
          variants={fadeInUp} 
          className="text-gray-600 max-w-3xl"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
