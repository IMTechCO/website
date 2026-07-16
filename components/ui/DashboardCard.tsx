"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type DashboardCardProps = {
  icon: ReactNode;
  title: string;
  value: string;
  description: string;
};

export default function DashboardCard({
  icon,
  title,
  value,
  description,
}: DashboardCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/70 p-5 backdrop-blur-xl"
    >
      {/* Glow */}
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icono */}
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
        {icon}
      </div>

      {/* Título */}
      <p className="text-sm text-slate-400">
        {title}
      </p>

      {/* Valor */}
      <h3 className="mt-2 text-3xl font-bold tracking-tight text-white">
        {value}
      </h3>

      {/* Descripción */}
      <p className="mt-2 text-sm text-slate-500">
        {description}
      </p>

      {/* Línea inferior */}
      <div className="mt-5 h-1 overflow-hidden rounded-full bg-slate-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "75%" }}
          transition={{
            duration: 1.5,
            delay: 0.3,
          }}
          className="h-full rounded-full bg-blue-500"
        />
      </div>
    </motion.div>
  );
}