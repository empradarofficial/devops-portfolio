import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Apex Systems Architecture",
    role: "Principal Software Architect",
    location: "Remote",
    startDate: "2022-01",
    endDate: null,
    description:
      "Leads architecture and delivery for multi-product enterprise platforms spanning cloud, data, and domain services.",
    responsibilities: [
      "Define target architectures and migration paths for legacy .NET and mixed-stack systems",
      "Establish engineering standards for APIs, observability, security, and release management",
      "Advise product and engineering leadership on technical risk, capacity, and sequencing",
      "Mentor senior engineers on distributed systems design and operational ownership",
    ],
    achievements: [
      "Reduced mean time to recovery by 60% through unified observability and runbooks",
      "Led decomposition of a monolithic billing platform into bounded-context services",
      "Standardized CI/CD across 30+ repositories with policy-as-code and automated quality gates",
    ],
    technologies: [
      ".NET 8",
      "Azure",
      "Kubernetes",
      "PostgreSQL",
      "Kafka",
      "Terraform",
      "OpenTelemetry",
    ],
    logo: "/images/logos/apex.svg",
  },
  {
    id: "exp-2",
    company: "Nexus Health Platforms",
    role: "Lead Software Architect",
    location: "Hybrid",
    startDate: "2019-03",
    endDate: "2021-12",
    description:
      "Architected healthcare platforms with strict compliance, audit trails, and high-availability requirements.",
    responsibilities: [
      "Design HIPAA-conscious service boundaries and data-handling patterns",
      "Own integration strategy for EHRs, claims, and partner APIs",
      "Drive performance and reliability work for patient-facing and clinical workflows",
    ],
    achievements: [
      "Delivered an event-driven clinical data pipeline processing 2M+ events daily",
      "Cut critical-path API latency by 45% through caching and query redesign",
      "Introduced contract testing that eliminated a class of integration regressions",
    ],
    technologies: [
      ".NET Core",
      "SQL Server",
      "Azure Service Bus",
      "Redis",
      "Docker",
      "React",
    ],
    logo: "/images/logos/nexus.svg",
  },
  {
    id: "exp-3",
    company: "Meridian Financial Tech",
    role: "Senior Software Engineer → Architect",
    location: "On-site / Hybrid",
    startDate: "2015-06",
    endDate: "2019-02",
    description:
      "Built and evolved financial systems for trading operations, settlement, and reporting under regulatory constraints.",
    responsibilities: [
      "Implement core domain services for settlements and reconciliation",
      "Design ETL jobs for regulatory and management reporting",
      "Partner with operations on incident response and capacity planning",
    ],
    achievements: [
      "Rebuilt overnight batch ETL into a resilient pipeline with checkpointing and replay",
      "Improved settlement reconciliation accuracy to 99.98%",
      "Promoted to architecture role after leading a multi-team platform rewrite",
    ],
    technologies: ["C#", ".NET Framework", "SSIS", "Oracle", "RabbitMQ", "Angular"],
    logo: "/images/logos/meridian.svg",
  },
  {
    id: "exp-4",
    company: "Cascade Digital Solutions",
    role: "Software Engineer",
    location: "On-site",
    startDate: "2013-01",
    endDate: "2015-05",
    description:
      "Delivered custom enterprise applications and integrations for mid-market clients across manufacturing and logistics.",
    responsibilities: [
      "Develop ASP.NET applications and REST APIs",
      "Integrate third-party systems and on-prem databases",
      "Support production deployments and client UAT cycles",
    ],
    achievements: [
      "Shipped 15+ client projects with measurable operational improvements",
      "Introduced automated testing practices that reduced post-release defects",
    ],
    technologies: ["ASP.NET", "C#", "SQL Server", "jQuery", "IIS"],
    logo: "/images/logos/cascade.svg",
  },
];
