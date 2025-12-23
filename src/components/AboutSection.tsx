import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import ImageOptimized from './ImageOptimized';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const AboutSection = () => {
  const isMobile = useIsMobile();
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  // Memoize animation styles to prevent recalculation
  const getAnimationStyle = React.useCallback((delay: number = 0, direction: 'up' | 'left' | 'right' = 'up') => {
    const transforms = {
      up: isVisible ? 'translateY(0)' : 'translateY(30px)',
      left: isVisible ? 'translateX(0)' : 'translateX(-30px)',
      right: isVisible ? 'translateX(0)' : 'translateX(30px)',
    };
    return {
      opacity: isVisible ? 1 : 0,
      transform: transforms[direction],
      transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      willChange: isVisible ? 'auto' : 'opacity, transform',
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="section py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Orbes decorativos solo en desktop */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1" style={getAnimationStyle(0.1, 'left')}>
            <div className="relative mx-auto max-w-md">
              <div className="aspect-square w-full bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <ImageOptimized 
                  src="/lovable-uploads/90ffa1ad-1f42-465a-b17e-61918ab82862.png" 
                  alt="Heber Zadkiel García Pérez - Fundador de HABY" 
                  className="w-full h-full object-cover"
                  aspectRatio="square"
                  lazy={!isMobile}
                />
              </div>
              <div 
                className="absolute -bottom-5 -right-5 bg-white p-4 shadow-lg rounded-lg max-w-[250px]"
                style={getAnimationStyle(0.3)}
              >
                <p className="text-haby-primary font-medium">Fundador de HABY</p>
                <p className="text-gray-600 text-sm mt-1">Visionario detrás de "HABY OPEN THE DOORS"</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6" style={getAnimationStyle(0.2, 'right')}>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold">
              Sobre Nosotros
            </span>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600">
              El concepto <span className="text-gradient-primary">HABY OPEN THE DOORS</span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-medium">
              En HABY nos especializamos en el desarrollo de soluciones web innovadoras que resuelven problemas cotidianos. 
              Nuestra misión es ayudar a nuestros clientes a optimizar su tiempo, eliminando tareas repetitivas 
              y permitiéndoles enfocarse en lo que realmente importa.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-medium">
              Nuestro fundador, Heber Zadkiel García Pérez, creó HABY con una visión clara: abrir puertas 
              a nuevas posibilidades mediante el desarrollo web personalizado y centrado en soluciones prácticas.
            </p>
            
            <div>
              <Link to="/sobre-nosotros" className="inline-flex items-center text-haby-primary hover:text-haby-secondary font-medium group transition-all duration-300">
                Conoce más sobre HABY 
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
