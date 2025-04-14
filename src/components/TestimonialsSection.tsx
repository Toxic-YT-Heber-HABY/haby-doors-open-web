
import { Star } from 'lucide-react';

// Estos son testimonios de ejemplo. Reemplazar con testimonios reales cuando estén disponibles
const testimonials = [
  {
    content: "HABY transformó por completo la forma en que gestionamos nuestras tareas diarias. Su solución web personalizada nos ha ahorrado horas de trabajo cada semana.",
    author: "María González",
    position: "Gerente de Operaciones",
    company: "MG Consultores",
    rating: 5
  },
  {
    content: "El equipo de HABY entendió exactamente nuestro problema y creó una solución que superó nuestras expectativas. Su enfoque en la eficiencia y la usabilidad es excepcional.",
    author: "Carlos Mendoza",
    position: "Director de Proyectos",
    company: "Innovatech",
    rating: 5
  },
  {
    content: "Gracias a la plataforma web que HABY desarrolló para nosotros, hemos podido automatizar procesos que antes nos tomaban días. La inversión valió completamente la pena.",
    author: "Laura Sánchez",
    position: "Empresaria",
    company: "LS Creaciones",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section bg-haby-dark text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-white bg-opacity-10 text-haby-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            Testimonios
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-300">
            Descubre cómo hemos ayudado a otros clientes a optimizar su tiempo 
            y resolver problemas cotidianos a través de nuestras soluciones web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-8 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-200 mb-6">"{testimonial.content}"</p>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.position}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
