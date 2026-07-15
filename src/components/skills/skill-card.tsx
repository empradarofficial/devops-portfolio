"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { SkillGroup } from "@/types";

interface SkillCardProps {
  group: SkillGroup;
  className?: string;
}

function SkillBar({ name, level, years }: { name: string; level: number; years?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium text-foreground/90">{name}</span>
        <span className="text-xs tabular-nums text-muted-foreground">
          {years != null ? `${years} yrs` : `${level}%`}
        </span>
      </div>
      <div
        className="h-1.5 overflow-hidden rounded-full bg-muted/80"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency`}
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
          initial={{ width: prefersReducedMotion ? `${level}%` : "0%" }}
          animate={{
            width: isInView ? `${level}%` : prefersReducedMotion ? `${level}%` : "0%",
          }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </div>
  );
}

export function SkillCard({ group, className }: SkillCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "rounded-2xl border border-border/70 bg-card/40 p-6 backdrop-blur-sm sm:p-8",
        className,
      )}
    >
      <h3 className="font-heading text-lg font-semibold tracking-tight">
        {group.category}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {group.description}
      </p>

      <div className="mt-6 space-y-5">
        {group.skills.map((skill) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            years={skill.years}
          />
        ))}
      </div>
    </motion.article>
  );
}
