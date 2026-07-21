import {
  BrainCircuit,
  Code2,
  Server,
  Workflow,
} from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";
import SectionBackground from "@/components/ui/SectionBackground";

const services = [
  {
    icon: Workflow,
    title: "Soporte Tecnológico",
    items: [
      "Mesa de ayuda",
      "Soporte remoto y en sitio",
      "Mantenimiento preventivo",
      "Servidores y usuarios",
      "Continuidad operativa",
    ],
  },
  {
    icon: Server,
    title: "Infraestructura TI",
    items: [
      "Redes y conectividad",
      "Servidores",
      "Virtualización",
      "Backups",
      "Seguridad tecnológica",
    ],
  },
  {
    icon: Code2,
    title: "Desarrollo de Software",
    items: [
      "Aplicaciones Web",
      "Sistemas empresariales",
      "APIs",
      "Integraciones",
      "Software a medida",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Automatización e IA",
    items: [
      "Automatización de procesos",
      "Integración de sistemas",
      "Inteligencia Artificial",
      "Optimización operativa",
      "Incremento de productividad",
    ],
  },
];

export default function Services() {
  return (
      <section
        id="services"
        className="relative overflow-hidden bg-slate-100 py-10"
      >
      <SectionBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <FadeUp>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Nuestros Servicios
            </span>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              ¿Cómo podemos ayudarle?
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Integramos servicios tecnológicos especializados para fortalecer la
              operación, optimizar procesos y acompañar el crecimiento de su empresa.
            </p>
          </div>
        </FadeUp>

        <div className="mt-5 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <FadeUp key={service.title} delay={index * 0.1}>
                <div className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-xl">

                  <div className="mb-5 inline-flex rounded-xl bg-blue-100 p-3 transition-all duration-300 group-hover:bg-blue-600">
                    <Icon className="h-7 w-7 text-blue-600 group-hover:text-white" />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-slate-600"
                      >
                        <span className="h-2 w-2 rounded-full bg-blue-600" />
                        {item}
                      </li>
                    ))}
                  </ul>

                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}