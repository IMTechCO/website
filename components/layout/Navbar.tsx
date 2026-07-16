"use client";

import { useEffect, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "Inicio", href: "#home" },
  { name: "Servicios", href: "#services" },
  { name: "Método IM", href: "#method" },
  { name: "Tecnologías", href: "#technologies" },
  { name: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-slate-700/70 bg-slate-950/90 shadow-2xl backdrop-blur-md"
          : "border-transparent bg-slate-950/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="select-none transition-transform duration-300 hover:scale-105">
            <h1 className="text-4xl font-extrabold tracking-tight">
                <span className="text-slate-100">
                IM
                </span>

                <span
                className="
                    ml-1
                    text-blue-500
                    drop-shadow-[0_0_8px_rgba(59,130,246,0.75)]
                "
                >
                Tech
                </span>
            </h1>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-slate-200 transition-colors duration-300 hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 md:block"
        >
          Agendar consulta
        </a>

        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} size={22} />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            className="bg-white shadow-xl md:hidden"
          >
            <nav className="flex flex-col p-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-slate-100 py-4 text-lg"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-6 rounded-xl bg-blue-600 py-3 text-center font-semibold text-white"
              >
                Agendar consulta
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}