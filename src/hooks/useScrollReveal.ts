import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollReveal = ({
  threshold = 0.1,
  rootMargin = '-50px',
  triggerOnce = true,
}: UseScrollRevealOptions = {}) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        // Batch the state update with requestAnimationFrame to avoid forced reflow
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      } else if (!triggerOnce) {
        requestAnimationFrame(() => {
          setIsVisible(false);
        });
      }
    },
    [triggerOnce]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [handleIntersection, threshold, rootMargin]);

  return { ref, isVisible };
};

// Staggered children hook for sequential animations
export const useStaggeredReveal = (
  itemCount: number,
  baseDelay: number = 100,
  options?: UseScrollRevealOptions
) => {
  const { ref, isVisible } = useScrollReveal(options);

  const getDelay = (index: number) => ({
    transitionDelay: isVisible ? `${index * baseDelay}ms` : '0ms',
  });

  return { ref, isVisible, getDelay };
};
