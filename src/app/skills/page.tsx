import { AnimatedBackground } from "@/components/common/animated-background";
import { JsonLd } from "@/components/common/json-ld";
import { SectionHeader } from "@/components/common/section-header";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { SkillCard } from "@/components/skills/skill-card";
import { getSkillGroups } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Skills",
  description:
    "Technical capabilities across backend, frontend, cloud, DevOps, databases, blockchain, AI, automation, architecture, and ETL.",
  path: "/skills",
});

export default async function SkillsPage() {
  const skillGroups = await getSkillGroups();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Skills", path: "/skills" },
        ])}
      />
      <div className="relative">
        <AnimatedBackground />
        <SectionWrapper className="pt-8 sm:pt-12">
          <SectionHeader
            eyebrow="Capabilities"
            title="Skills"
            description="Depth across the stack — from service design and data pipelines to cloud operations and AI automation."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {skillGroups.map((group) => (
              <SkillCard key={group.category} group={group} />
            ))}
          </div>
        </SectionWrapper>
      </div>
    </>
  );
}
