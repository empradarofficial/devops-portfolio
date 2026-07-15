import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectNavProps {
  previous: Project | null;
  next: Project | null;
  className?: string;
}

export function ProjectNav({ previous, next, className }: ProjectNavProps) {
  if (!previous && !next) return null;

  return (
    <nav
      aria-label="Project navigation"
      className={cn(
        "grid gap-4 border-t border-border/70 pt-8 sm:grid-cols-2",
        className,
      )}
    >
      {previous ? (
        <Link
          href={`/portfolio/${previous.slug}`}
          className="group flex flex-col gap-1 rounded-xl border border-border/70 bg-card/40 p-5 transition-colors hover:border-primary/40"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <ArrowLeft
              className="size-3.5 transition-transform group-hover:-translate-x-0.5"
              aria-hidden
            />
            Previous
          </span>
          <span className="font-heading text-base font-semibold tracking-tight">
            {previous.title}
          </span>
        </Link>
      ) : (
        <div aria-hidden />
      )}

      {next ? (
        <Link
          href={`/portfolio/${next.slug}`}
          className="group flex flex-col items-end gap-1 rounded-xl border border-border/70 bg-card/40 p-5 text-right transition-colors hover:border-primary/40 sm:col-start-2"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Next
            <ArrowRight
              className="size-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </span>
          <span className="font-heading text-base font-semibold tracking-tight">
            {next.title}
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
