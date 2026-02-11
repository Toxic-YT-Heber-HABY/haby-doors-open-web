import { useRef, useState, useEffect, useMemo } from 'react';
import { 
  Code2, Database, Palette, Globe, Smartphone, Shield, 
  Cpu, GitBranch, Cloud, Layers, Terminal, Braces 
} from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      { name: "React / TypeScript", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Framer Motion", level: 88 },
    ],
  },
  {
    title: "Backend",
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Supabase / PostgreSQL", level: 92 },
      { name: "REST APIs", level: 95 },
      { name: "Edge Functions", level: 85 },
    ],
  },
  {
    title: "Herramientas",
    icon: <Terminal className="w-5 h-5" />,
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Vite / Webpack", level: 88 },
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 80 },
    ],
  },
];

const techLogos = [
  { name: "React", icon: <Braces className="w-6 h-6" /> },
  { name: "TypeScript", icon: <Code2 className="w-6 h-6" /> },
  { name: "Supabase", icon: <Database className="w-6 h-6" /> },
  { name: "Tailwind", icon: <Palette className="w-6 h-6" /> },
  { name: "SEO", icon: <Globe className="w-6 h-6" /> },
  { name: "Responsive", icon: <Smartphone className="w-6 h-6" /> },
  { name: "Seguridad", icon: <Shield className="w-6 h-6" /> },
  { name: "Performance", icon: <Cpu className="w-6 h-6" /> },
  { name: "Git", icon: <GitBranch className="w-6 h-6" /> },
  { name: "Cloud", icon: <Cloud className="w-6 h-6" /> },
  { name: "APIs", icon: <Layers className="w-6 h-6" /> },
  { name: "Deno", icon: <Terminal className="w-6 h-6" /> },
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => setIsVisible(true));
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getAnimStyle = useMemo(() => (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    willChange: isVisible ? 'auto' as const : 'opacity, transform' as const,
  }), [isVisible]);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/40 via-white to-pink-50/40" />
      <div className="hidden md:block absolute top-20 right-0 w-96 h-96 bg-purple-200/15 rounded-full blur-3xl" />
      <div className="hidden md:block absolute bottom-20 left-0 w-96 h-96 bg-pink-200/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16" style={getAnimStyle(0)}>
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            Conocimientos & Tecnologías
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 mb-4">
            Stack Tecnológico
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto font-medium">
            Domino las herramientas y tecnologías más modernas para crear soluciones digitales de alto impacto.
          </p>
        </div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16" style={getAnimStyle(0.15)}>
          {skillCategories.map((category, catIndex) => (
            <div 
              key={category.title} 
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-purple-100/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              style={getAnimStyle(0.1 + catIndex * 0.12)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white shadow-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-xs font-semibold text-purple-600">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transition: `width 1s cubic-bezier(0.16, 1, 0.3, 1) ${0.5 + catIndex * 0.15}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Icons Grid */}
        <div style={getAnimStyle(0.4)}>
          <h3 className="text-center text-lg font-semibold text-gray-700 mb-8">Tecnologías que utilizo</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {techLogos.map((tech, index) => (
              <div 
                key={tech.name}
                className="flex flex-col items-center gap-2 p-4 bg-white/70 rounded-xl border border-purple-100/30 hover:border-purple-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                style={getAnimStyle(0.5 + index * 0.04)}
              >
                <div className="text-gray-500 group-hover:text-purple-600 transition-colors duration-300">
                  {tech.icon}
                </div>
                <span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
