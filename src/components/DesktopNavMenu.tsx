import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface DesktopNavMenuProps {
  scrolled: boolean;
  servicesOpen: boolean;
  toggleServices: (e: React.MouseEvent) => void;
  isAuthenticated: boolean;
  openAdminModal: () => void;
  handleLogout: () => void;
  AdminButtons: React.ComponentType<any>;
}

const DesktopNavMenu = ({
  scrolled,
  servicesOpen,
  toggleServices,
  isAuthenticated,
  openAdminModal,
  handleLogout,
  AdminButtons,
}: DesktopNavMenuProps) => {
  const linkClass = `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
    scrolled 
      ? 'text-muted-foreground hover:text-primary hover:bg-primary/5' 
      : 'text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10'
  }`;

  return (
    <div className="hidden md:flex items-center gap-1">
      <Link to="/" className={linkClass}>Inicio</Link>
      <Link to="/sobre-nosotros" className={linkClass}>Sobre Nosotros</Link>
      <div className="relative group">
        <button onClick={toggleServices} className={`${linkClass} flex items-center gap-1`}>
          Servicios <ChevronDown className="w-3.5 h-3.5 opacity-50" />
        </button>
        <div className="absolute left-0 mt-1 w-52 bg-card rounded-xl shadow-xl border border-border z-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 origin-top-left pointer-events-none group-hover:pointer-events-auto">
          <div className="p-2">
            <Link to="/servicios" className="block w-full px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-all duration-200">Todos los Servicios</Link>
            <Link to="/desarrollo-web" className="block w-full px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-all duration-200">Desarrollo Web</Link>
            <Link to="/soluciones-personalizadas" className="block w-full px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-all duration-200">Soluciones Personalizadas</Link>
          </div>
        </div>
      </div>
      <Link to="/portafolio" className={linkClass}>Portafolio</Link>
      <Link to="/precios" className={linkClass}>Precios</Link>
      <Link
        to="/contacto"
        className="ml-2 px-5 py-2.5 bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
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
