import { Code2, Database, Terminal, Palette, Globe, Smartphone, Shield, Cpu, GitBranch, Cloud, Layers, Braces, Figma, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 className="w-5 h-5" aria-hidden="true" />,
    skills: [
      { name: "React / TypeScript", level: 95 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 88 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
  },
  {
    title: "Backend & Cloud",
    icon: <Database className="w-5 h-5" aria-hidden="true" />,
    skills: [
      { name: "Supabase / PostgreSQL", level: 90 },
      { name: "Node.js / Deno", level: 85 },
      { name: "REST APIs", level: 92 },
      { name: "Edge Functions", level: 85 },
    ],
  },
  {
    title: "Herramientas & DevOps",
    icon: <Terminal className="w-5 h-5" aria-hidden="true" />,
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Vite / Webpack", level: 88 },
      { name: "Vercel / Netlify", level: 90 },
      { name: "CI/CD Pipelines", level: 80 },
    ],
  },
];

const techItems = [
  { name: "React", icon: <Braces className="w-5 h-5" aria-hidden="true" /> },
  { name: "TypeScript", icon: <Code2 className="w-5 h-5" aria-hidden="true" /> },
  { name: "Supabase", icon: <Database className="w-5 h-5" aria-hidden="true" /> },
  { name: "Tailwind", icon: <Palette className="w-5 h-5" aria-hidden="true" /> },
  { name: "SEO", icon: <Globe className="w-5 h-5" aria-hidden="true" /> },
  { name: "Responsive", icon: <Smartphone className="w-5 h-5" aria-hidden="true" /> },
  { name: "Seguridad", icon: <Shield className="w-5 h-5" aria-hidden="true" /> },
  { name: "Performance", icon: <Cpu className="w-5 h-5" aria-hidden="true" /> },
  { name: "Git", icon: <GitBranch className="w-5 h-5" aria-hidden="true" /> },
  { name: "Cloud", icon: <Cloud className="w-5 h-5" aria-hidden="true" /> },
  { name: "APIs", icon: <Layers className="w-5 h-5" aria-hidden="true" /> },
  { name: "Deno", icon: <Terminal className="w-5 h-5" aria-hidden="true" /> },
  { name: "Figma", icon: <Figma className="w-5 h-5" aria-hidden="true" /> },
  { name: "Vite", icon: <Zap className="w-5 h-5" aria-hidden="true" /> },
];

const SkillBar = ({ level, delay }: { level: number; delay: number }) => {
  return (
    <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
      <ScrollReveal delay={delay} direction="none">
        <div
          className="h-1.5 rounded-full bg-gradient-to-r from-primary to-accent"
          style={{ width: `${level}%` }}
        />
      </ScrollReveal>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="container relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase text-primary bg-primary/8 border border-primary/15 mb-4">
            Stack Tecnológico
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Conocimientos &{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tecnologías
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Domino las herramientas más modernas para crear soluciones de alto impacto.
          </p>
        </ScrollReveal>

        {/* Skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal
              key={category.title}
              className="bg-card rounded-2xl p-7 border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              delay={catIndex * 0.1}
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
                    <SkillBar level={skill.level} delay={0.2 + catIndex * 0.1} />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tech grid */}
        <ScrollReveal delay={0.2}>
          <h3 className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">
            Tecnologías que utilizo
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3 max-w-4xl mx-auto">
            {techItems.map((tech, index) => (
              <ScrollReveal
                key={tech.name}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-primary/25 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 group cursor-default"
                delay={0.03 * index}
                direction="none"
              >
                <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {tech.icon}
                </div>
                <span className="text-[11px] font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsSection;
