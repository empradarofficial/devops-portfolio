import { Calendar, User } from "lucide-react";
import { ProjectCard } from "@/components/portfolio/project-card";
import { ProjectNav } from "@/components/portfolio/project-nav";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { SectionHeader } from "@/components/common/section-header";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { TechnologyPill } from "@/components/common/technology-pill";
import type { Project } from "@/types";

interface ProjectDetailProps {
  project: Project;
  relatedProjects: Project[];
  previous: Project | null;
  next: Project | null;
}

function CaseStudySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <ScrollReveal>
      <section className="space-y-4">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">
          {title}
        </h2>
        <div className="text-base leading-relaxed text-muted-foreground">
          {children}
        </div>
      </section>
    </ScrollReveal>
  );
}

function ScreenshotPlaceholder({ index }: { index: number }) {
  return (
    <div
      className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border/70"
      aria-label={`Screenshot ${index + 1} placeholder`}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/25 via-secondary/20 to-accent/25"
        style={{
          backgroundImage: `radial-gradient(circle at ${20 + index * 15}% 25%, rgba(37,99,235,0.35), transparent 50%), radial-gradient(circle at ${70 - index * 10}% 60%, rgba(124,58,237,0.28), transparent 45%)`,
        }}
      />
    </div>
  );
}

function ProjectScreenshot({
  alt,
  index,
}: {
  alt: string;
  index: number;
}) {
  return (
    <figure>
      <ScreenshotPlaceholder index={index} />
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
}

export function ProjectDetail({
  project,
  relatedProjects,
  previous,
  next,
}: ProjectDetailProps) {
  return (
    <>
      <SectionWrapper className="pb-12 pt-8 sm:pt-12">
        <ScrollReveal>
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border border-border/70">
            <div
              className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 30%, rgba(37,99,235,0.4), transparent 50%), radial-gradient(circle at 75% 40%, rgba(124,58,237,0.3), transparent 45%), radial-gradient(circle at 50% 85%, rgba(6,182,212,0.25), transparent 50%)`,
              }}
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background/90 via-background/40 to-transparent p-6 sm:p-10">
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="rounded-md border border-border/70 bg-background/60 px-2.5 py-1 text-xs font-medium backdrop-blur-sm">
                  {project.category}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="size-3.5" aria-hidden />
                  {project.year}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <User className="size-3.5" aria-hidden />
                  {project.role}
                </span>
              </div>
              <h1 className="mt-4 max-w-4xl font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {project.summary}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper className="border-t border-border/50 py-12">
        <div className="mx-auto max-w-3xl space-y-12">
          <CaseStudySection title="Overview">
            <p>{project.overview}</p>
          </CaseStudySection>

          <CaseStudySection title="Business Problem">
            <p>{project.businessProblem}</p>
          </CaseStudySection>

          <CaseStudySection title="Solution">
            <p>{project.solution}</p>
          </CaseStudySection>

          <CaseStudySection title="Architecture">
            <p>{project.architecture}</p>
          </CaseStudySection>

          <ScrollReveal>
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <TechnologyPill key={tech} name={tech} />
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                Challenges
              </h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge) => (
                  <li
                    key={challenge}
                    className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden
                    />
                    {challenge}
                  </li>
                ))}
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                Results
              </h2>
              <ul className="space-y-3">
                {project.results.map((result) => (
                  <li
                    key={result}
                    className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    {result}
                  </li>
                ))}
              </ul>
            </section>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {project.screenshots.length > 0 && (
        <SectionWrapper className="border-t border-border/50 py-12">
          <SectionHeader
            title="Screenshots"
            description="Key interfaces and system views from the engagement."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {project.screenshots.map((screenshot, index) => (
              <ScrollReveal key={screenshot} delay={index * 0.05}>
                <ProjectScreenshot
                  alt={`${project.title} screenshot ${index + 1}`}
                  index={index}
                />
              </ScrollReveal>
            ))}
          </div>
        </SectionWrapper>
      )}

      <SectionWrapper className="border-t border-border/50 py-12">
        <div className="mx-auto max-w-3xl space-y-12">
          <ScrollReveal>
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                Lessons Learned
              </h2>
              <ul className="space-y-3">
                {project.lessonsLearned.map((lesson) => (
                  <li
                    key={lesson}
                    className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary"
                      aria-hidden
                    />
                    {lesson}
                  </li>
                ))}
              </ul>
            </section>
          </ScrollReveal>

          <ProjectNav previous={previous} next={next} />
        </div>
      </SectionWrapper>

      {relatedProjects.length > 0 && (
        <SectionWrapper className="border-t border-border/50">
          <SectionHeader
            title="Related Projects"
            description="Additional work in adjacent domains and technology stacks."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((related) => (
              <ProjectCard key={related.id} project={related} />
            ))}
          </div>
        </SectionWrapper>
      )}
    </>
  );
}
