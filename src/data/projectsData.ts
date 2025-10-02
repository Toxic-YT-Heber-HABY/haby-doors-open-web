/**
 * Fuente única de datos de proyectos
 * Este archivo centraliza todos los datos de proyectos del portafolio
 * para evitar inconsistencias entre componentes
 */

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  descriptionComplete?: string;
  image: string;
  category: string;
  url: string | null;
  github: string | null;
  client: string;
  date: string;
  featured?: boolean;
  isPrivate?: boolean;
  technologies?: string[];
  startDate?: string;
  duration?: string;
  team?: string[];
  features?: string[];
  challenges?: string;
  results?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: "1",
    title: "HABYKeys",
    description: "Teclado virtual avanzado diseñado para programadores, contadores y otros profesionales, con una interfaz intuitiva y personalizable que mejora la productividad.",
    descriptionComplete: "Teclado virtual avanzado y altamente personalizable diseñado específicamente para profesionales que requieren herramientas especializadas. La interfaz intuitiva permite configurar atajos personalizados, layouts adaptables y funciones avanzadas que aumentan significativamente la productividad en tareas repetitivas.",
    image: "/lovable-uploads/7d27120f-0c6b-4fdf-989a-e0b32feb1843.png",
    category: "Productividad",
    url: "https://haby-advanced-virtual-keyboard-help.vercel.app",
    github: null,
    client: "Perla Itzel Rosales Flores",
    date: "2024",
    featured: true,
    isPrivate: false,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    startDate: "Enero 2024",
    duration: "2 meses",
    team: ["Full Stack Developer", "UI/UX Designer"],
    features: [
      "Layouts personalizables",
      "Atajos de teclado programables",
      "Interfaz drag & drop",
      "Soporte multi-idioma",
      "Exportación de configuraciones",
      "Tema oscuro/claro"
    ],
    challenges: "Crear una interfaz que fuera tanto potente como intuitiva, permitiendo personalización avanzada sin sacrificar la facilidad de uso.",
    results: "Incremento del 40% en productividad reportado por usuarios y excelentes reviews en términos de usabilidad."
  },
  {
    id: "2",
    title: "HABY Score Tracker",
    description: "Herramienta educativa interactiva que ayuda a los estudiantes a comprender y calcular sus calificaciones usando regla de tres, con exportación de resultados en múltiples formatos.",
    descriptionComplete: "Plataforma educativa diseñada para simplificar el cálculo y seguimiento de calificaciones escolares. Permite a estudiantes y profesores calcular promedios, realizar conversiones y exportar reportes detallados en diversos formatos, facilitando el proceso de evaluación académica.",
    image: "/lovable-uploads/8ba55e5f-90b4-4561-90c1-d8b8986c025b.png",
    category: "Educación",
    url: "https://prep-score-tracker.lovable.app",
    github: null,
    client: "Prof. Martha Norma Ramírez Albarrán",
    date: "2024",
    featured: true,
    isPrivate: false,
    technologies: ["React", "Lovable", "PDF Export", "Chart.js"],
    startDate: "Febrero 2024",
    duration: "2 meses",
    team: ["Frontend Developer", "Education Specialist"],
    features: [
      "Cálculo automático de promedios",
      "Conversión con regla de tres",
      "Exportación PDF y Excel",
      "Gráficos de progreso",
      "Historial de calificaciones",
      "Interfaz intuitiva para estudiantes"
    ],
    challenges: "Crear fórmulas precisas que se adapten a diferentes sistemas de calificación y hacer la interfaz comprensible para estudiantes de todas las edades.",
    results: "Adoptado por múltiples instituciones educativas y feedback positivo de profesores sobre el ahorro de tiempo en cálculos."
  },
  {
    id: "3",
    title: "HABY CLASS",
    description: "Plataforma educativa moderna que simplifica la gestión del aula y mejora la experiencia de aprendizaje mediante herramientas intuitivas y eficientes.",
    descriptionComplete: "Sistema integral de gestión académica que permite a instituciones educativas administrar clases, estudiantes, tareas y evaluaciones de manera eficiente. Incluye herramientas colaborativas y sistema de comunicación en tiempo real.",
    image: "/lovable-uploads/d93cbf56-5f67-47f8-9472-e864723e0be6.png",
    category: "Educación",
    url: null,
    github: null,
    client: "Proyecto Personal",
    date: "2024",
    featured: false,
    isPrivate: true,
    technologies: ["React", "Supabase", "PostgreSQL", "Real-time"],
    startDate: "Marzo 2024",
    duration: "En desarrollo",
    team: ["Full Stack Developer"],
    features: [
      "Gestión de clases y estudiantes",
      "Sistema de tareas y evaluaciones",
      "Comunicación en tiempo real",
      "Panel de control para profesores",
      "Notificaciones automáticas",
      "Reportes de progreso"
    ],
    challenges: "Debido a políticas de privacidad, los detalles completos de este proyecto están restringidos.",
    results: "Proyecto en desarrollo continuo."
  },
  {
    id: "4",
    title: "Progresión 8: Los poderes fácticos y el Estado",
    description: "Material educativo sobre los poderes fácticos y su influencia en las decisiones políticas, económicas y sociales, para la asignatura de Ciencias Sociales III.",
    descriptionComplete: "Recurso educativo interactivo diseñado para estudiantes de nivel medio superior que aborda la temática de los poderes fácticos y su influencia en el Estado. Incluye contenido multimedia, ejercicios interactivos y evaluaciones en línea.",
    image: "/lovable-uploads/dd203339-d26a-44c4-91b1-9162915ae828.png",
    category: "Educación",
    url: "https://1-glosario-de-terminos-t-5pfyq4z.gamma.site/",
    github: null,
    client: "Colegio De Estudios y Tecnológicos Del Estado De México",
    date: "2024",
    featured: false,
    isPrivate: false,
    technologies: ["Gamma", "Interactive Design", "Educational Content"],
    startDate: "Abril 2024",
    duration: "1 mes",
    team: ["Content Developer", "Educational Designer"],
    features: [
      "Contenido interactivo",
      "Glosario de términos",
      "Recursos multimedia",
      "Evaluaciones en línea",
      "Diseño responsive",
      "Accesibilidad optimizada"
    ],
    challenges: "Transformar contenido académico denso en material interactivo y atractivo para estudiantes sin perder rigor educativo.",
    results: "Implementación exitosa en currículo escolar con alta aceptación por parte de estudiantes y docentes."
  },
  {
    id: "5",
    title: "Sistema de Gestión Médica",
    description: "Aplicación web para gestión de citas médicas y historiales de pacientes con funcionalidades avanzadas de seguridad y privacidad.",
    descriptionComplete: "Sistema integral de gestión hospitalaria que permite administrar citas médicas, historiales de pacientes y gestión de recursos médicos de manera eficiente y segura, cumpliendo con todas las normativas de privacidad médica.",
    image: "/lovable-uploads/90ffa1ad-1f42-465a-b17e-61918ab82862.png",
    category: "Salud",
    url: null,
    github: null,
    client: "Clínica Privada",
    date: "2024",
    featured: false,
    isPrivate: true,
    technologies: ["Vue.js", "Express", "MongoDB", "JWT", "Socket.io"],
    startDate: "Mayo 2024",
    duration: "6 meses",
    team: ["Full Stack Developer", "Security Specialist", "Healthcare Consultant"],
    features: [
      "Gestión segura de datos médicos",
      "Sistema de citas en línea",
      "Historiales médicos digitales",
      "Comunicación médico-paciente",
      "Reportes y estadísticas"
    ],
    challenges: "Debido a términos y condiciones y política de privacidad, este proyecto es de carácter privado y confidencial.",
    results: "Proyecto confidencial - detalles restringidos."
  },
  {
    id: "6",
    title: "Plataforma E-commerce Avanzada",
    description: "Tienda online completa con sistema de pagos integrado, gestión de inventario y análisis de ventas en tiempo real.",
    descriptionComplete: "Plataforma de comercio electrónico robusta y escalable con integración completa de sistemas de pago, gestión avanzada de inventario y herramientas de análisis para optimizar las ventas en línea.",
    image: "/lovable-uploads/d3be837f-42a6-40ff-a75e-ea4c473f067e.png",
    category: "E-commerce",
    url: null,
    github: null,
    client: "Empresa de Retail",
    date: "2024",
    featured: false,
    isPrivate: true,
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    startDate: "Junio 2024",
    duration: "7 meses",
    team: ["Frontend Developer", "Backend Developer", "Business Analyst"],
    features: [
      "Sistema de autenticación seguro",
      "Integración con múltiples pasarelas de pago",
      "Panel administrativo completo",
      "Sistema de reviews",
      "Gestión de inventario en tiempo real"
    ],
    challenges: "Debido a términos y condiciones y política de privacidad, este proyecto es de carácter privado y confidencial.",
    results: "Proyecto confidencial - detalles restringidos."
  }
];

/**
 * Obtener proyecto por ID
 */
export const getProjectById = (id: string): ProjectData | undefined => {
  return projectsData.find(project => project.id === id);
};

/**
 * Obtener solo proyectos públicos
 */
export const getPublicProjects = (): ProjectData[] => {
  return projectsData.filter(project => !project.isPrivate);
};

/**
 * Obtener solo proyectos destacados
 */
export const getFeaturedProjects = (): ProjectData[] => {
  return projectsData.filter(project => project.featured);
};

/**
 * Obtener proyectos por categoría
 */
export const getProjectsByCategory = (category: string): ProjectData[] => {
  return projectsData.filter(project => project.category === category);
};
