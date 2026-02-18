import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        filter: "blur(0px)",
        transition: {
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      }}
      exit={{ 
        opacity: 0, 
        y: -8, 
        filter: "blur(4px)",
        transition: {
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
