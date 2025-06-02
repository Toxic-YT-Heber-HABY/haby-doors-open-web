
import { Star, Quote, User, Building } from 'lucide-react';
import { motion } from 'framer-motion';

// Estos son testimonios de ejemplo. Reemplazar con testimonios reales cuando estén disponibles
const testimonials = [
  {
    content: "HABY transformó por completo la forma en que gestionamos nuestras tareas diarias. Su solución web personalizada nos ha ahorrado horas de trabajo cada semana y ha mejorado significativamente nuestra productividad.",
    author: "María González",
    position: "Gerente de Operaciones",
    company: "MG Consultores",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b182?w=150&h=150&fit=crop&crop=face"
  },
  {
    content: "El equipo de HABY entendió exactamente nuestro problema y creó una solución que superó nuestras expectativas. Su enfoque en la eficiencia y la usabilidad es excepcional. Definitivamente recomendaría sus servicios.",
    author: "Carlos Mendoza",
    position: "Director de Proyectos",
    company: "Innovatech",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    content: "Gracias a la plataforma web que HABY desarrolló para nosotros, hemos podido automatizar procesos que antes nos tomaban días. La inversión valió completamente la pena y el ROI ha sido impresionante.",
    author: "Laura Sánchez",
    position: "Empresaria",
    company: "LS Creaciones",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-haby-dark via-haby-secondary to-haby-primary text-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-haby-accent rounded-full mix-blend-screen filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-400 rounded-full mix-blend-screen filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-haby-accent px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Quote className="w-4 h-4" />
            Testimonios
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Lo que dicen nuestros{' '}
            <span className="bg-gradient-to-r from-haby-accent to-pink-300 bg-clip-text text-transparent">
              clientes
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Descubre cómo hemos ayudado a otros clientes a optimizar su tiempo 
            y resolver problemas cotidianos a través de nuestras soluciones web innovadoras.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="h-full"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 group-hover:bg-white/15 group-hover:border-white/30 transition-all duration-300">
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Quote className="w-8 h-8 text-haby-accent" />
                  </div>

                  {/* Rating */}
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-200 mb-8 leading-relaxed text-lg italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author info */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-haby-accent/20 to-purple-400/20 group-hover:opacity-0 transition-opacity"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-lg">{testimonial.author}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <User className="w-3 h-3" />
                        <span>{testimonial.position}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-haby-accent">
                        <Building className="w-3 h-3" />
                        <span>{testimonial.company}</span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-haby-accent via-purple-400 to-pink-400 rounded-b-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">¿Listo para unirte a nuestros clientes satisfechos?</h3>
            <p className="text-gray-300 mb-6">Descubre cómo podemos ayudarte a optimizar tu tiempo y resolver tus desafíos tecnológicos.</p>
            <a 
              href="/contacto" 
              className="inline-flex items-center gap-2 bg-haby-accent hover:bg-haby-accent/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contáctanos ahora
              <Star className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
