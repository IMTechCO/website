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
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">

          {/* Empresa */}
          <div>
            <h2 className="text-3xl font-extrabold text-white">
              <span>IM</span>
              <span className="text-blue-500"> Tech</span>
            </h2>

            <p className="mt-6 leading-7">
              Transformamos tecnología en resultados mediante soluciones de
              software, automatización e infraestructura para empresas.
            </p>

            <div className="mt-8 space-y-3">

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <span>contacto@imtech.com.co</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span>Colombia</span>
              </div>

            </div>

            <div className="mt-8 flex gap-5 text-2xl">

              <a
                href="https://linkedin.com"
                target="_blank"
                className="transition hover:text-blue-500"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="transition hover:text-blue-500"
              >
                <FaGithub />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                className="transition hover:text-blue-500"
              >
                <FaFacebook />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                className="transition hover:text-blue-500"
              >
                <FaYoutube />
              </a>

            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Servicios
            </h3>

            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-blue-500">Desarrollo de Software</a></li>
              <li><a href="#services" className="hover:text-blue-500">Automatización</a></li>
              <li><a href="#services" className="hover:text-blue-500">Infraestructura</a></li>
              <li><a href="#services" className="hover:text-blue-500">Inteligencia Artificial</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Empresa
            </h3>

            <ul className="space-y-4">
              <li><a href="#method" className="hover:text-blue-500">Método IM</a></li>
              <li><a href="#technologies" className="hover:text-blue-500">Tecnologías</a></li>
              <li><a href="#contact" className="hover:text-blue-500">Contacto</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Legal
            </h3>

            <ul className="space-y-4">
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
      </FadeUp>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-slate-500 md:flex-row">
          <p>© 2026 IM Tech. Todos los derechos reservados.</p>

          <p>
            Desarrollado por <span className="text-white">IM Tech</span>
          </p>
        </div>
      </div>
    </footer>
  );
}