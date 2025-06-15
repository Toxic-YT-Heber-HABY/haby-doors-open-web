import { useState } from "react";
import LNAStep1_UserInfo from "./LNAStep1_UserInfo";
import LNAStep2_Project from "./LNAStep2_Project";
import LNAStep3_Impact from "./LNAStep3_Impact";
import LNAStep4_Resources from "./LNAStep4_Resources";
import LNAStep5_Confirm from "./LNAStep5_Confirm";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";

const initialData = {
  nombre: "",
  email: "",
  telefono: "",
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
  motivacion: "",
  mensaje: "",
  servicio: "LNA Gratuito"
};

const steps = [
  { title: "Datos personales", component: LNAStep1_UserInfo, icon: "👤" },
  { title: "Tu organización y proyecto", component: LNAStep2_Project, icon: "🏢" },
  { title: "Impacto social o comunitario", component: LNAStep3_Impact, icon: "❤️" },
  { title: "Recursos y sustentabilidad", component: LNAStep4_Resources, icon: "⚙️" },
  { title: "Mensaje y confirmación", component: LNAStep5_Confirm, icon: "✅" }
];

const LNAWizard = () => {
  const [data, setData] = useState(initialData);
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lnaTermsAccepted, setLnaTermsAccepted] = useState(false);

  const StepComponent = steps[step].component;

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const handleChange = (fields: Partial<typeof initialData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  const isLastStep = step === steps.length - 1;
  const isFirstStep = step === 0;

  // Validación simple por paso (puede ser mejorada por step)
  const validateStep = () => {
    switch (step) {
      case 0:
        if (!data.nombre || !data.email) {
          toast.error("Completa tu nombre y correo.");
          return false;
        }
        break;
      case 1:
        if (
          !data.institucion ||
          !data.area ||
          !data.ubicacion ||
          !data.proyecto_nombre ||
          !data.proyecto_objetivo ||
          !data.proyecto_estado ||
          !data.proyecto_fechainicio ||
          !data.proyecto_descripcion
        ) {
          toast.error("Completa todos los campos de tu organización y proyecto.");
          return false;
        }
        break;
      case 2:
        if (
          !data.tipo_impacto ||
          !data.grupos_beneficiados ||
          !data.estimacion_beneficiarios ||
          !data.ubicacion_impacto ||
          !data.motivacion
        ) {
          toast.error("Completa los campos de impacto social/comunitario.");
          return false;
        }
        break;
      case 4: // Confirmación
        if (!lnaTermsAccepted) {
          toast.error("Debes aceptar los términos y condiciones.");
          return false;
        }
        if (!data.mensaje) {
          toast.error("Por favor escribe un mensaje contextual.");
          return false;
        }
        break;
    }
    return true;
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) next();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: data
      });
      if (error) {
        toast.error("Error al enviar el mensaje.");
      } else {
        toast.success("¡Solicitud enviada! Gracias por confiar en HABY.");
        setData(initialData);
        setStep(0);
        setLnaTermsAccepted(false);
      }
    } catch (err) {
      toast.error("No se pudo enviar. Intenta más tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-8 bg-white rounded-3xl shadow-2xl overflow-hidden">
      {/* Header with progress */}
      <div className="bg-gradient-to-r from-haby-primary to-haby-accent px-8 py-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold">Plan Gratuito HABY</h1>
            <p className="text-sm opacity-90">Solicitud paso a paso</p>
          </div>
          <div className="text-right">
            <div className="text-2xl mb-1">{steps[step].icon}</div>
            <div className="text-sm opacity-90">Paso {step + 1} de {steps.length}</div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="relative">
          <div className="flex justify-between items-center mb-2">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold transition-all duration-300 ${
                  step >= i 
                    ? "bg-white text-haby-primary shadow-lg scale-110" 
                    : "bg-white/20 text-white/70"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
          <div className="flex items-center">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-2 flex-1 mx-1 rounded-full transition-all duration-500 ${
                  step >= i ? "bg-white shadow-sm" : "bg-white/20"
                }`}
              />
            ))}
          </div>
          <div className="text-center mt-3">
            <p className="text-sm font-medium opacity-95">{steps[step].title}</p>
          </div>
        </div>
      </div>

      {/* Form content */}
      <form
        className="px-8 py-8"
        onSubmit={isLastStep ? handleSubmit : handleNext}
        autoComplete="off"
      >
        <div className="min-h-[600px]">
          {step === 4 ? (
            <LNAStep5_Confirm
              data={data}
              onChange={handleChange}
              lnaTermsAccepted={lnaTermsAccepted}
              setLnaTermsAccepted={setLnaTermsAccepted}
            />
          ) : (
            <StepComponent
              data={data}
              onChange={handleChange}
            />
          )}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
          {!isFirstStep ? (
            <button
              type="button"
              onClick={prev}
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Atrás
            </button>
          ) : <div />}
          
          <button
            type="submit"
            className={`inline-flex items-center px-8 py-3 font-semibold text-white rounded-xl transition-all duration-200 ${
              isLastStep 
                ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl" 
                : "bg-gradient-to-r from-haby-primary to-haby-accent hover:from-haby-accent hover:to-haby-primary shadow-lg hover:shadow-xl"
            } ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:scale-105"}`}
            disabled={isSubmitting}
          >
            {isLastStep ? (
              <>
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar solicitud
                  </>
                )}
              </>
            ) : (
              <>
                Siguiente
                <ChevronRight className="w-4 h-4 ml-2" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LNAWizard;
