
import { Input } from "@/components/ui/input";
import { HelpCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

const tips = {
  institucion: "Ingresa el nombre completo de tu organización, institución, colectivo o grupo responsable del proyecto.",
  area: "¿A qué sector pertenece la organización? Ejemplo: salud, educación, cultura, tecnología...",
  ubicacion: "Ciudad y país donde tiene presencia principal la organización o en donde reside el proyecto.",
  proyecto_nombre: "Nombre o título del proyecto. Debe ser claro y representativo.",
  proyecto_objetivo: "¿Cuál es el objetivo principal del proyecto? Redacta una frase breve y concreta.",
  proyecto_fechainicio: "Selecciona la fecha estimada de inicio o cuándo inició el proyecto.",
  proyecto_estado: "Selecciona el estado actual del proyecto. Por ejemplo: solo idea, en planeación, en curso, con resultados iniciales, consolidado.",
  proyecto_descripcion: "Describe el proyecto de forma concisa. ¿Qué hace? ¿A quién beneficia? Proporciónanos información clara para poder entender el alcance."
};

const LNAStep2_Project = ({
  data,
  onChange
}: {
  data: any;
  onChange: (fields: any) => void;
}) => (
  <TooltipProvider>
    <div>
      <h2 className="text-xl font-bold text-haby-primary mb-2">Sobre tu organización y proyecto</h2>
      <p className="text-gray-600 mb-6">
        Queremos conocer mejor el contexto de tu iniciativa para asegurarnos de que cumpla con el enfoque de bien común.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            Organización, institución o colectivo*
            <Tooltip>
              <TooltipTrigger asChild>
                <span tabIndex={0} className="ml-1 cursor-help rounded-full bg-gray-100 p-0.5">
                  <HelpCircle size={16} className="text-haby-primary" />
                </span>
              </TooltipTrigger>
              <TooltipContent side="top">{tips.institucion}</TooltipContent>
            </Tooltip>
          </label>
          <Input
            name="institucion"
            value={data.institucion}
            onChange={e => onChange({ institucion: e.target.value })}
            placeholder="Nombre organización"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            Área o sector*
            <Tooltip>
              <TooltipTrigger asChild>
                <span tabIndex={0} className="ml-1 cursor-help rounded-full bg-gray-100 p-0.5">
                  <HelpCircle size={16} className="text-haby-primary" />
                </span>
              </TooltipTrigger>
              <TooltipContent side="top">{tips.area}</TooltipContent>
            </Tooltip>
          </label>
          <Input
            name="area"
            value={data.area}
            onChange={e => onChange({ area: e.target.value })}
            placeholder="Ej: salud, educación, cultura..."
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            Ubicación institucional*
            <Tooltip>
              <TooltipTrigger asChild>
                <span tabIndex={0} className="ml-1 cursor-help rounded-full bg-gray-100 p-0.5">
                  <HelpCircle size={16} className="text-haby-primary" />
                </span>
              </TooltipTrigger>
              <TooltipContent side="top">{tips.ubicacion}</TooltipContent>
            </Tooltip>
          </label>
          <Input
            name="ubicacion"
            value={data.ubicacion}
            onChange={e => onChange({ ubicacion: e.target.value })}
            placeholder="Ciudad, país"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            Nombre del proyecto*
            <Tooltip>
              <TooltipTrigger asChild>
                <span tabIndex={0} className="ml-1 cursor-help rounded-full bg-gray-100 p-0.5">
                  <HelpCircle size={16} className="text-haby-primary" />
                </span>
              </TooltipTrigger>
              <TooltipContent side="top">{tips.proyecto_nombre}</TooltipContent>
            </Tooltip>
          </label>
          <Input
            name="proyecto_nombre"
            value={data.proyecto_nombre}
            onChange={e => onChange({ proyecto_nombre: e.target.value })}
            placeholder="Ej: Biblioteca digital"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            Objetivo principal*
            <Tooltip>
              <TooltipTrigger asChild>
                <span tabIndex={0} className="ml-1 cursor-help rounded-full bg-gray-100 p-0.5">
                  <HelpCircle size={16} className="text-haby-primary" />
                </span>
              </TooltipTrigger>
              <TooltipContent side="top">{tips.proyecto_objetivo}</TooltipContent>
            </Tooltip>
          </label>
          <Input
            name="proyecto_objetivo"
            value={data.proyecto_objetivo}
            onChange={e => onChange({ proyecto_objetivo: e.target.value })}
            placeholder="¿Cuál es el objetivo?"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            Fecha prevista de inicio*
            <Tooltip>
              <TooltipTrigger asChild>
                <span tabIndex={0} className="ml-1 cursor-help rounded-full bg-gray-100 p-0.5">
                  <HelpCircle size={16} className="text-haby-primary" />
                </span>
              </TooltipTrigger>
              <TooltipContent side="top">{tips.proyecto_fechainicio}</TooltipContent>
            </Tooltip>
          </label>
          <Input
            name="proyecto_fechainicio"
            type="date"
            value={data.proyecto_fechainicio}
            onChange={e => onChange({ proyecto_fechainicio: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            Estado del proyecto*
            <Tooltip>
              <TooltipTrigger asChild>
                <span tabIndex={0} className="ml-1 cursor-help rounded-full bg-gray-100 p-0.5">
                  <HelpCircle size={16} className="text-haby-primary" />
                </span>
              </TooltipTrigger>
              <TooltipContent side="top">{tips.proyecto_estado}</TooltipContent>
            </Tooltip>
          </label>
          <select
            name="proyecto_estado"
            value={data.proyecto_estado}
            onChange={e => onChange({ proyecto_estado: e.target.value })}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-haby-primary"
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
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            Descripción breve*
            <Tooltip>
              <TooltipTrigger asChild>
                <span tabIndex={0} className="ml-1 cursor-help rounded-full bg-gray-100 p-0.5">
                  <HelpCircle size={16} className="text-haby-primary" />
                </span>
              </TooltipTrigger>
              <TooltipContent side="top">{tips.proyecto_descripcion}</TooltipContent>
            </Tooltip>
          </label>
          <textarea
            name="proyecto_descripcion"
            rows={3}
            value={data.proyecto_descripcion}
            onChange={e => onChange({ proyecto_descripcion: e.target.value })}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-haby-primary"
            placeholder="Describe claramente tu proyecto y a quién beneficia"
            required
          />
        </div>
      </div>
    </div>
  </TooltipProvider>
);

export default LNAStep2_Project;

