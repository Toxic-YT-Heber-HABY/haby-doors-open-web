
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";

const tips = {
  tipo_impacto: "Selecciona el tipo de impacto principal de tu proyecto. Ejemplo: Educación, Salud, Cultura, Medio ambiente, etc. Indica el enfoque global del beneficio.",
  grupos_beneficiados: "Especifica qué grupos o comunidades se beneficiarán directamente de tu proyecto. Ejemplo: niños, mujeres, comunidad local, estudiantes, etc.",
  estimacion_beneficiarios: "Ingresa una estimación numérica de las personas que podrían beneficiarse de tu proyecto. Ejemplo: 50, 200.",
  ubicacion_impacto: "Escribe la ciudad, localidad o región donde se notará el impacto del proyecto.",
  aliados_colaboradores: "Opcional. Menciona organizaciones, colaboradores o aliados que apoyan tu iniciativa.",
  motivacion: "Explica con claridad por qué solicitas el plan gratuito y cuál es la motivación social o comunitaria detrás de tu proyecto. Sé breve y específico."
};

const LNAStep3_Impact = ({
  data,
  onChange
}: {
  data: any;
  onChange: (fields: any) => void;
}) => (
  <TooltipProvider>
    <div>
      <h2 className="text-xl font-bold text-haby-primary mb-2">Impacto social/comunitario</h2>
      <p className="text-gray-600 mb-6">Este bloque busca entender cómo tu proyecto beneficiará a otros.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            Tipo de impacto*
            <Tooltip>
              <TooltipTrigger asChild>
                <span tabIndex={0} className="ml-1 cursor-help rounded-full bg-gray-100 p-0.5">
                  <HelpCircle size={16} className="text-haby-primary" />
                </span>
              </TooltipTrigger>
              <TooltipContent side="top">{tips.tipo_impacto}</TooltipContent>
            </Tooltip>
          </label>
          <select
            name="tipo_impacto"
            value={data.tipo_impacto}
            onChange={e => onChange({ tipo_impacto: e.target.value })}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-haby-primary"
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
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            Grupo(s) beneficiado(s)*
            <Tooltip>
              <TooltipTrigger asChild>
                <span tabIndex={0} className="ml-1 cursor-help rounded-full bg-gray-100 p-0.5">
                  <HelpCircle size={16} className="text-haby-primary" />
                </span>
              </TooltipTrigger>
              <TooltipContent side="top">{tips.grupos_beneficiados}</TooltipContent>
            </Tooltip>
          </label>
          <Input
            name="grupos_beneficiados"
            value={data.grupos_beneficiados}
            onChange={e => onChange({ grupos_beneficiados: e.target.value })}
            placeholder="Ej: niños, comunidad local..."
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            Personas beneficiadas*
            <Tooltip>
              <TooltipTrigger asChild>
                <span tabIndex={0} className="ml-1 cursor-help rounded-full bg-gray-100 p-0.5">
                  <HelpCircle size={16} className="text-haby-primary" />
                </span>
              </TooltipTrigger>
              <TooltipContent side="top">{tips.estimacion_beneficiarios}</TooltipContent>
            </Tooltip>
          </label>
          <Input
            name="estimacion_beneficiarios"
            type="number"
            min={1}
            value={data.estimacion_beneficiarios}
            onChange={e => onChange({ estimacion_beneficiarios: e.target.value })}
            placeholder="Ej: 250"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            Ubicación del impacto*
            <Tooltip>
              <TooltipTrigger asChild>
                <span tabIndex={0} className="ml-1 cursor-help rounded-full bg-gray-100 p-0.5">
                  <HelpCircle size={16} className="text-haby-primary" />
                </span>
              </TooltipTrigger>
              <TooltipContent side="top">{tips.ubicacion_impacto}</TooltipContent>
            </Tooltip>
          </label>
          <Input
            name="ubicacion_impacto"
            value={data.ubicacion_impacto}
            onChange={e => onChange({ ubicacion_impacto: e.target.value })}
            placeholder="Ciudad/localidad"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            Aliados / colaboradores
            <Tooltip>
              <TooltipTrigger asChild>
                <span tabIndex={0} className="ml-1 cursor-help rounded-full bg-gray-100 p-0.5">
                  <HelpCircle size={16} className="text-haby-primary" />
                </span>
              </TooltipTrigger>
              <TooltipContent side="top">{tips.aliados_colaboradores}</TooltipContent>
            </Tooltip>
          </label>
          <Input
            name="aliados_colaboradores"
            value={data.aliados_colaboradores}
            onChange={e => onChange({ aliados_colaboradores: e.target.value })}
            placeholder="ONGs, instituciones aliadas..."
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            ¿Por qué solicita el plan gratuito?* <span className="font-normal text-xs">(breve y claro)</span>
            <Tooltip>
              <TooltipTrigger asChild>
                <span tabIndex={0} className="ml-1 cursor-help rounded-full bg-gray-100 p-0.5">
                  <HelpCircle size={16} className="text-haby-primary" />
                </span>
              </TooltipTrigger>
              <TooltipContent side="top">{tips.motivacion}</TooltipContent>
            </Tooltip>
          </label>
          <textarea
            name="motivacion"
            rows={3}
            value={data.motivacion}
            onChange={e => onChange({ motivacion: e.target.value })}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-haby-primary"
            placeholder="Explica la motivación social/comunitaria..."
            required
          />
        </div>
      </div>
    </div>
  </TooltipProvider>
);

export default LNAStep3_Impact;
