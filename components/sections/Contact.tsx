"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FadeUp from "@/components/animations/FadeUp";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(3, "Ingrese su nombre."),
  email: z.string().email("Ingrese un correo válido."),
  company: z.string().optional(),
  message: z.string().min(15, "Describa un poco más su proyecto."),
});

type FormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      toast.success(result.message);
      reset();
    } catch (error) {
      console.error(error);
      toast.error("No fue posible enviar la solicitud. Inténtelo nuevamente.");
    }
  };

  return (
    <section id="contact" className="bg-slate-100 py-10">
      <FadeUp>
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Contacto
            </span>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Hablemos de su próximo proyecto
            </h2>

            <p className="mx-auto mt-4 max-w-6xl text-lg leading-5 text-slate-600">
              Cuéntenos qué necesita. Analizaremos su requerimiento y nos pondremos
              en contacto con usted para brindarle la mejor solución.
            </p>
          </div>

          <div className="mt-6 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            {/* Información */}

            <div className="flex flex-col justify-center">

              <h3 className="text-3xl font-bold text-slate-900">
                Estamos listos para ayudarle
              </h3>

              <p className="mt-3 leading-6 text-slate-600">
                En IM Tech acompañamos empresas públicas y privadas mediante
                soporte tecnológico, infraestructura TI, desarrollo de software
                y automatización de procesos. Cuéntenos su necesidad y un
                especialista se comunicará con usted.
              </p>

              <div className="mt-6 space-y-6">

                <div className="flex gap-4">
                  <div className="mt-2 h-3 w-3 rounded-full bg-blue-600" />
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Atención personalizada
                    </h4>
                    <p className="text-slate-600">
                      Analizamos cada proyecto antes de proponer una solución.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-2 h-3 w-3 rounded-full bg-blue-600" />
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Respuesta oportuna
                    </h4>
                    <p className="text-slate-600">
                      Nuestro equipo se pondrá en contacto con usted lo antes posible.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-2 h-3 w-3 rounded-full bg-blue-600" />
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Asesoría sin compromiso
                    </h4>
                    <p className="text-slate-600">
                      La primera conversación nos permitirá comprender sus necesidades.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Formulario */}

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
              >

                <input
                  {...register("name")}
                  placeholder="Nombre completo"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                />

                {errors.name && (
                  <p className="text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}

                <input
                  {...register("email")}
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                />

                {errors.email && (
                  <p className="text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}

                <input
                  {...register("company")}
                  placeholder="Empresa (Opcional)"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                />

                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Cuéntenos cómo podemos ayudarle..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                />

                {errors.message && (
                  <p className="text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting
                    ? "Enviando solicitud..."
                    : "Solicitar asesoría"}
                </button>

              </form>

            </div>

          </div>
        </div>
      </FadeUp>
    </section>
  );
}