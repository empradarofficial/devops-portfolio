import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    description: "Service design, APIs, and domain logic for long-lived systems.",
    skills: [
      { name: "C# / .NET", level: 95, years: 12 },
      { name: "ASP.NET Core", level: 95, years: 10 },
      { name: "Node.js", level: 75, years: 5 },
      { name: "Python", level: 70, years: 4 },
      { name: "Rust", level: 65, years: 3 },
      { name: "Go", level: 60, years: 2 },
    ],
  },
  {
    category: "Frontend",
    description: "Product UI with strong typing, performance, and accessibility.",
    skills: [
      { name: "TypeScript", level: 90, years: 7 },
      { name: "React", level: 88, years: 6 },
      { name: "Next.js", level: 85, years: 4 },
      { name: "Tailwind CSS", level: 85, years: 3 },
    ],
  },
  {
    category: "Cloud",
    description: "Cloud-native platforms with cost, reliability, and security in mind.",
    skills: [
      { name: "Azure", level: 92, years: 8 },
      { name: "AWS", level: 80, years: 5 },
      { name: "GCP", level: 65, years: 2 },
      { name: "Serverless", level: 78, years: 4 },
    ],
  },
  {
    category: "DevOps",
    description: "Delivery pipelines, infrastructure as code, and platform reliability.",
    skills: [
      { name: "Docker", level: 90, years: 7 },
      { name: "Kubernetes", level: 85, years: 5 },
      { name: "Terraform", level: 82, years: 4 },
      { name: "CI/CD", level: 92, years: 9 },
      { name: "GitHub Actions", level: 88, years: 4 },
    ],
  },
  {
    category: "Databases",
    description: "Relational and operational data stores with clear ownership boundaries.",
    skills: [
      { name: "PostgreSQL", level: 90, years: 7 },
      { name: "SQL Server", level: 92, years: 12 },
      { name: "Redis", level: 85, years: 6 },
      { name: "MongoDB", level: 70, years: 4 },
      { name: "Elasticsearch", level: 68, years: 3 },
    ],
  },
  {
    category: "Blockchain",
    description: "Smart contracts, on-chain integrations, and secure wallet workflows.",
    skills: [
      { name: "Solidity", level: 80, years: 4 },
      { name: "Ethereum", level: 78, years: 4 },
      { name: "Hardhat", level: 75, years: 3 },
      { name: "Web3.js / Ethers", level: 78, years: 4 },
    ],
  },
  {
    category: "Artificial Intelligence",
    description: "Applied AI for automation, retrieval, and decision support—not demos.",
    skills: [
      { name: "LLM Integration", level: 82, years: 3 },
      { name: "RAG Systems", level: 78, years: 2 },
      { name: "Prompt Engineering", level: 80, years: 3 },
      { name: "ML Ops Basics", level: 65, years: 2 },
    ],
  },
  {
    category: "Automation",
    description: "Workflow automation that replaces fragile manual processes.",
    skills: [
      { name: "n8n / Zapier", level: 75, years: 3 },
      { name: "RPA Patterns", level: 70, years: 3 },
      { name: "Scripting", level: 88, years: 10 },
    ],
  },
  {
    category: "Architecture",
    description: "Boundaries, contracts, and trade-offs for systems that must evolve.",
    skills: [
      { name: "Microservices", level: 92, years: 8 },
      { name: "Event-Driven Design", level: 90, years: 7 },
      { name: "DDD", level: 88, years: 6 },
      { name: "System Design", level: 94, years: 10 },
      { name: "API Design", level: 93, years: 11 },
    ],
  },
  {
    category: "ETL",
    description: "Reliable data movement with checkpointing, lineage, and replay.",
    skills: [
      { name: "SSIS", level: 85, years: 6 },
      { name: "Apache Kafka", level: 82, years: 5 },
      { name: "Azure Data Factory", level: 80, years: 4 },
      { name: "dbt / SQL Pipelines", level: 72, years: 3 },
    ],
  },
  {
    category: "Tools",
    description: "Everyday engineering tools for clarity, speed, and quality.",
    skills: [
      { name: "Git", level: 95, years: 12 },
      { name: "JetBrains / VS", level: 90, years: 12 },
      { name: "OpenTelemetry", level: 85, years: 4 },
      { name: "Postman / Bruno", level: 88, years: 8 },
    ],
  },
];
