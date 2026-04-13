"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animation";

const services = [
  {
    title: "Social Media Manager",
    description:
      "Gestiono tu estrategia en redes para que tu marca tenga presencia consistente y con propósito.",
  },
  {
    title: "Paid Media • Meta Ads",
    description:
      "Creo y optimizo campañas en Facebook e Instagram para que tu inversión se convierta en ventas reales.",
  },
  {
    title: "SEO • Google",
    description:
      "Posiciono tu sitio web para que tus clientes te encuentren cuando te buscan.",
  },
  {
    title: "Google My Business",
    description:
      "Gestiono tu negocio en Google para que aparezcas en el mapa, generes confianza y tus clientes te encuentren fácilmente.",
  },
  {
    title: "Creación y edición de contenido",
    description:
      "Produzco videos y fotos listos para usar en redes, adaptados a tu marca y cada plataforma.",
  },
  {
    title: "Cobertura de eventos",
    description:
      "Cubro tus eventos en vivo en foto y video para que tengas contenido real y auténtico listo para tus redes.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 px-4 bg-aqua/20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="text-gold font-medium tracking-wider uppercase">
            Servicios
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-navy mt-4">
            Lo que hago por tu negocio
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="font-heading text-2xl text-navy mb-4">
                {service.title}
              </h3>
              <p className="text-navy/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}