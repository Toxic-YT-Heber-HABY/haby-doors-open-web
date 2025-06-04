
import { useState } from 'react';
import { Menu, X, ChevronDown, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import AdminLoginModal from './AdminLoginModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (servicesOpen) setServicesOpen(false);
  };

  const toggleServices = (e: React.MouseEvent) => {
    e.preventDefault();
    setServicesOpen(!servicesOpen);
  };

  const openAdminModal = () => {
    setIsAdminModalOpen(true);
  };

  const handleAdminLogin = (password: string) => {
    if (password === "B4$w7K&1zP!X") {
      toast.success("Acceso autorizado");
      navigate("/admin");
      setIsAdminModalOpen(false);
    } else {
      toast.error("Código de acceso incorrecto");
    }
  };

  return (
    <>
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/f3e5eff1-a976-44c3-97a2-1e1e73c75a36.png" 
                alt="HABY Logo" 
                className="h-10 mr-2" 
              />
              <span className="text-2xl font-heading font-bold text-haby-primary">HABY</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-haby-primary font-medium transition-colors">
                Inicio
              </Link>
              <Link to="/sobre-nosotros" className="text-gray-700 hover:text-haby-primary font-medium transition-colors">
                Sobre Nosotros
              </Link>
              <div className="relative group">
                <button 
                  onClick={toggleServices} 
                  className="flex items-center text-gray-700 hover:text-haby-primary font-medium transition-colors"
                >
                  Servicios <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                  <div className="bg-white shadow-lg rounded-md py-2">
                    <Link to="/servicios" className="block px-4 py-2 text-sm text-gray-700 hover:bg-haby-light hover:text-haby-primary">
                      Todos los Servicios
                    </Link>
                    <Link to="/desarrollo-web" className="block px-4 py-2 text-sm text-gray-700 hover:bg-haby-light hover:text-haby-primary">
                      Desarrollo Web
                    </Link>
                    <Link to="/soluciones-personalizadas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-haby-light hover:text-haby-primary">
                      Soluciones Personalizadas
                    </Link>
                  </div>
                </div>
              </div>
              <Link to="/portafolio" className="text-gray-700 hover:text-haby-primary font-medium transition-colors">
                Portafolio
              </Link>
              <Link to="/precios" className="text-gray-700 hover:text-haby-primary font-medium transition-colors">
                Precios
              </Link>
              <Link to="/contacto" className="btn-primary">
                Contáctanos
              </Link>
              <button 
                onClick={openAdminModal}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-haby-primary text-white hover:bg-haby-secondary transition-colors"
                aria-label="Administración"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-3">
              <button 
                onClick={openAdminModal}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-haby-primary text-white hover:bg-haby-secondary transition-colors"
                aria-label="Administración"
              >
                <Plus className="h-4 w-4" />
              </button>
              <button onClick={toggleMenu}>
                {isOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
              </button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <Link to="/" className="text-gray-700 hover:text-haby-primary font-medium transition-colors" onClick={toggleMenu}>
                  Inicio
                </Link>
                <Link to="/sobre-nosotros" className="text-gray-700 hover:text-haby-primary font-medium transition-colors" onClick={toggleMenu}>
                  Sobre Nosotros
                </Link>
                
                <div>
                  <button 
                    onClick={toggleServices} 
                    className="flex items-center text-gray-700 hover:text-haby-primary font-medium transition-colors w-full"
                  >
                    Servicios <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {servicesOpen && (
                    <div className="mt-2 ml-4 flex flex-col space-y-2">
                      <Link to="/servicios" className="text-gray-700 hover:text-haby-primary" onClick={toggleMenu}>
                        Todos los Servicios
                      </Link>
                      <Link to="/desarrollo-web" className="text-gray-700 hover:text-haby-primary" onClick={toggleMenu}>
                        Desarrollo Web
                      </Link>
                      <Link to="/soluciones-personalizadas" className="text-gray-700 hover:text-haby-primary" onClick={toggleMenu}>
                        Soluciones Personalizadas
                      </Link>
                    </div>
                  )}
                </div>
                
                <Link to="/portafolio" className="text-gray-700 hover:text-haby-primary font-medium transition-colors" onClick={toggleMenu}>
                  Portafolio
                </Link>
                <Link to="/precios" className="text-gray-700 hover:text-haby-primary font-medium transition-colors" onClick={toggleMenu}>
                  Precios
                </Link>
                <Link to="/contacto" className="btn-primary text-center" onClick={toggleMenu}>
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
    </>
  );
};

export default Navbar;
