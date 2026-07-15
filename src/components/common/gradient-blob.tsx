"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type BlobColor = "primary" | "secondary" | "accent";

const blobColors: Record<BlobColor, string> = {
  primary: "bg-[#2563EB]",
  secondary: "bg-[#7C3AED]",
  accent: "bg-[#06B6D4]",
};

interface GradientBlobProps {
  className?: string;
  color?: BlobColor;
}

export function GradientBlob({ className, color = "primary" }: GradientBlobProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full opacity-30 blur-3xl will-change-transform dark:opacity-20",
        blobColors[color],
        className,
      )}
      animate={
        prefersReducedMotion
          ? undefined
          : {
              x: [0, 24, -16, 0],
              y: [0, -20, 12, 0],
              scale: [1, 1.08, 0.96, 1],
            }
      }
      transition={
        prefersReducedMotion
          ? undefined
          : {
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
    />
  );
}
