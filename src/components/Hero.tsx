
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[490px] bg-gradient-to-br from-haby-primary/20 via-haby-light/50 to-white flex items-center justify-center py-16 md:py-24 overflow-hidden">
      <div className="container relative z-10 flex flex-col items-center gap-8 text-center px-2">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-haby-primary drop-shadow-sm leading-tight md:leading-tight mb-3 animate-fade-in">
          <span className="block text-gradient-primary">
            Abre nuevas puertas digitales con <span className="font-bold">HABY</span>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-6 animate-fade-in" style={{animationDelay: '.2s'}}>
          Creamos soluciones tecnológicas para tu día a día, tu empresa o proyecto social. Confía en expertos 🤝 para potenciar tu presencia digital.
        </p>
        <Link
          to="/contacto"
          className="btn-primary text-base md:text-lg px-8 py-4 shadow-lg animate-scale-in"
          style={{animationDelay: '.4s'}}
        >
          ¡Contáctanos!
        </Link>
        <div className="flex justify-center mt-8">
          <img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=880&q=80"
            alt="Equipo creativo trabajando juntos"
            className="rounded-xl shadow-xl border-4 border-white max-w-full h-64 object-cover animate-fade-in"
            style={{animationDelay: '.6s'}}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      {/* Gradiente decorativo */}
      <div
        aria-hidden="true"
        className="absolute w-[520px] h-[520px] -top-24 -left-32 hidden md:block bg-gradient-to-br from-haby-primary via-haby-accent to-transparent opacity-25 rounded-full blur-3xl pointer-events-none"
      ></div>
      <div
        aria-hidden="true"
        className="absolute w-[400px] h-[400px] -bottom-24 -right-12 bg-gradient-to-tl from-haby-light via-haby-accent to-transparent opacity-15 rounded-full blur-3xl pointer-events-none"
      ></div>
    </section>
  );
};

export default Hero;

