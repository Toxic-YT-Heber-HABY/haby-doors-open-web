
import { Input } from "@/components/ui/input";

const LNAStep3_Impact = ({
  data,
  onChange
}: {
  data: any;
  onChange: (fields: any) => void;
}) => (
  <div>
    <h2 className="text-xl font-bold text-haby-primary mb-2">Impacto social y comunitario</h2>
    <p className="text-gray-600 mb-6">
      Para calificar al plan gratuito, necesitamos verificar que tu proyecto beneficie a la comunidad y tenga un impacto social positivo measurable.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Área principal de impacto*
        </label>
        <select
          name="tipo_impacto"
          value={data.tipo_impacto}
          onChange={e => onChange({ tipo_impacto: e.target.value })}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-haby-primary"
          required
        >
          <option value="">Selecciona el área principal...</option>
          <option value="Educación">Educación (acceso a conocimiento, capacitación)</option>
          <option value="Salud">Salud (bienestar, prevención, acceso a servicios)</option>
          <option value="Cultura">Cultura (preservación, difusión, expresión artística)</option>
          <option value="Medio ambiente">Medio ambiente (conservación, sustentabilidad)</option>
          <option value="Inclusión">Inclusión (equidad, accesibilidad, diversidad)</option>
          <option value="Tecnología">Tecnología social (democratización digital)</option>
          <option value="Otro">Otro impacto social</option>
        </select>
        <p className="text-xs text-gray-500 mt-1">
          Nos ayuda a categorizar tu proyecto y conectarte con evaluadores especializados en tu área.
        </p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ¿Quiénes se benefician directamente?*
        </label>
        <Input
          name="grupos_beneficiados"
          value={data.grupos_beneficiados}
          onChange={e => onChange({ grupos_beneficiados: e.target.value })}
          placeholder="Ej: niños de 6-12 años, madres solteras, personas con discapacidad"
          required
        />
        <p className="text-xs text-gray-500 mt-1">
          Identificar a los beneficiarios nos permite evaluar el impacto social real y la relevancia del proyecto.
        </p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Número estimado de beneficiarios*
        </label>
        <Input
          name="estimacion_beneficiarios"
          type="number"
          min={1}
          value={data.estimacion_beneficiarios}
          onChange={e => onChange({ estimacion_beneficiarios: e.target.value })}
          placeholder="Ej: 250 (aproximado está bien)"
          required
        />
        <p className="text-xs text-gray-500 mt-1">
          Una estimación del alcance nos ayuda a dimensionar el impacto potencial y priorizar proyectos con mayor beneficio social.
        </p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Ubicación donde se verá el impacto*
        </label>
        <Input
          name="ubicacion_impacto"
          value={data.ubicacion_impacto}
          onChange={e => onChange({ ubicacion_impacto: e.target.value })}
          placeholder="Ej: Colonia Centro, Oaxaca de Juárez"
          required
        />
        <p className="text-xs text-gray-500 mt-1">
          La ubicación específica del impacto nos permite verificar la pertinencia local del proyecto.
        </p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Organizaciones aliadas o colaboradores
        </label>
        <Input
          name="aliados_colaboradores"
          value={data.aliados_colaboradores}
          onChange={e => onChange({ aliados_colaboradores: e.target.value })}
          placeholder="Ej: Secretaría de Educación local, Universidad UNAM"
        />
        <p className="text-xs text-gray-500 mt-1">
          Los aliados institucionales fortalecen la viabilidad del proyecto y pueden acelerar su implementación. (Opcional pero recomendado)
        </p>
      </div>
      
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ¿Por qué necesitas el plan gratuito?* 
          <span className="font-normal text-xs text-gray-500">(Sé específico sobre tu situación)</span>
        </label>
        <textarea
          name="motivacion"
          rows={4}
          value={data.motivacion}
          onChange={e => onChange({ motivacion: e.target.value })}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-haby-primary"
          placeholder="Ejemplo: Somos una organización sin fines de lucro con presupuesto limitado. Este proyecto beneficiaría a familias de bajos recursos que no tienen acceso a internet para trámites gubernamentales. No tenemos recursos para contratar desarrollo privado, pero sí tenemos el compromiso y la estructura para implementar y mantener la solución..."
          required
        />
        <p className="text-xs text-gray-500 mt-1">
          Esta información es crucial para nuestra evaluación. Explica tu situación económica, el impacto social del proyecto, y por qué el plan gratuito es la mejor opción para tu caso específico.
        </p>
      </div>
    </div>
  </div>
);

export default LNAStep3_Impact;
