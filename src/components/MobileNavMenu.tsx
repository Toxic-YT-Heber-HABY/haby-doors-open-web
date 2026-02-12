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

  const linkClass = "block w-full px-4 py-2.5 rounded-lg text-foreground font-medium text-sm hover:bg-secondary transition-all duration-200 text-left";
  const subLinkClass = "block w-full px-4 py-2 text-muted-foreground font-medium text-sm hover:text-foreground hover:bg-secondary rounded-lg transition-all duration-200 text-left";

  return (
    <div className="md:hidden mt-3 pb-4 rounded-lg bg-card border border-border animate-fade-in z-40">
      <div className="flex flex-col space-y-1 px-2">
        <Link to="/" className={linkClass} onClick={toggleMenu}>Inicio</Link>
        <Link to="/sobre-nosotros" className={linkClass} onClick={toggleMenu}>Sobre Nosotros</Link>
        <div>
          <button onClick={toggleServices} className={`${linkClass} flex items-center w-full`}>
            Servicios <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
          </button>
          {servicesOpen && (
            <div className="mt-1 ml-4 flex flex-col space-y-1">
              <Link to="/servicios" className={subLinkClass} onClick={toggleMenu}>Todos los Servicios</Link>
              <Link to="/desarrollo-web" className={subLinkClass} onClick={toggleMenu}>Desarrollo Web</Link>
              <Link to="/soluciones-personalizadas" className={subLinkClass} onClick={toggleMenu}>Soluciones Personalizadas</Link>
            </div>
          )}
        </div>
        <Link to="/portafolio" className={linkClass} onClick={toggleMenu}>Portafolio</Link>
        <Link to="/precios" className={linkClass} onClick={toggleMenu}>Precios</Link>
        <Link 
          to="/contacto" 
          className="block w-full px-4 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg text-sm font-semibold text-center mt-2" 
          onClick={toggleMenu}
        >
          Contáctanos
        </Link>
      </div>
    </div>
  );
};

export default MobileNavMenu;
