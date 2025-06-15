
import { Input } from "@/components/ui/input";
import { User, Mail, Phone, Info } from "lucide-react";

const LNAStep1_UserInfo = ({
  data,
  onChange
}: {
  data: any;
  onChange: (fields: any) => void;
}) => (
  <div className="space-y-8">
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-haby-primary to-haby-accent rounded-full mb-4">
        <User className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-2xl font-bold text-haby-primary mb-3">¡Comienza tu solicitud gratuita!</h2>
      <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Por favor ingresa tus datos de contacto. HABY se compromete a usarlos únicamente para responder tu solicitud y nunca compartirlos con terceros.
      </p>
    </div>

    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100">
      <div className="flex items-start space-x-3">
        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="font-semibold text-blue-900 mb-1">🔒 Tu privacidad es nuestra prioridad</h3>
          <p className="text-sm text-blue-800">
            Toda la información que compartas será tratada con absoluta confidencialidad y solo será utilizada para evaluar tu solicitud del plan gratuito.
          </p>
        </div>
      </div>
    </div>

    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center space-x-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 bg-haby-primary/10 rounded-lg">
            <User className="w-5 h-5 text-haby-primary" />
          </div>
          <label htmlFor="nombre" className="text-lg font-semibold text-gray-800">
            Nombre completo*
          </label>
        </div>
        <Input
          id="nombre"
          name="nombre"
          type="text"
          value={data.nombre}
          onChange={e => onChange({ nombre: e.target.value })}
          placeholder="Ej: María Elena González Rodríguez"
          className="text-base h-12 border-gray-300 focus:border-haby-primary focus:ring-haby-primary/20"
          required
        />
        <div className="mt-3 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>¿Por qué lo necesitamos?</strong> Tu nombre completo nos permite personalizar la comunicación y generar documentos oficiales si tu proyecto es aprobado.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center space-x-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg">
            <Mail className="w-5 h-5 text-green-600" />
          </div>
          <label htmlFor="email" className="text-lg font-semibold text-gray-800">
            Correo electrónico*
          </label>
        </div>
        <Input
          id="email"
          name="email"
          type="email"
          value={data.email}
          onChange={e => onChange({ email: e.target.value })}
          placeholder="Ej: maria.gonzalez@ejemplo.com"
          className="text-base h-12 border-gray-300 focus:border-green-500 focus:ring-green-100"
          required
        />
        <div className="mt-3 p-3 bg-green-50 rounded-lg">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>¿Para qué lo usamos?</strong> Es nuestro canal principal de comunicación. Te enviaremos la respuesta a tu solicitud, actualizaciones del proyecto y material de apoyo.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center space-x-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-lg">
            <Phone className="w-5 h-5 text-orange-600" />
          </div>
          <label htmlFor="telefono" className="text-lg font-semibold text-gray-800">
            Teléfono 
            <span className="text-sm text-gray-500 font-normal ml-2">(opcional, pero recomendado)</span>
          </label>
        </div>
        <Input
          id="telefono"
          name="telefono"
          type="tel"
          value={data.telefono}
          onChange={e => onChange({ telefono: e.target.value })}
          placeholder="Ej: +52 55 1234 5678"
          className="text-base h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-100"
        />
        <div className="mt-3 p-3 bg-orange-50 rounded-lg">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>¿Cuándo lo contactamos?</strong> Solo para dudas urgentes durante el desarrollo o si no podemos comunicarnos por correo. Nunca para marketing.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default LNAStep1_UserInfo;
