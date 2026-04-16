"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/animation";
import { TrendingUp, BarChart3, Target } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsApp/WhatsAppButton";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-4xl mx-auto"
      >
        <motion.span
          variants={fadeInUp}
          className="text-gold font-medium tracking-wider uppercase"
        >
          Sobre Mí
        </motion.span>

        <motion.h2
          variants={fadeInUp}
          className="font-heading text-4xl md:text-5xl text-green mt-4 mb-8"
        >
          Mi enfoque: resultados que se pueden medir
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className="space-y-6 text-lg text-green/80"
        >
          <p>
            Todo empezó emprendiendo. Y fue en ese camino donde descubrí mi pasión por el marketing y por algo muy concreto: crear estrategias que funcionen y atraigan.
          </p>
          <p>
            Desde entonces me dedico a eso. Llevo más de 4 años trabajando en marketing digital, gestionando redes sociales y diseñando campañas en Meta Ads para que las marcas no solo tengan presencia, sino que escalen sus ventas. Me encargo de la estrategia y el contenido, porque disfruto mucho cada parte del proceso.
          </p>
          <p className="text-gold font-medium">
            El marketing digital cambia todo el tiempo, y mantenerme actualizada no es opcional, por eso me capacito constantemente para ofrecerle a cada cliente las herramientas y estrategias más actuales.
            Hoy me encuentro cursando el último año de la Tecnicatura en Marketing, sumando formación académica a todo lo aprendido en el campo.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* <div className="p-6 bg-sand rounded-xl">
            <TrendingUp className="w-8 h-8 text-teal mb-4" />
            <h3 className="font-heading text-xl text-green mb-2">
              Enfoque en ROI
            </h3>
            <p className="text-green/70">
              Cada campaña optimizada para resultados medibles
            </p>
          </div>
          <div className="p-6 bg-sand rounded-xl">
            <BarChart3 className="w-8 h-8 text-teal mb-4" />
            <h3 className="font-heading text-xl text-green mb-2">Data-Driven</h3>
            <p className="text-green/70">
              Decisiones basadas en análisis de datos reales
            </p>
          </div>
          <div className="p-6 bg-sand rounded-xl">
            <Target className="w-8 h-8 text-teal mb-4" />
            <h3 className="font-heading text-xl text-green mb-2">
              Estrategia Personalizada
            </h3>
            <p className="text-green/70">
              Soluciones adaptadas a cada negocio y objetivo
            </p>
          </div> */}
        </motion.div>
      </motion.div>
    </section>
  );
}