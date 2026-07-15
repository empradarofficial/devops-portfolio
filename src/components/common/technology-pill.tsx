"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TechnologyPillProps {
  name: string;
  className?: string;
}

export function TechnologyPill({ name, className }: TechnologyPillProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.span
      whileHover={prefersReducedMotion ? undefined : { y: -2 }}
      className={cn(
        "inline-flex items-center rounded-md border border-border/80 bg-background/60 px-2.5 py-1 text-xs font-medium text-foreground/80 backdrop-blur-sm",
        className,
      )}
    >
      {name}
    </motion.span>
  );
}
