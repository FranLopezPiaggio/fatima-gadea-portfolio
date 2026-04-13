"use client";

import { motion, MotionValue } from "framer-motion";
import { ReactNode } from "react";

interface ScrollTrackProps {
  children: ReactNode;
  x: MotionValue<string>;
}

export const ScrollTrack = ({ children, x }: ScrollTrackProps) => {
  return (
    <motion.div
      style={{ x }}
      className="flex gap-6 px-[5vw] will-change-transform"
    >
      {children}
    </motion.div>
  );
};