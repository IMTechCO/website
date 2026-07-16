import {
  Target,
  Puzzle,
  Handshake,
  TrendingUp,
} from "lucide-react";

const reasons = [
  {
    icon: Puzzle,
    title: "Soluciones a la medida",
    description:
      "Diseñamos soluciones adaptadas a las necesidades y objetivos específicos de cada empresa.",
  },
  {
    icon: Target,
    title: "Enfoque en resultados",
    description:
      "Cada proyecto busca generar mejoras reales en productividad, eficiencia y crecimiento.",
  },
  {
    icon: Handshake,
    title: "Acompañamiento continuo",
    description:
      "Lo acompañamos antes, durante y después de cada implementación para garantizar el éxito.",
  },
  {
    icon: TrendingUp,
    title: "Tecnología escalable",
    description:
      "Construimos soluciones preparadas para crecer junto con su empresa.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            ¿Por qué IM Tech?
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Más que proveedores tecnológicos, somos aliados estratégicos.
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Trabajamos junto a nuestros clientes para comprender sus necesidades,
            diseñar soluciones a la medida y acompañar su crecimiento.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex rounded-xl bg-blue-100 p-3">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {reason.title}
                </h3>

                <p className="leading-relaxed text-slate-600">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}