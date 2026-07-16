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
    <section id="contact" className="bg-slate-100 pt-12 pb-20">
      <FadeUp>
        <div className="mx-auto max-w-2xl px-6">

          <h2 className="text-center text-4xl font-bold text-slate-900">
            Agende una consulta
          </h2>

          <p className="mt-4 text-center text-slate-600">
            Cuéntenos sobre su proyecto y nos pondremos en contacto.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 space-y-4"
          >
            <input
              {...register("name")}
              placeholder="Nombre"
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
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
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
            />

            {errors.email && (
              <p className="text-sm text-red-500">
                {errors.email.message}
              </p>
            )}

            <input
              {...register("company")}
              placeholder="Empresa"
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
            />

            <textarea
              {...register("message")}
              rows={4}
              placeholder="¿Cómo podemos ayudarle?"
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
            />

            {errors.message && (
              <p className="text-sm text-red-500">
                {errors.message.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Enviando..." : "Enviar solicitud"}
            </button>
          </form>
        </div>
      </FadeUp>
    </section>
  );
}