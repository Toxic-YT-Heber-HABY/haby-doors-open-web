
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Portafolio from "./pages/Portafolio";
import SobreNosotros from "./pages/SobreNosotros";
import Servicios from "./pages/Servicios";
import Precios from "./pages/Precios";
import Contacto from "./pages/Contacto";
import DesarrolloWeb from "./pages/DesarrolloWeb";
import SolucionesPersonalizadas from "./pages/SolucionesPersonalizadas";
import Admin from "./pages/Admin";
import DetalleProyecto from "./pages/DetalleProyecto";
import PageTransition from "./components/PageTransition";

const queryClient = new QueryClient();

// Componente para manejar las animaciones de transición
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Index />
          </PageTransition>
        } />
        <Route path="/sobre-nosotros" element={
          <PageTransition>
            <SobreNosotros />
          </PageTransition>
        } />
        <Route path="/servicios" element={
          <PageTransition>
            <Servicios />
          </PageTransition>
        } />
        <Route path="/desarrollo-web" element={
          <PageTransition>
            <DesarrolloWeb />
          </PageTransition>
        } />
        <Route path="/soluciones-personalizadas" element={
          <PageTransition>
            <SolucionesPersonalizadas />
          </PageTransition>
        } />
        <Route path="/portafolio" element={
          <PageTransition>
            <Portafolio />
          </PageTransition>
        } />
        <Route path="/portafolio/:id" element={
          <PageTransition>
            <DetalleProyecto />
          </PageTransition>
        } />
        <Route path="/precios" element={
          <PageTransition>
            <Precios />
          </PageTransition>
        } />
        <Route path="/contacto" element={
          <PageTransition>
            <Contacto />
          </PageTransition>
        } />
        <Route path="/admin" element={
          <PageTransition>
            <Admin />
          </PageTransition>
        } />
        <Route path="*" element={
          <PageTransition>
            <NotFound />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
