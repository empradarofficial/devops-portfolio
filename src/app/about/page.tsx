import {
  Activity,
  Lightbulb,
  Shield,
  Target,
  type LucideIcon,
} from "lucide-react";
import { AnimatedBackground } from "@/components/common/animated-background";
import { JsonLd } from "@/components/common/json-ld";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { SectionHeader } from "@/components/common/section-header";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { CareerTimeline } from "@/components/experience/timeline";
import { BIO } from "@/constants/bio";
import {
  getAboutContent,
  getAchievements,
  getCoreValues,
  getTimelineEvents,
} from "@/lib/data";
import { breadcrumbSchema } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

const valueIconMap: Record<string, LucideIcon> = {
  Lightbulb,
  Target,
  Shield,
  Activity,
};

export const metadata = buildMetadata({
  title: "About",
  description: `Background, career trajectory, and architectural philosophy of ${BIO.fullName} — ${BIO.jobTitle}.`,
  path: "/about",
});

export default async function AboutPage() {
  const [about, timeline, achievements, coreValues] = await Promise.all([
    getAboutContent(),
    getTimelineEvents(),
    getAchievements(),
    getCoreValues(),
  ]);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <div className="relative">
        <AnimatedBackground />

        <SectionWrapper className="pt-8 sm:pt-12">
          <SectionHeader
            eyebrow="Profile"
            title="About"
            description="Twelve years designing enterprise systems where correctness, operability, and delivery speed are non-negotiable."
          />

          <div className="mx-auto max-w-3xl space-y-6">
            {about.biography.map((paragraph) => (
              <ScrollReveal key={paragraph.slice(0, 32)}>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper className="border-t border-border/50">
          <SectionHeader
            title="Career Story"
            description="How the practice evolved from .NET delivery to architecture leadership across cloud, data, blockchain, and AI."
          />
          <div className="mx-auto max-w-3xl space-y-6">
            {about.careerStory.map((paragraph) => (
              <ScrollReveal key={paragraph.slice(0, 32)}>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper className="border-t border-border/50">
          <SectionHeader title="Timeline" />
          <div className="mx-auto max-w-2xl">
            <CareerTimeline events={timeline} />
          </div>
        </SectionWrapper>

        <SectionWrapper className="border-t border-border/50">
          <div className="grid gap-10 lg:grid-cols-3">
            <ScrollReveal className="rounded-2xl border border-border/70 bg-card/40 p-6 backdrop-blur-sm sm:p-8">
              <h3 className="font-heading text-lg font-semibold tracking-tight">
                Mission
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {about.mission}
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-2xl border border-border/70 bg-card/40 p-6 backdrop-blur-sm sm:p-8">
              <h3 className="font-heading text-lg font-semibold tracking-tight">
                Vision
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {about.vision}
              </p>
            </ScrollReveal>
            <ScrollReveal className="rounded-2xl border border-border/70 bg-card/40 p-6 backdrop-blur-sm sm:p-8">
              <h3 className="font-heading text-lg font-semibold tracking-tight">
                Philosophy
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {about.philosophy}
              </p>
            </ScrollReveal>
          </div>
        </SectionWrapper>

        <SectionWrapper className="border-t border-border/50">
          <SectionHeader title="Achievements" />
          <div className="grid gap-6 sm:grid-cols-2">
            {achievements.map((achievement) => (
              <ScrollReveal key={achievement.id}>
                <article className="rounded-2xl border border-border/70 bg-card/40 p-6 backdrop-blur-sm">
                  <h3 className="font-heading text-lg font-semibold tracking-tight">
                    {achievement.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {achievement.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper className="border-t border-border/50">
          <SectionHeader title="Core Values" />
          <div className="grid gap-6 sm:grid-cols-2">
            {coreValues.map((value) => {
              const Icon = valueIconMap[value.icon] ?? Lightbulb;

              return (
                <ScrollReveal key={value.id}>
                  <article className="rounded-2xl border border-border/70 bg-card/40 p-6 backdrop-blur-sm">
                    <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-border/70 bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <h3 className="font-heading text-lg font-semibold tracking-tight">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </SectionWrapper>
      </div>
    </>
  );
}
