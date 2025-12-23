import { Link } from 'react-router-dom';
import { Code, Lightbulb, Clock, ArrowRight, Zap, Shield, Users } from 'lucide-react';
import { useRef, useState, useEffect, useMemo } from 'react';

const services = [
  {
    icon: <Code className="h-10 w-10 sm:h-12 sm:w-12 text-white" />,
    title: "Desarrollo Web",
    description: "Creamos páginas web y aplicaciones a medida, diseñadas meticulosamente para resolver problemas específicos con tecnología moderna.",
    features: ["React & Next.js", "Responsive Design", "SEO Optimizado"],
  },
  {
    icon: <Lightbulb className="h-10 w-10 sm:h-12 sm:w-12 text-white" />,
    title: "Soluciones Personalizadas",
    description: "Diseñamos soluciones a medida para problemas específicos, incluso cuando no tienes claro qué necesitas exactamente.",
    features: ["Consultoría Gratuita", "Análisis Profundo", "Propuesta Única"],
  },
  {
    icon: <Clock className="h-10 w-10 sm:h-12 sm:w-12 text-white" />,
    title: "Optimización de Tiempo",
    description: "Nuestro enfoque principal es ayudarte a trabajar de forma más eficiente, eliminando tareas repetitivas y automatizando procesos.",
    features: ["Automatización", "Integración API", "Workflow Mejorado"],
  }
];

const additionalFeatures = [
  { icon: <Zap className="h-5 w-5 sm:h-6 sm:w-6" />, text: "Entrega Rápida" },
  { icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />, text: "Seguridad Garantizada" },
  { icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />, text: "Soporte 24/7" }
];

const ServicesSection = () => {
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
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + index * 0.15}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + index * 0.15}s`,
    willChange: isVisible ? 'auto' : 'opacity, transform',
  }), [isVisible]);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-white to-pink-50/50" />
      {/* Orbes decorativos solo en desktop */}
      <div className="hidden md:block absolute top-0 left-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl" />
      <div className="hidden md:block absolute bottom-0 right-1/4 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            ¿Qué ofrecemos?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 mb-3 sm:mb-4 md:mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4 font-medium">
            Soluciones completas para llevar tu negocio al siguiente nivel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20">
          {services.map((service, index) => (
            <div key={index} className="group relative" style={getCardStyle(index)}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
              
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100/50 overflow-hidden hover:-translate-y-2">
                <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl inline-block group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-600 font-medium">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-2 sm:mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/servicios" 
                  className="inline-flex items-center w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg justify-center transition-all duration-300 hover:scale-105"
                >
                  Más información
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="relative bg-gradient-to-br from-haby-dark via-haby-secondary to-haby-primary rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 text-white shadow-2xl overflow-hidden"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
          }}
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl"></div>
          </div>
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black mb-4 sm:mb-6 leading-tight">
                ¿Por qué elegir HABY?
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 lg:mb-10 font-light leading-relaxed">
                Nos comprometemos a entregar soluciones que realmente marquen la diferencia en tu día a día.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {additionalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 text-white/95 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20">
                    {feature.icon}
                    <span className="text-sm sm:text-base font-semibold">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-right mt-6 lg:mt-0">
              <Link 
                to="/servicios" 
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-haby-primary rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-2xl w-full sm:w-auto"
              >
                Ver todos los servicios
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
