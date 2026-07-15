"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.figure
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative space-y-5 py-2", className)}
    >
      <Quote
        className="size-5 text-primary/40"
        aria-hidden
        strokeWidth={1.5}
      />

      <blockquote className="text-base leading-relaxed text-foreground/90 text-pretty">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>

      <figcaption className="flex items-center gap-3">
        {testimonial.avatar && (
          <div
            className="size-9 shrink-0 rounded-full border border-border/60 bg-muted/50"
            style={{
              backgroundImage: `url(${testimonial.avatar})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            role="img"
            aria-label={testimonial.name}
          />
        )}
        <div>
          <p className="text-sm font-medium">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </figcaption>
    </motion.figure>
  );
}
