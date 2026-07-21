import {
  SiPython,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiSpring,
  SiLaravel,
  SiDocker,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiLinux,
  SiGit,
} from "react-icons/si";

import FadeUp from "@/components/animations/FadeUp";
import SectionBackground from "@/components/ui/SectionBackground";

const technologies = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Flutter", icon: SiFlutter },
  { name: "Python", icon: SiPython },
  { name: "Spring Boot", icon: SiSpring },
  { name: "Laravel", icon: SiLaravel },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "Firebase", icon: SiFirebase },
  { name: "Docker", icon: SiDocker },
  { name: "Linux", icon: SiLinux },
  { name: "Git", icon: SiGit },
];

export default function Technologies() {
  return (
    <section id="technologies" className="relative overflow-hidden bg-slate-100 py-10">
      <SectionBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <FadeUp>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Tecnologías
            </span>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Tecnologías con las que trabajamos
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-7 text-slate-600">
              Utilizamos tecnologías modernas y ampliamente adoptadas para desarrollar soluciones robustas, seguras y escalables.
            </p>
          </div>
        </FadeUp>

        <div className="mt-10 grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <FadeUp key={tech.name} delay={index * 0.1}>
                <div className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">

                  <Icon className="mb-3 text-4xl text-blue-600 transition-transform duration-300 group-hover:scale-110" />

                  <span className="text-center text-sm font-semibold text-slate-700">
                    {tech.name}
                  </span>

                </div>
              </FadeUp>
            );
          })}
        </div>

      </div>
    </section>
  );
}