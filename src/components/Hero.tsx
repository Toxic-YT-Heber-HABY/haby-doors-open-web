
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-haby-dark via-haby-secondary to-haby-primary text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              HABY <span className="text-haby-accent">OPEN</span> THE <span className="text-haby-accent">DOORS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Soluciones web innovadoras que resuelven problemas cotidianos y optimizan tu tiempo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contacto" className="btn-primary bg-haby-accent hover:bg-opacity-90 text-center">
                Contáctanos ahora
              </Link>
              <Link to="/servicios" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:bg-opacity-10 flex items-center justify-center">
                Nuestros servicios <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Círculo decorativo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-haby-accent to-haby-primary opacity-20 animate-pulse"></div>
              
              {/* Imagen o ilustración */}
              <div className="absolute inset-8 flex items-center justify-center">
                <div className="text-8xl font-bold opacity-90">HABY</div>
              </div>
              
              {/* Texto flotante "Open the doors" */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-haby-accent px-6 py-2 rounded-full text-white font-bold">
                OPEN THE DOORS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
