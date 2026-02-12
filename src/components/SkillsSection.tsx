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
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase text-primary bg-primary/8 border border-primary/15 mb-4">
            Stack Tecnológico
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Conocimientos &{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tecnologías
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Domino las herramientas más modernas para crear soluciones de alto impacto.
          </p>
        </motion.div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="bg-card rounded-2xl p-7 border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                      <span className="text-xs font-mono text-muted-foreground/60">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + catIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
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
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">
            Tecnologías que utilizo
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 max-w-3xl mx-auto">
            {techItems.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-primary/25 hover:shadow-sm transition-all duration-300 group cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.03 * index }}
                whileHover={{ y: -2 }}
              >
                <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {tech.icon}
                </div>
                <span className="text-[11px] font-medium text-muted-foreground group-hover:text-foreground transition-colors">
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
