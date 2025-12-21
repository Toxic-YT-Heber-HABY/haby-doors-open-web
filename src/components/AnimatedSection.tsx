import { ReactNode, useRef, useEffect, useState, useMemo } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  threshold?: number;
  stagger?: boolean;
}

const AnimatedSection = ({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 40,
  threshold = 0.1,
  stagger = false,
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Memoizar la transformación inicial para evitar recálculos
  const initialTransform = useMemo(() => {
    switch (direction) {
      case "up": return `translateY(${distance}px)`;
      case "down": return `translateY(-${distance}px)`;
      case "left": return `translateX(${distance}px)`;
      case "right": return `translateX(-${distance}px)`;
      case "none": return "none";
      default: return `translateY(${distance}px)`;
    }
  }, [direction, distance]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "-50px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  // Usar CSS transforms que el navegador puede optimizar con GPU
  const styles = useMemo(() => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate(0)" : initialTransform,
    transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    // Usar will-change solo cuando no es visible para preparar la animación
    willChange: isVisible ? "auto" : "opacity, transform",
  }), [isVisible, initialTransform, delay]);

  return (
    <section ref={ref} className={cn(className)} style={styles}>
      {children}
    </section>
  );
};

export default AnimatedSection;
