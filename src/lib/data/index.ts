/**
 * Data access layer — Phase 1 uses static TypeScript modules.
 * Phase 2 can swap implementations (Prisma/CMS/API) without changing UI consumers.
 */

import {
  achievements,
  articles,
  certifications,
  coreValues,
  education,
  faqs,
  timelineEvents,
} from "@/data/certifications";
import { experiences } from "@/data/experience";
import { footerQuickLinks, mainNavigation } from "@/data/navigation";
import { projectCategories, projects } from "@/data/projects";
import { services } from "@/data/services";
import {
  aboutContent,
  heroRoles,
  siteConfig,
  statistics,
  technologyBadges,
} from "@/data/site";
import { skillGroups } from "@/data/skills";
import { testimonials } from "@/data/testimonials";
import type {
  Project,
  ProjectCategory,
  Service,
  SkillCategory,
} from "@/types";

export async function getSiteConfig() {
  return siteConfig;
}

export async function getHeroRoles() {
  return [...heroRoles];
}

export async function getTechnologyBadges() {
  return [...technologyBadges];
}

export async function getStatistics() {
  return [...statistics];
}

export async function getAboutContent() {
  return aboutContent;
}

export async function getNavigation() {
  return mainNavigation;
}

export async function getFooterLinks() {
  return footerQuickLinks;
}

export async function getExperiences() {
  return experiences;
}

export async function getSkillGroups() {
  return skillGroups;
}

export async function getSkillGroupByCategory(category: SkillCategory) {
  return skillGroups.find((group) => group.category === category) ?? null;
}

export async function getServices() {
  return services;
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  return services.find((service) => service.slug === slug) ?? null;
}

export async function getProjects(): Promise<Project[]> {
  return projects;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return projects.filter((project) => project.featured);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return projects.find((project) => project.slug === slug) ?? null;
}

export async function getProjectsByCategory(
  category: ProjectCategory | "All",
): Promise<Project[]> {
  if (category === "All") return projects;
  return projects.filter(
    (project) =>
      project.category === category || project.categories.includes(category),
  );
}

export async function getProjectCategories() {
  return [...projectCategories];
}

export async function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: null, next: null };

  const previous = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  return { previous, next };
}

export async function getRelatedProjects(
  slug: string,
  limit = 3,
): Promise<Project[]> {
  const current = await getProjectBySlug(slug);
  if (!current) return [];

  return projects
    .filter((project) => project.slug !== slug)
    .filter((project) =>
      project.categories.some((category) =>
        current.categories.includes(category),
      ),
    )
    .slice(0, limit);
}

export async function getTestimonials() {
  return testimonials;
}

export async function getCertifications() {
  return certifications;
}

export async function getEducation() {
  return education;
}

export async function getArticles() {
  return articles;
}

export async function getFaqs() {
  return faqs;
}

export async function getTimelineEvents() {
  return timelineEvents;
}

export async function getCoreValues() {
  return coreValues;
}

export async function getAchievements() {
  return achievements;
}

export async function getProjectSlugs(): Promise<string[]> {
  return projects.map((project) => project.slug);
}
