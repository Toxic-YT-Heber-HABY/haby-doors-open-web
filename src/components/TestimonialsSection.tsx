
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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background with gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/40 via-white to-pink-50/40" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold mb-4"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
          >
            Testimonios
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 mb-3 sm:mb-4 md:mb-6">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4 font-medium">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
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
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <motion.div
                    className="h-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.03,
                      transition: { type: "spring", stiffness: 400, damping: 25 }
                    }}
                  >
                    <div className="relative h-full bg-white/90 backdrop-blur-sm border border-purple-100/50 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                      {/* Gradient overlay animado */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      
                      <div className="relative z-10">
                        <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                          <motion.div 
                            className="relative"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.author}
                              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover ring-2 ring-purple-200 transition-all duration-300"
                              loading="lazy"
                            />
                            <motion.div 
                              className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <Quote className="w-3 h-3 text-white" />
                            </motion.div>
                          </motion.div>
                          <div className="flex-1">
                            <h4 className="font-bold text-base sm:text-lg text-gray-900">
                              {testimonial.author}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600 font-medium">
                              {testimonial.position}
                            </p>
                            <div className="flex gap-0.5 sm:gap-1 mt-1 sm:mt-2">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 italic leading-relaxed">
                          "{testimonial.content}"
                        </p>
                      </div>
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
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">¿Listo para unirte a nuestros clientes satisfechos?</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">Descubre cómo podemos ayudarte a optimizar tu tiempo y resolver tus desafíos tecnológicos.</p>
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
