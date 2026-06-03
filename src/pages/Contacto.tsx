import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Mail, Phone, MapPin, Clock, Send, Info, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LNAWizard from "@/components/contacto-lna/LNAWizard";

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
      <button type="button" className="text-primary hover:text-primary/80 text-sm underline inline-flex items-center gap-1">
        <Info className="h-3.5 w-3.5" />
        Ver términos completos
      </button>
    </DialogTrigger>
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle>Términos y Condiciones para LNA Gratuito</DialogTitle>
        <DialogDescription>
          Para asegurar que este recurso se utilice de manera adecuada
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-4 py-2 text-sm">
        {[
          { t: "1. Enfoque en el bien común", d: "El proyecto debe estar intrínsecamente ligado al bien común. Las solicitudes para beneficio particular serán descartadas." },
          { t: "2. Acceso irrestricto", d: "Cualquier persona debe poder utilizar la solución, sin limitaciones." },
          { t: "3. No causar daño", d: "La solución no debe causar ningún daño o perjuicio a los usuarios." },
          { t: "4. Propiedad intelectual", d: "Todos los derechos de autor serán propiedad de HABY." },
          { t: "5. Rol del solicitante", d: "La persona será reconocida como contribuyente al proyecto." },
          { t: "6. Complejidad y viabilidad", d: "Las peticiones deben centrarse en proyectos sencillos pero funcionales." },
        ].map((item, i) => (
          <div key={i}>
            <h4 className="font-semibold text-foreground">{item.t}</h4>
            <p className="text-muted-foreground">{item.d}</p>
          </div>
        ))}
      </div>
    </DialogContent>
  </Dialog>
);

const useQueryParam = (param: string) => {
  const { search } = useLocation();
  return new URLSearchParams(search).get(param);
};

const getInitialFormData = () => ({
  nombre: "", email: "", telefono: "", servicio: "", mensaje: "",
  institucion: "", area: "", ubicacion: "", proyecto_nombre: "",
  proyecto_objetivo: "", proyecto_estado: "", proyecto_fechainicio: "",
  proyecto_descripcion: "", tipo_impacto: "", grupos_beneficiados: "",
  estimacion_beneficiarios: "", ubicacion_impacto: "", aliados_colaboradores: "",
  recursos_adicionales: "", plan_seguimiento: "", plan_sustentabilidad: "",
  web_o_redes: "", motivacion: ""
});

const Contacto = () => {
  const [formData, setFormData] = useState(getInitialFormData());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lnaTermsAccepted, setLnaTermsAccepted] = useState(false);

  const planParam = useQueryParam('plan');
  const isLNAGratuito = planParam === 'lna-gratuito' || formData.servicio === 'LNA Gratuito';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'servicio' && value !== 'LNA Gratuito') setLnaTermsAccepted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.servicio || !formData.mensaje) {
      toast.error("Por favor completa todos los campos requeridos");
      return;
    }
    if (isLNAGratuito) {
      if (!formData.institucion || !formData.area || !formData.ubicacion || !formData.proyecto_nombre ||
        !formData.proyecto_objetivo || !formData.proyecto_estado || !formData.proyecto_fechainicio ||
        !formData.proyecto_descripcion || !formData.tipo_impacto || !formData.grupos_beneficiados ||
        !formData.estimacion_beneficiarios || !formData.ubicacion_impacto || !formData.motivacion) {
        toast.error("Completa todos los campos obligatorios del plan gratuito.");
        return;
      }
      if (!lnaTermsAccepted) {
        toast.error("Debes aceptar los términos y condiciones.");
        return;
      }
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', { body: formData });
      if (error) throw error;
      toast.success("¡Mensaje enviado! Te responderemos pronto.");
      setFormData(getInitialFormData());
      setLnaTermsAccepted(false);
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      toast.error("Error al enviar el mensaje. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-2.5 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          badge="Contacto"
          title={isLNAGratuito ? "Solicita tu LNA Gratuito" : "Hablemos de tu proyecto"}
          description={isLNAGratuito
            ? "Presenta tu iniciativa de bien común y recibe una solución digital sin costo."
            : "Estamos listos para escuchar tu idea y convertirla en realidad."
          }
        />

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Form */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {isLNAGratuito ? (
                  <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                    <LNAWizard />
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 md:p-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-6">Envíanos un mensaje</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-1.5">Nombre completo</label>
                        <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} className={inputClass} placeholder="Tu nombre" required />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Correo electrónico</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className={inputClass} placeholder="tu@email.com" required />
                      </div>
                      <div>
                        <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-1.5">Teléfono (opcional)</label>
                        <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleInputChange} className={inputClass} placeholder="Tu número" />
                      </div>
                      <div>
                        <label htmlFor="servicio" className="block text-sm font-medium text-foreground mb-1.5">Servicio de interés</label>
                        <select id="servicio" name="servicio" value={formData.servicio} onChange={handleInputChange} className={inputClass} required>
                          <option value="">Selecciona un servicio</option>
                          <option value="Plan Básico">Plan Básico</option>
                          <option value="Plan Profesional">Plan Profesional</option>
                          <option value="Plan Premium">Plan Premium</option>
                          <option value="LNA Gratuito">LNA Gratuito (bien común)</option>
                          <option value="Otro">Otro / Consulta general</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-1.5">Mensaje</label>
                        <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleInputChange} rows={5} className={inputClass} placeholder="Describe tu idea o problema..." required />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3 px-4 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
                      >
                        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                        {!isSubmitting && <Send className="w-4 h-4" />}
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="rounded-2xl border border-border bg-card p-6 md:p-8 sticky top-24">
                  <h3 className="text-lg font-display font-bold text-foreground mb-6">Información de contacto</h3>
                  <div className="space-y-5">
                    {[
                      { icon: Phone, label: "Teléfono / WhatsApp", value: "56 5368 1237", href: "https://wa.me/5653681237" },
                      { icon: Mail, label: "Correo electrónico", value: "habyopenthedoors@gmail.com", href: "mailto:habyopenthedoors@gmail.com" },
                      { icon: MapPin, label: "Ubicación", value: "Ciudad de México, México" },
                      { icon: Clock, label: "Horario", value: "Lun-Vie, 9:00 - 18:00" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm font-medium text-foreground">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-3">Síguenos</p>
                    <div className="flex gap-3">
                      {[
                        { icon: Facebook, href: "https://facebook.com/habyopenthedoors" },
                        { icon: Instagram, href: "https://instagram.com/habyopenthedoors" },
                        { icon: Twitter, href: "https://x.com/Haby_Open_Doors" },
                        { icon: Youtube, href: "https://youtube.com/@HabyOpenTheDoors" },
                      ].map((s, i) => (
                        <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                          <s.icon className="h-4 w-4" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {isLNAGratuito && (
                    <div className="mt-6 pt-6 border-t border-border">
                      <LNATermsDialog />
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
