
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
    <p className="text-gray-600 mb-6">Por favor ingresa tus datos de contacto. Recuerda que HABY se compromete a usarlos solo para responder tu solicitud y nunca compartirlos con terceros.</p>
    <div className="grid grid-cols-1 gap-5">
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo*</label>
        <Input
          id="nombre"
          name="nombre"
          type="text"
          value={data.nombre}
          onChange={e => onChange({ nombre: e.target.value })}
          placeholder="Tu nombre completo"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico*</label>
        <Input
          id="email"
          name="email"
          type="email"
          value={data.email}
          onChange={e => onChange({ email: e.target.value })}
          placeholder="tucorreo@email.com"
          required
        />
      </div>
      <div>
        <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">Teléfono (opcional)</label>
        <Input
          id="telefono"
          name="telefono"
          type="tel"
          value={data.telefono}
          onChange={e => onChange({ telefono: e.target.value })}
          placeholder="Ej: 5612345678"
        />
      </div>
    </div>
  </div>
);

export default LNAStep1_UserInfo;
