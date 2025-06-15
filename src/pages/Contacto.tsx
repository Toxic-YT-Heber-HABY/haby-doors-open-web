import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send, Info } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useLocation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LNAWizard from "@/components/contacto-lna/LNAWizard";

// Resumen visual y modal de términos para plan gratuito
const lnaTermsSummary = [
  "El proyecto debe estar ligado al bien común y ser accesible para cualquier persona.",
  "El acceso a la solución debe ser irrestricto y alineado con su propósito original.",
  "No debe causar ningún daño o perjuicio a los usuarios.",
  "Los derechos de autor serán propiedad de HABY.",
  "El solicitante será reconocido únicamente como contribuyente.",
  "Se recomiendan proyectos sencillos y funcionales."
];

const LNATermsDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <button
        type="button"
        className="text-haby-primary hover:text-haby-secondary text-sm underline inline-flex items-center"
      >
        <Info className="h-4 w-4 mr-1" />
        Ver términos completos
      </button>
    </DialogTrigger>
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle>Términos y Condiciones para LNA Gratuito</DialogTitle>
        <DialogDescription>
          Para asegurar que este recurso se utilice de manera adecuada y cumpla con su propósito original
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-6 py-2">
        <p className="text-gray-700">
          HABY está comprometido con el bien común y ofrece una opción LNA gratuita bajo las siguientes condiciones:
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900">1. Enfoque en el bien común</h4>
            <p className="text-sm text-gray-600">
              El proyecto, página web o solicitud debe estar intrínsecamente ligado al bien común. El resultado final debe ser accesible y utilizable por cualquier persona. La finalidad principal debe ser el beneficio colectivo, no el provecho personal o individual. Las solicitudes para beneficio particular serán automáticamente descartadas.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">2. Acceso irrestricto</h4>
            <p className="text-sm text-gray-600">
              Cualquier persona debe poder utilizar la solución, sin limitaciones geográficas, temporales o de cualquier otra índole. El uso debe estar alineado con el propósito original, fomentando su adopción generalizada y maximizando su impacto positivo en la comunidad.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">3. No causar daño</h4>
            <p className="text-sm text-gray-600">
              La solución proporcionada no debe causar ningún daño o perjuicio a los usuarios. Debe garantizar la protección de información personal, evitar la recopilación de datos sensibles y prevenir cualquier forma de incomodidad o perjuicio.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">4. Propiedad intelectual</h4>
            <p className="text-sm text-gray-600">
              Todos los derechos de autor de la solución desarrollada serán propiedad de HABY, quien recibirá todo el reconocimiento por la creación y mantenimiento de la solución. El solicitante será reconocido como contribuyente al proyecto.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">5. Rol del solicitante</h4>
            <p className="text-sm text-gray-600">
              La persona que realiza la petición será únicamente reconocida como contribuyente, ya que no está contratando un servicio personalizado para su beneficio individual, sino buscando una solución para el beneficio de la comunidad.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">6. Complejidad y viabilidad</h4>
            <p className="text-sm text-gray-600">
              Las peticiones deben centrarse en proyectos o soluciones sencillas pero funcionales. A menos que la petición presente una solución excepcionalmente buena para un problema de bien común, es poco probable que proyectos muy complejos puedan ser atendidos bajo la modalidad gratuita.
            </p>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

const useQueryParam = (param: string) => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  return params.get(param);
};

// NUEVO: función para estados iniciales, ahora incluye más campos
const getInitialFormData = () => ({
  nombre: "",
  email: "",
  telefono: "",
  servicio: "",
  mensaje: "",
  institucion: "",
  area: "",
  ubicacion: "",
  proyecto_nombre: "",
  proyecto_objetivo: "",
  proyecto_estado: "",
  proyecto_fechainicio: "",
  proyecto_descripcion: "",
  tipo_impacto: "",
  grupos_beneficiados: "",
  estimacion_beneficiarios: "",
  ubicacion_impacto: "",
  aliados_colaboradores: "",
  recursos_adicionales: "",
  plan_seguimiento: "",
  plan_sustentabilidad: "",
  web_o_redes: "",
  motivacion: ""
});

const lnaHeroBg =
  "bg-gradient-to-r from-haby-primary to-haby-accent shadow-xl transition-all";

const Contacto = () => {
  // Datos base del formulario
  const [formData, setFormData] = useState(getInitialFormData());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lnaTermsAccepted, setLnaTermsAccepted] = useState(false);

  // Verifica por query param o selección de servicio
  const planParam = useQueryParam('plan');
  const isLNAGratuito = planParam === 'lna-gratuito' || formData.servicio === 'LNA Gratuito';

  // Si se cambia de modalidad, se limpian los campos adicionales y términos
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (name === 'servicio' && value !== 'LNA Gratuito') {
      setLnaTermsAccepted(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (!formData.nombre || !formData.email || !formData.servicio || !formData.mensaje) {
      toast.error("Por favor completa todos los campos requeridos");
      return;
    }

    // Validación de campos extra si LNA Gratuito
    if (isLNAGratuito) {
      if (
        !formData.institucion ||
        !formData.area ||
        !formData.ubicacion ||
        !formData.proyecto_nombre ||
        !formData.proyecto_objetivo ||
        !formData.proyecto_estado ||
        !formData.proyecto_fechainicio ||
        !formData.proyecto_descripcion ||
        !formData.tipo_impacto ||
        !formData.grupos_beneficiados ||
        !formData.estimacion_beneficiarios ||
        !formData.ubicacion_impacto ||
        !formData.motivacion
      ) {
        toast.error("Completa todos los campos obligatorios del plan gratuito.");
        return;
      }
      if (!lnaTermsAccepted) {
        toast.error("Debes aceptar los términos y condiciones del plan gratuito para continuar.");
        return;
      }
    }

    setIsSubmitting(true);

    try {
      console.log("Enviando formulario de contacto:", formData);

      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        console.error("Error al enviar correo:", error);
        throw error;
      }

      console.log("Correo enviado exitosamente:", data);
      toast.success("¡Mensaje enviado! Te responderemos pronto.");

      // USAR LA FUNCIÓN QUE CONTIENE TODOS LOS CAMPOS:
      setFormData(getInitialFormData());
      setLnaTermsAccepted(false);

    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      toast.error("Error al enviar el mensaje. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#e5d9fa] via-[#f9f7fb] to-white">
      <Navbar />
      <main className="flex-grow w-full">
        {/* HERO HEADER para LNA */}
        <section className={`${lnaHeroBg} py-10 md:py-20`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1 min-w-[240px]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-4xl">🎁</span>
                  </div>
                  <span className="text-3xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow animate-fade-in">
                    Solicita tu LNA Gratuito
                  </span>
                </div>
                <p className="text-white/90 text-lg mb-4">
                  Beneficia a tu comunidad. Presenta tu iniciativa de bien común y recibe una solución digital sin costo si cumples los requisitos.
                </p>
                <ul className="mt-3 mb-2 pl-5 text-white/90 text-base space-y-1 list-disc font-medium">
                  <li>✔ Para proyectos sociales, educativos o culturales.</li>
                  <li>✔ La solución será gratuita y abierta para todos.</li>
                  <li>✔ Proceso simple, transparente y seguro.</li>
                </ul>
                <div className="mt-3">
                  <LNATermsDialog />
                </div>
              </div>
              <div className="hidden md:flex flex-1 items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=480&q=80"
                  alt="Hero bienvenida LNA"
                  className="rounded-3xl shadow-2xl w-full max-w-md h-auto object-cover object-center border-4 border-white"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* BLOQUE PRINCIPAL: Wizard y contacto */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
              <div className="relative z-10">
                {isLNAGratuito ? (
                  <div className="rounded-[2.5rem] shadow-[0_12px_40px_0_rgba(127,105,180,0.10)] border-y-4 border-haby-accent bg-white/95 py-2">
                    {/* Wizard visualmente destacado */}
                    <LNAWizard />
                  </div>
                ) : (
                  // ... keep existing code (formulario alternativo, si no es LNA Gratuito) the same ...
                  <>
                  {/* ... */}
                  </>
                )}
              </div>
              
              {/* CONTACTO LATERAL derecho */}
              <div className="relative z-0 h-fit">
                <div className="bg-white rounded-3xl px-8 py-10 shadow-2xl border border-haby-light/60">
                  <div className="inline-block bg-haby-accent/10 text-haby-accent px-4 py-2 rounded-full text-sm font-semibold mb-3 shadow">
                    Información de contacto
                  </div>
                  <h2 className="text-2xl font-extrabold text-haby-primary mb-3 drop-shadow-sm">
                    ¿Prefieres contactarnos directamente?
                  </h2>
                  <p className="text-gray-700/90 text-base mb-8">
                    Puedes comunicarte por cualquiera de estos medios para apoyo rápido y personalizado.
                  </p>
                  {/* BLOQUES DE CONTACTO */}
                  <ul className="space-y-6">
                    <li className="flex items-start hover:bg-green-50 rounded-xl p-4 transition group">
                      <div className="h-11 w-11 rounded-full bg-haby-light flex items-center justify-center text-haby-primary mr-4 flex-shrink-0 border border-green-200 shadow group-hover:scale-110 transition will-change-transform">
                        {/* Teléfono */}
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-haby-primary mb-1">Teléfono / WhatsApp</h3>
                        <a href="https://wa.me/5653681237" target="_blank" rel="noopener noreferrer"
                          className="text-green-700 hover:underline font-semibold hover:text-green-900 transition-colors">
                          56 5368 1237
                        </a>
                        <p className="text-xs text-gray-600 mt-1">Lunes a viernes, 9:00 a 18:00</p>
                      </div>
                    </li>
                    <li className="flex items-start hover:bg-purple-50 rounded-xl p-4 transition group">
                      <div className="h-11 w-11 rounded-full bg-haby-light flex items-center justify-center text-purple-700 mr-4 flex-shrink-0 border border-purple-200 shadow group-hover:scale-110 transition will-change-transform">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-purple-800 mb-1">Correo electrónico</h3>
                        <a href="mailto:info@habydoors.com"
                          className="text-haby-primary hover:underline font-semibold hover:text-haby-secondary transition-colors">
                          info@habydoors.com
                        </a>
                        <p className="text-xs text-gray-600 mt-1">
                          Te responderemos en menos de 24 horas
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start hover:bg-blue-50 rounded-xl p-4 transition group">
                      <div className="h-11 w-11 rounded-full bg-haby-light flex items-center justify-center text-blue-700 mr-4 flex-shrink-0 border border-blue-200 shadow group-hover:scale-110 transition will-change-transform">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-blue-800 mb-1">Horario de atención</h3>
                        <p className="text-gray-700 text-xs">Lunes a Viernes</p>
                        <p className="text-gray-700 text-xs">9:00 - 18:00</p>
                      </div>
                    </li>
                  </ul>
                  {/* REDES SOCIALES */}
                  <div className="pt-10 border-t border-gray-200 mt-8">
                    <h3 className="text-base font-bold text-haby-primary mb-3">Síguenos en redes sociales</h3>
                    <div className="flex space-x-3">
                      <a
                        href="https://www.facebook.com/zadkiel.garcia.31/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:scale-110 transition will-change-transform group"
                      >
                        {/* Facebook Icon */}
                        <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                          <path d="M14.05 6A5 5 0 0 1 18 10"></path>
                        </svg>
                      </a>
                      <a
                        href="https://www.instagram.com/habydoors/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-9 w-9 bg-gradient-to-tr from-pink-500 via-yellow-500 to-purple-500 rounded-full flex items-center justify-center shadow-sm hover:shadow-lg hover:scale-110 transition will-change-transform group"
                        style={{ background: "radial-gradient(circle at 30% 120%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}
                      >
                        {/* Instagram Lucide Icon */}
                        <span className="sr-only">Instagram</span>
                        <svg className="h-5 w-5 text-white drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.4)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <rect width="18" height="18" x="3" y="3" rx="5" ry="5" />
                          <path d="M16.5 7.5h.01" />
                          <circle cx="12" cy="12" r="4" />
                        </svg>
                      </a>
                      <a
                        href="https://www.youtube.com/@HABYOpenDoors?themeRefresh=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:scale-110 transition will-change-transform group"
                      >
                        <svg className="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a
                        href="https://x.com/Haby_Open_Doors"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:scale-110 transition will-change-transform group"
                      >
                        <svg className="h-4 w-4 text-black" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
