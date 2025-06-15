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
    <div className="min-h-screen flex flex-col bg-haby-light">
      <Navbar />
      <main className="flex-grow w-full">
        {/* Hero Header alineado con wizard */}
        <section className={`w-full ${lnaHeroBg} py-14 md:py-20`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1 min-w-[240px]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-white/80 rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-4xl">🎁</span>
                  </div>
                  <span className="text-3xl md:text-5xl font-bold text-white tracking-tight drop-shadow">
                    Solicita tu LNA Gratuito
                  </span>
                </div>
                <p className="text-white/90 text-lg mb-2">
                  Beneficia a tu comunidad. Presenta tu iniciativa de bien común y recibe una solución digital sin costo si cumples los requisitos.
                </p>
                <ul className="mt-4 mb-2 pl-5 text-white/80 text-base space-y-1 list-disc">
                  <li>✔ Para proyectos sociales, educativos o culturales.</li>
                  <li>✔ La solución será gratuita y abierta para todos.</li>
                  <li>✔ Proceso simple, transparente y seguro.</li>
                </ul>
              </div>
              {/* Imagen hero opcional: remove if not wanted */}
              <div className="hidden md:block flex-1">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=480&q=80"
                  alt="Hero bienvenida LNA"
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover object-center border-4 border-white"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sección Formulario y Contacto info */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                {/* Si es "LNA Gratuito": Muestra el wizard DENTRO de un card */}
                {isLNAGratuito ? (
                  <div className="bg-white/95 rounded-3xl shadow-2xl border border-haby-light p-0">
                    {/* El LNAWizard ya tiene un layout bello */}
                    <LNAWizard />
                  </div>
                ) : (
                  <>
                  {/* Diseño para formulario alterno. Mejorar siempre el fondo y bordes */}
                  <div className="bg-white/95 rounded-2xl shadow-xl border border-haby-light p-7 md:p-10 mb-6">
                    <form onSubmit={handleSubmit} autoComplete="off">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="nombre" className="block text-sm font-semibold text-gray-800 mb-1">
                            Nombre completo*
                          </label>
                          <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-haby-accent focus:border-haby-accent"
                            placeholder="Tu nombre"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-1">
                            Correo electrónico*
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-haby-accent focus:border-haby-accent"
                            placeholder="tu@email.com"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-6">
                        <label htmlFor="servicio" className="block text-sm font-semibold text-gray-800 mb-1">
                          Servicio de interés*
                        </label>
                        <select
                          id="servicio"
                          name="servicio"
                          value={formData.servicio}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-haby-accent focus:border-haby-accent"
                          required
                        >
                          <option value="">Selecciona un servicio</option>
                          <option value="Plan Básico">Plan Básico - $14,999 MXN</option>
                          <option value="Plan Profesional">Plan Profesional - $24,999 MXN</option>
                          <option value="Plan Premium">Plan Premium - Desde $34,999 MXN</option>
                          <option value="LNA Gratuito">LNA Gratuito (bien común)</option>
                          <option value="Desarrollo Web Personalizado">Desarrollo Web Personalizado</option>
                          <option value="Soluciones a Medida">Soluciones a Medida</option>
                          <option value="Optimización de Procesos">Optimización de Procesos</option>
                          <option value="Plataformas Colaborativas">Plataformas Colaborativas</option>
                          <option value="Sistemas de Gestión">Sistemas de Gestión</option>
                          <option value="Otro">Otro</option>
                        </select>
                      </div>

                      {/* --- SECCIÓN: Datos del solicitante --- */}
                      {isLNAGratuito && (
                        <>
                          <div className="border border-green-200 rounded-lg p-4 mb-6 bg-green-50">
                            <h3 className="text-lg font-bold text-green-700 mb-4">Datos del solicitante</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label htmlFor="institucion" className="text-sm font-semibold text-gray-800">Organización, institución o colectivo *</label>
                                <input
                                  type="text"
                                  id="institucion"
                                  name="institucion"
                                  value={formData.institucion}
                                  onChange={handleInputChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-haby-accent focus:border-haby-accent"
                                  placeholder="Nombre organización, colectivo, etc."
                                  required
                                />
                              </div>
                              <div>
                                <label htmlFor="area" className="text-sm font-semibold text-gray-800">Área o sector *</label>
                                <input
                                  type="text"
                                  id="area"
                                  name="area"
                                  value={formData.area}
                                  onChange={handleInputChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-haby-accent focus:border-haby-accent"
                                  placeholder="Ej: educación, salud, cultura..."
                                  required
                                />
                              </div>
                              <div>
                                <label htmlFor="ubicacion" className="text-sm font-semibold text-gray-800">Ubicación institucional *</label>
                                <input
                                  type="text"
                                  id="ubicacion"
                                  name="ubicacion"
                                  value={formData.ubicacion}
                                  onChange={handleInputChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-haby-accent focus:border-haby-accent"
                                  placeholder="Ciudad, estado, país"
                                  required
                                />
                              </div>
                              <div>
                                <label htmlFor="telefono" className="text-sm font-semibold text-gray-800">Teléfono de contacto</label>
                                <input
                                  type="tel"
                                  id="telefono"
                                  name="telefono"
                                  value={formData.telefono}
                                  onChange={handleInputChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-haby-accent focus:border-haby-accent"
                                  placeholder="Número de teléfono"
                                />
                              </div>
                            </div>
                          </div>
                          
                          {/* --- SECCIÓN: Sobre el proyecto --- */}
                          <div className="border border-green-200 rounded-lg p-4 mb-6 bg-green-50">
                            <h3 className="text-lg font-bold text-green-700 mb-4">Sobre el proyecto / iniciativa</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label htmlFor="proyecto_nombre" className="text-sm font-semibold text-gray-800">Nombre del proyecto *</label>
                                <input
                                  type="text"
                                  id="proyecto_nombre"
                                  name="proyecto_nombre"
                                  value={formData.proyecto_nombre}
                                  onChange={handleInputChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-haby-accent focus:border-haby-accent"
                                  placeholder="Ejemplo: Biblioteca digital para niños"
                                  required
                                />
                              </div>
                              <div>
                                <label htmlFor="proyecto_fechainicio" className="text-sm font-semibold text-gray-800">Fecha prevista de inicio *</label>
                                <input
                                  type="date"
                                  id="proyecto_fechainicio"
                                  name="proyecto_fechainicio"
                                  value={formData.proyecto_fechainicio}
                                  onChange={handleInputChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-haby-accent focus:border-haby-accent"
                                  required
                                />
                              </div>
                              <div>
                                <label htmlFor="proyecto_estado" className="text-sm font-semibold text-gray-800">Estado del proyecto *</label>
                                <select
                                  id="proyecto_estado"
                                  name="proyecto_estado"
                                  value={formData.proyecto_estado}
                                  onChange={handleInputChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-haby-accent focus:border-haby-accent"
                                  required
                                >
                                  <option value="">Selecciona...</option>
                                  <option value="Idea">Solo idea</option>
                                  <option value="En planeación">En planeación</option>
                                  <option value="En curso">En ejecución</option>
                                  <option value="Con resultados iniciales">Con resultados iniciales</option>
                                  <option value="Consolidado">Consolidado</option>
                                </select>
                              </div>
                              <div>
                                <label htmlFor="proyecto_objetivo" className="text-sm font-semibold text-gray-800">Objetivo principal *</label>
                                <input
                                  type="text"
                                  id="proyecto_objetivo"
                                  name="proyecto_objetivo"
                                  value={formData.proyecto_objetivo}
                                  onChange={handleInputChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-haby-accent focus:border-haby-accent"
                                  placeholder="¿Qué se busca lograr?"
                                  required
                                />
                              </div>
                            </div>
                            <div className="my-3">
                              <label htmlFor="proyecto_descripcion" className="text-sm font-semibold text-gray-800">Descripción breve *</label>
                              <textarea
                                id="proyecto_descripcion"
                                name="proyecto_descripcion"
                                value={formData.proyecto_descripcion}
                                onChange={handleInputChange}
                                rows={3}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-haby-accent focus:border-haby-accent"
                                placeholder="Describe claramente el proyecto, a quién beneficia y cómo funciona"
                                required
                              />
                            </div>
                          </div>

                          {/* --- SECCIÓN: Impacto social o comunitario --- */}
                          <div className="border border-green-200 rounded-lg p-4 mb-6 bg-green-50">
                            <h3 className="text-lg font-bold text-green-700 mb-4">Impacto social/comunitario</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label htmlFor="tipo_impacto" className="text-sm font-semibold text-gray-800">Tipo de impacto *</label>
                                <select
                                  id="tipo_impacto"
                                  name="tipo_impacto"
                                  value={formData.tipo_impacto}
                                  onChange={handleInputChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-haby-accent focus:border-haby-accent"
                                  required
                                >
                                  <option value="">Selecciona...</option>
                                  <option value="Educación">Educación</option>
                                  <option value="Salud">Salud</option>
                                  <option value="Cultura">Cultura</option>
                                  <option value="Medio ambiente">Medio ambiente</option>
                                  <option value="Inclusión">Inclusión</option>
                                  <option value="Tecnología">Tecnología</option>
                                  <option value="Otro">Otro</option>
                                </select>
                              </div>
                              <div>
                                <label htmlFor="grupos_beneficiados" className="text-sm font-semibold text-gray-800">Grupo(s) beneficiado(s) *</label>
                                <input
                                  type="text"
                                  id="grupos_beneficiados"
                                  name="grupos_beneficiados"
                                  value={formData.grupos_beneficiados}
                                  onChange={handleInputChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-haby-accent focus:border-haby-accent"
                                  placeholder="Ej: niños, comunidad local, mujeres, etc."
                                  required
                                />
                              </div>
                              <div>
                                <label htmlFor="estimacion_beneficiarios" className="text-sm font-semibold text-gray-800">Personas beneficiadas *</label>
                                <input
                                  type="number"
                                  min={1}
                                  id="estimacion_beneficiarios"
                                  name="estimacion_beneficiarios"
                                  value={formData.estimacion_beneficiarios}
                                  onChange={handleInputChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-haby-accent focus:border-haby-accent"
                                  placeholder="Ej: 250"
                                  required
                                />
                              </div>
                              <div>
                                <label htmlFor="ubicacion_impacto" className="text-sm font-semibold text-gray-800">Ubicación del impacto *</label>
                                <input
                                  type="text"
                                  id="ubicacion_impacto"
                                  name="ubicacion_impacto"
                                  value={formData.ubicacion_impacto}
                                  onChange={handleInputChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-haby-accent focus:border-haby-accent"
                                  placeholder="Ciudad, municipio, localidad"
                                  required
                                />
                              </div>
                              <div>
                                <label htmlFor="aliados_colaboradores" className="text-sm font-semibold text-gray-800">Aliados o colaboradores</label>
                                <input
                                  type="text"
                                  id="aliados_colaboradores"
                                  name="aliados_colaboradores"
                                  value={formData.aliados_colaboradores}
                                  onChange={handleInputChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-haby-accent focus:border-haby-accent"
                                  placeholder="Instituciones aliadas, ONGs, etc."
                                />
                              </div>
                            </div>
                            {/* Motivación social/comunitaria */}
                            <div className="my-3">
                              <label htmlFor="motivacion" className="text-sm font-semibold text-gray-800">¿Por qué solicita el plan gratuito?* <span className="font-normal text-xs">(breve y claro)</span></label>
                              <textarea
                                id="motivacion"
                                name="motivacion"
                                value={formData.motivacion}
                                onChange={handleInputChange}
                                rows={3}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-haby-accent focus:border-haby-accent"
                                placeholder="Explica la motivación social/comunitaria..."
                                required
                              />
                            </div>
                          </div>
                          
                          {/* --- SECCIÓN: Recursos y sustentabilidad --- */}
                          <div className="border border-green-200 rounded-lg p-4 mb-6 bg-green-50">
                            <h3 className="text-lg font-bold text-green-700 mb-4">Recursos y sustentabilidad</h3>
                            <div className="space-y-4">
                              <div>
                                <label htmlFor="recursos_adicionales" className="text-sm font-semibold text-gray-800">¿Cuenta con recursos o apoyos adicionales?</label>
                                <input
                                  type="text"
                                  id="recursos_adicionales"
                                  name="recursos_adicionales"
                                  value={formData.recursos_adicionales}
                                  onChange={handleInputChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-haby-accent focus:border-haby-accent"
                                  placeholder="Ej: donaciones, equipo voluntario, etc."
                                />
                              </div>
                              <div>
                                <label htmlFor="plan_seguimiento" className="text-sm font-semibold text-gray-800">¿Cómo planea dar seguimiento al impacto?</label>
                                <input
                                  type="text"
                                  id="plan_seguimiento"
                                  name="plan_seguimiento"
                                  value={formData.plan_seguimiento}
                                  onChange={handleInputChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-haby-accent focus:border-haby-accent"
                                  placeholder="¿Cómo documentarán resultados, retroalimentación, etc.?"
                                />
                              </div>
                              <div>
                                <label htmlFor="plan_sustentabilidad" className="text-sm font-semibold text-gray-800">Plan de sustentabilidad del proyecto</label>
                                <input
                                  type="text"
                                  id="plan_sustentabilidad"
                                  name="plan_sustentabilidad"
                                  value={formData.plan_sustentabilidad}
                                  onChange={handleInputChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-haby-accent focus:border-haby-accent"
                                  placeholder="¿Cómo se dará continuidad cuando acabe el apoyo?"
                                />
                              </div>
                              <div>
                                <label htmlFor="web_o_redes" className="text-sm font-semibold text-gray-800">Sitio web o redes sociales del proyecto</label>
                                <input
                                  type="text"
                                  id="web_o_redes"
                                  name="web_o_redes"
                                  value={formData.web_o_redes}
                                  onChange={handleInputChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-haby-accent focus:border-haby-accent"
                                  placeholder="https://o usuario en RRSS"
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {/* Sección mensaje libre */}
                      <div className="mb-6">
                        <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-800 mb-1">
                          Mensaje*
                        </label>
                        <textarea
                          id="mensaje"
                          name="mensaje"
                          rows={6}
                          value={formData.mensaje}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-haby-accent focus:border-haby-accent"
                          placeholder="Cuéntanos sobre tu proyecto o problema que quieres resolver..."
                          required
                        ></textarea>
                      </div>

                      {/* Checkbox de privacidad */}
                      <div className="flex items-start mb-6">
                        <input
                          type="checkbox"
                          id="privacidad"
                          className="mt-1 accent-haby-accent"
                          required
                        />
                        <label htmlFor="privacidad" className="ml-2 text-sm text-gray-600">
                          Acepto la <a href="#" className="text-haby-primary hover:underline">Política de Privacidad</a> y el tratamiento de mis datos.
                        </label>
                      </div>

                      {/* Checkbox de aceptación LNA solo si corresponde */}
                      {isLNAGratuito && (
                        <div className="flex items-start mb-6">
                          <input
                            type="checkbox"
                            id="lna-terms"
                            checked={lnaTermsAccepted}
                            onChange={e => setLnaTermsAccepted(e.target.checked)}
                            className="mt-1 accent-green-600"
                            required
                          />
                          <label htmlFor="lna-terms" className="ml-2 text-sm text-green-700 font-semibold">
                            He leído y acepto los <LNATermsDialog /> del plan LNA gratuito.
                          </label>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center bg-haby-primary hover:bg-haby-accent text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                        <Send className="ml-2 h-5 w-5" />
                      </button>
                    </form>
                  </div>
                  </>
                )}
              </div>
              
              {/* Lado derecho: Contacto directo y redes */}
              <div>
                <div className="bg-gradient-to-br from-haby-light/80 to-white rounded-3xl p-8 shadow-2xl border border-haby-light/60">
                  <div className="mb-10">
                    <div className="inline-block bg-haby-accent/10 text-haby-accent px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-md">
                      Información de contacto
                    </div>
                    <h2 className="text-3xl font-extrabold text-haby-primary mb-6 drop-shadow">
                      ¿Prefieres contactarnos directamente?
                    </h2>
                    <p className="text-gray-700/90 text-lg">
                      Te ayudamos por cualquiera de estos medios.
                    </p>
                  </div>

                  <div className="space-y-8">
                    {/* Teléfono/WhatsApp */}
                    <div className="flex items-start hover:bg-green-50 rounded-xl p-4 transition">
                      <div className="h-12 w-12 rounded-full bg-haby-light flex items-center justify-center text-haby-primary mr-4 flex-shrink-0 border border-green-200 shadow">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-haby-primary mb-1">Teléfono / WhatsApp</h3>
                        <a href="https://wa.me/5653681237" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline font-semibold">
                          56 5368 1237
                        </a>
                        <p className="text-sm text-gray-600 mt-1">
                          Lunes a viernes, 9:00 a 18:00
                        </p>
                      </div>
                    </div>

                    {/* Correo */}
                    <div className="flex items-start hover:bg-purple-50 rounded-xl p-4 transition">
                      <div className="h-12 w-12 rounded-full bg-haby-light flex items-center justify-center text-purple-700 mr-4 flex-shrink-0 border border-purple-200 shadow">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-purple-800 mb-1">Correo electrónico</h3>
                        <a href="mailto:info@habydoors.com" className="text-haby-primary hover:underline font-semibold">
                          info@habydoors.com
                        </a>
                        <p className="text-sm text-gray-600 mt-1">
                          Te responderemos en menos de 24 horas
                        </p>
                      </div>
                    </div>

                    {/* Horario */}
                    <div className="flex items-start hover:bg-blue-50 rounded-xl p-4 transition">
                      <div className="h-12 w-12 rounded-full bg-haby-light flex items-center justify-center text-blue-700 mr-4 flex-shrink-0 border border-blue-200 shadow">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-blue-800 mb-1">Horario de atención</h3>
                        <p className="text-gray-700">Lunes a Viernes</p>
                        <p className="text-gray-700">9:00 - 18:00</p>
                      </div>
                    </div>

                    {/* Redes sociales */}
                    <div className="pt-8 border-t border-gray-200">
                      <h3 className="text-lg font-bold text-haby-primary mb-4">Síguenos en redes sociales</h3>
                      <div className="flex space-x-4">
                        <a href="https://www.facebook.com/zadkiel.garcia.31/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                          <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                            <path d="M14.05 6A5 5 0 0 1 18 10"></path>
                          </svg>
                        </a>
                        <a href="https://www.instagram.com/habydoors/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                          <svg className="h-5 w-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.218-1.791.465-2.427a4.902 4.902 0 01-1.768-1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255-.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href="https://www.youtube.com/@HABYOpenDoors?themeRefresh=1" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                          <svg className="h-5 w-5 text-red-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href="https://x.com/Haby_Open_Doors" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                          <svg className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                          </svg>
                        </a>
                      </div>
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
