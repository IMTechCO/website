import { ArrowRight } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 py-24 text-white">
      <FadeUp>
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            Estamos listos para ayudarle
          </span>

          <h2 className="text-4xl font-bold">
            ¿Listo para transformar su empresa?
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-blue-100">
            Cuéntenos cuáles son los desafíos de su empresa. Analizaremos sus 
            necesidades y le propondremos una solución tecnológica alineada con sus objetivos.
          </p>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105"
          >
            Agendar una consulta
            <ArrowRight size={18} />
          </a>
        </div>        
      </FadeUp>
    </section>
  );
}