
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientProps {
  className?: string;
  colors?: string[];
  duration?: number;
  children?: React.ReactNode;
  repeat?: number | "Infinity";
}

const AnimatedGradient = ({ 
  className, 
  colors = ["#7E69AB", "#6E59A5", "#D946EF", "#E5DEFF"], 
  duration = 10,
  repeat = "Infinity",
  children 
}: GradientProps) => {
  return (
    <div className={cn("overflow-hidden relative", className)}>
      <motion.div
        className="absolute inset-0 opacity-20 -z-10"
        style={{
          background: `linear-gradient(60deg, ${colors.join(", ")})`,
          backgroundSize: "400% 400%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration,
          repeat: repeat as number | "Infinity",
          ease: "easeInOut",
        }}
      />
      {children}
    </div>
  );
};

export default AnimatedGradient;
