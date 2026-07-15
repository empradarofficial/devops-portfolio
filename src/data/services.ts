import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "svc-1",
    slug: "enterprise-software-development",
    title: "Enterprise Software Development",
    description:
      "End-to-end delivery of business-critical applications with clear ownership, testing strategy, and operational readiness.",
    icon: "Building2",
    benefits: [
      "Domain-aligned service design",
      "Auditability and compliance-aware patterns",
      "Long-term maintainability over short-term velocity theater",
    ],
  },
  {
    id: "svc-2",
    slug: "software-architecture",
    title: "Software Architecture",
    description:
      "Target-state design, migration roadmaps, and decision records that make trade-offs explicit for engineering and leadership.",
    icon: "Network",
    benefits: [
      "Bounded contexts and integration strategy",
      "Architecture Decision Records (ADRs)",
      "Risk-based sequencing for rewrites and modernization",
    ],
  },
  {
    id: "svc-3",
    slug: "dotnet-development",
    title: ".NET Development",
    description:
      "High-quality ASP.NET Core services, APIs, and background workers grounded in twelve years of production .NET delivery.",
    icon: "Code2",
    benefits: [
      ".NET 8 / modern C# practices",
      "Clean architecture and testable domain layers",
      "Performance profiling and hardening",
    ],
  },
  {
    id: "svc-4",
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    description:
      "Azure and AWS platforms designed for reliability, cost control, and operational clarity—not cloud for its own sake.",
    icon: "Cloud",
    benefits: [
      "Landing zones and network topology",
      "Managed services with clear failure modes",
      "Cost and capacity observability",
    ],
  },
  {
    id: "svc-5",
    slug: "blockchain-development",
    title: "Blockchain Development",
    description:
      "Smart contracts and off-chain integrations where immutability and trust boundaries create real business value.",
    icon: "Blocks",
    benefits: [
      "Solidity and Rust-based contracts",
      "Secure key and wallet workflows",
      "Audit-ready design and test coverage",
    ],
  },
  {
    id: "svc-6",
    slug: "ai-automation",
    title: "AI Automation",
    description:
      "LLM-backed workflows and agents that automate measurable work—with guardrails, evaluation, and human oversight.",
    icon: "Bot",
    benefits: [
      "RAG and tool-using agents",
      "Evaluation and failure handling",
      "Integration into existing enterprise systems",
    ],
  },
  {
    id: "svc-7",
    slug: "devops",
    title: "DevOps",
    description:
      "CI/CD, infrastructure as code, and platform practices that make releases routine and incidents diagnosable.",
    icon: "Workflow",
    benefits: [
      "Pipeline standardization",
      "Policy-as-code and quality gates",
      "Environment parity and rollback strategy",
    ],
  },
  {
    id: "svc-8",
    slug: "performance-optimization",
    title: "Performance Optimization",
    description:
      "Systematic profiling, caching, and capacity work targeting latency, throughput, and cost under real traffic.",
    icon: "Gauge",
    benefits: [
      "End-to-end latency budgets",
      "Database and query optimization",
      "Load testing tied to SLOs",
    ],
  },
  {
    id: "svc-9",
    slug: "microservices",
    title: "Microservices",
    description:
      "Service decomposition with contracts, data ownership, and operational tooling that prevents distributed monoliths.",
    icon: "Boxes",
    benefits: [
      "Service boundaries from domain models",
      "Async messaging and eventual consistency patterns",
      "Independent deployability with shared platform standards",
    ],
  },
  {
    id: "svc-10",
    slug: "consulting",
    title: "Consulting",
    description:
      "Architecture reviews, technical due diligence, and leadership advisory for teams shipping complex systems.",
    icon: "MessageSquare",
    benefits: [
      "Focused architecture assessments",
      "Delivery and team topology advice",
      "Clear written recommendations and next steps",
    ],
  },
];
