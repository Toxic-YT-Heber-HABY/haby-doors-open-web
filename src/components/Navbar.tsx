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
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/5 transition-all duration-300 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 py-2.5 sm:py-3">
          <nav className="flex items-center justify-between">
            {/* Modern Minimal Logo */}
            <Link to="/" className="flex items-center gap-2.5 group" tabIndex={0} aria-label="Inicio">
              <img 
                src="/lovable-uploads/f3e5eff1-a976-44c3-97a2-1e1e73c75a36.png" 
                alt="HABY Logo" 
                className="h-7 sm:h-8 transition-all duration-300 group-hover:scale-105" 
              />
              <span className="text-lg sm:text-xl font-display font-bold tracking-tight">
                <span className="bg-gradient-to-r from-haby-primary via-haby-accent to-haby-secondary bg-clip-text text-transparent">HABY</span>
              </span>
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

      {/* Modern Minimal Styles */}
      <style>{`
        .nav-link {
          @apply relative px-4 py-2 rounded-lg text-gray-700 font-medium text-sm hover:text-haby-primary hover:bg-haby-light/30 focus:outline-none transition-all duration-200;
        }
        .dropdown-link {
          @apply block w-full px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-haby-light/40 hover:text-haby-primary rounded-lg transition-all duration-200;
        }
        .icon-btn {
          @apply flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200 hover:scale-105;
        }
        .mobile-link {
          @apply block w-full px-4 py-2.5 rounded-lg text-gray-700 font-medium text-sm hover:bg-haby-light/40 hover:text-haby-primary transition-all duration-200 text-left;
        }
        .mobile-sublink {
          @apply block w-full px-4 py-2 text-haby-primary font-medium text-sm hover:bg-haby-light/40 rounded-lg transition-all duration-200 text-left;
        }
      `}</style>
    </>
  );
};

export default Navbar;
