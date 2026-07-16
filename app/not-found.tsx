"use client";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="max-w-xl text-center">

        <p className="text-lg font-semibold text-blue-500">
          Error 404
        </p>

        <h1 className="mt-4 text-6xl font-extrabold">
          Página no encontrada
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          La página que intenta visitar no existe o fue movida.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
          >
            <Home size={18} />
            Volver al inicio
          </Link>

          <button
            onClick={() => history.back()}
            className="flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-semibold transition hover:bg-slate-900"
          >
            <ArrowLeft size={18} />
            Regresar
          </button>

        </div>

      </div>
    </main>
  );
}