import { useState } from "react";
import LNAStep1_UserInfo from "./LNAStep1_UserInfo";
import LNAStep2_Project from "./LNAStep2_Project";
import LNAStep3_Impact from "./LNAStep3_Impact";
import LNAStep4_Resources from "./LNAStep4_Resources";
import LNAStep5_Confirm from "./LNAStep5_Confirm";
import WizardHeader from "./WizardHeader";
import WizardNavigation from "./WizardNavigation";
import { useWizardValidation } from "./useWizardValidation";
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
  const { validateStep } = useWizardValidation();

  const StepComponent = steps[step].component;

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const handleChange = (fields: Partial<typeof initialData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  const isLastStep = step === steps.length - 1;
  const isFirstStep = step === 0;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(step, data, lnaTermsAccepted)) next();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(step, data, lnaTermsAccepted)) return;
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
      <WizardHeader steps={steps} currentStep={step} />

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

        <WizardNavigation
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          isSubmitting={isSubmitting}
          onPrev={prev}
          onNext={handleNext}
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
};

export default LNAWizard;
