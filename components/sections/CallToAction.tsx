import FadeUp from "@/components/animations/FadeUp";

export default function CallToAction() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <FadeUp>
        <div className="mx-auto max-w-5xl px-6 text-center">

          <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            ¿Listo para comenzar?
          </span>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight">
            Conversemos sobre su próximo proyecto tecnológico.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Ya sea que necesite fortalecer su infraestructura, desarrollar una
            solución a la medida o automatizar procesos, nuestro equipo está
            listo para acompañarlo.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-700"
            >
              Solicitar asesoría
            </a>

            <a
              href="#services"
              className="rounded-xl border border-slate-700 px-7 py-3 font-semibold transition hover:bg-slate-800"
            >
              Ver servicios
            </a>

          </div>

        </div>
      </FadeUp>
    </section>
  );
}