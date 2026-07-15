import Link from "next/link";
import { Download, ExternalLink } from "lucide-react";
import { AnimatedBackground } from "@/components/common/animated-background";
import { JsonLd } from "@/components/common/json-ld";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { SectionHeader } from "@/components/common/section-header";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { TechnologyPill } from "@/components/common/technology-pill";
import { Button } from "@/components/ui/button";
import { BIO } from "@/constants/bio";
import {
  getCertifications,
  getEducation,
  getExperiences,
  getSiteConfig,
  getSkillGroups,
} from "@/lib/data";
import { breadcrumbSchema } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";
import { formatDateRange } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Resume",
  description: `Resume summary — education, experience, certifications, and technical skills for ${BIO.fullName}.`,
  path: "/resume",
});

export default async function ResumePage() {
  const [siteConfig, education, experiences, certifications, skillGroups] =
    await Promise.all([
      getSiteConfig(),
      getEducation(),
      getExperiences(),
      getCertifications(),
      getSkillGroups(),
    ]);

  const chronological = [...experiences].sort(
    (a, b) =>
      new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  );

  const topSkills = skillGroups.flatMap((group) =>
    group.skills.slice(0, 3).map((skill) => skill.name),
  );

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resume", path: "/resume" },
        ])}
      />
      <div className="relative">
        <AnimatedBackground />
        <SectionWrapper className="pt-8 sm:pt-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="CV"
              title="Resume"
              description="Condensed professional summary. Download the full PDF for complete detail."
              className="mb-0"
            />
            <Button asChild size="lg">
              <Link href={siteConfig.resumePath} download>
                <Download aria-hidden />
                Download PDF
              </Link>
            </Button>
          </div>
        </SectionWrapper>

        <SectionWrapper className="border-t border-border/50 py-12">
          <SectionHeader title="Education" />
          <div className="space-y-6">
            {education.map((entry) => (
              <ScrollReveal key={entry.id}>
                <article className="rounded-2xl border border-border/70 bg-card/40 p-6 backdrop-blur-sm">
                  <h3 className="font-heading text-lg font-semibold tracking-tight">
                    {entry.degree}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {entry.institution} · {entry.location}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {entry.startYear} — {entry.endYear}
                  </p>
                  {entry.details && (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {entry.details}
                    </p>
                  )}
                </article>
              </ScrollReveal>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper className="border-t border-border/50 py-12">
          <SectionHeader title="Experience Summary" />
          <div className="space-y-6">
            {chronological.map((experience) => (
              <ScrollReveal key={experience.id}>
                <article className="rounded-2xl border border-border/70 bg-card/40 p-6 backdrop-blur-sm">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-heading text-lg font-semibold tracking-tight">
                      {experience.role}
                    </h3>
                    <time
                      dateTime={experience.startDate}
                      className="text-sm text-muted-foreground"
                    >
                      {formatDateRange(
                        experience.startDate,
                        experience.endDate,
                      )}
                    </time>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {experience.company} · {experience.location}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {experience.description}
                  </p>
                  {experience.achievements.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {experience.achievements.slice(0, 3).map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-2.5 text-sm text-foreground/85"
                        >
                          <span
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                            aria-hidden
                          />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </ScrollReveal>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper className="border-t border-border/50 py-12">
          <SectionHeader title="Certifications" />
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert) => (
              <ScrollReveal key={cert.id}>
                <article className="rounded-2xl border border-border/70 bg-card/40 p-5 backdrop-blur-sm">
                  <h3 className="font-heading text-base font-semibold tracking-tight">
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cert.issuer} · {cert.year}
                  </p>
                  {cert.credentialId && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      ID: {cert.credentialId}
                    </p>
                  )}
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80"
                    >
                      Verify
                      <ExternalLink className="size-3.5" aria-hidden />
                    </a>
                  )}
                </article>
              </ScrollReveal>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper className="border-t border-border/50">
          <SectionHeader title="Skills Summary" />
          <ScrollReveal>
            <div className="flex flex-wrap gap-2">
              {topSkills.map((skill) => (
                <TechnologyPill key={skill} name={skill} />
              ))}
            </div>
          </ScrollReveal>
        </SectionWrapper>
      </div>
    </>
  );
}
