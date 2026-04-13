"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animation";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Meta Certified Marketing Professional",
    issuer: "Meta",
  },
  {
    title: "Google Digital Garage Certification",
    issuer: "Google",
  },
  {
    title: "HubSpot Inbound Marketing",
    issuer: "HubSpot",
  },
  {
    title: "Social Media Marketing Specialist",
    issuer: "Digital Marketing Institute",
  },
];

export function Certifications() {
  return (
    <section className="py-20 px-4 bg-navy">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="text-gold font-medium tracking-wider uppercase">
            Certificaciones
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-white mt-4">
            Formación continua
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex items-center gap-4 p-6 bg-white/10 rounded-xl"
            >
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-lg text-white">
                  {cert.title}
                </h3>
                <p className="text-gold text-sm">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}