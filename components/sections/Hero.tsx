import HeroDashboard from "@/components/ui/HeroDashboard";
import FadeUp from "@/components/animations/FadeUp";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-slate-950 text-white"
    >
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        <FadeUp>
          <div>

            <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              +13 años de experiencia • Soporte TI • Desarrollo de Software
            </span>

            <h1 className="mt-2 max-w-4xl text-5xl font-extrabold leading-tight md:text-5xl">
              Tecnología que impulsa
              <span className="text-blue-500">
                {" "}el crecimiento de su empresa.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              En IM Tech ayudamos a empresas públicas y privadas, independientes y empredendedores  a optimizar su operación mediante
              soporte tecnológico especializado, infraestructura TI, desarrollo de software y
              automatización de procesos.
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
                Conocer nuestros servicios
              </a>

            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-400">

              <span>✓ Más de 13 años de experiencia</span>

              <span>✓ Empresas públicas y privadas</span>

              <span>✓ Atención remota y presencial</span>

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