
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/desarrollo-web" element={<DesarrolloWeb />} />
          <Route path="/soluciones-personalizadas" element={<SolucionesPersonalizadas />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/portafolio/:id" element={<DetalleProyecto />} />
          <Route path="/precios" element={<Precios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
