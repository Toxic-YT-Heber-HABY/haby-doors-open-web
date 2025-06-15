
import { Input } from "@/components/ui/input";

const LNAStep4_Resources = ({
  data,
  onChange
}: {
  data: any;
  onChange: (fields: any) => void;
}) => (
  <div>
    <h2 className="text-xl font-bold text-haby-primary mb-2">Recursos y plan de sustentabilidad</h2>
    <p className="text-gray-600 mb-6">
      Necesitamos conocer qué recursos tienes disponibles y cómo planeas mantener el proyecto funcionando a largo plazo. Esto nos ayuda a diseñar una solución viable y sostenible.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Recursos adicionales disponibles
        </label>
        <Input
          name="recursos_adicionales"
          value={data.recursos_adicionales}
          onChange={e => onChange({ recursos_adicionales: e.target.value })}
          placeholder="Ej: 2 voluntarios programadores, donación mensual de $500"
        />
        <p className="text-xs text-gray-500 mt-1">
          Los recursos extra (personas, fondos, donaciones, espacios) nos ayudan a entender qué apoyo adicional tienes y cómo optimizar el desarrollo. Si no tienes, déjalo en blanco.
        </p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sitio web o redes sociales existentes
        </label>
        <Input
          name="web_o_redes"
          value={data.web_o_redes}
          onChange={e => onChange({ web_o_redes: e.target.value })}
          placeholder="Ej: https://facebook.com/miorganizacion"
        />
        <p className="text-xs text-gray-500 mt-1">
          Tus canales digitales actuales nos permiten entender tu presencia online y pueden integrarse con el nuevo proyecto. Comparte lo que tengas disponible.
        </p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ¿Cómo medirás el éxito del proyecto?
        </label>
        <Input
          name="plan_seguimiento"
          value={data.plan_seguimiento}
          onChange={e => onChange({ plan_seguimiento: e.target.value })}
          placeholder="Ej: Encuestas trimestrales, número de usuarios activos"
        />
        <p className="text-xs text-gray-500 mt-1">
          Un plan de medición nos asegura que el proyecto realmente cumple sus objetivos. Nos ayuda a incluir herramientas de seguimiento en el desarrollo.
        </p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Plan para mantener el proyecto activo
        </label>
        <Input
          name="plan_sustentabilidad"
          value={data.plan_sustentabilidad}
          onChange={e => onChange({ plan_sustentabilidad: e.target.value })}
          placeholder="Ej: Capacitación de personal interno, búsqueda de fondos"
        />
        <p className="text-xs text-gray-500 mt-1">
          La sustentabilidad a largo plazo es clave para que tu proyecto tenga impacto duradero. Comparte tus ideas sobre cómo mantenerlo funcionando después del desarrollo inicial.
        </p>
      </div>
    </div>
    
    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
      <h3 className="font-medium text-blue-900 mb-2">💡 ¿Por qué necesitamos esta información?</h3>
      <ul className="text-sm text-blue-800 space-y-1">
        <li>• <strong>Recursos:</strong> Para diseñar una solución que se ajuste a tus capacidades reales</li>
        <li>• <strong>Medición:</strong> Para incluir herramientas que te permitan demostrar el impacto</li>
        <li>• <strong>Sustentabilidad:</strong> Para asegurar que el proyecto siga funcionando después de entregarlo</li>
        <li>• <strong>Redes sociales:</strong> Para integrar canales existentes y maximizar el alcance</li>
      </ul>
    </div>
  </div>
);

export default LNAStep4_Resources;
