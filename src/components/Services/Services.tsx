"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fadeInUp } from "../animation";
import { HorizontalScroll, StaticServicesGrid } from "../HorizontalScroll";
import { ServiceCard, ServiceCardStatic } from "./ServiceCard";

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
  const [shouldUseStatic, setShouldUseStatic] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference or mobile
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    
    setShouldUseStatic(mediaQuery.matches || isMobile);

    const handleChange = () => {
      setShouldUseStatic(mediaQuery.matches || window.innerWidth < 768);
    };

    mediaQuery.addEventListener("change", handleChange);
    window.addEventListener("resize", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("resize", handleChange);
    };
  }, []);

  return (
    <section id="servicios" className="py-20 bg-aqua/20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10px" }}
        variants={fadeInUp}
        className="mb-16 px-4"
      >
        <div className="text-center">
          <span className="text-gold font-medium tracking-wider uppercase">
            Servicios
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-green mt-4">
            Lo que hago por tu negocio
          </h2>
        </div>
      </motion.div>

      {shouldUseStatic ? (
        // Static grid for mobile / reduced motion
        <StaticServicesGrid>
          {services.map((service, index) => (
            <ServiceCardStatic
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </StaticServicesGrid>
      ) : (
        // Horizontal scroll for desktop with motion enabled
        <HorizontalScroll>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </HorizontalScroll>
      )}
    </section>
  );
}