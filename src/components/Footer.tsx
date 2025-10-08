import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, Phone } from 'lucide-react';
import FooterQuickLinks from "./FooterQuickLinks";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-haby-dark via-haby-secondary to-haby-dark text-white relative overflow-hidden">
      {/* Modern decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-haby-accent rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-haby-primary rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Premium Logo Section */}
          <div>
            <Link to="/" className="flex items-center group mb-4 sm:mb-6">
              <img 
                src="/lovable-uploads/f3e5eff1-a976-44c3-97a2-1e1e73c75a36.png" 
                alt="HABY Logo" 
                className="h-10 sm:h-12 mr-2 sm:mr-3 brightness-0 invert group-hover:scale-110 transition-transform duration-300" 
              />
              <span className="text-2xl sm:text-3xl font-display font-black bg-gradient-to-r from-white to-haby-accent bg-clip-text text-transparent">HABY</span>
            </Link>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-light">
              Desarrollamos soluciones web personalizadas que resuelven problemas cotidianos y optimizan tu tiempo con tecnología de vanguardia.
            </p>
            <div className="mt-6 sm:mt-8 flex space-x-3 sm:space-x-4">
              <a href="https://www.facebook.com/zadkiel.garcia.31/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-haby-accent hover:scale-110 transition-all duration-300 border border-white/20">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://www.instagram.com/habydoors/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-haby-accent hover:scale-110 transition-all duration-300 border border-white/20">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://www.youtube.com/@HABYOpenDoors?themeRefresh=1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-haby-accent hover:scale-110 transition-all duration-300 border border-white/20">
                <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://x.com/Haby_Open_Doors" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-haby-accent hover:scale-110 transition-all duration-300 border border-white/20">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Modern Quick Links */}
          <FooterQuickLinks />

          {/* Premium Contact Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-display font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-haby-accent bg-clip-text text-transparent">Contacto</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3 text-gray-200 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-haby-accent transition-all duration-300 border border-white/20">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <a href="https://wa.me/5653681237" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-medium hover:text-haby-accent transition-colors">
                  56 5368 1237
                </a>
              </div>
              <a href="https://wa.me/5653681237" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center px-5 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 rounded-xl sm:rounded-2xl text-white font-bold text-sm sm:text-base shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 w-full justify-center overflow-hidden">
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 relative z-10">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                  <path d="M14.05 6A5 5 0 0 1 18 10"></path>
                </svg>
                <span className="relative z-10">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/20">
          <p className="text-center text-gray-300 font-light text-sm sm:text-base px-4">
            © {new Date().getFullYear()} <span className="font-semibold">HABY</span>. Todos los derechos reservados. Creado con <span className="text-haby-accent">❤</span> por Heber Zadkiel García Pérez.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
