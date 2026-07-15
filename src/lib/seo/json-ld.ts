import { siteConfig } from "@/data/site";
import type { FaqItem, Project } from "@/types";
import { absoluteUrl } from "@/lib/utils";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    jobTitle: "Senior Software Architect",
    description: siteConfig.description,
    sameAs: siteConfig.socials
      .filter((social) => social.name !== "Email")
      .map((social) => social.href),
    knowsAbout: siteConfig.keywords,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} Portfolio`,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path, siteConfig.url),
    })),
  };
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(article: {
  title: string;
  summary: string;
  slug: string;
  publishedAt: string;
  coverImage: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    image: absoluteUrl(article.coverImage, siteConfig.url),
    datePublished: article.publishedAt,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
    mainEntityOfPage: absoluteUrl(`/blog/${article.slug}`, siteConfig.url),
  };
}

export function portfolioProjectSchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    image: absoluteUrl(project.coverImage, siteConfig.url),
    dateCreated: String(project.year),
    creator: {
      "@type": "Person",
      name: siteConfig.name,
    },
    keywords: project.technologies.join(", "),
    url: absoluteUrl(`/portfolio/${project.slug}`, siteConfig.url),
  };
}
