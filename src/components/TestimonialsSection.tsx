
import { Star, Quote, User, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Testimonios expandidos para el carrusel
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
  },
  {
    content: "La atención al detalle y el soporte post-lanzamiento de HABY es excepcional. Han estado disponibles para cualquier ajuste y mejora, lo que nos da mucha confianza en nuestra asociación a largo plazo.",
    author: "Roberto Jiménez",
    position: "CEO",
    company: "TechStart Solutions",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    content: "Implementamos tres proyectos diferentes con HABY y todos han sido exitosos. Su capacidad para entender nuestras necesidades específicas y traducirlas en soluciones funcionales es impresionante.",
    author: "Ana Patricia Ruiz",
    position: "Directora de IT",
    company: "Corporativo Ruiz",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
  },
  {
    content: "El tiempo de desarrollo fue increíblemente rápido sin comprometer la calidad. HABY cumplió todos los plazos y entregó una solución que superó nuestras expectativas iniciales.",
    author: "Diego Morales",
    position: "Gerente General",
    company: "Morales & Asociados",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
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
          className="relative max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <motion.div
                    className="h-full"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="relative h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 lg:p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300">
                      {/* Quote icon */}
                      <div className="absolute top-6 right-6 opacity-20 hover:opacity-40 transition-opacity">
                        <Quote className="w-8 h-8 text-haby-accent" />
                      </div>

                      {/* Rating */}
                      <div className="flex mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-gray-200 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg italic min-h-[100px] sm:min-h-[120px]">
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
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-haby-accent/20 to-purple-400/20 hover:opacity-0 transition-opacity"></div>
                        </div>
                        <div>
                          <p className="font-semibold text-white text-base sm:text-lg">{testimonial.author}</p>
                          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                            <User className="w-3 h-3" />
                            <span className="truncate">{testimonial.position}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs sm:text-sm text-haby-accent">
                            <Building className="w-3 h-3" />
                            <span className="truncate">{testimonial.company}</span>
                          </div>
                        </div>
                      </div>

                      {/* Decorative gradient */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-haby-accent via-purple-400 to-pink-400 rounded-b-2xl opacity-50 hover:opacity-100 transition-opacity"></div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white/10 border-white/20 text-white hover:bg-white/20" />
            <CarouselNext className="hidden md:flex -right-12 bg-white/10 border-white/20 text-white hover:bg-white/20" />
          </Carousel>

          {/* Indicadores de puntos para móvil */}
          <div className="flex justify-center mt-8 gap-2 md:hidden">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-white/30"
              />
            ))}
          </div>
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
