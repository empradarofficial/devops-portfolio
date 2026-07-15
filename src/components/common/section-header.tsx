"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  blurReveal,
  fadeUp,
  reducedMotionVariants,
  staggerContainer,
} from "@/lib/animations/variants";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  const prefersReducedMotion = useReducedMotion();
  const variants = prefersReducedMotion ? reducedMotionVariants : fadeUp;
  const container = prefersReducedMotion ? reducedMotionVariants : staggerContainer;
  const titleVariants = prefersReducedMotion ? reducedMotionVariants : blurReveal;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
      className={cn(
        "mb-10 max-w-3xl sm:mb-12",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <motion.p
          variants={variants}
          className="mb-3 text-sm font-medium tracking-wide text-primary uppercase"
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        variants={titleVariants}
        className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={variants}
          className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
