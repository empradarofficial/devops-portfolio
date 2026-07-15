import { notFound } from "next/navigation";
import { AnimatedBackground } from "@/components/common/animated-background";
import { JsonLd } from "@/components/common/json-ld";
import { ProjectDetail } from "@/components/sections/portfolio/project-detail";
import {
  getAdjacentProjects,
  getProjectBySlug,
  getProjectSlugs,
  getRelatedProjects,
} from "@/lib/data";
import { breadcrumbSchema, portfolioProjectSchema } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return buildMetadata({ title: "Project Not Found", noIndex: true });
  }

  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/portfolio/${project.slug}`,
    image: project.coverImage,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const [{ previous, next }, relatedProjects] = await Promise.all([
    getAdjacentProjects(slug),
    getRelatedProjects(slug),
  ]);

  return (
    <>
      <JsonLd
        data={[
          portfolioProjectSchema(project),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
            { name: project.title, path: `/portfolio/${project.slug}` },
          ]),
        ]}
      />
      <div className="relative">
        <AnimatedBackground />
        <ProjectDetail
          project={project}
          relatedProjects={relatedProjects}
          previous={previous}
          next={next}
        />
      </div>
    </>
  );
}
