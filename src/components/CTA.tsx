"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animation";
import { WhatsAppButton } from "./WhatsAppButton";

export function CTA() {
  return (
    <section className="py-20 px-4 bg-navy">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.span
          variants={fadeInUp}
          className="text-gold font-medium tracking-wider uppercase"
        >
          ¿Listo para empezar?
        </motion.span>

        <motion.h2
          variants={fadeInUp}
          className="font-heading text-4xl md:text-5xl text-white mt-4 mb-6"
        >
          Si llegaste hasta acá, algo te está diciendo que es momento.        
        </motion.h2>

        <motion.p variants={fadeInUp} className="text-xl text-white/80 mb-10">
          Agenda una reunion
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <WhatsAppButton />
        </motion.div>
      </motion.div>
    </section>
  );
}