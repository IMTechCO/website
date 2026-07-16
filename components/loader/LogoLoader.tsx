"use client";

import { motion } from "framer-motion";

export default function LogoLoader() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      <h1 className="select-none text-6xl font-extrabold tracking-tight">
        <span className="text-white">
          IM
        </span>

        <span className="ml-1 text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">
          Tech
        </span>
      </h1>
    </motion.div>
  );
}