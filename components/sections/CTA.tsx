import { ArrowRight } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 py-24 text-white">
      <FadeUp>
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">

          <span className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            Hablemos de su proyecto
          </span>

          <h2 className="mt-3 text-4xl font-bold leading-tight">
            Convirtamos los desafíos tecnológicos de su empresa en oportunidades de crecimiento.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Ya sea que necesite soporte tecnológico, fortalecer su infraestructura,
            desarrollar software o automatizar procesos, en IM Tech encontrará un
            aliado comprometido con soluciones confiables y resultados reales.
          </p>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Solicitar asesoría
            <ArrowRight size={18} />
          </a>

        </div>
      </FadeUp>
    </section>
  );
}