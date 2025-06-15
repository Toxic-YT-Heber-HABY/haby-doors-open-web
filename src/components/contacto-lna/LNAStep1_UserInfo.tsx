
import { Input } from "@/components/ui/input";

const LNAStep1_UserInfo = ({
  data,
  onChange
}: {
  data: any;
  onChange: (fields: any) => void;
}) => (
  <div>
    <h2 className="text-xl font-bold text-haby-primary mb-2">¡Comienza tu solicitud gratuita!</h2>
    <p className="text-gray-600 mb-6">
      Por favor ingresa tus datos de contacto. HABY se compromete a usarlos únicamente para responder tu solicitud y nunca compartirlos con terceros.
    </p>
    <div className="grid grid-cols-1 gap-6">

      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
          Nombre completo*
        </label>
        <Input
          id="nombre"
          name="nombre"
          type="text"
          value={data.nombre}
          onChange={e => onChange({ nombre: e.target.value })}
          placeholder="Ej: María Elena González Rodríguez"
          required
        />
        <p className="text-xs text-gray-500 mt-1">
          Ingresa tu nombre como aparece en documentos oficiales. Nos ayuda a personalizar la comunicación contigo.
        </p>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Correo electrónico*
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={data.email}
          onChange={e => onChange({ email: e.target.value })}
          placeholder="Ej: maria.gonzalez@ejemplo.com"
          required
        />
        <p className="text-xs text-gray-500 mt-1">
          Tu correo principal de contacto. Por aquí te enviaremos la respuesta a tu solicitud y cualquier seguimiento necesario.
        </p>
      </div>

      <div>
        <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
          Teléfono <span className="text-xs text-gray-400 font-normal">(opcional)</span>
        </label>
        <Input
          id="telefono"
          name="telefono"
          type="tel"
          value={data.telefono}
          onChange={e => onChange({ telefono: e.target.value })}
          placeholder="Ej: +52 55 1234 5678"
        />
        <p className="text-xs text-gray-500 mt-1">
          Un número donde podamos contactarte si tenemos dudas urgentes sobre tu proyecto.
        </p>
      </div>
    </div>
  </div>
);

export default LNAStep1_UserInfo;
