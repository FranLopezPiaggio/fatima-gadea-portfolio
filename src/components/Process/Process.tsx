"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/components/animation";

const processSteps = [
  { step: "01", title: "Reunión inicial", description: "Entiendo tu negocio y objetivos." },
  { step: "02", title: "Brief", description: "Definimos tiempos, servicios y expectativas." },
  { step: "03", title: "Análisis de marca", description: "Reviso tu presencia digital actual." },
  { step: "04", title: "Estrategia", description: "Diseño el plan adaptado a tu marca." },
  { step: "05", title: "Aprobación", description: "Ajustamos juntos antes de arrancar." },
  { step: "06", title: "Creación", description: "Produzco el contenido de tu marca." },
  { step: "07", title: "Edición y diseño", description: "Cada pieza lista para cada plataforma." },
  { step: "08", title: "Ejecución", description: "Publico y gestiono según el plan." },
  { step: "09", title: "Reportes", description: "Mido resultados y optimizo en base a datos." },
];

const CAROUSEL_INTERVAL = 6000; // 4 seconds
const CARDS_VISIBLE = 3;

export function Process() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const totalGroups = Math.ceil(processSteps.length / CARDS_VISIBLE);

  // No loop - stop at the last group
  const nextGroup = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      return next >= totalGroups ? prev : next;
    });
  }, [totalGroups]);

  // Auto-advance on hover
  useEffect(() => {
    if (!isHovered) return;

    const interval = setInterval(nextGroup, CAROUSEL_INTERVAL);
    return () => clearInterval(interval);
  }, [isHovered, nextGroup]);

  // Get current visible cards (3 at a time)
  const getVisibleCards = () => {
    const start = currentIndex * CARDS_VISIBLE;
    const visibleCards = [];
    
    for (let i = 0; i < CARDS_VISIBLE; i++) {
      const index = start + i;
      if (index < processSteps.length) {
        visibleCards.push(processSteps[index]);
      }
    }
    
    return visibleCards;
  };

  const isLastGroup = currentIndex === totalGroups - 1;

  return (
    <section id="proceso" className="py-20 px-4 bg-aqua/20">
      <div className="w-[80%] mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-wider uppercase">
            Así trabajo
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-green mt-4">
            Mi metodología
          </h2>
        </motion.div>

        {/* Desktop: Carousel with hover interaction */}
        <div 
          className="hidden md:block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative overflow-hidden py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex justify-center gap-6"
              >
                {getVisibleCards().map((card, idx) => (
                  <motion.div
                    key={`${currentIndex}-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 20px 40px rgba(165, 141, 102, 0.3)"
                    }}
                    className="w-56 flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-gold/30 cursor-pointer transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center font-heading text-lg mx-auto mb-4 text-gold">
                      {card.step}
                    </div>
                    <h3 className="font-heading text-lg text-green mb-2 text-center">
                      {card.title}
                    </h3>
                    <p className="text-green/60 text-sm text-center">
                      {card.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Progress indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalGroups }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentIndex 
                      ? "bg-gold w-8" 
                      : "bg-green/30 hover:bg-gold/50"
                  }`}
                  aria-label={`Go to step group ${idx + 1}`}
                />
              ))}
            </div>

            {/* Hover indicator */}
            <motion.div 
              className="text-center mt-4"
              animate={{ opacity: isHovered ? 1 : 0.5 }}
            >
            </motion.div>
          </div>
        </div>

        {/* Mobile: Static vertical stack */}
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
      </div>
    </section>
  );
}