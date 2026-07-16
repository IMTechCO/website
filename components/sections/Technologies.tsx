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
    <section id="technologies" className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
                <div className="text-center">
                  <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                    Tecnologías
                  </span>

                  <h2 className="mt-3 text-4xl font-bold text-slate-900">
                    Tecnología adecuada para cada desafío
                  </h2>

                  <p className="mx-auto mt-4 max-w-3xl text-slate-600">
                    Utilizamos tecnologías modernas, seguras y escalables 
                    para desarrollar soluciones robustas que se adapten al crecimiento de su empresa.
                  </p>
                </div>
        </FadeUp>


        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <FadeUp key={tech.name} delay={index * 0.1}>
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-lg"
                >
                  <Icon className="mb-4 text-5xl text-blue-600" />
                  <span className="text-center font-medium text-slate-700">
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