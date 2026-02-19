import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className="mb-10 animate-hero-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-widest uppercase border border-primary-foreground/10 text-primary-foreground/70 bg-primary-foreground/[0.03]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Disponible para proyectos
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-display font-bold leading-[0.9] tracking-tight mb-8 animate-hero-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-primary-foreground">HABY</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              OPEN THE
            </span>
            <br />
            <span className="text-primary-foreground/80">DOORS</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl text-primary-foreground/70 max-w-xl mx-auto mb-12 font-light animate-hero-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            Diseño y desarrollo de experiencias digitales que transforman ideas en realidad.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 items-center justify-center animate-hero-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <Link
              to="/contacto"
              className="group px-8 py-4 rounded-full font-semibold text-sm bg-primary-foreground text-brand-dark hover:shadow-[0_0_40px_hsl(var(--brand)/0.3)] transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Iniciar proyecto
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              to="/portafolio"
              className="px-8 py-4 rounded-full font-semibold text-sm border border-primary-foreground/15 text-primary-foreground/60 hover:text-primary-foreground hover:border-primary-foreground/30 transition-all duration-300"
            >
              Ver portafolio
            </Link>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-24 animate-hero-fade-in"
            style={{ animationDelay: '0.9s' }}
          >
            {[
              { value: "100+", label: "Proyectos" },
              { value: "24/7", label: "Soporte" },
              { value: "99%", label: "Satisfacción" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-1">{stat.value}</div>
                <div className="text-[11px] text-primary-foreground/50 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/20 hover:text-primary-foreground/50 transition-colors cursor-pointer animate-bounce-slow"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;
