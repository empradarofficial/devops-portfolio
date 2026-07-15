import type {
  Achievement,
  Article,
  Certification,
  CoreValue,
  Education,
  FaqItem,
  TimelineEvent,
} from "@/types";

export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "Microsoft Certified: Azure Solutions Architect Expert",
    issuer: "Microsoft",
    year: 2023,
    credentialId: "AZ-305",
  },
  {
    id: "cert-2",
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    year: 2022,
    credentialId: "SAA-C03",
  },
  {
    id: "cert-3",
    name: "Certified Kubernetes Application Developer (CKAD)",
    issuer: "CNCF",
    year: 2021,
  },
  {
    id: "cert-4",
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    year: 2019,
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Engineering & Technology",
    location: "Pakistan",
    startYear: 2008,
    endYear: 2012,
    details:
      "Focus on software engineering, databases, and distributed systems fundamentals.",
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: "tl-1",
    year: "2013",
    title: "Started professional career",
    description:
      "Began delivering enterprise ASP.NET applications and integrations for mid-market clients.",
  },
  {
    id: "tl-2",
    year: "2015",
    title: "Entered financial systems",
    description:
      "Joined Meridian Financial Tech; built settlement, reconciliation, and regulatory reporting systems.",
  },
  {
    id: "tl-3",
    year: "2019",
    title: "Healthcare architecture leadership",
    description:
      "Led architecture for HIPAA-conscious platforms and high-volume clinical data pipelines.",
  },
  {
    id: "tl-4",
    year: "2022",
    title: "Principal architecture practice",
    description:
      "Expanded into multi-product platforms, blockchain integrations, and AI automation initiatives.",
  },
  {
    id: "tl-5",
    year: "2024+",
    title: "Architecture & selective consulting",
    description:
      "Focus on target-state design, modernization programs, and systems that must scale under real operational load.",
  },
];

export const coreValues: CoreValue[] = [
  {
    id: "cv-1",
    title: "Clarity over cleverness",
    description:
      "Prefer designs teams can explain, operate, and change. Cleverness that hides intent is debt.",
    icon: "Lightbulb",
  },
  {
    id: "cv-2",
    title: "Outcomes over output",
    description:
      "Measure architecture by reliability, cost, latency, and delivery speed—not diagram density.",
    icon: "Target",
  },
  {
    id: "cv-3",
    title: "Boundaries that protect",
    description:
      "Strong contracts and ownership reduce accidental coupling and make teams independently productive.",
    icon: "Shield",
  },
  {
    id: "cv-4",
    title: "Operability by design",
    description:
      "Observability, runbooks, and failure modes are part of the architecture—not afterthoughts.",
    icon: "Activity",
  },
];

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "60% MTTR reduction",
    description:
      "Unified telemetry, alerting, and runbooks across a multi-service platform.",
  },
  {
    id: "ach-2",
    title: "2M+ daily events",
    description:
      "Designed an event-driven clinical data pipeline with durable processing guarantees.",
  },
  {
    id: "ach-3",
    title: "99.98% reconciliation accuracy",
    description:
      "Rebuilt financial settlement reconciliation with checkpointing and replay.",
  },
  {
    id: "ach-4",
    title: "30+ repos standardized",
    description:
      "Rolled out shared CI/CD and quality gates that made releases consistent across teams.",
  },
];

export const articles: Article[] = [
  {
    id: "art-1",
    slug: "bounded-contexts-in-legacy-dotnet",
    title: "Carving Bounded Contexts Out of a Legacy .NET Monolith",
    summary:
      "A practical sequencing approach for identifying seams, extracting services, and keeping production stable during migration.",
    publishedAt: "2025-11-12",
    readingTime: "8 min",
    tags: ["Architecture", ".NET", "Microservices"],
    coverImage: "/images/placeholders/article-1.svg",
  },
  {
    id: "art-2",
    slug: "etl-checkpointing-patterns",
    title: "Checkpointing and Replay Patterns for Enterprise ETL",
    summary:
      "How to design overnight and near-real-time pipelines that fail safely and recover without full reprocessing.",
    publishedAt: "2025-09-03",
    readingTime: "10 min",
    tags: ["ETL", "Data", "Reliability"],
    coverImage: "/images/placeholders/article-2.svg",
  },
  {
    id: "art-3",
    slug: "ai-automation-with-guardrails",
    title: "AI Automation with Guardrails: From Demo to Production",
    summary:
      "Evaluation, human-in-the-loop controls, and integration patterns that keep LLM workflows accountable.",
    publishedAt: "2026-01-18",
    readingTime: "7 min",
    tags: ["AI", "Automation", "Architecture"],
    coverImage: "/images/placeholders/article-3.svg",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What engagements do you typically take on?",
    answer:
      "Architecture reviews, modernization roadmaps, .NET and cloud platform delivery, DevOps foundations, blockchain integrations, and AI automation initiatives with clear success metrics.",
  },
  {
    question: "Do you work remotely?",
    answer:
      "Yes. Engagements are remote-first with optional on-site workshops for architecture kickoffs and stakeholder alignment.",
  },
  {
    question: "How do architecture engagements usually start?",
    answer:
      "With a focused discovery: current system constraints, failure modes, delivery bottlenecks, and business priorities. Recommendations are written, prioritized, and sequenced.",
  },
];
