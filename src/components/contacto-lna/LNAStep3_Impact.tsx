
import { Input } from "@/components/ui/input";

const LNAStep3_Impact = ({
  data,
  onChange
}: {
  data: any;
  onChange: (fields: any) => void;
}) => (
  <div>
    <h2 className="text-xl font-bold text-haby-primary mb-2">Impacto social/comunitario</h2>
    <p className="text-gray-600 mb-6">Este bloque busca entender cómo tu proyecto beneficiará a otros.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de impacto*</label>
        <select
          name="tipo_impacto"
          value={data.tipo_impacto}
          onChange={e => onChange({ tipo_impacto: e.target.value })}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-haby-primary"
          required
        >
          <option value="">Selecciona...</option>
          <option value="Educación">Educación</option>
          <option value="Salud">Salud</option>
          <option value="Cultura">Cultura</option>
          <option value="Medio ambiente">Medio ambiente</option>
          <option value="Inclusión">Inclusión</option>
          <option value="Tecnología">Tecnología</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Grupo(s) beneficiado(s)*</label>
        <Input
          name="grupos_beneficiados"
          value={data.grupos_beneficiados}
          onChange={e => onChange({ grupos_beneficiados: e.target.value })}
          placeholder="Ej: niños, comunidad local..."
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Personas beneficiadas*</label>
        <Input
          name="estimacion_beneficiarios"
          type="number"
          min={1}
          value={data.estimacion_beneficiarios}
          onChange={e => onChange({ estimacion_beneficiarios: e.target.value })}
          placeholder="Ej: 250"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Ubicación del impacto*</label>
        <Input
          name="ubicacion_impacto"
          value={data.ubicacion_impacto}
          onChange={e => onChange({ ubicacion_impacto: e.target.value })}
          placeholder="Ciudad/localidad"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Aliados / colaboradores</label>
        <Input
          name="aliados_colaboradores"
          value={data.aliados_colaboradores}
          onChange={e => onChange({ aliados_colaboradores: e.target.value })}
          placeholder="ONGs, instituciones aliadas..."
        />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          ¿Por qué solicita el plan gratuito?* <span className="font-normal text-xs">(breve y claro)</span>
        </label>
        <textarea
          name="motivacion"
          rows={3}
          value={data.motivacion}
          onChange={e => onChange({ motivacion: e.target.value })}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-haby-primary"
          placeholder="Explica la motivación social/comunitaria..."
          required
        />
      </div>
    </div>
  </div>
);

export default LNAStep3_Impact;

