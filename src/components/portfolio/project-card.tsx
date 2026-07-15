"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TechnologyPill } from "@/components/common/technology-pill";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/50 backdrop-blur-sm",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(37,99,235,0.35), transparent 45%), radial-gradient(circle at 80% 30%, rgba(124,58,237,0.28), transparent 40%), radial-gradient(circle at 50% 80%, rgba(6,182,212,0.25), transparent 45%)`,
          }}
          aria-hidden
        />
        <div className="absolute inset-0 flex items-end p-5">
          <span className="rounded-md border border-white/20 bg-black/30 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-2 flex items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>{project.role}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="font-heading text-xl font-semibold tracking-tight text-balance">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <TechnologyPill key={tech} name={tech} />
          ))}
        </div>
        <Link
          href={`/portfolio/${project.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          View Case Study
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}
