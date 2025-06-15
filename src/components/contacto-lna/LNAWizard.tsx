
import { useState } from "react";
import LNAStep1_UserInfo from "./LNAStep1_UserInfo";
import LNAStep2_Project from "./LNAStep2_Project";
import LNAStep3_Impact from "./LNAStep3_Impact";
import LNAStep4_Resources from "./LNAStep4_Resources";
import LNAStep5_Confirm from "./LNAStep5_Confirm";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

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
  { title: "Datos personales", component: LNAStep1_UserInfo },
  { title: "Tu organización y proyecto", component: LNAStep2_Project },
  { title: "Impacto social o comunitario", component: LNAStep3_Impact },
  { title: "Recursos y sustentabilidad", component: LNAStep4_Resources },
  { title: "Mensaje y confirmación", component: LNAStep5_Confirm }
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

  // Envía el formulario completo a supabase
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
    <div className="max-w-2xl mx-auto my-8 bg-white p-0 rounded-2xl shadow-lg">
      <div className="border-b px-8 py-6">
        <div className="font-semibold text-haby-accent mb-1">Plan Gratuito: Solicitud por pasos</div>
        <div className="flex items-center">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className={`flex-1 h-2 mx-0.5 rounded-full transition-all duration-300 ${step >= i ? "bg-haby-primary" : "bg-gray-200"}`}
              aria-label={`Paso ${i + 1}: ${s.title}`}
            />
          ))}
        </div>
        <div className="text-xs text-gray-500 mt-2">Paso {step + 1} de {steps.length}: <span className="font-medium text-gray-700">{steps[step].title}</span></div>
      </div>
      <form
        className="px-8 py-8 space-y-8"
        onSubmit={isLastStep ? handleSubmit : handleNext}
        autoComplete="off"
      >
        {step === 4 ? (
          <StepComponent
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
        <div className="flex justify-between items-center mt-4 gap-4">
          {!isFirstStep ? (
            <button
              type="button"
              onClick={prev}
              className="bg-gray-100 px-4 py-2.5 rounded-md text-gray-700 font-medium hover:bg-gray-200"
            >
              Atrás
            </button>
          ) : <div />}
          <button
            type="submit"
            className={`px-6 py-2.5 rounded-md font-semibold text-white transition-colors ${isLastStep ? "bg-haby-accent hover:bg-haby-primary" : "bg-haby-primary hover:bg-haby-accent"} ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
            disabled={isSubmitting}
          >
            {isLastStep
              ? isSubmitting ? "Enviando..." : "Enviar solicitud"
              : "Siguiente"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LNAWizard;

