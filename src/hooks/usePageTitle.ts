
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type PathTitleMap = {
  [key: string]: string;
};

/**
 * Hook para actualizar el título de la página basado en la ruta actual
 */
const usePageTitle = (defaultTitle: string = 'HABY | Soluciones Web Personalizadas') => {
  const location = useLocation();
  
  const pathTitleMap: PathTitleMap = {
    '/': 'HABY | Soluciones Web Personalizadas',
    '/sobre-nosotros': 'Sobre Nosotros | HABY',
    '/servicios': 'Servicios | HABY',
    '/desarrollo-web': 'Desarrollo Web | HABY',
    '/soluciones-personalizadas': 'Soluciones Personalizadas | HABY',
    '/portafolio': 'Portafolio | HABY',
    '/precios': 'Precios | HABY',
    '/contacto': 'Contacto | HABY',
    '/admin': 'Admin | HABY',
  };

  useEffect(() => {
    // Ruta base
    let currentPath = location.pathname;
    
    // Para rutas dinámicas como /portafolio/:id
    if (currentPath.startsWith('/portafolio/')) {
      document.title = 'Detalle de Proyecto | HABY';
    } else {
      // Rutas estáticas
      const title = pathTitleMap[currentPath] || defaultTitle;
      document.title = title;
    }
    
    // Scroll al inicio cuando cambia la página
    window.scrollTo(0, 0);
  }, [location.pathname, defaultTitle]);
};

export default usePageTitle;
