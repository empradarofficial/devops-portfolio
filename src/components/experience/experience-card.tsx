"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Building2, MapPin } from "lucide-react";
import { TechnologyPill } from "@/components/common/technology-pill";
import { cn, formatDateRange } from "@/lib/utils";
import type { Experience } from "@/types";

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

export function ExperienceCard({ experience, className }: ExperienceCardProps) {
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
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Building2 className="size-3.5 shrink-0" aria-hidden />
            <span>{experience.company}</span>
          </div>
          <h3 className="font-heading text-xl font-semibold tracking-tight">
            {experience.role}
          </h3>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 shrink-0" aria-hidden />
              {experience.location}
            </span>
            <time dateTime={experience.startDate}>
              {formatDateRange(experience.startDate, experience.endDate)}
            </time>
          </div>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
        {experience.description}
      </p>

      {experience.technologies.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <TechnologyPill key={tech} name={tech} />
          ))}
        </div>
      )}

      {experience.achievements.length > 0 && (
        <div className="mt-6">
          <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Outcomes
          </h4>
          <ul className="mt-3 space-y-2.5">
            {experience.achievements.map((achievement) => (
              <li
                key={achievement}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/85"
              >
                <span
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden
                />
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.article>
  );
}
