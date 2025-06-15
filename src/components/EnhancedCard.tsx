
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

/**
 * EnhancedCard - Componente de tarjeta reutilizable con diseño moderno.
 * Permite animaciones de entrada, gradiente de fondo y efecto de hover opcional.
 *
 * Props:
 * - children: contenido de la tarjeta (ReactNode)
 * - className: clases CSS adicionales personalizadas
 * - hoverEffect: activa o desactiva el efecto de elevación al pasar el mouse
 * - gradient: gradiente de fondo utilizado en hover (por defecto azul/cyan suave)
 * - delay: retardo personalizado en la animación de aparición
 */
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
      // Contenedor con animación de aparición y elevación al hacer hover
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hoverEffect ? { y: -8 } : {}}
    >
      {/* Gradiente decorativo que aparece al hacer hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      {/* Tarjeta principal con fondo blanco y sombra, borde animado en hover */}
      <div className={`relative bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-haby-accent/30 ${className}`}>
        {children}
      </div>
    </motion.div>
  );
};

export default EnhancedCard;

