
import { motion } from 'framer-motion';

/**
 * SectionTitle Component
 * 
 * A reusable component for section titles with consistent styling and animations.
 * 
 * @param {Object} props - Component props
 * @param {string} props.subtitle - The smaller text above the main title
 * @param {string} props.title - The main heading text
 * @param {string} props.description - Optional description text below the title
 * @param {boolean} props.center - Whether to center align the text
 * @param {string} props.className - Additional CSS classes
 */
interface SectionTitleProps {
  subtitle: string;
  title: React.ReactNode;
  description?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle = ({ 
  subtitle, 
  title, 
  description, 
  center = false,
  className = "" 
}: SectionTitleProps) => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
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
        className="text-3xl md:text-4xl font-bold text-gray-800"
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p variants={fadeInUp} className="text-gray-600 max-w-3xl">
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
