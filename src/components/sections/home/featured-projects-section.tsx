import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/common/section-header";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { ProjectCard } from "@/components/portfolio/project-card";
import type { Project } from "@/types";

interface FeaturedProjectsSectionProps {
  projects: Project[];
}

export function FeaturedProjectsSection({
  projects,
}: FeaturedProjectsSectionProps) {
  return (
    <SectionWrapper id="featured-projects" className="bg-muted/15">
      <SectionHeader
        eyebrow="Portfolio"
        title="Selected case studies"
        description="Representative engagements across enterprise platforms, regulated domains, and distributed systems."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 0.08}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-10">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          View full portfolio
          <ArrowUpRight className="size-4" aria-hidden />
        </Link>
      </ScrollReveal>
    </SectionWrapper>
  );
}
