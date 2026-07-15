import { AnimatedBackground } from "@/components/common/animated-background";
import { JsonLd } from "@/components/common/json-ld";
import { SectionHeader } from "@/components/common/section-header";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ProjectGrid } from "@/components/portfolio/project-grid";
import {
  getProjectCategories,
  getProjects,
} from "@/lib/data";
import { breadcrumbSchema } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Enterprise case studies across .NET, healthcare, finance, blockchain, AI automation, DevOps, cloud, and ETL platforms.",
  path: "/portfolio",
});

export default async function PortfolioPage() {
  const [projects, categories] = await Promise.all([
    getProjects(),
    getProjectCategories(),
  ]);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
        ])}
      />
      <div className="relative">
        <AnimatedBackground />
        <SectionWrapper className="pt-8 sm:pt-12">
          <SectionHeader
            eyebrow="Case Studies"
            title="Portfolio"
            description="Selected architecture and delivery work across regulated industries, high-volume platforms, and modernization programs."
          />
          <ProjectGrid projects={projects} categories={categories} />
        </SectionWrapper>
      </div>
    </>
  );
}
