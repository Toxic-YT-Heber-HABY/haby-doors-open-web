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
    <div className="hidden md:flex items-center gap-1">
      <Link to="/" className="nav-link">Inicio</Link>
      <Link to="/sobre-nosotros" className="nav-link">Sobre Nosotros</Link>
      <div className="relative group">
        <button onClick={toggleServices} className="nav-link flex items-center gap-1">
          Servicios <ChevronDown className="w-3.5 h-3.5 opacity-50" />
        </button>
        <div className="absolute left-0 mt-1 w-52 bg-white rounded-xl shadow-[0_10px_40px_-10px_hsl(0,0%,0%/0.15)] border border-gray-100 z-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 origin-top-left pointer-events-none group-hover:pointer-events-auto">
          <div className="p-2">
            <Link to="/servicios" className="dropdown-link">Todos los Servicios</Link>
            <Link to="/desarrollo-web" className="dropdown-link">Desarrollo Web</Link>
            <Link to="/soluciones-personalizadas" className="dropdown-link">Soluciones Personalizadas</Link>
          </div>
        </div>
      </div>
      <Link to="/portafolio" className="nav-link">Portafolio</Link>
      <Link to="/precios" className="nav-link">Precios</Link>
      <Link
        to="/contacto"
        className="ml-2 px-5 py-2.5 bg-gradient-to-r from-[hsl(250,70%,55%)] to-[hsl(280,80%,55%)] text-white text-sm font-semibold rounded-full hover:shadow-[0_4px_20px_hsl(250,70%,60%/0.35)] transition-all duration-300 hover:scale-[1.02]"
      >
        Contáctanos
      </Link>
      <AdminButtons
        isAuthenticated={isAuthenticated}
        openAdminModal={openAdminModal}
        handleLogout={handleLogout}
      />
    </div>
  );
};

export default DesktopNavMenu;
