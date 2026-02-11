import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDeviceCapabilities } from '@/hooks/useDeviceCapabilities';

const Hero = () => {
  const capabilities = useDeviceCapabilities();
  const isMobile = capabilities.isMobile;

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[hsl(250,100%,4%)]">
      {/* Ambient light effects */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-[20%] left-[15%] w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, hsl(250 70% 50% / 0.15), transparent 70%)' }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, hsl(280 80% 50% / 0.12), transparent 70%)' }}
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
        </div>
      )}

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-widest uppercase border border-white/10 text-white/60 bg-white/[0.03]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Disponible para proyectos
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black leading-[0.9] tracking-[-0.03em] mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-white">HABY</span>
            <br />
            <span className="bg-gradient-to-r from-[hsl(250,70%,65%)] via-[hsl(280,80%,65%)] to-[hsl(320,80%,65%)] bg-clip-text text-transparent">
              OPEN THE
            </span>
            <br />
            <span className="text-white/90">DOORS</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Diseño y desarrollo de experiencias digitales que transforman ideas en realidad.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link
              to="/contacto"
              className="group relative px-8 py-4 rounded-full font-semibold text-sm tracking-wide overflow-hidden bg-white text-[hsl(250,100%,4%)] hover:shadow-[0_0_40px_hsl(250,70%,60%/0.3)] transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-2">
                Iniciar proyecto
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
            <Link
              to="/portafolio"
              className="px-8 py-4 rounded-full font-semibold text-sm tracking-wide border border-white/15 text-white/70 hover:text-white hover:border-white/30 hover:bg-white/[0.05] transition-all duration-300"
            >
              Ver portafolio
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {[
              { value: "100+", label: "Proyectos" },
              { value: "24/7", label: "Soporte" },
              { value: "99%", label: "Satisfacción" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/30 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
};

export default Hero;
