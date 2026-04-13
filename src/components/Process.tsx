"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animation";

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

// Arrow connector component
function ConnectorArrow({ direction }: { direction: "right" | "down" | "left" }) {
  if (direction === "right") {
    return (
      <div className="hidden md:flex items-center justify-center w-8 h-8 text-green/40">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    );
  }
  if (direction === "left") {
    return (
      <div className="hidden md:flex items-center justify-center w-8 h-8 text-green/40">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </div>
    );
  }
  // down - curved connector
  return (
    <div className="hidden md:flex items-center justify-center w-8 h-16 text-green/40">
      <svg width="24" height="48" viewBox="0 0 24 48" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2">
        <path d="M12 0v30M12 30c0 9 12 18 12 18s12-9 12-18" />
      </svg>
    </div>
  );
}

// Row component for S-curve (reversed direction for middle row)
function ProcessRow({ 
  items, 
  reverse = false 
}: { 
  items: typeof processSteps; 
  reverse?: boolean 
}) {
  const rowItems = reverse ? [...items].reverse() : items;
  const actualIndices = reverse 
    ? items.map((_, i) => items.length - 1 - i) 
    : items.map((_, i) => i);

  return (
    <div className={`flex flex-col md:flex-row items-center justify-center gap-2 md:gap-2 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      {rowItems.map((item, idx) => (
        <div key={idx} className="flex items-center">
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-4 md:p-6 shadow-lg text-center w-32 md:w-40 lg:w-48"
          >
            <div className="w-10 h-10 bg-green text-white rounded-full flex items-center justify-center font-heading text-lg mx-auto mb-3">
              {item.step}
            </div>
            <h3 className="font-heading text-sm md:text-base text-green mb-1">
              {item.title}
            </h3>
            <p className="text-green/60 text-xs hidden md:block">{item.description}</p>
          </motion.div>
          {/* Connector arrow between cards (not after last) */}
          {idx < rowItems.length - 1 && (
            <ConnectorArrow direction={reverse ? "left" : "right"} />
          )}
        </div>
      ))}
    </div>
  );
}

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
          <h2 className="font-heading text-4xl md:text-5xl text-green mt-4">
            Mi metodología
          </h2>
        </motion.div>

        {/* Desktop: S-Curve Layout */}
        <div className="hidden md:flex flex-col gap-4">
          {/* Row 1: 01 → 02 → 03 (left to right) */}
          <ProcessRow items={row1} />

          {/* Connector: Arrow from 03 to 04 */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2 text-green/40">
              <span className="text-sm">↷</span>
              <svg width="20" height="40" viewBox="0 0 20 40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2">
                <path d="M10 0v25c0 8 10 15 10 15s-10 7-10 15v-25" />
              </svg>
            </div>
          </div>

          {/* Row 2: 04 ← 05 ← 06 (right to left - reversed) */}
          <ProcessRow items={row2} reverse={true} />

          {/* Connector: Arrow from 06 to 07 */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2 text-green/40">
              <span className="text-sm">↷</span>
              <svg width="20" height="40" viewBox="0 0 20 40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2">
                <path d="M10 0v25c0 8 10 15 10 15s-10 7-10 15v-25" />
              </svg>
            </div>
          </div>

          {/* Row 3: 07 → 08 → 09 (left to right) */}
          <ProcessRow items={row3} />
        </div>

        {/* Mobile: Simple vertical stack */}
        <div className="md:hidden space-y-4">
          {processSteps.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <div className="w-12 h-12 bg-green text-white rounded-full flex items-center justify-center font-heading text-xl mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-heading text-lg text-green mb-2">
                {item.title}
              </h3>
              <p className="text-green/70 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}