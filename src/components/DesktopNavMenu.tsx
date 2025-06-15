
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface DesktopNavMenuProps {
  servicesOpen: boolean;
  toggleServices: (e: React.MouseEvent) => void;
  isAuthenticated: boolean;
  openAdminModal: () => void;
  handleLogout: () => void;
  AdminButtons: React.ComponentType<any>;
}

const DesktopNavMenu = ({
  servicesOpen,
  toggleServices,
  isAuthenticated,
  openAdminModal,
  handleLogout,
  AdminButtons,
}: DesktopNavMenuProps) => {
  return (
    <div className="hidden md:flex items-center space-x-5">
      <Link to="/" className="nav-link" tabIndex={0} aria-label="Inicio">Inicio</Link>
      <Link to="/sobre-nosotros" className="nav-link" tabIndex={0} aria-label="Sobre Nosotros">Sobre Nosotros</Link>
      {/* menú servicios */}
      <div className="relative group">
        <button 
          onClick={toggleServices} 
          className="nav-link flex items-center"
          tabIndex={0}
          aria-label="Servicios"
        >
          Servicios <ChevronDown className="ml-1 h-4 w-4 transition-transform" />
        </button>
        <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-40 opacity-0 group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 transition-all duration-200 origin-top-left pointer-events-none group-hover:pointer-events-auto">
          <div className="py-2">
            <Link to="/servicios" className="dropdown-link" tabIndex={0} aria-label="Todos los Servicios">
              Todos los Servicios
            </Link>
            <Link to="/desarrollo-web" className="dropdown-link" tabIndex={0} aria-label="Desarrollo Web">
              Desarrollo Web
            </Link>
            <Link to="/soluciones-personalizadas" className="dropdown-link" tabIndex={0} aria-label="Soluciones Personalizadas">
              Soluciones Personalizadas
            </Link>
          </div>
        </div>
      </div>
      <Link to="/portafolio" className="nav-link" tabIndex={0} aria-label="Portafolio">Portafolio</Link>
      <Link to="/precios" className="nav-link" tabIndex={0} aria-label="Precios">Precios</Link>
      <Link to="/contacto" className="btn-primary hover:scale-105 active:scale-95 transition-transform" tabIndex={0} aria-label="Contáctanos">
        Contáctanos
      </Link>
      
      {/* Admin buttons */}
      <AdminButtons
        isAuthenticated={isAuthenticated}
        openAdminModal={openAdminModal}
        handleLogout={handleLogout}
      />
    </div>
  );
};

export default DesktopNavMenu;
