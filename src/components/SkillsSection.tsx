import { motion } from 'framer-motion';
import { Code2, Database, Terminal, Palette, Globe, Smartphone, Shield, Cpu, GitBranch, Cloud, Layers, Braces } from 'lucide-react';

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

const techItems = [
  { name: "React", icon: <Braces className="w-5 h-5" /> },
  { name: "TypeScript", icon: <Code2 className="w-5 h-5" /> },
  { name: "Supabase", icon: <Database className="w-5 h-5" /> },
  { name: "Tailwind", icon: <Palette className="w-5 h-5" /> },
  { name: "SEO", icon: <Globe className="w-5 h-5" /> },
  { name: "Responsive", icon: <Smartphone className="w-5 h-5" /> },
  { name: "Seguridad", icon: <Shield className="w-5 h-5" /> },
  { name: "Performance", icon: <Cpu className="w-5 h-5" /> },
  { name: "Git", icon: <GitBranch className="w-5 h-5" /> },
  { name: "Cloud", icon: <Cloud className="w-5 h-5" /> },
  { name: "APIs", icon: <Layers className="w-5 h-5" /> },
  { name: "Deno", icon: <Terminal className="w-5 h-5" /> },
];

const SkillsSection = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-[hsl(240,20%,97%)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase text-[hsl(250,70%,60%)] bg-[hsl(250,70%,60%/0.08)] border border-[hsl(250,70%,60%/0.15)] mb-4">
            Stack Tecnológico
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Conocimientos &{' '}
            <span className="bg-gradient-to-r from-[hsl(250,70%,55%)] to-[hsl(280,80%,60%)] bg-clip-text text-transparent">
              Tecnologías
            </span>
          </h2>
          <p className="text-gray-500 text-lg">
            Domino las herramientas más modernas para crear soluciones de alto impacto.
          </p>
        </motion.div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-[hsl(250,70%,60%/0.2)] hover:shadow-[0_8px_30px_-10px_hsl(250,50%,40%/0.12)] transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[hsl(250,70%,60%)] to-[hsl(280,80%,60%)] flex items-center justify-center text-white">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-gray-600">{skill.name}</span>
                      <span className="text-xs font-mono text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-[hsl(250,70%,60%)] to-[hsl(280,80%,60%)]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + catIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">
            Tecnologías que utilizo
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 max-w-3xl mx-auto">
            {techItems.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-gray-100 hover:border-[hsl(250,70%,60%/0.3)] hover:shadow-sm transition-all duration-300 group cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                whileHover={{ y: -2 }}
              >
                <div className="text-gray-400 group-hover:text-[hsl(250,70%,60%)] transition-colors duration-300">
                  {tech.icon}
                </div>
                <span className="text-[11px] font-medium text-gray-500 group-hover:text-gray-700 transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
