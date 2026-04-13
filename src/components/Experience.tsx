"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animation";

const experiences = [
  {
    company: "Agencia Digital",
    role: "Social Media Manager",
    period: "2021 - Actualidad",
    description:
      "Gestión integral de redes sociales para +20 clientes en diversos sectores",
  },
  {
    company: "E-commerce Local",
    role: "trafficker digital",
    period: "2020 - 2021",
    description: "Campañas de Meta Ads con ROAS promedio de 4x",
  },
  {
    company: "Startup Tech",
    role: "Content Strategist",
    period: "2019 - 2020",
    description: "Crecimiento de comunidad de 0 a 10K seguidores en 6 meses",
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="py-20 px-4 bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="text-gold font-medium tracking-wider uppercase">
            Experiencia
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-green mt-4">
            Trayectoria profesional
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex flex-col md:flex-row gap-6 p-6 bg-sand rounded-xl hover:bg-aqua/30 transition-colors duration-300"
            >
              <div className="md:w-1/3">
                <h3 className="font-heading text-xl text-green">
                  {exp.company}
                </h3>
                <p className="text-teal font-medium">{exp.role}</p>
                <p className="text-green/60 text-sm mt-2">{exp.period}</p>
              </div>
              <div className="md:w-2/3">
                <p className="text-green/80">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}