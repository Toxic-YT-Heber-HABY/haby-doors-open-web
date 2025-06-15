
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-haby-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div>
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/f3e5eff1-a976-44c3-97a2-1e1e73c75a36.png" 
                alt="HABY Logo" 
                className="h-10 mr-2 invert" 
              />
              <span className="text-2xl font-heading font-bold text-white">HABY</span>
            </Link>
            <p className="mt-4 text-gray-300">
              HABY Open The Doors: Desarrollamos soluciones web personalizadas que resuelven problemas cotidianos y optimizan tu tiempo.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://www.facebook.com/zadkiel.garcia.31/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-haby-accent transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/habydoors/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-haby-accent transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/@HABYOpenDoors?themeRefresh=1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-haby-accent transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="https://x.com/Haby_Open_Doors" target="_blank" rel="noopener noreferrer" className="text-white hover:text-haby-accent transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="text-gray-300 hover:text-white transition-colors">Sobre Nosotros</Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-300 hover:text-white transition-colors">Servicios</Link>
              </li>
              <li>
                <Link to="/portafolio" className="text-gray-300 hover:text-white transition-colors">Portafolio</Link>
              </li>
              <li>
                <Link to="/precios" className="text-gray-300 hover:text-white transition-colors">Precios</Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-white transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-haby-accent" />
                <a href="https://wa.me/5653681237" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  56 5368 1237
                </a>
              </div>
              <a href="https://wa.me/5653681237" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md text-white font-medium transition-colors">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                    <path d="M14.05 6A5 5 0 0 1 18 10"></path>
                  </svg>
                  Contactar por WhatsApp
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} HABY. Todos los derechos reservados. Creado por Heber Zadkiel García Pérez.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
