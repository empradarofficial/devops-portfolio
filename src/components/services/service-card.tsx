"use client";

import {
  Activity,
  Blocks,
  Bot,
  Boxes,
  Building2,
  Cloud,
  Code2,
  Gauge,
  Lightbulb,
  MessageSquare,
  Network,
  Shield,
  Target,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Network,
  Code2,
  Cloud,
  Blocks,
  Bot,
  Workflow,
  Gauge,
  Boxes,
  MessageSquare,
  Lightbulb,
  Target,
  Shield,
  Activity,
};

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Building2;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-border/70 bg-card/40 p-6 backdrop-blur-sm transition-colors hover:border-primary/40",
        className,
      )}
    >
      <div className="mb-4 flex size-11 items-center justify-center rounded-xl border border-border/70 bg-primary/10 text-primary">
        <Icon className="size-5" aria-hidden />
      </div>
      <h3 className="font-heading text-lg font-semibold tracking-tight">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>
      <ul className="mt-4 space-y-2">
        {service.benefits.map((benefit) => (
          <li
            key={benefit}
            className="flex items-start gap-2 text-sm text-foreground/80"
          >
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
            {benefit}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
