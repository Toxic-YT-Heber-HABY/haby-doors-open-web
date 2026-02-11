import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    content: "HABY transformó por completo la forma en que gestionamos nuestras tareas diarias. Su solución web personalizada nos ha ahorrado horas de trabajo cada semana.",
    author: "María González",
    position: "Gerente de Operaciones",
    company: "MG Consultores",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b182?w=150&h=150&fit=crop&crop=face"
  },
  {
    content: "El equipo de HABY entendió exactamente nuestro problema y creó una solución que superó nuestras expectativas. Su enfoque en la eficiencia es excepcional.",
    author: "Carlos Mendoza",
    position: "Director de Proyectos",
    company: "Innovatech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    content: "Gracias a la plataforma que HABY desarrolló, hemos podido automatizar procesos que antes nos tomaban días. La inversión valió completamente la pena.",
    author: "Laura Sánchez",
    position: "Empresaria",
    company: "LS Creaciones",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    content: "La atención al detalle y el soporte post-lanzamiento de HABY es excepcional. Nos da mucha confianza en nuestra asociación a largo plazo.",
    author: "Roberto Jiménez",
    position: "CEO",
    company: "TechStart Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    content: "Implementamos tres proyectos con HABY y todos han sido exitosos. Su capacidad para traducir necesidades en soluciones funcionales es impresionante.",
    author: "Ana Patricia Ruiz",
    position: "Directora de IT",
    company: "Corporativo Ruiz",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-[hsl(240,20%,97%)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase text-[hsl(250,70%,60%)] bg-[hsl(250,70%,60%/0.08)] border border-[hsl(250,70%,60%/0.15)] mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros{' '}
            <span className="bg-gradient-to-r from-[hsl(250,70%,55%)] to-[hsl(280,80%,60%)] bg-clip-text text-transparent">
              clientes
            </span>
          </h2>
          <p className="text-gray-500 text-lg">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="h-full bg-white rounded-2xl p-6 border border-gray-100 hover:border-[hsl(250,70%,60%/0.2)] hover:shadow-[0_8px_30px_-10px_hsl(250,50%,40%/0.1)] transition-all duration-500">
                    <Quote className="w-8 h-8 text-[hsl(250,70%,60%/0.15)] mb-4" />
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      "{t.content}"
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                      <img
                        src={t.image}
                        alt={t.author}
                        className="w-10 h-10 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 truncate">{t.author}</p>
                        <p className="text-xs text-gray-400 truncate">{t.position}, {t.company}</p>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900" />
            <CarouselNext className="hidden md:flex -right-12 bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900" />
          </Carousel>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="inline-block bg-gradient-to-r from-[hsl(250,70%,55%)] to-[hsl(280,80%,55%)] rounded-2xl p-8 max-w-xl">
            <h3 className="text-xl font-bold text-white mb-2">¿Listo para unirte?</h3>
            <p className="text-white/70 text-sm mb-6">Descubre cómo podemos ayudarte a resolver tus desafíos tecnológicos.</p>
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300"
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
