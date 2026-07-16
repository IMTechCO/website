import {
  FileSpreadsheet,
  Link2,
  Clock3,
  ShieldAlert,
} from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";

const problems = [
  {
    icon: FileSpreadsheet,
    title: "Procesos manuales",
    description: "Automatizamos tareas repetitivas para ahorrar tiempo, reducir errores y mejorar la eficiencia.",
  },
  {
    icon: Link2,
    title: "Sistemas desconectados",
    description: "Conectamos sus sistemas para que la información fluya de forma segura y en tiempo real.",
  },
  {
    icon: Clock3,
    title: "Pérdida de tiempo",
    description: "Optimizamos procesos para aumentar la productividad.",
  },
  {
    icon: ShieldAlert,
    title: "Riesgos tecnológicos",
    description: "Protegemos su operación con soluciones que fortalecen la seguridad y la continuidad del negocio.",
  },
];

export default function Problems() {
  return (
    <section id="problems" className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Problemas que resolvemos
            </span>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              ¿Su empresa enfrenta alguno de estos desafíos?
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
              Identificamos y resolvemos los problemas operativos que limitan 
              la productividad, incrementan los costos y dificultan el crecimiento de las empresas.
            </p>
          </div>
        </FadeUp>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeUp key={item.title} delay={index * 0.1}>
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                >
                  <Icon className="mb-6 h-10 w-10 text-blue-600" />

                  <h3 className="mb-3 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-slate-600">
                    {item.description}
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