import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Política de Privacidad",
};

export default function PrivacyPage() {
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
          Política de Privacidad
        </h1>

        <p className="mt-6 leading-8 text-slate-400">
          Última actualización: Julio de 2026

        En IM Tech valoramos la privacidad de nuestros clientes, usuarios y visitantes. 
        Esta Política de Privacidad explica cómo recopilamos, utilizamos, almacenamos y protegemos la información 
        personal suministrada a través de nuestro sitio web.
        </p>

        <div className="mt-12 space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-white">
              1. Información recopilada
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
            Podemos recopilar la siguiente información cuando el usuario interactúa con nuestro sitio web:<br /><br />  

            - Nombre.  <br />            
            - Empresa u organización (opcional). <br />
            - Información proporcionada voluntariamente en formularios de contacto. <br />
            - Información técnica como dirección IP, navegador, sistema operativo, fecha y hora de acceso y registros de actividad del servidor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              2. Finalidad del tratamiento de los datos
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              La información recopilada será utilizada exclusivamente para:<br />  <br />  

              - Responder solicitudes de información.<br />  
              - Elaborar propuestas comerciales.<br />  
              - Contactar al usuario respecto a sus requerimientos.<br />  
              - Gestionar proyectos y servicios contratados.<br />  
              - Mejorar la experiencia del sitio web.<br />  
              - Garantizar la seguridad del servicio.<br />  
              - Cumplir obligaciones legales aplicables.<br />  <br />  

              IM Tech no vende, alquila ni comercializa la información personal de sus usuarios.<br />  
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              3. Base legal
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              El tratamiento de la información se realiza con el consentimiento del titular de los 
              datos y conforme a la legislación aplicable en materia de protección de datos personales, 
              incluyendo la Ley 1581 de 2012 y sus normas reglamentarias en Colombia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              4. Conservación de la información
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              Los datos personales serán conservados únicamente durante el tiempo necesario para cumplir las 
              finalidades descritas anteriormente o mientras exista una obligación legal que exija su conservación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              5. Seguridad de la información
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              IM Tech implementa medidas técnicas, administrativas y organizativas para proteger la información contra:<br /> <br /> 

              - Acceso no autorizado.<br /> 
              - Alteración.<br /> 
              - Divulgación.<br /> 
              - Pérdida.<br /> 
              - Destrucción accidental.<br /> <br /> 

              Aunque ningún sistema puede garantizar una seguridad absoluta, aplicamos buenas prácticas para minimizar cualquier riesgo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              6. Cookies
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              Nuestro sitio puede utilizar cookies técnicas necesarias para su funcionamiento.<br /> <br /> 

              En caso de incorporar herramientas de analítica, publicidad o medición de comportamiento 
              (como Google Analytics u otros servicios similares), esta política será actualizada para 
              informar adecuadamente a los usuarios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              7. Compartición de información
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              IM Tech únicamente compartirá información cuando:<br /><br />

              Sea requerido por una autoridad competente.<br />
              Sea necesario para cumplir obligaciones legales.<br />
              El usuario otorgue autorización expresa.<br /><br />

              Fuera de estos casos, la información permanecerá confidencial.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              8. Derechos del titular
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              El usuario podrá ejercer en cualquier momento los siguientes derechos:<br /><br />

              - Conocer la información almacenada.<br />
              - Solicitar actualización o corrección.<br />
              - Solicitar la eliminación de sus datos cuando sea procedente.<br />
              - Revocar la autorización otorgada.<br />
              - Presentar consultas o reclamos relacionados con el tratamiento de sus datos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              9. Cambios a esta política
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              IM Tech podrá actualizar esta Política de Privacidad cuando sea necesario para reflejar 
              cambios legales, tecnológicos o relacionados con nuestros servicios.<br /><br />

              La versión publicada en este sitio será siempre la vigente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              10. Contacto
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              Para cualquier consulta o solicitud relacionada con esta Política de Privacidad, puede 
              contactarnos a través de los siguientes medios:<br /><br />

              IM Tech<br />

              Correo electrónico:<br />

              gerencia.imtech@outlook.com<br />

              País:

              Colombia
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}