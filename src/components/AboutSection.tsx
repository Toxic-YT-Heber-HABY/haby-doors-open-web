import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const AboutSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <ScrollReveal className="order-1 lg:order-1 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase text-primary bg-primary/8 border border-primary/15">
              Sobre Nosotros
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
              El concepto{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                HABY
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                En HABY nos especializamos en el desarrollo de soluciones web innovadoras que resuelven problemas cotidianos. 
                Nuestra misión es ayudar a nuestros clientes a optimizar su tiempo, eliminando tareas repetitivas.
              </p>
              <p>
                Nuestro fundador, Heber Zadkiel García Pérez, creó HABY con una visión clara: abrir puertas 
                a nuevas posibilidades mediante el desarrollo web personalizado.
              </p>
            </div>

            <Link
              to="/sobre-nosotros"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300"
            >
              Conoce más sobre HABY
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
