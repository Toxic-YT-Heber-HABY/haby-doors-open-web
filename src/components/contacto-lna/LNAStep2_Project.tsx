
import { Input } from "@/components/ui/input";
import { Building2, MapPin, Target, Calendar, FileText, Lightbulb } from "lucide-react";

const LNAStep2_Project = ({
  data,
  onChange
}: {
  data: any;
  onChange: (fields: any) => void;
}) => (
  <div className="space-y-8">
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-haby-primary to-haby-accent rounded-full mb-4">
        <Building2 className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-2xl font-bold text-haby-primary mb-3">Sobre tu organización y proyecto</h2>
      <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Queremos conocer mejor el contexto de tu iniciativa para asegurarnos de que cumpla con nuestro enfoque de bien común y determinar cómo podemos ayudarte mejor.
      </p>
    </div>

    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-100">
      <div className="flex items-start space-x-3">
        <Lightbulb className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="font-semibold text-green-900 mb-1">💡 Tip para esta sección</h3>
          <p className="text-sm text-green-800">
            Sé específico pero claro. Queremos entender el contexto real de tu proyecto sin tecnicismos innecesarios.
          </p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center space-x-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
            <Building2 className="w-5 h-5 text-blue-600" />
          </div>
          <label className="text-lg font-semibold text-gray-800">
            Organización o institución*
          </label>
        </div>
        <Input
          name="institucion"
          value={data.institucion}
          onChange={e => onChange({ institucion: e.target.value })}
          placeholder="Ej: Fundación Esperanza, Escuela Primaria Benito Juárez"
          className="text-base h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-100"
          required
        />
        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>¿Por qué es importante?</strong> El contexto institucional nos ayuda a entender la seriedad y respaldo de tu proyecto.
          </p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center space-x-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg">
            <Target className="w-5 h-5 text-purple-600" />
          </div>
          <label className="text-lg font-semibold text-gray-800">
            Área de trabajo*
          </label>
        </div>
        <Input
          name="area"
          value={data.area}
          onChange={e => onChange({ area: e.target.value })}
          placeholder="Ej: educación infantil, salud comunitaria, medio ambiente"
          className="text-base h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-100"
          required
        />
        <div className="mt-3 p-3 bg-purple-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>¿Para qué lo usamos?</strong> Clasificar tu proyecto y conectarte con recursos específicos de tu área.
          </p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center space-x-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg">
            <MapPin className="w-5 h-5 text-green-600" />
          </div>
          <label className="text-lg font-semibold text-gray-800">
            Ubicación principal*
          </label>
        </div>
        <Input
          name="ubicacion"
          value={data.ubicacion}
          onChange={e => onChange({ ubicacion: e.target.value })}
          placeholder="Ej: Guadalajara, Jalisco, México"
          className="text-base h-12 border-gray-300 focus:border-green-500 focus:ring-green-100"
          required
        />
        <div className="mt-3 p-3 bg-green-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>¿Por qué es relevante?</strong> Entender el contexto local y posibles colaboraciones regionales.
          </p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center space-x-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-lg">
            <FileText className="w-5 h-5 text-orange-600" />
          </div>
          <label className="text-lg font-semibold text-gray-800">
            Nombre del proyecto*
          </label>
        </div>
        <Input
          name="proyecto_nombre"
          value={data.proyecto_nombre}
          onChange={e => onChange({ proyecto_nombre: e.target.value })}
          placeholder="Ej: Biblioteca Digital Comunitaria, App de Reciclaje"
          className="text-base h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-100"
          required
        />
        <div className="mt-3 p-3 bg-orange-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Tip:</strong> Un nombre claro y descriptivo nos ayuda a identificar y referenciar tu proyecto fácilmente.
          </p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center space-x-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-lg">
            <Target className="w-5 h-5 text-red-600" />
          </div>
          <label className="text-lg font-semibold text-gray-800">
            Objetivo principal*
          </label>
        </div>
        <Input
          name="proyecto_objetivo"
          value={data.proyecto_objetivo}
          onChange={e => onChange({ proyecto_objetivo: e.target.value })}
          placeholder="Ej: Facilitar acceso a libros digitales en zonas rurales"
          className="text-base h-12 border-gray-300 focus:border-red-500 focus:ring-red-100"
          required
        />
        <div className="mt-3 p-3 bg-red-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Importante:</strong> El objetivo nos permite evaluar si se alinea con nuestros criterios de bien común.
          </p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center space-x-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-lg">
            <Calendar className="w-5 h-5 text-indigo-600" />
          </div>
          <label className="text-lg font-semibold text-gray-800">
            Fecha estimada de inicio*
          </label>
        </div>
        <Input
          name="proyecto_fechainicio"
          type="date"
          value={data.proyecto_fechainicio}
          onChange={e => onChange({ proyecto_fechainicio: e.target.value })}
          className="text-base h-12 border-gray-300 focus:border-indigo-500 focus:ring-indigo-100"
          required
        />
        <div className="mt-3 p-3 bg-indigo-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>¿Para qué?</strong> Planificar los tiempos de desarrollo y entrega del proyecto.
          </p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow lg:col-span-2">
        <div className="flex items-center space-x-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 bg-teal-100 rounded-lg">
            <Target className="w-5 h-5 text-teal-600" />
          </div>
          <label className="text-lg font-semibold text-gray-800">
            Estado actual del proyecto*
          </label>
        </div>
        <select
          name="proyecto_estado"
          value={data.proyecto_estado}
          onChange={e => onChange({ proyecto_estado: e.target.value })}
          className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base"
          required
        >
          <option value="">¿En qué etapa está tu proyecto?</option>
          <option value="Idea">💡 Solo es una idea (necesito ayuda para estructurarla)</option>
          <option value="En planeación">📋 En planeación (ya tengo un plan, falta ejecutar)</option>
          <option value="En curso">🚀 En ejecución (ya comencé pero necesito herramientas)</option>
          <option value="Con resultados iniciales">📈 Con resultados iniciales (funciona pero quiero mejorarlo)</option>
          <option value="Consolidado">✅ Consolidado (necesito expandir o mejorar)</option>
        </select>
        <div className="mt-3 p-3 bg-teal-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>¿Por qué es crucial?</strong> El estado nos permite entender qué tipo de apoyo necesitas y ajustar nuestra propuesta.
          </p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow lg:col-span-2">
        <div className="flex items-center space-x-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 bg-yellow-100 rounded-lg">
            <FileText className="w-5 h-5 text-yellow-600" />
          </div>
          <label className="text-lg font-semibold text-gray-800">
            Descripción detallada del proyecto*
          </label>
        </div>
        <textarea
          name="proyecto_descripcion"
          rows={5}
          value={data.proyecto_descripcion}
          onChange={e => onChange({ proyecto_descripcion: e.target.value })}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-base"
          placeholder="Describe tu proyecto: ¿Qué problema resuelve? ¿Cómo funciona? ¿Qué necesidades específicas tiene? 

Ejemplo: Queremos crear una plataforma web donde los vecinos puedan reportar baches y problemas urbanos, que se conecte con las autoridades locales para dar seguimiento. El problema es que actualmente no hay un canal directo de comunicación..."
          required
        />
        <div className="mt-3 p-3 bg-yellow-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>¿Qué incluir?</strong> El problema que resuelves, cómo lo hace tu proyecto, qué esperas lograr, y cualquier detalle técnico relevante. ¡Entre más contexto, mejor propuesta!
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default LNAStep2_Project;
