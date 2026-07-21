import FadeUp from "@/components/animations/FadeUp";
import {
  Landmark,
  Building2,
  Factory,
  Store,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";

import SectionBackground from "@/components/ui/SectionBackground";

const sectors = [
  {
    icon: Landmark,
    title: "Sector Público",
    description:
      "Apoyamos entidades gubernamentales con soporte tecnológico, infraestructura, redes y soluciones informáticas.",
  },
  {
    icon: Building2,
    title: "Sector Financiero",
    description:
      "Experiencia en soporte técnico e infraestructura para oficinas bancarias y entidades financieras.",
  },
  {
    icon: Factory,
    title: "Empresas e Industria",
    description:
      "Soluciones para compañías de ingeniería, energía, telecomunicaciones y servicios especializados.",
  },
  {
    icon: Store,
    title: "Comercio",
    description:
      "Acompañamos empresas y establecimientos comerciales en la modernización de su operación tecnológica.",
  },
  {
    icon: GraduationCap,
    title: "Educación",
    description:
      "Implementación de soluciones tecnológicas y soporte para instituciones educativas.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Pymes y Emprendedores",
    description:
      "Desarrollo de software, automatización y consultoría para impulsar el crecimiento empresarial.",
  },
];

export default function Clients() {
  return (
    <section id="clients" className="relative overflow-hidden bg-slate-100 py-10">
      <SectionBackground />
      <div className="relative z-10 mx-auto max-w-[1700px] px-8">
        <FadeUp>
          <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Nuestra experiencia
            </span>

            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">
              Soluciones para diferentes sectores
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Durante más de 13 años hemos acompañado organizaciones públicas y
              privadas, adaptando soluciones tecnológicas a las necesidades de
              cada sector.
            </p>

          </div>
        </FadeUp>

          <div className="mt-14 grid gap-5 md:grid-cols-3 xl:grid-cols-6">

          {sectors.map((sector, index) => {
            const Icon = sector.icon;

            return (
              <FadeUp key={sector.title} delay={index * 0.1}>
                <div className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600">
                      <Icon className="h-7 w-7 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {sector.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-600">
                    {sector.description}
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