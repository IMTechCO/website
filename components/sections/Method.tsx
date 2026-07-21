import {
  Search,
  PencilRuler,
  Rocket,
  Handshake,
} from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";

const steps = [
  {
    icon: Search,
    title: "Analizamos",
    description:
      "Conocemos su empresa, entendemos sus procesos e identificamos la mejor estrategia tecnológica.",
  },
  {
    icon: PencilRuler,
    title: "Diseñamos",
    description:
      "Planeamos una solución segura, escalable y alineada con los objetivos del negocio.",
  },
  {
    icon: Rocket,
    title: "Implementamos",
    description:
      "Desarrollamos e integramos la solución aplicando buenas prácticas y acompañamiento técnico.",
  },
  {
    icon: Handshake,
    title: "Acompañamos",
    description:
      "Brindamos soporte y mejora continua para asegurar la estabilidad y evolución de la solución.",
  },
];

export default function Method() {
  return (
    <section id="method" className="bg-slate-950 py-15 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Cómo trabajamos
            </span>

            <h2 className="mt-3 text-4xl font-bold">
              Un proceso simple, claro y orientado a resultados
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-slate-300">
              Acompañamos cada proyecto desde el análisis inicial hasta la implementación y el soporte, 
              garantizando soluciones alineadas con los objetivos de su organización.
            </p>
          </div>
        </FadeUp>

        <div className="mt-10 grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <FadeUp key={step.title} delay={index * 0.1}>
                <div className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900 p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-600">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-2 text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="leading-7 text-slate-300">
                    {step.description}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}