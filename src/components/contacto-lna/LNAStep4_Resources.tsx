
import { Input } from "@/components/ui/input";

const LNAStep4_Resources = ({
  data,
  onChange
}: {
  data: any;
  onChange: (fields: any) => void;
}) => (
  <div>
    <h2 className="text-xl font-bold text-haby-primary mb-2">Recursos y sustentabilidad</h2>
    <p className="text-gray-600 mb-6">Estos datos nos ayudan a conocer cómo tu proyecto se mantendrá a largo plazo.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Apoyos adicionales</label>
        <Input
          name="recursos_adicionales"
          value={data.recursos_adicionales}
          onChange={e => onChange({ recursos_adicionales: e.target.value })}
          placeholder="Donaciones, voluntarios, etc."
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Sitio web o redes sociales del proyecto</label>
        <Input
          name="web_o_redes"
          value={data.web_o_redes}
          onChange={e => onChange({ web_o_redes: e.target.value })}
          placeholder="https://tuproyecto.org"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">¿Cómo dará seguimiento al impacto?</label>
        <Input
          name="plan_seguimiento"
          value={data.plan_seguimiento}
          onChange={e => onChange({ plan_seguimiento: e.target.value })}
          placeholder="¿Cómo medir resultados?"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Plan de sustentabilidad</label>
        <Input
          name="plan_sustentabilidad"
          value={data.plan_sustentabilidad}
          onChange={e => onChange({ plan_sustentabilidad: e.target.value })}
          placeholder="¿Cómo seguirá el proyecto después?"
        />
      </div>
    </div>
  </div>
);

export default LNAStep4_Resources;
