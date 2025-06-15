
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Variantes de animación para entrada más dinámica
const heroVariants = {
  hidden: { opacity: 0, y: 54, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, delay: 0.15, ease: "easeOut" } }
};

const ctaVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, delay: 0.32, ease: "easeOut" } }
};

const Hero = () => {
  return (
    <section className="relative w-full min-h-[540px] md:min-h-[650px] bg-gradient-to-br from-haby-primary/20 via-haby-light/40 to-white flex items-center justify-center py-16 md:py-28 overflow-hidden">
      {/* === ELEMENTOS DECORATIVOS ANIMADOS NUEVOS === */}
      {/* Gradient floating balls */}
      <motion.div
        aria-hidden
        className="absolute w-[330px] h-[330px] -left-24 -top-20 bg-gradient-to-br from-haby-primary via-haby-accent to-transparent opacity-20 rounded-full blur-3xl shadow-2xl pointer-events-none z-0"
        initial={{ scale: 0.8, opacity: 0.05 }}
        animate={{ scale: [0.8, 1.19, 1], opacity: [0.05, 0.2, 0.14, 0.17] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        aria-hidden
        className="absolute w-[390px] h-[390px] right-0 -top-28 bg-gradient-to-tr from-haby-accent via-haby-light to-transparent opacity-25 rounded-full blur-2xl pointer-events-none z-0"
        initial={{ scale: 0.7, opacity: 0.05 }}
        animate={{ scale: [0.7, 1.15, 1], opacity: [0.08, 0.22, 0.12, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "anticipate", delay: 2.7 }}
      ></motion.div>
      {/* Light animated shimmer */}
      <motion.div
        aria-hidden
        className="absolute w-[270px] h-[180px] bottom-[9%] left-[8%] bg-gradient-to-br from-white/80 via-haby-light/30 to-transparent opacity-40 rounded-full blur-3xl z-10 pointer-events-none"
        initial={{ opacity: 0.1, scale: 1 }}
        animate={{ opacity: [0.14, 0.39, 0.18, 0.23], scale: [1, 1.2, 0.98] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
      />
      <motion.div
        aria-hidden
        className="absolute w-[210px] h-[210px] right-[14%] bottom-[6%] bg-gradient-to-tl from-haby-primary/70 via-haby-light/20 to-white opacity-25 rounded-full blur-2xl z-10 pointer-events-none"
        initial={{ scale: 0.88, rotate: 0 }}
        animate={{ scale: [1, 1.09, 0.96, 1.05], rotate: [0, 12, -8, 0] }}
        transition={{ duration: 19, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* === CONTENIDO HERO PRINCIPAL === */}
      <div className="container relative z-20 flex flex-col items-center gap-7 md:gap-12 text-center px-2">
        {/* Título destacado e inspiración */}
        <motion.h1
          className="text-4xl xs:text-5xl md:text-6xl font-heading font-black leading-tight md:leading-tight mb-3 drop-shadow-lg text-gradient-primary"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          HAZ<span className="text-haby-accent font-extrabold drop-shadow"> CRECER</span><br className="hidden md:block" /> TU MUNDO DIGITAL CON <span className="font-extrabold">HABY</span>
        </motion.h1>
        {/* Subtítulo animado */}
        <motion.p
          className="text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto mb-5 md:mb-8 drop-shadow-sm"
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          Soluciones tecnológicas innovadoras para tu día a día, empresa o proyecto social.<br />
          Confía en <span className="text-haby-primary font-semibold underline underline-offset-2">expertos</span> para potenciar tu presencia digital. 
        </motion.p>
        {/* Botón principal con efecto animado/glow */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
        >
          <Link
            to="/contacto"
            className="btn-primary text-lg md:text-xl px-10 py-5 rounded-lg transition-all duration-200 shadow-xl animate-scale-in group relative overflow-hidden
            before:absolute before:inset-0 before:bg-haby-accent/20 before:blur-lg before:opacity-0 group-hover:before:opacity-100 before:transition-all before:duration-500"
            tabIndex={0}
          >
            <span className="relative z-10">¡Contáctanos!</span>
          </Link>
        </motion.div>
        {/* Imagen con animación vibrante y efecto 3D hover */}
        <motion.div
          className="flex justify-center mt-9"
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: "easeOut" }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=880&q=80"
            alt="Equipo creativo trabajando juntos"
            className="rounded-2xl shadow-2xl border-4 border-white max-w-full h-64 xs:h-72 md:h-96 object-cover will-change-transform transition-all duration-300 cursor-pointer"
            loading="lazy"
            decoding="async"
            whileHover={{
              scale: 1.06,
              boxShadow: "0 14px 48px 0 rgba(87,47,147,0.18), 0 1.5px 10px 1px #D946EF44",
              filter: "brightness(1.08) saturate(1.08)"
            }}
            whileTap={{ scale: 0.98 }}
            drag="x"
            dragConstraints={{ left: -8, right: 8 }}
            dragElastic={0.1}
            transition={{ type: "spring", stiffness: 230, damping: 19 }}
          />
        </motion.div>
        {/* Franja luminosa animada en el fondo */}
        <motion.div
          aria-hidden
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[66vw] h-10 bg-gradient-to-r from-haby-accent via-haby-light to-haby-primary opacity-40 blur-lg rounded-full z-10"
          initial={{ opacity: 0.13, scaleX: 0.92 }}
          animate={{ opacity: [0.13, 0.32, 0.18], scaleX: [0.92, 1.03, 1] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />
      </div>
    </section>
  );
};

export default Hero;

