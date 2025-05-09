
import { motion } from 'framer-motion';

/**
 * ProfileCard Component
 * 
 * A reusable component for displaying profile information with an image,
 * optimized for all devices and browsers with proper responsive design.
 * 
 * @param {Object} props - Component props
 * @param {string} props.imageSrc - Path to the profile image
 * @param {string} props.imageAlt - Alt text for the image
 * @param {string} props.title - Title text (usually the person's name or role)
 * @param {string} props.subtitle - Subtitle text (position or description)
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.imageOnLeft - Whether to show image on left (true) or right (false)
 */
interface ProfileCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  className?: string;
  imageOnLeft?: boolean;
}

const ProfileCard = ({ 
  imageSrc, 
  imageAlt, 
  title, 
  subtitle, 
  className = "",
  imageOnLeft = true 
}: ProfileCardProps) => {
  
  return (
    <div className={`relative ${className}`}>
      <motion.div 
        className="aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img 
          src={imageSrc} 
          alt={imageAlt}
          className="w-full h-full object-cover"
          loading="lazy"
          // Adding height and width for better browser rendering
          height="400"
          width="400" 
        />
      </motion.div>
      
      <motion.div 
        className={`absolute ${imageOnLeft ? "-bottom-5 -right-5" : "-bottom-5 -left-5"} bg-white p-4 md:p-6 shadow-lg rounded-lg max-w-[85%] sm:max-w-[250px]`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-haby-primary font-bold text-lg">{title}</p>
        {subtitle && (
          <p className="text-gray-600 text-sm mt-1">{subtitle}</p>
        )}
      </motion.div>
    </div>
  );
};

export default ProfileCard;
