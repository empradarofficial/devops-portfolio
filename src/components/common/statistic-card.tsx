"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface StatisticCardProps {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function StatisticCard({
  label,
  value,
  suffix = "",
  prefix = "",
  className,
}: StatisticCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReducedMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 80, damping: 20 });
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isInView) {
      motionValue.set(prefersReducedMotion ? value : value);
    }
  }, [isInView, motionValue, prefersReducedMotion, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (displayRef.current) {
        displayRef.current.textContent = `${prefix}${Math.round(latest)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [prefix, spring, suffix]);

  useEffect(() => {
    if (isInView && !prefersReducedMotion) {
      motionValue.set(value);
    } else if (isInView && prefersReducedMotion && displayRef.current) {
      displayRef.current.textContent = `${prefix}${value}${suffix}`;
    }
  }, [isInView, motionValue, prefersReducedMotion, prefix, suffix, value]);

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur-sm",
        className,
      )}
    >
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        <span ref={displayRef}>
          {prefix}
          {prefersReducedMotion || !isInView ? 0 : 0}
          {suffix}
        </span>
      </motion.p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
