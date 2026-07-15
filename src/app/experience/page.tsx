import { AnimatedBackground } from "@/components/common/animated-background";
import { JsonLd } from "@/components/common/json-ld";
import { SectionHeader } from "@/components/common/section-header";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ExperienceCard } from "@/components/experience/experience-card";
import { getExperiences } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Experience",
  description:
    "Professional experience delivering enterprise platforms, healthcare systems, financial services, and cloud-native architecture.",
  path: "/experience",
});

export default async function ExperiencePage() {
  const experiences = await getExperiences();

  const chronological = [...experiences].sort(
    (a, b) =>
      new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  );

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Experience", path: "/experience" },
        ])}
      />
      <div className="relative">
        <AnimatedBackground />
        <SectionWrapper className="pt-8 sm:pt-12">
          <SectionHeader
            eyebrow="Career"
            title="Experience"
            description="Roles spanning architecture leadership, platform delivery, and cross-domain technical ownership."
          />
          <div className="space-y-6">
            {chronological.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </SectionWrapper>
      </div>
    </>
  );
}
