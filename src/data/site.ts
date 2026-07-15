import { BIO, EMAIL_HREF, RESUME_PATH } from "@/constants/bio";
import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: BIO.fullName,
  title: `${BIO.fullName} | ${BIO.jobTitle}`,
  description:
    "Senior Software Architect with 12+ years delivering enterprise systems across .NET, cloud, ETL, DevOps, blockchain, and AI automation. Designing scalable, maintainable, high-performance software for complex business domains.",
  url: BIO.portfolioUrl,
  ogImage: "/images/og-default.svg",
  email: BIO.email,
  location: BIO.location,
  availability: BIO.availability,
  resumePath: RESUME_PATH,
  twitterHandle: BIO.twitterHandle,
  keywords: [
    "Senior Software Architect",
    ".NET Expert",
    "Blockchain Engineer",
    "AI Automation",
    "Enterprise Software",
    "Microservices",
    "Cloud Architecture",
    "ETL",
    "DevOps",
    "Rust",
    "Solidity",
  ],
  socials: [
    {
      name: "LinkedIn",
      href: BIO.linkedinUrl,
      label: "Connect on LinkedIn",
    },
    {
      name: "GitHub",
      href: BIO.githubUrl,
      label: "View GitHub profile",
    },
    {
      name: "Email",
      href: EMAIL_HREF,
      label: "Send an email",
    },
  ],
};

export const heroRoles = [
  "Senior Software Architect",
  ".NET Expert",
  "Blockchain Engineer",
  "AI Automation Specialist",
] as const;

export const technologyBadges = [
  ".NET",
  "C#",
  "TypeScript",
  "React",
  "Next.js",
  "Azure",
  "AWS",
  "Kubernetes",
  "Docker",
  "PostgreSQL",
  "Solidity",
  "Rust",
  "Python",
  "Kafka",
  "Terraform",
] as const;

export const statistics = [
  { label: "Years of Experience", value: 12, suffix: "+" },
  { label: "Projects Delivered", value: 50, suffix: "+" },
  { label: "Technologies Mastered", value: 20, suffix: "+" },
  { label: "Industries Served", value: 8, suffix: "+" },
] as const;

export const aboutContent = {
  mission:
    "Design and deliver software systems that remain correct under load, clear under change, and economical to operate over years—not just quarters.",
  vision:
    "A practice of architecture where business outcomes, engineering discipline, and operational excellence are inseparable.",
  philosophy:
    "Architecture is a set of decisions with trade-offs. Prefer explicit contracts, observable systems, and boundaries that protect teams from accidental complexity. Optimize for change: the systems that survive are the ones teams can safely evolve.",
  biography: [
    `${BIO.fullName} is a Senior Software Architect with more than twelve years of professional experience designing and delivering enterprise software across regulated and high-stakes domains.`,
    "His work spans .NET platforms, large-scale ETL pipelines, cloud-native systems, DevOps and platform engineering, blockchain and smart contracts (Solidity, Rust), and AI-driven automation that replaces fragile manual workflows with reliable, measurable processes.",
    "He focuses on technical leadership: clarifying system boundaries, establishing delivery standards, and aligning engineering choices with measurable business outcomes—latency, cost, reliability, and time-to-market.",
  ],
  careerStory: [
    "Early career work centered on building and hardening .NET services for enterprise clients—where correctness, auditability, and long-lived maintainability mattered more than novelty.",
    "As systems grew, the focus shifted to architecture: decomposing monoliths into services, introducing event-driven patterns, and standing up cloud and DevOps foundations that made releases routine instead of risky.",
    "Recent work includes blockchain integrations for trust-sensitive workflows, AI automation for operational leverage, and cross-cutting performance work—profiling, caching strategies, and capacity planning for systems that must scale without rewriting.",
  ],
};
