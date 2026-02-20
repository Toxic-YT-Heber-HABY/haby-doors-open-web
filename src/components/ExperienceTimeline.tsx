import { Briefcase, Calendar, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const experiences = [
  {
    role: "Fundador & Lead Developer",
    company: "HABY Open The Doors",
    location: "Tijuana, México",
    period: "2023 — Presente",
    description: "Dirección de proyectos de desarrollo web, creando soluciones personalizadas para empresas y emprendedores. Especializado en aplicaciones modernas con React, Supabase y tecnologías cloud.",
    highlights: ["React & TypeScript", "Supabase", "Soluciones a medida"],
  },
  {
    role: "Desarrollador Web Full Stack",
    company: "Proyectos Freelance",
    location: "Remoto",
    period: "2022 — 2023",
    description: "Desarrollo de aplicaciones web para diversos clientes, desde landing pages hasta plataformas completas con autenticación, pagos y dashboards administrativos.",
    highlights: ["Next.js", "Node.js", "APIs REST"],
  },
  {
    role: "Desarrollador Frontend",
    company: "Inicio de carrera",
    location: "Tijuana, México",
    period: "2021 — 2022",
    description: "Primeros proyectos profesionales enfocados en interfaces de usuario responsivas, accesibles y con alto rendimiento. Bases sólidas en HTML, CSS, JavaScript y frameworks modernos.",
    highlights: ["HTML/CSS", "JavaScript", "Responsive Design"],
  },
];

const ExperienceTimeline = () => {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container max-w-4xl">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase text-primary bg-primary/8 border border-primary/15 mb-4">
            Trayectoria
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Experiencia{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Profesional
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mi camino en el desarrollo web, construyendo soluciones que marcan la diferencia.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal
                key={index}
                className="relative pl-16 sm:pl-20"
                direction="right"
                delay={index * 0.15}
              >
                {/* Dot */}
                <div className="absolute left-4 sm:left-6 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_12px_hsl(var(--primary)/0.4)]" />

                <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-1">{exp.role}</h3>
                  <p className="text-sm text-primary/80 font-medium mb-3 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-primary/8 text-primary border border-primary/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
