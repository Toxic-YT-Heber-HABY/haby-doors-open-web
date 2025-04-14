
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "HABYKeys",
    description: "Teclado virtual avanzado diseñado para programadores, contadores y otros profesionales, con una interfaz intuitiva y personalizable que mejora la productividad.",
    image: "bg-haby-light",
    category: "Productividad",
    url: "https://haby-advanced-virtual-keyboard-help.vercel.app",
    client: "Perla Itzel Rosales Flores"
  },
  {
    title: "HABY Score Tracker",
    description: "Herramienta educativa interactiva que ayuda a los estudiantes a comprender y calcular sus calificaciones usando regla de tres, con exportación de resultados en múltiples formatos.",
    image: "bg-haby-light",
    category: "Educación",
    url: "https://prep-score-tracker.lovable.app",
    client: "Prof. Martha Norma Ramírez Albarrán"
  },
  {
    title: "HABY CLASS",
    description: "Plataforma educativa inspirada en Google Classroom que facilita la gestión de clases y mejora la comunicación entre profesores y estudiantes.",
    image: "bg-haby-light",
    category: "Educación",
    client: "Cecytem Ixtapaluca II",
    url: "#"
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
            Descubre cómo hemos ayudado a nuestros clientes a solucionar problemas cotidianos 
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
                <span className="text-haby-primary font-medium">{project.title}</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-haby-primary font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-haby-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <div className="text-sm text-gray-500 mb-4">
                  Cliente: {project.client}
                </div>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-haby-primary hover:text-haby-secondary font-medium inline-flex items-center"
                >
                  Ver proyecto <span className="ml-2">→</span>
                </a>
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

