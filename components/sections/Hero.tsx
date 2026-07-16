import HeroDashboard from "@/components/ui/HeroDashboard";
import FadeUp from "@/components/animations/FadeUp";

export default function Hero() {
  return (
    <section
        id="home"
        className="flex min-h-screen items-center bg-slate-950 text-white"
      >
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Columna izquierda */}
        <FadeUp>
          <div>
            <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              Transformación Digital • Automatización • IA
            </span>

            <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
              Transformamos tecnología
              <span className="text-blue-500"> en resultados.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Ayudamos a empresas a optimizar procesos, automatizar tareas y
              desarrollar soluciones tecnológicas que impulsan su crecimiento.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Solicitar asesoría
              </a>

              <a
                href="#services"
                className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:bg-slate-800"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </FadeUp>

      <FadeUp delay={0.3}>
        <div className="hidden lg:flex items-center justify-center">
          <HeroDashboard />
        </div>
      </FadeUp>

      </div>
    </section>
  );
}