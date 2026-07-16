import {
  BrainCircuit,
  Code2,
  Server,
  Workflow,
} from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";

const services = [
  {
    icon: Workflow,
    title: "Transformación Digital",
    description:
      "Optimizamos procesos y modernizamos la operación de su empresa mediante soluciones tecnológicas.",
  },
  {
    icon: BrainCircuit,
    title: "Automatización e IA",
    description:
      "Automatizamos procesos e incorporamos inteligencia artificial para reducir tiempos, minimizar errores y aumentar la productividad.",
  },
  {
    icon: Code2,
    title: "Desarrollo de Software",
    description:
      "Desarrollamos aplicaciones web, móviles, APIs y plataformas empresariales a la medida.",
  },
  {
    icon: Server,
    title: "Infraestructura TI",
    description:
      "Implementamos servidores, redes, seguridad, respaldo y servicios en la nube para garantizar continuidad.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-100 py-10"
    >
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Nuestros Servicios
            </span>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Soluciones tecnológicas para impulsar su empresa
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
              Diseñamos soluciones enfocadas en productividad, eficiencia y crecimiento.
            </p>
          </div>
        </FadeUp>

        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <FadeUp key={service.title} delay={index * 0.1}>
                <div
                  key={service.title}
                  className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
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