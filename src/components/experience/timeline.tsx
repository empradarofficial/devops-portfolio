"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn, formatDate } from "@/lib/utils";
import type { Experience, TimelineEvent } from "@/types";

export interface TimelineItemData {
  id: string;
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items?: TimelineItemData[];
  experiences?: Experience[];
  className?: string;
}

function experienceToTimelineItem(experience: Experience): TimelineItemData {
  return {
    id: experience.id,
    year: formatDate(experience.startDate, { year: "numeric" }),
    title: `${experience.role} · ${experience.company}`,
    description: experience.description,
  };
}

function TimelineTrack({
  items,
  className,
}: {
  items: TimelineItemData[];
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={cn("relative", className)}>
      <div
        className="absolute top-0 bottom-0 left-[7px] w-px bg-border/80"
        aria-hidden
      />

      <ol className="space-y-10">
        {items.map((item, index) => (
          <motion.li
            key={item.id}
            initial={prefersReducedMotion ? false : { opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.45,
              delay: prefersReducedMotion ? 0 : index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative pl-8"
          >
            <span
              className="absolute top-1.5 left-0 size-[15px] rounded-full border-2 border-primary bg-background"
              aria-hidden
            />

            <div className="space-y-1">
              <p className="text-xs font-medium tracking-wider text-primary uppercase">
                {item.year}
              </p>
              <h3 className="font-heading text-base font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

export function Timeline({ items, experiences, className }: TimelineProps) {
  const resolvedItems = useMemo(() => {
    if (items?.length) return items;
    if (experiences?.length) return experiences.map(experienceToTimelineItem);
    return [];
  }, [items, experiences]);

  if (resolvedItems.length === 0) return null;

  return <TimelineTrack items={resolvedItems} className={className} />;
}

interface CareerTimelineProps {
  events: TimelineEvent[];
  className?: string;
}

export function CareerTimeline({ events, className }: CareerTimelineProps) {
  return <Timeline items={events} className={className} />;
}
