
import { Input } from "@/components/ui/input";
import { Help } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

const tips = {
  nombre: "Ingresa tu nombre completo como aparece en identificaciones oficiales o como deseas ser contactado.",
  email: "El correo debe ser válido. Nos comunicaremos contigo por este medio, así que revisa que esté escrito correctamente.",
  telefono: "Opcional. Puedes dejar un número al que podamos contactarte si hay dudas respecto a tu solicitud.",
};

const LNAStep1_UserInfo = ({
  data,
  onChange
}: {
  data: any;
  onChange: (fields: any) => void;
}) => (
  <TooltipProvider>
    <div>
      <h2 className="text-xl font-bold text-haby-primary mb-2">¡Comienza tu solicitud gratuita!</h2>
      <p className="text-gray-600 mb-6">Por favor ingresa tus datos de contacto. Recuerda que HABY se compromete a usarlos solo para responder tu solicitud y nunca compartirlos con terceros.</p>
      <div className="grid grid-cols-1 gap-5">

        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            Nombre completo*
            <Tooltip>
              <TooltipTrigger asChild>
                <span tabIndex={0} className="ml-1 cursor-help rounded-full bg-gray-100 p-0.5"><Help size={16} className="text-haby-primary" /></span>
              </TooltipTrigger>
              <TooltipContent side="top">{tips.nombre}</TooltipContent>
            </Tooltip>
          </label>
          <Input
            id="nombre"
            name="nombre"
            type="text"
            value={data.nombre}
            onChange={e => onChange({ nombre: e.target.value })}
            placeholder="Ejemplo: Ana Sofía Gutiérrez"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            Correo electrónico*
            <Tooltip>
              <TooltipTrigger asChild>
                <span tabIndex={0} className="ml-1 cursor-help rounded-full bg-gray-100 p-0.5"><Help size={16} className="text-haby-primary" /></span>
              </TooltipTrigger>
              <TooltipContent side="top">{tips.email}</TooltipContent>
            </Tooltip>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={data.email}
            onChange={e => onChange({ email: e.target.value })}
            placeholder="Ejemplo: tuemail@email.com"
            required
          />
        </div>

        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            Teléfono <span className="text-xs text-gray-400">(opcional)</span>
            <Tooltip>
              <TooltipTrigger asChild>
                <span tabIndex={0} className="ml-1 cursor-help rounded-full bg-gray-100 p-0.5"><Help size={16} className="text-haby-primary" /></span>
              </TooltipTrigger>
              <TooltipContent side="top">{tips.telefono}</TooltipContent>
            </Tooltip>
          </label>
          <Input
            id="telefono"
            name="telefono"
            type="tel"
            value={data.telefono}
            onChange={e => onChange({ telefono: e.target.value })}
            placeholder="Ejemplo: 5612345678"
          />
        </div>
      </div>
    </div>
  </TooltipProvider>
);

export default LNAStep1_UserInfo;
