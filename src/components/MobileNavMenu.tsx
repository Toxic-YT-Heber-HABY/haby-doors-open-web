
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface MobileNavMenuProps {
  isOpen: boolean;
  servicesOpen: boolean;
  toggleServices: (e: React.MouseEvent) => void;
  toggleMenu: () => void;
}

const MobileNavMenu = ({
  isOpen,
  servicesOpen,
  toggleServices,
  toggleMenu,
}: MobileNavMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden mt-3 pb-4 shadow-inner rounded-lg bg-white/95 animate-fade-in z-40">
      <div className="flex flex-col space-y-2 px-2">
        <Link to="/" className="mobile-link" onClick={toggleMenu} tabIndex={0} aria-label="Inicio">Inicio</Link>
        <Link to="/sobre-nosotros" className="mobile-link" onClick={toggleMenu} tabIndex={0} aria-label="Sobre Nosotros">Sobre Nosotros</Link>
        <div>
          <button 
            onClick={toggleServices} 
            className="mobile-link flex items-center w-full"
            tabIndex={0}
            aria-label="Servicios"
          >
            Servicios <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
          </button>
          {servicesOpen && (
            <div className="mt-1 ml-4 flex flex-col space-y-2">
              <Link to="/servicios" className="mobile-sublink" onClick={toggleMenu} tabIndex={0} aria-label="Todos los Servicios">
                Todos los Servicios
              </Link>
              <Link to="/desarrollo-web" className="mobile-sublink" onClick={toggleMenu} tabIndex={0} aria-label="Desarrollo Web">
                Desarrollo Web
              </Link>
              <Link to="/soluciones-personalizadas" className="mobile-sublink" onClick={toggleMenu} tabIndex={0} aria-label="Soluciones Personalizadas">
                Soluciones Personalizadas
              </Link>
            </div>
          )}
        </div>
        <Link to="/portafolio" className="mobile-link" onClick={toggleMenu} tabIndex={0} aria-label="Portafolio">Portafolio</Link>
        <Link to="/precios" className="mobile-link" onClick={toggleMenu} tabIndex={0} aria-label="Precios">Precios</Link>
        <Link to="/contacto" className="mobile-link font-semibold bg-haby-primary/90 text-white rounded-md px-3 py-2 text-center" onClick={toggleMenu} tabIndex={0} aria-label="Contáctanos">
          Contáctanos
        </Link>
      </div>
    </div>
  );
};

export default MobileNavMenu;
