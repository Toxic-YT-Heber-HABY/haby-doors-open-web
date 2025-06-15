
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface EnhancedCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  gradient?: string;
  delay?: number;
}

const EnhancedCard = ({ 
  children, 
  className = "", 
  hoverEffect = true,
  gradient = "from-blue-500/20 to-cyan-500/20",
  delay = 0
}: EnhancedCardProps) => {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hoverEffect ? { y: -8 } : {}}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      <div className={`relative bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-haby-accent/30 ${className}`}>
        {children}
      </div>
    </motion.div>
  );
};

export default EnhancedCard;
