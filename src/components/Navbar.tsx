
import { useState } from 'react';
import { Menu, X, ChevronDown, Plus, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AdminLoginModal from './AdminLoginModal';
import { useAdminAuth } from '@/hooks/useAdminAuth';

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
      <header className="sticky top-0 z-50 backdrop-blur bg-white/85 border-b border-haby-light shadow-md transition-all duration-300">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center justify-between">
            {/* Logo y nombre */}
            <Link to="/" className="flex items-center group">
              <img 
                src="/lovable-uploads/f3e5eff1-a976-44c3-97a2-1e1e73c75a36.png" 
                alt="HABY Logo" 
                className="h-10 mr-2 drop-shadow-sm transition-transform group-hover:scale-105" 
              />
              <span className="text-2xl font-heading font-bold text-haby-primary drop-shadow-sm tracking-tight">HABY</span>
            </Link>

            {/* Navegación Desktop */}
            <div className="hidden md:flex items-center space-x-5">
              <Link to="/" className="nav-link">
                Inicio
              </Link>
              <Link to="/sobre-nosotros" className="nav-link">
                Sobre Nosotros
              </Link>
              {/* menú servicios */}
              <div className="relative group">
                <button 
                  onClick={toggleServices} 
                  className="nav-link flex items-center"
                >
                  Servicios <ChevronDown className="ml-1 h-4 w-4 transition-transform" />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-40 opacity-0 group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 transition-all duration-200 origin-top-left pointer-events-none group-hover:pointer-events-auto">
                  <div className="py-2">
                    <Link to="/servicios" className="dropdown-link">
                      Todos los Servicios
                    </Link>
                    <Link to="/desarrollo-web" className="dropdown-link">
                      Desarrollo Web
                    </Link>
                    <Link to="/soluciones-personalizadas" className="dropdown-link">
                      Soluciones Personalizadas
                    </Link>
                  </div>
                </div>
              </div>
              <Link to="/portafolio" className="nav-link">
                Portafolio
              </Link>
              <Link to="/precios" className="nav-link">
                Precios
              </Link>
              <Link to="/contacto" className="btn-primary hover:scale-105 active:scale-95 transition-transform">
                Contáctanos
              </Link>
              
              {/* Admin buttons */}
              {isAuthenticated ? (
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={openAdminModal}
                    className="icon-btn bg-haby-primary hover:bg-haby-secondary"
                    aria-label="Panel de administración"
                  >
                    <Plus />
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="icon-btn bg-red-500 hover:bg-red-600"
                    aria-label="Cerrar sesión"
                  >
                    <LogOut />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={openAdminModal}
                  className="icon-btn bg-haby-primary hover:bg-haby-secondary"
                  aria-label="Acceso de administrador"
                >
                  <Plus />
                </button>
              )}
            </div>

            {/* Botón menú móvil */}
            <div className="md:hidden flex items-center gap-2">
              {isAuthenticated ? (
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={openAdminModal}
                    className="icon-btn bg-haby-primary hover:bg-haby-secondary"
                    aria-label="Panel de administración"
                  >
                    <Plus />
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="icon-btn bg-red-500 hover:bg-red-600"
                    aria-label="Cerrar sesión"
                  >
                    <LogOut />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={openAdminModal}
                  className="icon-btn bg-haby-primary hover:bg-haby-secondary"
                  aria-label="Acceso de administrador"
                >
                  <Plus />
                </button>
              )}
              <button 
                className="icon-btn border border-gray-200 bg-white hover:bg-haby-light"
                onClick={toggleMenu}
                aria-label="Abrir menú"
              >
                {isOpen ? <X className="h-6 w-6 text-haby-primary" /> : <Menu className="h-6 w-6 text-haby-primary" />}
              </button>
            </div>
          </nav>

          {/* Navegación móvil */}
          {isOpen && (
            <div className="md:hidden mt-3 pb-4 shadow-inner rounded-lg bg-white/95 animate-fade-in z-40">
              <div className="flex flex-col space-y-2 px-2">
                <Link to="/" className="mobile-link" onClick={toggleMenu}>
                  Inicio
                </Link>
                <Link to="/sobre-nosotros" className="mobile-link" onClick={toggleMenu}>
                  Sobre Nosotros
                </Link>
                <div>
                  <button 
                    onClick={toggleServices} 
                    className="mobile-link flex items-center w-full"
                  >
                    Servicios <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesOpen && (
                    <div className="mt-1 ml-4 flex flex-col space-y-2">
                      <Link to="/servicios" className="mobile-sublink" onClick={toggleMenu}>
                        Todos los Servicios
                      </Link>
                      <Link to="/desarrollo-web" className="mobile-sublink" onClick={toggleMenu}>
                        Desarrollo Web
                      </Link>
                      <Link to="/soluciones-personalizadas" className="mobile-sublink" onClick={toggleMenu}>
                        Soluciones Personalizadas
                      </Link>
                    </div>
                  )}
                </div>
                <Link to="/portafolio" className="mobile-link" onClick={toggleMenu}>
                  Portafolio
                </Link>
                <Link to="/precios" className="mobile-link" onClick={toggleMenu}>
                  Precios
                </Link>
                <Link to="/contacto" className="mobile-link font-semibold bg-haby-primary/90 text-white rounded-md px-3 py-2 text-center" onClick={toggleMenu}>
                  Contáctanos
                </Link>
              </div>
            </div>
          )}
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
          @apply relative px-3 py-2 rounded-lg text-gray-700 font-medium hover:text-haby-primary hover:bg-haby-light focus:outline-none transition-colors duration-200;
        }
        .dropdown-link {
          @apply block w-full px-4 py-2 text-sm text-gray-700 hover:bg-haby-light hover:text-haby-primary rounded-md transition-colors;
        }
        .icon-btn {
          @apply flex items-center justify-center w-9 h-9 rounded-full text-white transition-colors shadow-sm;
        }
        .mobile-link {
          @apply block w-full px-4 py-2 rounded-lg text-gray-700 font-medium hover:bg-haby-light hover:text-haby-primary transition-colors text-left;
        }
        .mobile-sublink {
          @apply block w-full px-4 py-2 text-haby-primary hover:bg-haby-light rounded transition-colors text-left;
        }
      `}</style>
    </>
  );
};

export default Navbar;
