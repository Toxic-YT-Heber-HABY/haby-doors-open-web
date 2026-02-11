import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import AdminLoginModal from './AdminLoginModal';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import AdminButtons from './AdminButtons';
import DesktopNavMenu from './DesktopNavMenu';
import MobileNavMenu from './MobileNavMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, logoutAdmin } = useAdminAuth();

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => setScrolled(window.scrollY > 20));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (servicesOpen) setServicesOpen(false);
  };

  const toggleServices = (e: React.MouseEvent) => {
    e.preventDefault();
    setServicesOpen(!servicesOpen);
  };

  const openAdminModal = () => {
    if (isAuthenticated) navigate("/admin");
    else setIsAdminModalOpen(true);
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-[0_1px_3px_hsl(0,0%,0%/0.05)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group" aria-label="Inicio">
              <img
                src="/lovable-uploads/f3e5eff1-a976-44c3-97a2-1e1e73c75a36.png"
                alt="HABY Logo"
                className="h-7 sm:h-8 transition-transform duration-300 group-hover:scale-105"
              />
              <span className={`text-lg sm:text-xl font-display font-bold tracking-tight transition-colors duration-500 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                HABY
              </span>
            </Link>

            <DesktopNavMenu
              servicesOpen={servicesOpen}
              toggleServices={toggleServices}
              isAuthenticated={isAuthenticated}
              openAdminModal={openAdminModal}
              handleLogout={handleLogout}
              AdminButtons={AdminButtons}
            />

            <div className="md:hidden flex items-center gap-2">
              <AdminButtons
                isAuthenticated={isAuthenticated}
                openAdminModal={openAdminModal}
                handleLogout={handleLogout}
              />
              <button
                className={`p-2 rounded-lg transition-colors ${
                  scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
                onClick={toggleMenu}
                aria-label="Abrir menú"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>

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

      <style>{`
        .nav-link {
          @apply relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200;
          color: ${scrolled ? 'hsl(0 0% 40%)' : 'rgba(255,255,255,0.7)'};
        }
        .nav-link:hover {
          color: ${scrolled ? 'hsl(250 70% 55%)' : 'white'};
          background: ${scrolled ? 'hsl(250 70% 60% / 0.06)' : 'rgba(255,255,255,0.1)'};
        }
        .dropdown-link {
          @apply block w-full px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200;
        }
        .mobile-link {
          @apply block w-full px-4 py-2.5 rounded-lg text-gray-700 font-medium text-sm hover:bg-gray-50 transition-all duration-200 text-left;
        }
        .mobile-sublink {
          @apply block w-full px-4 py-2 text-gray-500 font-medium text-sm hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 text-left;
        }
      `}</style>
    </>
  );
};

export default Navbar;
