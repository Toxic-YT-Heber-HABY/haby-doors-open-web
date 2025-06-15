
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
    <p className="text-gray-600 mb-6">
      Queremos conocer mejor el contexto de tu iniciativa para asegurarnos de que cumpla con nuestro enfoque de bien común y determinar cómo podemos ayudarte mejor.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Organización, institución o colectivo*
        </label>
        <Input
          name="institucion"
          value={data.institucion}
          onChange={e => onChange({ institucion: e.target.value })}
          placeholder="Ej: Fundación Esperanza, Escuela Primaria Benito Juárez"
          required
        />
        <p className="text-xs text-gray-500 mt-1">
          El nombre oficial de tu organización nos ayuda a entender el contexto institucional de tu proyecto.
        </p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Área o sector de trabajo*
        </label>
        <Input
          name="area"
          value={data.area}
          onChange={e => onChange({ area: e.target.value })}
          placeholder="Ej: educación infantil, salud comunitaria, medio ambiente"
          required
        />
        <p className="text-xs text-gray-500 mt-1">
          Nos permite clasificar tu proyecto y conectarte con recursos específicos de tu área.
        </p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Ubicación principal*
        </label>
        <Input
          name="ubicacion"
          value={data.ubicacion}
          onChange={e => onChange({ ubicacion: e.target.value })}
          placeholder="Ej: Guadalajara, Jalisco, México"
          required
        />
        <p className="text-xs text-gray-500 mt-1">
          La ubicación nos ayuda a entender el contexto local y posibles colaboraciones regionales.
        </p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Nombre del proyecto*
        </label>
        <Input
          name="proyecto_nombre"
          value={data.proyecto_nombre}
          onChange={e => onChange({ proyecto_nombre: e.target.value })}
          placeholder="Ej: Biblioteca Digital Comunitaria, App de Reciclaje"
          required
        />
        <p className="text-xs text-gray-500 mt-1">
          Un nombre claro nos ayuda a identificar y referenciar tu proyecto fácilmente.
        </p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Objetivo principal del proyecto*
        </label>
        <Input
          name="proyecto_objetivo"
          value={data.proyecto_objetivo}
          onChange={e => onChange({ proyecto_objetivo: e.target.value })}
          placeholder="Ej: Facilitar acceso a libros digitales en zonas rurales"
          required
        />
        <p className="text-xs text-gray-500 mt-1">
          El objetivo nos permite evaluar si el proyecto se alinea con nuestros criterios de bien común.
        </p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Fecha estimada de inicio*
        </label>
        <Input
          name="proyecto_fechainicio"
          type="date"
          value={data.proyecto_fechainicio}
          onChange={e => onChange({ proyecto_fechainicio: e.target.value })}
          required
        />
        <p className="text-xs text-gray-500 mt-1">
          Nos ayuda a planificar los tiempos de desarrollo y entrega del proyecto.
        </p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Estado actual del proyecto*
        </label>
        <select
          name="proyecto_estado"
          value={data.proyecto_estado}
          onChange={e => onChange({ proyecto_estado: e.target.value })}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-haby-primary"
          required
        >
          <option value="">¿En qué etapa está tu proyecto?</option>
          <option value="Idea">Solo es una idea (necesito ayuda para estructurarla)</option>
          <option value="En planeación">En planeación (ya tengo un plan, falta ejecutar)</option>
          <option value="En curso">En ejecución (ya comencé pero necesito herramientas)</option>
          <option value="Con resultados iniciales">Con resultados iniciales (funciona pero quiero mejorarlo)</option>
          <option value="Consolidado">Consolidado (necesito expandir o mejorar)</option>
        </select>
        <p className="text-xs text-gray-500 mt-1">
          El estado nos permite entender qué tipo de apoyo necesitas y ajustar nuestra propuesta.
        </p>
      </div>
      
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Descripción detallada del proyecto*
        </label>
        <textarea
          name="proyecto_descripcion"
          rows={4}
          value={data.proyecto_descripcion}
          onChange={e => onChange({ proyecto_descripcion: e.target.value })}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-haby-primary"
          placeholder="Describe tu proyecto: ¿Qué problema resuelve? ¿Cómo funciona? ¿Qué necesidades específicas tiene? Ejemplo: Queremos crear una plataforma web donde los vecinos puedan reportar baches y problemas urbanos, que se conecte con las autoridades locales para dar seguimiento..."
          required
        />
        <p className="text-xs text-gray-500 mt-1">
          Una descripción completa nos permite entender mejor tu visión y diseñar la solución más adecuada. Incluye el problema que resuelves, cómo lo hace tu proyecto, y qué esperas lograr.
        </p>
      </div>
    </div>
  </div>
);

export default LNAStep2_Project;
