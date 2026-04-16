"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useScrollTransform } from "./useScrollTransform";
import { ScrollTrack } from "./ScrollTrack";

interface HorizontalScrollProps {
  children: React.ReactNode;
}

export const HorizontalScroll = ({ children }: HorizontalScrollProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { x } = useScrollTransform(targetRef);

  return (
    // Layer A: Container - provides scroll distance (300vh for 6 items)
    <section
      ref={targetRef}
      className="relative h-[200vh] bg-aqua/20"
    >
      {/* Layer B: Sticky Viewport - pins to viewport */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Layer C: Moving Track */}
        <ScrollTrack x={x}>{children}</ScrollTrack>
      </div>
    </section>
  );
};

// Static fallback for reduced motion / mobile
export const StaticServicesGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
      {children}
    </div>
  );
};