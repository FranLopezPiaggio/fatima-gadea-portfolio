"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animation";
import { ArrowRight } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Reunión inicial",
    description: "Entiendo tu negocio y objetivos.",
  },
  {
    step: "02",
    title: "Brief",
    description: "Definimos tiempos, servicios y expectativas.",
  },
  {
    step: "03",
    title: "Análisis de marca",
    description: "Reviso tu presencia digital actual.",
  },
  {
    step: "04",
    title: "Estrategia",
    description: "Diseño el plan adaptado a tu marca.",
  },
  {
    step: "05",
    title: "Aprobación",
    description: "Ajustamos juntos antes de arrancar.",
  },
  {
    step: "06",
    title: "Creación",
    description: "Produzco el contenido de tu marca.",
  },
  {
    step: "07",
    title: "Edición y diseño",
    description: "Cada pieza lista para cada plataforma.",
  },
  {
    step: "08",
    title: "Ejecución",
    description: "Publico y gestiono según el plan.",
  },
  {
    step: "09",
    title: "Reportes",
    description: "Mido resultados y optimizo en base a datos.",
  },
];

export function Process() {
  const row1 = processSteps.slice(0, 3);
  const row2 = processSteps.slice(3, 6);
  const row3 = processSteps.slice(6, 9);

  return (
    <section id="proceso" className="py-20 px-4 bg-aqua/20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="text-gold font-medium tracking-wider uppercase">
            Así trabajo
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-navy mt-4">
            Mi metodología
          </h2>
        </motion.div>

        {/* Row 1: 01 - 02 - 03 */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-8 mb-4">
          {row1.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex-1 bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-heading text-xl mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-heading text-lg text-navy mb-2">
                {item.title}
              </h3>
              <p className="text-navy/70 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Row 2: 04 - 05 - 06 */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-8 mb-4">
          {row2.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex-1 bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-heading text-xl mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-heading text-lg text-navy mb-2">
                {item.title}
              </h3>
              <p className="text-navy/70 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Row 3: 07 - 08 - 09 */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-8">
          {row3.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex-1 bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-heading text-xl mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-heading text-lg text-navy mb-2">
                {item.title}
              </h3>
              <p className="text-navy/70 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}