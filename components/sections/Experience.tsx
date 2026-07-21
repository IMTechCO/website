import FadeUp from "@/components/animations/FadeUp";
import {
  ShieldCheck,
  Network,
  MonitorCog,
  Bot,
} from "lucide-react";

export default function Experience() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Experiencia comprobada",
      description:
        "Más de 13 años acompañando organizaciones públicas y privadas en proyectos tecnológicos de diferentes niveles de complejidad.",
    },
    {
      icon: Network,
      title: "Cobertura multisectorial",
      description:
        "Hemos trabajado con entidades gubernamentales, empresas, instituciones educativas, comercio e industria.",
    },
    {
      icon: MonitorCog,
      title: "Acompañamiento integral",
      description:
        "Participamos desde el diagnóstico hasta la implementación y el soporte posterior de cada solución.",
    },
    {
      icon: Bot,
      title: "Tecnología con propósito",
      description:
        "Cada proyecto busca optimizar procesos, fortalecer la operación y generar resultados medibles para nuestros clientes.",
    },
  ];

  return (
    <section className="bg-slate-900 py-10 text-white">
      <div className="mx-auto max-w-[1700px] px-8">

        <FadeUp>
          <div className="mx-auto max-w-7xl text-center">

            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
              Nuestra experiencia
            </span>

            <h2 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">
              Experiencia que genera resultados
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Durante más de 13 años hemos acompañado organizaciones de diferentes sectores, entendiendo sus procesos y 
              desarrollando soluciones tecnológicas adaptadas a sus necesidades reales.
            </p>

          </div>
        </FadeUp>

        <div className="mt-5 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-4">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeUp key={item.title} delay={index * 0.1}>
                <div className="group flex h-full min-h-[260px] flex-col rounded-2xl border border-slate-800 bg-slate-950/90 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10">

                  <div className="mb-3 inline-flex rounded-xl bg-blue-600/10 p-2 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600">
                    <Icon
                      size={30}
                      className="text-blue-500 transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="flex-1 leading-7 text-slate-400">
                    {item.description}
                  </p>

                </div>
              </FadeUp>
            );
          })}

        </div>

        <FadeUp delay={0.5}>
          <div className="mt-4 grid gap-8 rounded-3xl border border-slate-800 bg-slate-950/80 p-8 py-6 text-center shadow-xl backdrop-blur-sm md:grid-cols-4">

            <div>
              <h3 className="text-4xl font-bold text-blue-500">13+</h3>
              <p className="mt-1 text-slate-400">
                Años de experiencia
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-500">100%</h3>
              <p className="mt-1 text-slate-400">
                Compromiso en cada proyecto
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-500">
                Público y Privado
              </h3>
              <p className="mt-1 text-slate-400">
                Experiencia multisectorial
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-500">
                Remoto y Presencial
              </h3>
              <p className="mt-1 text-slate-400">
                Atención según sus necesidades
              </p>
            </div>

          </div>
        </FadeUp>

      </div>
    </section>
  );
}