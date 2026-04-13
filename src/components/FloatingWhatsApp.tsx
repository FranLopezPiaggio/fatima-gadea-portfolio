"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/5493764609782"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 cursor-pointer"
      aria-label="Contactar por WhatsApp"
    >
      <Image
        src="/svg/whatsapp.svg"
        alt="WhatsApp"
        width={64}
        height={64}
        className="w-16 h-16"
      />
    </motion.a>
  );
}