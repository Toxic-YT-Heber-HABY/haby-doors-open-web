import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import MobileOptimizedVisual from './MobileOptimizedVisual';

const ThreeDModel = lazy(() => import('./ThreeDModel'));

interface LazyThreeDModelProps {
  type?: 'logo' | 'door' | 'text' | 'hero';
  modelPath?: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  className?: string;
  rootMargin?: string;
}

export default function LazyThreeDModel({ 
  type = 'logo',
  rootMargin = '100px',
  ...props 
}: LazyThreeDModelProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={containerRef} className={`w-full h-full ${props.className || ''}`} style={{ minHeight: '300px' }}>
      {isVisible ? (
        <Suspense fallback={<MobileOptimizedVisual type={type} />}>
          <ThreeDModel type={type} {...props} />
        </Suspense>
      ) : (
        <MobileOptimizedVisual type={type} />
      )}
    </div>
  );
}
