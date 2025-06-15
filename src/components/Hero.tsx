
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[490px] bg-gradient-to-br from-haby-primary/20 via-haby-light/50 to-white flex items-center justify-center py-16 md:py-24 overflow-hidden">
      {/* Elementos decorativos animados */}
      <motion.div
        aria-hidden="true"
        className="absolute w-[400px] h-[400px] left-0 top-0 bg-gradient-to-br from-haby-primary via-haby-accent to-transparent opacity-15 rounded-full blur-3xl pointer-events-none"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.15, 1], opacity: [0, 0.12, 0.15, 0.12] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        aria-hidden="true"
        className="absolute w-[340px] h-[340px] bottom-0 right-0 bg-gradient-to-tl from-haby-light via-haby-accent to-transparent opacity-20 rounded-full blur-2xl pointer-events-none"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: [0.9, 1.15, 1], opacity: [0, 0.18, 0.2, 0.18] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 3 }}
      ></motion.div>
      {/* Contenido principal */}
      <div className="container relative z-10 flex flex-col items-center gap-8 text-center px-2">
        {/* Animación de entrada para h1 */}
        <motion.h1
          className="text-4xl md:text-5xl font-heading font-bold text-haby-primary drop-shadow-sm leading-tight md:leading-tight mb-3"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="block text-gradient-primary">
            Abre nuevas puertas digitales con <span className="font-bold">HABY</span>
          </span>
        </motion.h1>
        {/* Animación de entrada para subtítulo */}
        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-xl mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: "easeOut" }}
        >
          Creamos soluciones tecnológicas para tu día a día, tu empresa o proyecto social. Confía en expertos 🤝 para potenciar tu presencia digital.
        </motion.p>
        {/* Botón principal con animación y efecto hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.37 }}
        >
          <Link
            to="/contacto"
            className="btn-primary text-base md:text-lg px-8 py-4 shadow-lg animate-fade-in transition-transform will-change-transform hover:scale-105 active:scale-95"
          >
            ¡Contáctanos!
          </Link>
        </motion.div>
        {/* Imagen principal con efecto flotante y hover */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=880&q=80"
            alt="Equipo creativo trabajando juntos"
            className="rounded-xl shadow-xl border-4 border-white max-w-full h-64 object-cover will-change-transform cursor-pointer"
            loading="lazy"
            decoding="async"
            whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(87, 47, 147, 0.25)' }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
            drag="x"
            dragConstraints={{ left: -10, right: 10 }}
            dragElastic={0.09}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
