"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  index: number;
}

export function ServiceCard({ title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex-shrink-0 w-[80vw] md:w-[28vw] bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="font-heading text-2xl text-green mb-4">{title}</h3>
      <p className="text-green/70">{description}</p>
    </motion.div>
  );
}

// Static card for reduced motion fallback
export function ServiceCardStatic({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="font-heading text-2xl text-green mb-4">{title}</h3>
      <p className="text-green/70">{description}</p>
    </div>
  );
}