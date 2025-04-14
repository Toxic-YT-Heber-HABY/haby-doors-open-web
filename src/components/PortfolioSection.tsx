
import { Link } from 'react-router-dom';

// Estos son proyectos de ejemplo. Habría que reemplazarlos con los proyectos reales de HABY
const projects = [
  {
    title: "Gestor de Tareas Inteligente",
    description: "Aplicación web que ayuda a organizar y priorizar tareas diarias, optimizando el flujo de trabajo.",
    image: "bg-haby-light", // Placeholder - imagen real necesaria
    category: "Productividad"
  },
  {
    title: "Sistema de Reservas Online",
    description: "Plataforma que automatiza el proceso de reservas y gestión de citas para pequeños negocios.",
    image: "bg-haby-light", // Placeholder - imagen real necesaria
    category: "Gestión"
  },
  {
    title: "E-commerce Personalizado",
    description: "Tienda online con funcionalidades a medida para un cliente del sector retail.",
    image: "bg-haby-light", // Placeholder - imagen real necesaria
    category: "E-commerce"
  }
];

const PortfolioSection = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Nuestro Portafolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Proyectos que abren puertas
          </h2>
          <p className="text-gray-600">
            Descubre cómo hemos ayudado a otros clientes a solucionar problemas cotidianos 
            y optimizar su tiempo a través de soluciones web personalizadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className={`aspect-video ${project.image} flex items-center justify-center`}>
                <span className="text-haby-primary font-medium">Imagen del proyecto</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-haby-primary font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-haby-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link to="/portafolio" className="text-haby-primary hover:text-haby-secondary font-medium">
                  Ver detalles
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/portafolio" className="btn-primary">
            Ver todos los proyectos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
