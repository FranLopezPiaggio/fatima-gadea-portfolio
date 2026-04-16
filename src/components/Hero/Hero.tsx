"use client";

import { motion } from "framer-motion";
import { ArrowDown, TrendingUp, BarChart3, FileText, Target } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/components/animation";
import { WhatsAppButton } from "@/components/WhatsApp/WhatsAppButton";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-sand to-aqua/30">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-4xl mx-auto text-center"
      >
        {/* <motion.span
          variants={fadeInUp}
          className="inline-block text-teal font-medium mb-4 tracking-wider uppercase"
        >
          trafficker digital | Meta ADS | Social media
        </motion.span>

        <motion.h1
          variants={fadeInUp}
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-green mb-6"
        >
          Fatima Gadea
        </motion.h1> */}

        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl text-green/80 max-w-2xl mx-auto mb-10"
        >
          Gestiono tu presencia digital y optimizo tu pauta en Meta ADS para que cada acción tenga impacto y pase del scroll a la venta.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <WhatsAppButton />
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 border-2 border-green text-green px-6 py-3 rounded-lg font-semibold hover:bg-green hover:text-white transition-all duration-200 cursor-pointer"
          >
            <span>Conoce mis servicios</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>

        {/* <motion.div
          variants={fadeInUp}
          className="mt-16 flex justify-center gap-8"
        >
          <div className="text-center">
            <p className="font-heading text-3xl text-green">5+</p>
            <p className="text-sm text-green/60">Años de experiencia</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-3xl text-green">100+</p>
            <p className="text-sm text-green/60">Proyectos gestionados</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-3xl text-green">ROI</p>
            <p className="text-sm text-green/60">Promedio 300%</p>
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  );
}