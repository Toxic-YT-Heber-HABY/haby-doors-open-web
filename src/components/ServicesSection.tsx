
import { Link } from 'react-router-dom';
import { Code, Lightbulb, Clock, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-10 w-10 text-haby-accent" />,
    title: "Desarrollo Web",
    description: "Creamos páginas web y aplicaciones a medida, diseñadas meticulosamente para resolver problemas específicos."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-haby-accent" />,
    title: "Soluciones Personalizadas",
    description: "Diseñamos soluciones a medida para problemas específicos, incluso cuando no tienes claro qué necesitas exactamente."
  },
  {
    icon: <Clock className="h-10 w-10 text-haby-accent" />,
    title: "Optimización de Tiempo",
    description: "Nuestro enfoque principal es ayudarte a trabajar de forma más eficiente, eliminando tareas repetitivas."
  }
];

const ServicesSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Nuestros Servicios
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            ¿Cómo podemos ayudarte?
          </h2>
          <p className="text-gray-600">
            En HABY nos especializamos en abrir puertas a través de soluciones web 
            innovadoras que transforman la manera en que gestionas tu tiempo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link to="/servicios" className="inline-flex items-center text-haby-primary hover:text-haby-secondary font-medium">
                Saber más <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/servicios" className="btn-primary">
            Ver todos nuestros servicios
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
