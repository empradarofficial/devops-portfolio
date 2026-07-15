import { ArticlesSection } from "@/components/sections/home/articles-section";
import { CtaSection } from "@/components/sections/home/cta-section";
import { FeaturedProjectsSection } from "@/components/sections/home/featured-projects-section";
import { HeroSection } from "@/components/sections/home/hero-section";
import { IntroSection } from "@/components/sections/home/intro-section";
import { ServicesOverviewSection } from "@/components/sections/home/services-overview-section";
import { StatsSection } from "@/components/sections/home/stats-section";
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";
import {
  getAboutContent,
  getArticles,
  getFeaturedProjects,
  getHeroRoles,
  getServices,
  getSiteConfig,
  getStatistics,
  getTechnologyBadges,
  getTestimonials,
} from "@/lib/data";

export default async function HomePage() {
  const [
    siteConfig,
    roles,
    badges,
    stats,
    about,
    projects,
    services,
    testimonials,
    articles,
  ] = await Promise.all([
    getSiteConfig(),
    getHeroRoles(),
    getTechnologyBadges(),
    getStatistics(),
    getAboutContent(),
    getFeaturedProjects(),
    getServices(),
    getTestimonials(),
    getArticles(),
  ]);

  return (
    <>
      <HeroSection
        name={siteConfig.name}
        roles={roles}
        badges={badges}
        resumePath={siteConfig.resumePath}
      />
      <StatsSection stats={stats} />
      <IntroSection paragraphs={about.biography} />
      <FeaturedProjectsSection projects={projects} />
      <ServicesOverviewSection services={services} />
      <TestimonialsSection testimonials={testimonials} />
      <ArticlesSection articles={articles.slice(0, 3)} />
      <CtaSection />
    </>
  );
}
