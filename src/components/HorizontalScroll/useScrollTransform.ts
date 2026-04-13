"use client";

import { useScroll, useTransform, MotionValue } from "framer-motion";
import { RefObject } from "react";

export const useScrollTransform = (
  targetRef: RefObject<HTMLDivElement | null>,
): { x: MotionValue<string> } => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map scroll progress (0→1) to horizontal movement (0%→-100%)
  // -100% ensures all 6 cards scroll into view
  const x: MotionValue<string> = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-100%"],
  );

  return { x };
};