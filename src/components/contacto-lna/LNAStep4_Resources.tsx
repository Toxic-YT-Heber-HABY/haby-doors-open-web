
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";

const tips = {
  recursos_adicionales: "Menciona si cuentas con algún apoyo extra como donaciones, voluntarios, subsidios, etc. Si no tienes actualmente, puedes dejarlo en blanco.",
  web_o_redes: "Comparte el enlace al sitio web o perfiles de redes sociales del proyecto, si existen.",
  plan_seguimiento: "Describe brevemente cómo planeas medir o hacer seguimiento al impacto del proyecto. Ejemplo: encuestas, registros, testimonios.",
  plan_sustentabilidad: "Comenta cuál es el plan para que el proyecto continúe funcionando después de la fase inicial o si existen planes de auto-sustentabilidad."
};

const LNAStep4_Resources = ({
  data,
  onChange
}: {
  data: any;
  onChange: (fields: any) => void;
}) => (
  <TooltipProvider>
    <div>
      <h2 className="text-xl font-bold text-haby-primary mb-2">Recursos y sustentabilidad</h2>
      <p className="text-gray-600 mb-6">Estos datos nos ayudan a conocer cómo tu proyecto se mantendrá a largo plazo.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            Apoyos adicionales
            <Tooltip>
              <TooltipTrigger asChild>
                <span tabIndex={0} className="ml-1 cursor-help rounded-full bg-gray-100 p-0.5">
                  <HelpCircle size={16} className="text-haby-primary" />
                </span>
              </TooltipTrigger>
              <TooltipContent side="top">{tips.recursos_adicionales}</TooltipContent>
            </Tooltip>
          </label>
          <Input
            name="recursos_adicionales"
            value={data.recursos_adicionales}
            onChange={e => onChange({ recursos_adicionales: e.target.value })}
            placeholder="Donaciones, voluntarios, etc."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            Sitio web o redes sociales del proyecto
            <Tooltip>
              <TooltipTrigger asChild>
                <span tabIndex={0} className="ml-1 cursor-help rounded-full bg-gray-100 p-0.5">
                  <HelpCircle size={16} className="text-haby-primary" />
                </span>
              </TooltipTrigger>
              <TooltipContent side="top">{tips.web_o_redes}</TooltipContent>
            </Tooltip>
          </label>
          <Input
            name="web_o_redes"
            value={data.web_o_redes}
            onChange={e => onChange({ web_o_redes: e.target.value })}
            placeholder="https://tuproyecto.org"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            ¿Cómo dará seguimiento al impacto?
            <Tooltip>
              <TooltipTrigger asChild>
                <span tabIndex={0} className="ml-1 cursor-help rounded-full bg-gray-100 p-0.5">
                  <HelpCircle size={16} className="text-haby-primary" />
                </span>
              </TooltipTrigger>
              <TooltipContent side="top">{tips.plan_seguimiento}</TooltipContent>
            </Tooltip>
          </label>
          <Input
            name="plan_seguimiento"
            value={data.plan_seguimiento}
            onChange={e => onChange({ plan_seguimiento: e.target.value })}
            placeholder="¿Cómo medir resultados?"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            Plan de sustentabilidad
            <Tooltip>
              <TooltipTrigger asChild>
                <span tabIndex={0} className="ml-1 cursor-help rounded-full bg-gray-100 p-0.5">
                  <HelpCircle size={16} className="text-haby-primary" />
                </span>
              </TooltipTrigger>
              <TooltipContent side="top">{tips.plan_sustentabilidad}</TooltipContent>
            </Tooltip>
          </label>
          <Input
            name="plan_sustentabilidad"
            value={data.plan_sustentabilidad}
            onChange={e => onChange({ plan_sustentabilidad: e.target.value })}
            placeholder="¿Cómo seguirá el proyecto después?"
          />
        </div>
      </div>
    </div>
  </TooltipProvider>
);

export default LNAStep4_Resources;
