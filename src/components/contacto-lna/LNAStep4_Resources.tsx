
import { Input } from "@/components/ui/input";
import { Cog, Globe, TrendingUp, Shield, Info } from "lucide-react";

const LNAStep4_Resources = ({
  data,
  onChange
}: {
  data: any;
  onChange: (fields: any) => void;
}) => (
  <div className="space-y-8">
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-haby-primary to-haby-accent rounded-full mb-4">
        <Cog className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-2xl font-bold text-haby-primary mb-3">Recursos y plan de sustentabilidad</h2>
      <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Necesitamos conocer qué recursos tienes disponibles y cómo planeas mantener el proyecto funcionando a largo plazo. Esto nos ayuda a diseñar una solución viable y sostenible.
      </p>
    </div>

    <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl border border-green-100">
      <div className="flex items-start space-x-3">
        <Info className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="font-semibold text-green-900 mb-1">🚀 ¿Por qué es importante la sustentabilidad?</h3>
          <p className="text-sm text-green-800">
            Un proyecto que no se mantiene activo pierde su impacto. Queremos asegurarnos de que tu proyecto siga beneficiando a la comunidad por años.
          </p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center space-x-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg">
            <Cog className="w-5 h-5 text-purple-600" />
          </div>
          <label className="text-lg font-semibold text-gray-800">
            Recursos adicionales disponibles
            <span className="text-sm text-gray-500 font-normal block">Personas, fondos, espacios, etc.</span>
          </label>
        </div>
        <Input
          name="recursos_adicionales"
          value={data.recursos_adicionales}
          onChange={e => onChange({ recursos_adicionales: e.target.value })}
          placeholder="Ej: 2 voluntarios programadores, donación mensual de $500, oficina propia"
          className="text-base h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-100"
        />
        <div className="mt-3 p-3 bg-purple-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>¿Qué incluir?</strong> Voluntarios, donaciones, espacios, equipos, alianzas. Si no tienes recursos extra, déjalo en blanco - no es problema.
          </p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center space-x-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
            <Globe className="w-5 h-5 text-blue-600" />
          </div>
          <label className="text-lg font-semibold text-gray-800">
            Sitio web o redes sociales existentes
            <span className="text-sm text-gray-500 font-normal block">Tu presencia digital actual</span>
          </label>
        </div>
        <Input
          name="web_o_redes"
          value={data.web_o_redes}
          onChange={e => onChange({ web_o_redes: e.target.value })}
          placeholder="Ej: https://facebook.com/miorganizacion, @miorg_twitter"
          className="text-base h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-100"
        />
        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>¿Para qué lo usamos?</strong> Entender tu presencia online actual y cómo integrar el nuevo proyecto con tus canales existentes.
          </p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center space-x-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg">
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <label className="text-lg font-semibold text-gray-800">
            ¿Cómo medirás el éxito del proyecto?
            <span className="text-sm text-gray-500 font-normal block">Métricas e indicadores</span>
          </label>
        </div>
        <Input
          name="plan_seguimiento"
          value={data.plan_seguimiento}
          onChange={e => onChange({ plan_seguimiento: e.target.value })}
          placeholder="Ej: Encuestas trimestrales, número de usuarios activos, reportes mensuales"
          className="text-base h-12 border-gray-300 focus:border-green-500 focus:ring-green-100"
        />
        <div className="mt-3 p-3 bg-green-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>¿Por qué es importante?</strong> Un plan de medición asegura que el proyecto realmente cumple sus objetivos y nos permite incluir herramientas de seguimiento.
          </p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center space-x-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-lg">
            <Shield className="w-5 h-5 text-orange-600" />
          </div>
          <label className="text-lg font-semibold text-gray-800">
            Plan para mantener el proyecto activo
            <span className="text-sm text-gray-500 font-normal block">Sustentabilidad a largo plazo</span>
          </label>
        </div>
        <Input
          name="plan_sustentabilidad"
          value={data.plan_sustentabilidad}
          onChange={e => onChange({ plan_sustentabilidad: e.target.value })}
          placeholder="Ej: Capacitación de personal interno, búsqueda de fondos, alianzas"
          className="text-base h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-100"
        />
        <div className="mt-3 p-3 bg-orange-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Esto es clave:</strong> La sustentabilidad a largo plazo asegura que tu proyecto tenga impacto duradero. Comparte tus ideas sobre mantenimiento post-desarrollo.
          </p>
        </div>
      </div>
    </div>
    
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
      <h3 className="font-bold text-blue-900 mb-4 text-lg flex items-center">
        <Info className="w-5 h-5 mr-2" />
        💡 ¿Por qué necesitamos esta información?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="text-sm text-blue-800">
                <strong>Recursos:</strong> Para diseñar una solución que se ajuste a tus capacidades reales y aprovechar lo que ya tienes
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="text-sm text-blue-800">
                <strong>Medición:</strong> Para incluir herramientas que te permitan demostrar el impacto y gestionar el proyecto
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="text-sm text-blue-800">
                <strong>Sustentabilidad:</strong> Para asegurar que el proyecto siga funcionando y beneficiando después de entregarlo
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="text-sm text-blue-800">
                <strong>Redes sociales:</strong> Para integrar canales existentes y maximizar el alcance del proyecto
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LNAStep4_Resources;
