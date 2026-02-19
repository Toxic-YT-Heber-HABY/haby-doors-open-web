/**
 * App Component
 * 
 * Componente principal de la aplicación que configura:
 * - Enrutamiento con React Router
 * - Provider de consultas con TanStack Query
 * - Controlador de animaciones
 * - Sistema de notificaciones (toast)
 * - Transiciones de página
 * 
 * Optimizado para:
 * - Rendimiento con carga diferida
 * - Compatibilidad cross-browser
 * - Accesibilidad
 * - Experiencia de usuario fluida
 */

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AnimationController } from "./components/AnimationController";
import PageTransition from "./components/PageTransition";
import ResponsiveTest from "./components/ResponsiveTest";

// Configuración del cliente de consultas
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutos
    },
  },
});

// Carga perezosa (lazy) de páginas para mejorar el rendimiento inicial
import Index from "./pages/Index";
const NotFound = lazy(() => import("./pages/NotFound"));
const Portafolio = lazy(() => import("./pages/Portafolio"));
const SobreNosotros = lazy(() => import("./pages/SobreNosotros"));
const Servicios = lazy(() => import("./pages/Servicios"));
const Precios = lazy(() => import("./pages/Precios"));
const Contacto = lazy(() => import("./pages/Contacto"));
const DesarrolloWeb = lazy(() => import("./pages/DesarrolloWeb"));
const SolucionesPersonalizadas = lazy(() => import("./pages/SolucionesPersonalizadas"));
const Admin = lazy(() => import("./pages/Admin"));
const DetalleProyecto = lazy(() => import("./pages/DetalleProyecto"));
const Cloritizacion = lazy(() => import("./pages/Cloritizacion"));

// Componente para el estado de carga
const LoadingPage = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse-slow text-primary flex flex-col items-center">
      <div className="w-16 h-16 mb-4">
        <img 
          src="/lovable-uploads/f3e5eff1-a976-44c3-97a2-1e1e73c75a36.png" 
          alt="HABY Logo" 
          className="w-full h-full"
        />
      </div>
      <p className="text-lg font-medium">Cargando HABY...</p>
    </div>
  </div>
);

// Componente para manejar las rutas
const AppRoutes = () => {
  return (
    <Routes>
      {[
        { path: "/", element: <Index /> },
        { path: "/sobre-nosotros", element: <SobreNosotros /> },
        { path: "/servicios", element: <Servicios /> },
        { path: "/desarrollo-web", element: <DesarrolloWeb /> },
        { path: "/soluciones-personalizadas", element: <SolucionesPersonalizadas /> },
        { path: "/portafolio", element: <Portafolio /> },
        { path: "/portafolio/:id", element: <DetalleProyecto /> },
        { path: "/precios", element: <Precios /> },
        { path: "/contacto", element: <Contacto /> },
        { path: "/admin", element: <Admin /> },
        { path: "/cloritizacion", element: <Cloritizacion /> },
        { path: "*", element: <NotFound /> }
      ].map(route => (
        <Route 
          key={route.path} 
          path={route.path} 
          element={
            <PageTransition>
              <Suspense fallback={<LoadingPage />}>
                {route.element}
              </Suspense>
            </PageTransition>
          } 
        />
      ))}
    </Routes>
  );
};

/**
 * Componente principal de la aplicación
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <AnimationController>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ResponsiveTest />
        <AppRoutes />
      </TooltipProvider>
    </AnimationController>
  </QueryClientProvider>
);

export default App;
