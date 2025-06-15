
import { Input } from "@/components/ui/input";

const LNAStep2_Project = ({
  data,
  onChange
}: {
  data: any;
  onChange: (fields: any) => void;
}) => (
  <div>
    <h2 className="text-xl font-bold text-haby-primary mb-2">Sobre tu organización y proyecto</h2>
    <p className="text-gray-600 mb-6">Queremos conocer mejor el contexto de tu iniciativa para asegurarnos de que cumpla con el enfoque de bien común.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Organización, institución o colectivo*</label>
        <Input
          name="institucion"
          value={data.institucion}
          onChange={e => onChange({ institucion: e.target.value })}
          placeholder="Nombre organización"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Área o sector*</label>
        <Input
          name="area"
          value={data.area}
          onChange={e => onChange({ area: e.target.value })}
          placeholder="Ej: salud, educación, cultura..."
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Ubicación institucional*</label>
        <Input
          name="ubicacion"
          value={data.ubicacion}
          onChange={e => onChange({ ubicacion: e.target.value })}
          placeholder="Ciudad, país"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre del proyecto*</label>
        <Input
          name="proyecto_nombre"
          value={data.proyecto_nombre}
          onChange={e => onChange({ proyecto_nombre: e.target.value })}
          placeholder="Ej: Biblioteca digital"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Objetivo principal*</label>
        <Input
          name="proyecto_objetivo"
          value={data.proyecto_objetivo}
          onChange={e => onChange({ proyecto_objetivo: e.target.value })}
          placeholder="¿Cuál es el objetivo?"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Fecha prevista de inicio*</label>
        <Input
          name="proyecto_fechainicio"
          type="date"
          value={data.proyecto_fechainicio}
          onChange={e => onChange({ proyecto_fechainicio: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Estado del proyecto*</label>
        <select
          name="proyecto_estado"
          value={data.proyecto_estado}
          onChange={e => onChange({ proyecto_estado: e.target.value })}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-haby-primary"
          required
        >
          <option value="">Selecciona...</option>
          <option value="Idea">Solo idea</option>
          <option value="En planeación">En planeación</option>
          <option value="En curso">En ejecución</option>
          <option value="Con resultados iniciales">Con resultados iniciales</option>
          <option value="Consolidado">Consolidado</option>
        </select>
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">Descripción breve*</label>
        <textarea
          name="proyecto_descripcion"
          rows={3}
          value={data.proyecto_descripcion}
          onChange={e => onChange({ proyecto_descripcion: e.target.value })}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-haby-primary"
          placeholder="Describe claramente tu proyecto y a quién beneficia"
          required
        />
      </div>
    </div>
  </div>
);

export default LNAStep2_Project;
