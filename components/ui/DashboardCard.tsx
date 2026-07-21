"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type DashboardCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function DashboardCard({
  icon,
  title,
  description,
}: DashboardCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-600/10"
    >
      {/* Glow */}
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

      {/* Línea superior */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 opacity-80" />

      {/* Icono */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/30 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
        {icon}
      </div>

      {/* Título */}
      <p className="text-sm uppercase tracking-wider text-slate-400">
        {title}
      </p>

      {/* Valor */}

      {/* Descripción */}
      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

      {/* Barra */}
      <div className="mt-5 h-1 overflow-hidden rounded-full bg-slate-800">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "82%" }}
          transition={{
            duration: 1.4,
            delay: 0.2,
          }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
        />

      </div>

    </motion.div>
  );
}