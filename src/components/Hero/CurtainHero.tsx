"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/animation";
import { ArrowDown } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Image from "next/image";

function CurtainLeft({ x, opacity }: { x: any; opacity: any }) {
  return (
    <motion.div
      style={{ x }}
      className="w-1/2 bg-sand min-h-screen flex flex-col items-center justify-center px-4 absolute left-0 top-0"
    >
      <div className="items-center justify-center ml-[10vw]">
        <motion.span
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
        </motion.h1>
      </div>
    </motion.div>
  );
}

function CurtainRight({ x, opacity }: { x: any; opacity: any }) {
  return (
    <motion.div
      style={{ x }}
      className="w-1/2 min-h-screen bg-green flex  items-center justify-center p-8 absolute right-0 top-0"
    >
      <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full border-2 border-gold shadow-2xl">
        <Image
          src="/img/fati-portfolio-img.webp"
          alt="Fatima Gadea"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
}

export function HeroCurtain() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Left curtain moves left (-100%), right curtain moves right (+100%)
  const xLeft = useTransform(scrollYProgress, [0, 0.8], ["0%", "-100%"]);
  const xRight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  // Fade out curtains as they open
  const curtainOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Fade in background content
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* LAYER 1: Background - Hero.tsx content (visible when curtain opens) */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="absolute inset-0 flex items-center justify-center z-0 bg-gradient-to-b from-sand to-aqua/30"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center px-4"
          >
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
          </motion.div>
        </motion.div>

        {/* LAYER 2: Curtain panels (fade out as they open) */}
        <div className="relative w-full h-full z-20">
          <CurtainLeft x={xLeft} opacity={curtainOpacity} />
          <CurtainRight x={xRight} opacity={curtainOpacity} />
        </div>
      </div>
    </div>
  );
}