
import { motion } from 'framer-motion';

/**
 * SectionTitle - Encabezado para secciones con subtítulo, título principal, descripción y variantes de color.
 *
 * Props:
 * - subtitle: texto pequeño destacado sobre el título
 * - title: título principal de la sección (puede ser string o ReactNode para formatos)
 * - description: texto descriptivo opcional debajo del título
 * - center: centra el contenido horizontalmente (boolean)
 * - className: clases CSS adicionales
 * - variant: estilos de color para el título ('default', 'gradient', 'accent')
 */
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
  // Animación para entrada de cada sección
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Define clases de color/tipografía según la variante
  const getTitleClasses = () => {
    switch (variant) {
      case 'gradient':
        // Título con gradiente animado
        return "text-3xl md:text-4xl font-bold bg-gradient-to-r from-haby-primary to-haby-accent bg-clip-text text-transparent";
      case 'accent':
        // Título con color principal de acento
        return "text-3xl md:text-4xl font-bold text-haby-accent";
      default:
        // Título con color gris oscuro por defecto
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
      {/* Subtítulo */}
      <motion.div
        variants={fadeInUp}
        className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium"
      >
        {subtitle}
      </motion.div>

      {/* Título principal con el estilo correspondiente */}
      <motion.h2
        variants={fadeInUp}
        className={getTitleClasses()}
      >
        {title}
      </motion.h2>

      {/* Descripción adicional opcional */}
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

