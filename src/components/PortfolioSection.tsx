import { Link } from 'react-router-dom';
import { ExternalLink, Star, Calendar, User } from 'lucide-react';
import { useRef, useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import ImageZoom from './ImageZoom';
import ValidatedExternalLink from './ValidatedExternalLink';
import { getFeaturedProjects } from '@/data/projectsData';

const projects = getFeaturedProjects();

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Batch the state update with requestAnimationFrame to avoid forced reflow
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Memoize card styles to avoid recalculation on every render
  const getCardStyle = useMemo(() => (index: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.98)',
    transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + index * 0.15}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + index * 0.15}s`,
    willChange: isVisible ? 'auto' : 'opacity, transform',
  }), [isVisible]);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/30 via-white to-purple-50/30" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-haby-primary to-haby-accent text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4" />
            Nuestro Portafolio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
            Proyectos que{' '}
            <span className="bg-gradient-to-r from-haby-primary to-haby-accent bg-clip-text text-transparent">
              abren puertas
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Descubre cómo hemos ayudado a nuestros clientes a solucionar problemas cotidianos 
            y optimizar su tiempo a través de soluciones web personalizadas e innovadoras.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {projects.map((project, index) => (
            <div key={project.id} style={getCardStyle(index)}>
              <div className="h-full group cursor-pointer transition-transform duration-300 hover:-translate-y-3">
                <Card className="h-full overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:bg-white">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <ImageZoom 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-haby-accent to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        ⭐ Destacado
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-haby-primary bg-haby-light px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        {project.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-haby-primary transition-colors leading-tight">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pb-4 flex-grow">
                    <CardDescription className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                      {project.description}
                    </CardDescription>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                      <User className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="font-medium">Cliente:</span> 
                      <span className="truncate">{project.client || 'Proyecto Personal'}</span>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 border-t border-gray-100 gap-3 sm:gap-0">
                    {project.url ? (
                      <ValidatedExternalLink
                        url={project.url}
                        className="text-haby-primary hover:text-haby-secondary font-semibold transition-all duration-300 group-hover:translate-x-1 text-sm sm:text-base"
                      >
                        Ver proyecto
                      </ValidatedExternalLink>
                    ) : (
                      <span className="text-gray-400 text-sm sm:text-base">
                        Proyecto privado
                      </span>
                    )}

                    <Link 
                      to={`/portafolio/${project.id}`}
                      className="text-xs sm:text-sm text-gray-500 hover:text-haby-primary transition-colors font-medium"
                    >
                      Más detalles →
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="text-center mt-12 sm:mt-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.6s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.6s'
          }}
        >
          <Link 
            to="/portafolio" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-haby-primary to-haby-secondary text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-haby-primary/25 transition-all duration-300 transform hover:scale-105"
          >
            Ver todos los proyectos
            <Star className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
