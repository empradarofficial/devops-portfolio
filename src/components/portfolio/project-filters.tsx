"use client";

import { cn } from "@/lib/utils";

interface ProjectFiltersProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

export function ProjectFilters({
  categories,
  active,
  onChange,
}: ProjectFiltersProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter projects by category"
      className="flex flex-wrap gap-2"
    >
      {categories.map((category) => {
        const isActive = active === category;

        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls="project-grid"
            onClick={() => onChange(category)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              isActive
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border/70 bg-card/40 text-muted-foreground hover:border-primary/40 hover:text-foreground",
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
