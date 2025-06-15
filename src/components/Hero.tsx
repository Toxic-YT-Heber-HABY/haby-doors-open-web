
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-haby-light/30 to-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-20 left-20 w-72 h-72 bg-haby-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-haby-accent/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto text-center relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-haby-primary/20 text-haby-primary px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span className="force-text-visible">Abrimos puertas a través de la tecnología</span>
          </div>

          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gray-800 force-text-visible">Soluciones </span>
            <span className="text-gradient-hero-safe force-text-visible">innovadoras</span>
            <br />
            <span className="text-gray-800 force-text-visible">que </span>
            <span className="text-gradient-safe force-text-visible">transforman</span>
            <br />
            <span className="text-gray-800 force-text-visible">tu </span>
            <span className="text-gradient-secondary-safe force-text-visible">tiempo</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed force-text-visible">
            En HABY nos especializamos en crear aplicaciones web personalizadas que 
            optimizan procesos y mejoran la productividad de nuestros clientes.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link 
              to="/servicios"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-haby-primary to-haby-secondary text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-haby-primary/25 transition-all duration-300 transform hover:scale-105"
            >
              <span className="force-text-visible">Explorar servicios</span>
              <Zap className="w-5 h-5" />
            </Link>
            
            <Link 
              to="/portafolio"
              className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-haby-primary text-haby-primary px-8 py-4 rounded-full font-bold hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <span className="force-text-visible">Ver proyectos</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-safe force-text-visible mb-2">15+</div>
              <div className="text-gray-600 force-text-visible">Proyectos completados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-safe force-text-visible mb-2">100%</div>
              <div className="text-gray-600 force-text-visible">Clientes satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-safe force-text-visible mb-2">24/7</div>
              <div className="text-gray-600 force-text-visible">Soporte técnico</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
