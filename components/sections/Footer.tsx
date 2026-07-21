"use client";

import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";
import { Mail, MapPin } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      <FadeUp>
        <div className="mx-auto max-w-7xl px-6 py-14">

          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">

            {/* Empresa */}
            <div>
              <h2 className="text-3xl font-extrabold text-white">
                IM<span className="text-blue-500"> Tech</span>
              </h2>

              <p className="mt-5 max-w-md leading-7">
                Ayudamos a empresas públicas y privadas a fortalecer su operación
                mediante soporte tecnológico, infraestructura TI, desarrollo de
                software y automatización.
              </p>

              <div className="mt-6 space-y-3">

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <span>gerencia.imtech@outlook.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <span>Tumaco, Nariño · Colombia</span>
                </div>

              </div>

              <div className="mt-7 flex gap-5 text-2xl">

                <a
                  href="https://linkedin.com/company/imtechco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-blue-500"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/imtechco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-blue-500"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://facebook.com/imtechco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-blue-500"
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://youtube.com/@imtechco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-blue-500"
                >
                  <FaYoutube />
                </a>

              </div>

            </div>

            {/* Navegación */}

            <div>
              <h3 className="mb-5 text-lg font-semibold text-white">
                Navegación
              </h3>

              <ul className="space-y-3">

                <li><a href="#home" className="hover:text-blue-500">Inicio</a></li>
                <li><a href="#method" className="hover:text-blue-500">Método IM</a></li>
                <li><a href="#services" className="hover:text-blue-500">Servicios</a></li>
                <li><a href="#technologies" className="hover:text-blue-500">Tecnologías</a></li>
                <li><a href="#contact" className="hover:text-blue-500">Contacto</a></li>

              </ul>
            </div>

            {/* Legal */}

            <div>
              <h3 className="mb-5 text-lg font-semibold text-white">
                Información
              </h3>

              <ul className="space-y-3">

                <li>
                  <Link href="/privacy" className="hover:text-blue-500">
                    Política de Privacidad
                  </Link>
                </li>

                <li>
                  <Link href="/terms" className="hover:text-blue-500">
                    Términos y Condiciones
                  </Link>
                </li>

              </ul>
            </div>

          </div>

        </div>
      </FadeUp>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-sm md:flex-row">

          <p>
            © 2026 IM Tech. Todos los derechos reservados.
          </p>

          <p>
            Tecnología para empresas • Colombia
          </p>

        </div>
      </div>
    </footer>
  );
}