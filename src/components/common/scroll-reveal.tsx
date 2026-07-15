"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, reducedMotionVariants } from "@/lib/animations/variants";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

export function ScrollReveal({
  children,
  className,
  variants,
  delay = 0,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const animationVariants = prefersReducedMotion
    ? reducedMotionVariants
    : (variants ?? fadeUp);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={animationVariants}
      transition={delay > 0 ? { delay } : undefined}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
