"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phone = "573225008100";

  const message =
    "Hola IM Tech, quisiera recibir información sobre sus servicios.";

  return (
    <motion.a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        delay: 1,
        duration: 0.4,
      }}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="fixed bottom-6 right-6 z-[999] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:shadow-green-500/40"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={34} />
    </motion.a>
  );
}