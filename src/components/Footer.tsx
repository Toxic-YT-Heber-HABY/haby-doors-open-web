
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, Phone } from 'lucide-react';
import { motion } from "framer-motion";

const colVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: 0.21 + i * 0.15,
      ease: "easeOut"
    }
  })
};

const Footer = () => {
  return (
    <footer className="bg-haby-dark text-white relative overflow-hidden">
      {/* Floating bg glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-32 w-[400px] h-[400px] bg-haby-primary/30 blur-3xl rounded-full"
        initial={{ opacity: 0.09, scale: 0.8 }}
        animate={{ opacity: [0.13, 0.24, 0.17], scale: [0.8, 1.1, 1] }}
        transition={{ duration: 17, repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Logo y descripción */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={colVariants}
            className="mb-8 md:mb-0"
          >
            <Link to="/" className="flex items-center group">
              <motion.img 
                src="/lovable-uploads/f3e5eff1-a976-44c3-97a2-1e1e73c75a36.png" 
                alt="HABY Logo" 
                className="h-10 mr-2 invert drop-shadow group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.11, rotate: 2 }}
              />
              <span className="text-2xl font-heading font-bold text-white drop-shadow tracking-tight group-hover:text-haby-accent transition-colors duration-200">HABY</span>
            </Link>
            <p className="mt-4 text-gray-300">
              HABY Open The Doors: Desarrollamos soluciones web personalizadas que resuelven problemas cotidianos y optimizan tu tiempo.
            </p>
            <div className="mt-7 flex space-x-4">
              <motion.a href="https://www.facebook.com/zadkiel.garcia.31/" target="_blank" rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.19, color: "#D946EF" }}
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </motion.a>
              <motion.a href="https://www.instagram.com/habydoors/" target="_blank" rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.19, color: "#D946EF" }}
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </motion.a>
              <motion.a href="https://www.youtube.com/@HABYOpenDoors?themeRefresh=1" target="_blank" rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.19, color: "#D946EF" }}
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </motion.a>
              <motion.a href="https://x.com/Haby_Open_Doors" target="_blank" rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.19, color: "#D946EF" }}
                aria-label="X"
              >
                <Twitter className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Enlaces rápidos */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={colVariants}
          >
            <h3 className="text-xl font-heading font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="footer-link">Inicio</Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="footer-link">Sobre Nosotros</Link>
              </li>
              <li>
                <Link to="/servicios" className="footer-link">Servicios</Link>
              </li>
              <li>
                <Link to="/portafolio" className="footer-link">Portafolio</Link>
              </li>
              <li>
                <Link to="/precios" className="footer-link">Precios</Link>
              </li>
              <li>
                <Link to="/contacto" className="footer-link">Contacto</Link>
              </li>
            </ul>
          </motion.div>

          {/* Contacto */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={colVariants}
          >
            <h3 className="text-xl font-heading font-bold mb-4">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-haby-accent" />
                <a href="https://wa.me/5653681237" target="_blank" rel="noopener noreferrer" className="footer-link inline-block">
                  56 5368 1237
                </a>
              </div>
              <a href="https://wa.me/5653681237" target="_blank" rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-green-600 hover:bg-green-700 animate-scale-in rounded-md text-white font-medium transition-colors"
                aria-label="Contactar por WhatsApp"
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
                  Contactar por WhatsApp
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 border-t border-gray-700 pt-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.44 }}
        >
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} HABY. Todos los derechos reservados. Creado por Heber Zadkiel García Pérez.
          </p>
        </motion.div>
      </div>
      <style>{`
        .footer-link {
          @apply text-gray-300 hover:text-haby-accent transition-colors duration-200 underline-offset-2 hover:underline font-medium;
        }
        .social-icon {
          @apply text-white hover:text-haby-accent transition-colors duration-200 p-2 rounded-full;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
