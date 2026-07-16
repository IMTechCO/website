import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Términos y Condiciones",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-20">

        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-blue-400 transition hover:text-blue-300"
        >
          <ArrowLeft size={18} />
          Volver al inicio
        </Link>

        <h1 className="text-5xl font-extrabold">
          Términos y Condiciones
        </h1>

        <p className="mt-6 text-slate-400">
          Última actualización: Julio de 2026
        </p>

        <div className="mt-12 space-y-10">

          <section>
            <h2 className="text-2xl font-bold">
              1. Aceptación de los términos
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              Al acceder y utilizar el sitio web de IM Tech, el usuario acepta
              estos Términos y Condiciones. Si no está de acuerdo con alguno de
              ellos, deberá abstenerse de utilizar este sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              2. Servicios
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              IM Tech ofrece servicios de desarrollo de software, automatización
              de procesos, integración de sistemas, infraestructura tecnológica,
              consultoría e implementación de soluciones digitales para empresas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              3. Uso del sitio
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              El usuario se compromete a utilizar este sitio únicamente con
              fines lícitos y de conformidad con la legislación vigente.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-400">
              <li>No intentar acceder a sistemas no autorizados.</li>
              <li>No alterar el funcionamiento del sitio.</li>
              <li>No utilizar el contenido para fines ilícitos.</li>
              <li>No realizar actividades que afecten la seguridad del servicio.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              4. Propiedad intelectual
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              Todo el contenido publicado en este sitio, incluyendo logotipos,
              imágenes, textos, diseños, código fuente y elementos gráficos,
              pertenece a IM Tech o cuenta con las autorizaciones
              correspondientes para su utilización.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              5. Limitación de responsabilidad
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              IM Tech realiza esfuerzos razonables para mantener la información
              actualizada y disponible, sin garantizar la ausencia absoluta de
              errores o interrupciones temporales del servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              6. Enlaces externos
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              Este sitio puede contener enlaces hacia sitios de terceros.
              IM Tech no es responsable del contenido, políticas o prácticas de
              dichos sitios externos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              7. Modificaciones
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              IM Tech podrá modificar estos Términos y Condiciones en cualquier
              momento. Las modificaciones serán publicadas en esta página y
              entrarán en vigor desde su publicación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              8. Legislación aplicable
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              Estos términos se rigen por la legislación de la República de
              Colombia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              9. Contacto
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              Para cualquier consulta relacionada con estos Términos y
              Condiciones puede escribir a:
            </p>

            <p className="mt-4 font-semibold text-blue-400">
              contacto@imtech.com.co
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}