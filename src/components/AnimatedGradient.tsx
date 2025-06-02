
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientProps {
  className?: string;
  colors?: string[];
  duration?: number;
  children?: React.ReactNode;
  repeat?: number | "Infinity";
  variant?: "subtle" | "vibrant" | "cosmic";
}

const AnimatedGradient = ({ 
  className, 
  colors = ["#7E69AB", "#6E59A5", "#D946EF", "#E5DEFF"], 
  duration = 12,
  repeat = "Infinity",
  variant = "subtle",
  children 
}: GradientProps) => {
  
  // Diferentes variantes de gradientes
  const getGradientConfig = () => {
    switch (variant) {
      case "vibrant":
        return {
          colors: ["#7E69AB", "#D946EF", "#8B5CF6", "#EC4899", "#F59E0B"],
          opacity: "opacity-30",
          backgroundSize: "300% 300%"
        };
      case "cosmic":
        return {
          colors: ["#1e1b4b", "#7E69AB", "#D946EF", "#ec4899", "#fbbf24"],
          opacity: "opacity-40",
          backgroundSize: "400% 400%"
        };
      case "subtle":
      default:
        return {
          colors: colors,
          opacity: "opacity-20",
          backgroundSize: "200% 200%"
        };
    }
  };

  const config = getGradientConfig();

  return (
    <div className={cn("overflow-hidden relative", className)}>
      <motion.div
        className={`absolute inset-0 ${config.opacity} -z-10`}
        style={{
          background: `linear-gradient(45deg, ${config.colors.join(", ")})`,
          backgroundSize: config.backgroundSize,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration,
          repeat: repeat as any,
          ease: "linear",
        }}
      />
      
      {/* Capa adicional para efectos más complejos */}
      <motion.div
        className={`absolute inset-0 ${config.opacity} -z-10 mix-blend-overlay`}
        style={{
          background: `radial-gradient(circle at 20% 80%, ${config.colors[0]} 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${config.colors[2]} 0%, transparent 50%)`,
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: duration * 2,
          repeat: repeat as any,
          ease: "linear",
        }}
      />
      
      {children}
    </div>
  );
};

export default AnimatedGradient;
