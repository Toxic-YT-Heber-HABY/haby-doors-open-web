
import { Input } from "@/components/ui/input";
import { Heart, Users, MapPin, Building, MessageSquare, Info } from "lucide-react";

const LNAStep3_Impact = ({
  data,
  onChange
}: {
  data: any;
  onChange: (fields: any) => void;
}) => (
  <div className="space-y-8">
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-haby-primary to-haby-accent rounded-full mb-4">
        <Heart className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-2xl font-bold text-haby-primary mb-3">Impacto social y comunitario</h2>
      <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Para calificar al plan gratuito, necesitamos verificar que tu proyecto beneficie a la comunidad y tenga un impacto social positivo measurable.
      </p>
    </div>

    <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border border-red-100">
      <div className="flex items-start space-x-3">
        <Info className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="font-semibold text-red-900 mb-1">❤️ Esta es la sección más importante</h3>
          <p className="text-sm text-red-800">
            Aquí demostramos que tu proyecto realmente beneficia a la comunidad. Sé específico con números, ubicaciones y grupos de personas.
          </p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center space-x-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg">
            <Heart className="w-5 h-5 text-purple-600" />
          </div>
          <label className="text-lg font-semibold text-gray-800">
            Área principal de impacto*
          </label>
        </div>
        <select
          name="tipo_impacto"
          value={data.tipo_impacto}
          onChange={e => onChange({ tipo_impacto: e.target.value })}
          className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-base"
          required
        >
          <option value="">Selecciona el área principal...</option>
          <option value="Educación">📚 Educación (acceso a conocimiento, capacitación)</option>
          <option value="Salud">🏥 Salud (bienestar, prevención, acceso a servicios)</option>
          <option value="Cultura">🎨 Cultura (preservación, difusión, expresión artística)</option>
          <option value="Medio ambiente">🌱 Medio ambiente (conservación, sustentabilidad)</option>
          <option value="Inclusión">🤝 Inclusión (equidad, accesibilidad, diversidad)</option>
          <option value="Tecnología">💻 Tecnología social (democratización digital)</option>
          <option value="Otro">🌟 Otro impacto social</option>
        </select>
        <div className="mt-3 p-3 bg-purple-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>¿Por qué es importante?</strong> Nos ayuda a conectarte con evaluadores especializados en tu área y medir el impacto correctamente.
          </p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center space-x-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
            <Users className="w-5 h-5 text-blue-600" />
          </div>
          <label className="text-lg font-semibold text-gray-800">
            ¿Quiénes se benefician directamente?*
          </label>
        </div>
        <Input
          name="grupos_beneficiados"
          value={data.grupos_beneficiados}
          onChange={e => onChange({ grupos_beneficiados: e.target.value })}
          placeholder="Ej: niños de 6-12 años, madres solteras, personas con discapacidad"
          className="text-base h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-100"
          required
        />
        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Sé específico:</strong> Menciona edad, género, situación socioeconómica, o cualquier característica relevante del grupo beneficiado.
          </p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center space-x-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg">
            <Users className="w-5 h-5 text-green-600" />
          </div>
          <label className="text-lg font-semibold text-gray-800">
            Número estimado de beneficiarios*
          </label>
        </div>
        <Input
          name="estimacion_beneficiarios"
          type="number"
          min={1}
          value={data.estimacion_beneficiarios}
          onChange={e => onChange({ estimacion_beneficiarios: e.target.value })}
          placeholder="Ej: 250 (aproximado está bien)"
          className="text-base h-12 border-gray-300 focus:border-green-500 focus:ring-green-100"
          required
        />
        <div className="mt-3 p-3 bg-green-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>No te preocupes por la exactitud:</strong> Una estimación del alcance nos ayuda a dimensionar el impacto potencial y priorizar proyectos.
          </p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center space-x-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-lg">
            <MapPin className="w-5 h-5 text-red-600" />
          </div>
          <label className="text-lg font-semibold text-gray-800">
            Ubicación donde se verá el impacto*
          </label>
        </div>
        <Input
          name="ubicacion_impacto"
          value={data.ubicacion_impacto}
          onChange={e => onChange({ ubicacion_impacto: e.target.value })}
          placeholder="Ej: Colonia Centro, Oaxaca de Juárez"
          className="text-base h-12 border-gray-300 focus:border-red-500 focus:ring-red-100"
          required
        />
        <div className="mt-3 p-3 bg-red-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Sé específico con la ubicación:</strong> Nos permite verificar la pertinencia local y evaluar el contexto socioeconómico.
          </p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow lg:col-span-2">
        <div className="flex items-center space-x-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 bg-yellow-100 rounded-lg">
            <Building className="w-5 h-5 text-yellow-600" />
          </div>
          <label className="text-lg font-semibold text-gray-800">
            Organizaciones aliadas o colaboradores
            <span className="text-sm text-gray-500 font-normal ml-2">(Opcional pero muy valioso)</span>
          </label>
        </div>
        <Input
          name="aliados_colaboradores"
          value={data.aliados_colaboradores}
          onChange={e => onChange({ aliados_colaboradores: e.target.value })}
          placeholder="Ej: Secretaría de Educación local, Universidad UNAM, ONG local"
          className="text-base h-12 border-gray-300 focus:border-yellow-500 focus:ring-yellow-100"
        />
        <div className="mt-3 p-3 bg-yellow-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>¿Por qué es valioso?</strong> Los aliados institucionales fortalecen la viabilidad del proyecto y pueden acelerar su implementación. Aumenta mucho tus posibilidades de aprobación.
          </p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow lg:col-span-2">
        <div className="flex items-center space-x-3 mb-4">
          <div className="flex items-center justify-center w-10 h-10 bg-pink-100 rounded-lg">
            <MessageSquare className="w-5 h-5 text-pink-600" />
          </div>
          <label className="text-lg font-semibold text-gray-800">
            ¿Por qué necesitas el plan gratuito?* 
            <span className="font-normal text-sm text-gray-600">(Esta respuesta es clave para tu aprobación)</span>
          </label>
        </div>
        <textarea
          name="motivacion"
          rows={6}
          value={data.motivacion}
          onChange={e => onChange({ motivacion: e.target.value })}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-base"
          placeholder="Sé honesto y específico sobre tu situación. Ejemplo:

'Somos una organización sin fines de lucro con presupuesto limitado de $2,000 pesos mensuales. Este proyecto beneficiaría a 150 familias de bajos recursos que no tienen acceso a internet para trámites gubernamentales. No tenemos recursos para contratar desarrollo privado (cotizamos $50,000 pesos), pero sí tenemos el compromiso, 3 voluntarios capacitados y la estructura para implementar y mantener la solución durante al menos 3 años...'"
          required
        />
        <div className="mt-3 p-3 bg-pink-50 rounded-lg">
          <div className="space-y-2">
            <p className="text-sm text-gray-700 font-semibold">
              🎯 ¿Qué incluir para aumentar tus posibilidades?
            </p>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li><strong>Situación económica:</strong> Presupuesto real, por qué no pueden pagar desarrollo privado</li>
              <li><strong>Impacto social:</strong> Cómo beneficia específicamente a la comunidad</li>
              <li><strong>Compromiso:</strong> Plan de mantenimiento, equipo disponible, tiempo de vida del proyecto</li>
              <li><strong>Urgencia:</strong> Si hay fechas límite o necesidades apremiantes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LNAStep3_Impact;
