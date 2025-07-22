import { useState } from 'react';
import { Menu, X, ChevronDown, Plus, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AdminLoginModal from './AdminLoginModal';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import AdminButtons from './AdminButtons';
import DesktopNavMenu from './DesktopNavMenu';
import MobileNavMenu from './MobileNavMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, logoutAdmin } = useAdminAuth();

  // Nueva: sombra más visible para el Navbar, transición de color y blur sobre fondo
  // Añade transiciones suaves a los links y botones, y hace sticky el navbar de forma elegante.

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (servicesOpen) setServicesOpen(false);
  };

  const toggleServices = (e: React.MouseEvent) => {
    e.preventDefault();
    setServicesOpen(!servicesOpen);
  };

  const openAdminModal = () => {
    if (isAuthenticated) {
      navigate("/admin");
    } else {
      setIsAdminModalOpen(true);
    }
  };

  const handleAdminLogin = () => {
    navigate("/admin");
    setIsAdminModalOpen(false);
  };

  const handleLogout = async () => {
    await logoutAdmin();
    navigate("/");
  };

  return (
    <>
      <header className="sticky top-0 z-50 glass-effect border-b border-haby-light/50 shadow-elegant transition-all duration-300">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center justify-between">
            {/* Logo y nombre */}
            <Link to="/" className="flex items-center group" tabIndex={0} aria-label="Inicio">
              <img 
                src="/lovable-uploads/f3e5eff1-a976-44c3-97a2-1e1e73c75a36.png" 
                alt="HABY Logo" 
                className="h-10 mr-2 drop-shadow-sm transition-transform group-hover:scale-105" 
              />
              <span className="text-2xl font-heading font-bold text-haby-primary drop-shadow-sm tracking-tight">HABY</span>
            </Link>

            {/* Navegación Desktop */}
            <DesktopNavMenu
              servicesOpen={servicesOpen}
              toggleServices={toggleServices}
              isAuthenticated={isAuthenticated}
              openAdminModal={openAdminModal}
              handleLogout={handleLogout}
              AdminButtons={AdminButtons}
            />

            {/* Botón menú móvil */}
            <div className="md:hidden flex items-center gap-2">
              <AdminButtons
                isAuthenticated={isAuthenticated}
                openAdminModal={openAdminModal}
                handleLogout={handleLogout}
              />
              <button 
                className="btn-secondary !p-2 !min-h-0 w-10 h-10"
                onClick={toggleMenu}
                aria-label="Abrir menú"
              >
                {isOpen ? <X className="h-6 w-6 text-haby-primary" /> : <Menu className="h-6 w-6 text-haby-primary" />}
              </button>
            </div>
          </nav>

          {/* Navegación móvil */}
          <MobileNavMenu
            isOpen={isOpen}
            servicesOpen={servicesOpen}
            toggleServices={toggleServices}
            toggleMenu={toggleMenu}
          />
        </div>
      </header>
      <AdminLoginModal 
        isOpen={isAdminModalOpen} 
        onClose={() => setIsAdminModalOpen(false)} 
        onLogin={handleAdminLogin}
      />

      {/* Estilos adicionales para los enlaces y botones, usando Tailwind */}
      <style>{`
        .nav-link {
          @apply relative px-4 py-2.5 rounded-xl text-gray-700 font-medium hover:text-haby-primary hover:bg-haby-light/50 focus:outline-none transition-all duration-300 text-shadow-soft;
        }
        .dropdown-link {
          @apply block w-full px-4 py-3 text-sm text-gray-700 hover:bg-haby-light/70 hover:text-haby-primary rounded-lg transition-all duration-200;
        }
        .icon-btn {
          @apply flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 shadow-md;
        }
        .mobile-link {
          @apply block w-full px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-haby-light/70 hover:text-haby-primary transition-all duration-200 text-left;
        }
        .mobile-sublink {
          @apply block w-full px-4 py-2.5 text-haby-primary hover:bg-haby-light/50 rounded-lg transition-all duration-200 text-left;
        }
      `}</style>
    </>
  );
};

export default Navbar;
