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
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect shadow-elegant transition-all duration-300 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            {/* Ultra-Modern Logo */}
            <Link to="/" className="flex items-center group" tabIndex={0} aria-label="Inicio">
              <img 
                src="/lovable-uploads/f3e5eff1-a976-44c3-97a2-1e1e73c75a36.png" 
                alt="HABY Logo" 
                className="h-11 mr-3 drop-shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" 
              />
              <span className="text-2xl font-display font-black text-haby-primary drop-shadow-sm tracking-tight bg-gradient-to-r from-haby-primary to-haby-accent bg-clip-text text-transparent">HABY</span>
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

      {/* Ultra-Modern Styles */}
      <style>{`
        .nav-link {
          @apply relative px-5 py-3 rounded-2xl text-gray-700 font-semibold hover:text-haby-primary hover:bg-gradient-to-r hover:from-haby-light/60 hover:to-haby-light/40 focus:outline-none transition-all duration-300;
        }
        .dropdown-link {
          @apply block w-full px-5 py-3.5 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-haby-light/70 hover:to-haby-light/50 hover:text-haby-primary rounded-xl transition-all duration-300;
        }
        .icon-btn {
          @apply flex items-center justify-center w-11 h-11 rounded-2xl transition-all duration-300 shadow-lg hover:scale-110 hover:shadow-xl;
        }
        .mobile-link {
          @apply block w-full px-5 py-3.5 rounded-2xl text-gray-700 font-semibold hover:bg-gradient-to-r hover:from-haby-light/80 hover:to-haby-light/60 hover:text-haby-primary transition-all duration-300 text-left;
        }
        .mobile-sublink {
          @apply block w-full px-5 py-3 text-haby-primary font-medium hover:bg-haby-light/60 rounded-xl transition-all duration-300 text-left;
        }
      `}</style>
    </>
  );
};

export default Navbar;
