import { toast } from "sonner";

type FormData = {
  nombre: string;
  email: string;
  telefono: string;
  institucion: string;
  area: string;
  ubicacion: string;
  proyecto_nombre: string;
  proyecto_objetivo: string;
  proyecto_estado: string;
  proyecto_fechainicio: string;
  proyecto_descripcion: string;
  tipo_impacto: string;
  grupos_beneficiados: string;
  estimacion_beneficiarios: string;
  ubicacion_impacto: string;
  aliados_colaboradores: string;
  recursos_adicionales: string;
  plan_seguimiento: string;
  plan_sustentabilidad: string;
  web_o_redes: string;
  motivacion: string;
  mensaje: string;
  servicio: string;
};

export const useWizardValidation = () => {
  const validateStep = (step: number, data: FormData, lnaTermsAccepted: boolean) => {
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

  return { validateStep };
};