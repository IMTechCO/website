import {
  Search,
  ClipboardCheck,
  PencilRuler,
  Rocket,
  TrendingUp,
} from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";

const steps = [
  {
    icon: Search,
    title: "Descubrir",
    description: "Entendemos su empresa, procesos y necesidades.",
  },
  {
    icon: ClipboardCheck,
    title: "Analizar",
    description: "Identificamos oportunidades de mejora y automatización.",
  },
  {
    icon: PencilRuler,
    title: "Diseñar",
    description: "Creamos una solución alineada con sus objetivos.",
  },
  {
    icon: Rocket,
    title: "Implementar",
    description: "Desarrollamos e integramos la solución con calidad.",
  },
  {
    icon: TrendingUp,
    title: "Optimizar",
    description: "Acompañamos el crecimiento y mejora continua.",
  },
];

export default function Method() {
  return (
    <section id="method" className="py-24 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Método IM
            </span>

            <h2 className="mt-3 text-4xl font-bold">
              Nuestro método para desarrollar soluciones de alto impacto
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-slate-300">
              Cada proyecto sigue una metodología clara que nos permite comprender sus necesidades, 
              desarrollar soluciones a la medida y acompañar su crecimiento en el tiempo.
            </p>
          </div>
        </FadeUp>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <FadeUp key={step.title} delay={index * 0.1}>
                <div
                  key={step.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:border-blue-600"
                >
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-300">
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