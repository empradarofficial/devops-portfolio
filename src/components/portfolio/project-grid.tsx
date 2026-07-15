"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/portfolio/project-card";
import { ProjectFilters } from "@/components/portfolio/project-filters";
import type { Project } from "@/types";

interface ProjectGridProps {
  projects: Project[];
  categories: string[];
}

export function ProjectGrid({ projects, categories }: ProjectGridProps) {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;

    return projects.filter(
      (project) =>
        project.category === active || project.categories.includes(active as Project["category"]),
    );
  }, [active, projects]);

  return (
    <div className="space-y-8">
      <ProjectFilters
        categories={categories}
        active={active}
        onChange={setActive}
      />

      <div
        id="project-grid"
        role="tabpanel"
        aria-label={`${active} projects`}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-sm text-muted-foreground">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
