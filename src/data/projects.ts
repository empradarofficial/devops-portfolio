import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "proj-1",
    slug: "enterprise-order-management-platform",
    title: "Enterprise Order Management Platform",
    summary:
      "Modular .NET order orchestration platform replacing a legacy monolith with bounded contexts, event-driven workflows, and multi-region deployment.",
    description:
      "Led the architecture and phased migration of a global order management system serving 12 business units across North America and EMEA. The platform coordinates inventory allocation, pricing, fulfillment routing, and downstream ERP synchronization through a domain-driven service mesh built on .NET 8, Azure, and Kafka.",
    category: "Enterprise",
    categories: ["Enterprise", "Microservices", "Cloud"],
    role: "Principal Software Architect",
    year: 2024,
    client: "Fortune 500 Retail Conglomerate",
    featured: true,
    coverImage: "/images/projects/enterprise-order-management-platform-cover.svg",
    screenshots: [
      "/images/projects/enterprise-order-management-platform-1.svg",
      "/images/projects/enterprise-order-management-platform-2.svg",
      "/images/projects/enterprise-order-management-platform-3.svg",
    ],
    technologies: [
      ".NET 8",
      "Azure Kubernetes Service",
      "Azure Service Bus",
      "Kafka",
      "PostgreSQL",
      "Redis",
      "Terraform",
      "OpenTelemetry",
      "gRPC",
    ],
    overview:
      "The engagement centered on decomposing a 15-year-old .NET Framework monolith that handled order intake, pricing, and fulfillment for a multi-brand retail portfolio. Business growth had outpaced the system's capacity to evolve independently per brand, and release cycles stretched to six weeks due to tightly coupled modules. I defined a target architecture organized around order, inventory, pricing, and fulfillment bounded contexts with clear aggregate boundaries and asynchronous integration. The rollout followed a strangler-fig pattern over 18 months, preserving transactional integrity while enabling each domain team to deploy on independent cadences.",
    businessProblem:
      "Order processing latency during peak retail events exceeded SLA thresholds by 3x, and a single deployment failure could halt fulfillment across all brands. Legacy stored procedures embedded business rules that were duplicated across regions, creating reconciliation drift between ERP instances. Leadership required a platform that could absorb acquisitions without re-platforming and provide auditable order state across the full lifecycle. Cost of downtime was estimated at $400K per hour during holiday windows.",
    solution:
      "We implemented a modular .NET 8 platform with CQRS command handlers for write paths and read-optimized projections backed by PostgreSQL and Redis. Cross-context communication uses outbox-pattern events published to Kafka, with idempotent consumers and dead-letter handling for poison messages. A centralized API gateway enforces OAuth 2.0, rate limiting, and schema-validated contracts generated from OpenAPI specs. Blue-green deployments on AKS with feature flags allowed progressive traffic shifting per brand without shared release trains.",
    architecture:
      "The system follows a hexagonal architecture within each bounded context, with domain logic isolated from infrastructure adapters for messaging, persistence, and external ERP connectors. An event backbone on Kafka provides at-least-once delivery with partition keys scoped to order aggregate IDs for ordering guarantees. Read models are rebuilt from event streams using dedicated projection workers, decoupling query performance from write contention. Infrastructure is provisioned via Terraform modules per environment, with Azure Front Door handling geo-routing and WAF policies at the edge.",
    challenges: [
      "Maintaining dual-write consistency during the strangler migration required compensating transactions and reconciliation jobs that compared monolith and microservice state hourly.",
      "ERP integration latency varied by region; we introduced a saga orchestrator with timeout policies and manual intervention queues for stuck workflows.",
      "Peak load testing exposed connection pool exhaustion on shared PostgreSQL clusters, leading to read-replica routing and connection pooling via PgBouncer.",
      "Cross-team contract ownership created friction until we adopted consumer-driven contract tests in CI with breaking-change detection.",
    ],
    results: [
      "Reduced P99 order confirmation latency from 4.2s to 680ms during simulated Black Friday load.",
      "Cut deployment frequency from bi-weekly monolith releases to 40+ independent service deployments per week.",
      "Eliminated three regional ERP reconciliation discrepancies that previously required manual finance intervention.",
      "Achieved 99.97% platform availability over the first 12 months post cutover.",
    ],
    lessonsLearned: [
      "Invest in migration observability early—correlation IDs spanning monolith and new services were essential for debugging split-brain scenarios.",
      "Bounded contexts should align to organizational ownership, not just logical decomposition; misaligned teams recreate coupling through shared databases.",
      "Event schema evolution policies must be enforced before production traffic, not retrofitted after consumer breakage.",
      "Strangler migrations benefit from explicit kill criteria for legacy endpoints rather than indefinite parallel operation.",
    ],
  },
  {
    id: "proj-2",
    slug: "hipaa-clinical-data-exchange",
    title: "HIPAA Clinical Data Exchange Hub",
    summary:
      "FHIR-native interoperability platform enabling secure clinical data exchange between hospitals, payers, and specialty networks with full audit trails.",
    description:
      "Architected a healthcare integration hub that normalizes HL7 v2, FHIR R4, and proprietary EHR payloads into a canonical clinical model. The platform supports consent-aware data sharing, real-time eligibility checks, and longitudinal patient record assembly for care coordination workflows.",
    category: "Healthcare",
    categories: ["Healthcare", "Enterprise", "Microservices"],
    role: "Lead Software Architect",
    year: 2021,
    client: "Regional Health Network (NDA)",
    featured: true,
    coverImage: "/images/projects/hipaa-clinical-data-exchange-cover.svg",
    screenshots: [
      "/images/projects/hipaa-clinical-data-exchange-1.svg",
      "/images/projects/hipaa-clinical-data-exchange-2.svg",
      "/images/projects/hipaa-clinical-data-exchange-3.svg",
    ],
    technologies: [
      ".NET Core 6",
      "Azure API Management",
      "Azure Service Bus",
      "SQL Server",
      "Redis",
      "HAPI FHIR",
      "Docker",
      "Application Insights",
    ],
    overview:
      "A regional health network needed to consolidate fragmented point-to-point integrations with 40+ partner systems into a governed exchange layer. Prior integrations lacked standardized consent enforcement, produced inconsistent patient matching, and generated audit gaps that complicated HIPAA assessments. I designed a hub-and-spoke architecture with a canonical patient index, protocol adapters, and policy-driven routing that respects data use agreements. The platform processes admission, discharge, lab results, and medication events with sub-second routing for critical clinical alerts.",
    businessProblem:
      "Care coordinators spent 45 minutes per patient manually reconciling records across EHR instances before transitions of care. Duplicate patient records caused 2.3% of lab orders to attach to incorrect profiles, triggering safety review incidents. Payer prior-authorization cycles averaged 72 hours due to missing clinical context at the point of request. Regulatory auditors identified insufficient logging of PHI access across legacy middleware.",
    solution:
      "We built adapter services for HL7 v2 MLLP, FHIR REST, and batch SFTP ingestion, each normalizing payloads into an internal canonical model before persistence. A master patient index applies probabilistic matching with manual review queues for low-confidence merges. Consent and purpose-of-use policies are evaluated at the API gateway using attribute-based access control tied to partner contracts. All PHI access is immutably logged to a tamper-evident audit store with 7-year retention.",
    architecture:
      "The exchange hub runs as containerized .NET services on Azure Kubernetes Service with network policies isolating PHI-processing namespaces. Inbound messages land on Azure Service Bus topics partitioned by facility ID, with dedicated consumer groups per downstream subscriber. The canonical store uses SQL Server with row-level encryption for sensitive identifiers and temporal tables for historical replay. FHIR resources are exposed through Azure API Management with OAuth 2.0 SMART-on-FHIR profiles for external consumers.",
    challenges: [
      "HL7 v2 variant differences across EHR vendors required a configurable parsing layer with facility-specific mapping profiles rather than hard-coded transforms.",
      "Patient matching false positives posed clinical risk; we implemented a human-in-the-loop workflow for merges below a 0.85 confidence threshold.",
      "Real-time alert routing during network partitions needed durable queuing with priority lanes for critical result notifications.",
      "HIPAA minimum necessary enforcement at the field level required granular FHIR resource filtering per subscriber contract.",
    ],
    results: [
      "Reduced care coordinator record reconciliation time from 45 minutes to under 8 minutes per patient.",
      "Decreased duplicate patient record rate from 2.3% to 0.4% within six months of MPI rollout.",
      "Cut prior-authorization turnaround for supported payers from 72 hours to 18 hours on average.",
      "Passed external HIPAA technical safeguard audit with zero critical findings on access logging.",
    ],
    lessonsLearned: [
      "Healthcare interoperability succeeds when governance precedes engineering—data use agreements must be machine-readable to automate enforcement.",
      "Canonical models should tolerate partial data; requiring full normalization blocks critical alerts when source systems send incomplete payloads.",
      "Audit logging volume grows faster than compute; tiered storage and indexed retention policies are architectural decisions, not ops afterthoughts.",
      "Partner onboarding is the long pole; self-service adapter configuration reduced integration lead time more than raw throughput optimization.",
    ],
  },
  {
    id: "proj-3",
    slug: "real-time-trade-settlement-engine",
    title: "Real-Time Trade Settlement Engine",
    summary:
      "Low-latency settlement and reconciliation platform processing equities and fixed-income trades with T+1 regulatory compliance and intraday risk controls.",
    description:
      "Designed and delivered a settlement engine replacing batch-oriented overnight processing with event-driven trade lifecycle management. The system handles trade capture, netting, counterparty confirmation, and nostro reconciliation for a mid-tier broker-dealer operating across US and European markets.",
    category: "Finance",
    categories: ["Finance", "Enterprise", "ETL"],
    role: "Senior Software Architect",
    year: 2020,
    client: "Mid-Tier Broker-Dealer",
    featured: true,
    coverImage: "/images/projects/real-time-trade-settlement-engine-cover.svg",
    screenshots: [
      "/images/projects/real-time-trade-settlement-engine-1.svg",
      "/images/projects/real-time-trade-settlement-engine-2.svg",
      "/images/projects/real-time-trade-settlement-engine-3.svg",
    ],
    technologies: [
      ".NET Core 3.1",
      "SQL Server",
      "Azure Event Hubs",
      "Azure Functions",
      "Redis",
      "SSIS",
      "Power BI",
      "FIX Protocol",
    ],
    overview:
      "The broker-dealer's settlement operations relied on an overnight batch pipeline that left intraday positions opaque and delayed exception resolution until the next business day. Regulatory shifts toward T+1 settlement compressed already tight processing windows and exposed manual reconciliation bottlenecks. I architected an event-sourced settlement domain that processes trade events in near real time, applies netting rules incrementally, and surfaces breaks to operations dashboards within minutes. Legacy SSIS ETL jobs were retained for regulatory reporting but fed from the new canonical trade store rather than source silos.",
    businessProblem:
      "Settlement failures averaged 340 exceptions per day, each requiring 20 minutes of manual investigation across three systems. Intraday risk exposure was calculated from stale position snapshots, understating counterparty concentration by up to 12% during volatile sessions. FINRA reporting deadlines created quarterly fire drills when batch jobs missed cutoffs due to upstream feed delays. Operations headcount could not scale linearly with trade volume growth projected at 25% annually.",
    solution:
      "Trade capture feeds via FIX and internal OMS APIs publish normalized trade events to Azure Event Hubs with deterministic partitioning by instrument and counterparty. Settlement aggregates apply netting and allocation rules in .NET domain services, persisting state transitions to SQL Server with optimistic concurrency. A reconciliation microservice compares nostro statements against expected cash movements, flagging breaks with root-cause classification. Regulatory ETL pipelines extract from the canonical store on schedule, eliminating duplicate transformation logic across reporting streams.",
    architecture:
      "The engine uses event sourcing for the trade lifecycle, with snapshots every 500 events to bound replay time for aggregate reconstruction. CQRS separates the write model from read-optimized position and exception dashboards backed by indexed views and Redis caches for hot counterparty lookups. Azure Functions handle scheduled nostro file ingestion and dead-letter reprocessing. Network segmentation isolates the settlement cluster from front-office systems, with all cross-zone traffic passing through audited API gateways.",
    challenges: [
      "FIX message variant handling across counterparties required a pluggable normalization layer with versioned mapping configurations deployed independently of core services.",
      "Optimistic concurrency conflicts spiked during market close; we introduced aggregate-level locking hints and retry policies with exponential backoff.",
      "Migrating historical trade data into the event store without downtime required parallel write paths validated by checksum reconciliation over 90 days.",
      "Regulatory reports depended on legacy field formats; adapter layers projected canonical events into SSIS-compatible staging schemas.",
    ],
    results: [
      "Reduced daily settlement exceptions from 340 to 52 within four months of production rollout.",
      "Achieved intraday position accuracy within 0.3% of end-of-day reconciliations during pilot trading sessions.",
      "Eliminated quarterly FINRA reporting fire drills by decoupling regulatory ETL from batch settlement cutoffs.",
      "Decreased mean exception resolution time from 20 minutes to 4 minutes via automated root-cause tagging.",
    ],
    lessonsLearned: [
      "In financial domains, auditability beats raw speed—every state transition needs a human-readable explanation for operations and regulators.",
      "Event sourcing pays off when business rules change retroactively; replay from historical events avoided costly backfill migrations.",
      "Keep batch and streaming paths reading from one canonical store; dual sources of truth recreate the reconciliation problems you are solving.",
      "Operations buy-in requires dashboards that match their mental model, not just technically correct data models.",
    ],
  },
  {
    id: "proj-4",
    slug: "enterprise-supply-chain-blockchain",
    title: "Enterprise Supply Chain Blockchain Network",
    summary:
      "Permissioned blockchain network for multi-party supply chain provenance, smart contract escrow, and auditable handoff records across manufacturers and logistics providers.",
    description:
      "Led the technical design of a Hyperledger Fabric-based supply chain network connecting tier-1 manufacturers, freight forwarders, and retail distribution centers. Smart contracts automate payment release on verified delivery milestones while maintaining off-chain document storage for bills of lading and inspection certificates.",
    category: "Blockchain",
    categories: ["Blockchain", "Enterprise", "Microservices"],
    role: "Blockchain Solutions Architect",
    year: 2022,
    client: "Global Manufacturing Consortium",
    featured: false,
    coverImage: "/images/projects/enterprise-supply-chain-blockchain-cover.svg",
    screenshots: [
      "/images/projects/enterprise-supply-chain-blockchain-1.svg",
      "/images/projects/enterprise-supply-chain-blockchain-2.svg",
    ],
    technologies: [
      "Hyperledger Fabric 2.5",
      "Node.js",
      ".NET 6",
      "IPFS",
      "Azure Kubernetes Service",
      "CouchDB",
      "gRPC",
      "Terraform",
    ],
    overview:
      "A consortium of manufacturers and logistics providers struggled with disputed delivery confirmations, delayed payment releases, and limited visibility into component provenance across borders. Existing EDI exchanges provided message delivery but no shared tamper-evident state across untrusted parties. I architected a permissioned blockchain network where shipment milestones, quality inspections, and custody transfers are recorded as immutable chaincode transactions with off-chain document hashes anchored on-ledger. A .NET integration layer connects ERP shipment orders to chaincode invocations without exposing partner systems to Fabric internals.",
    businessProblem:
      "Payment disputes on delivered goods tied up $12M in working capital annually across consortium members. Provenance documentation for regulated components required 5–7 days to assemble during audit requests. Counterfeit component incidents traced to gaps in custody records between freight handoffs. Partners resisted centralized platforms that required ceding operational data to a single vendor.",
    solution:
      "Hyperledger Fabric channels isolate competitive data while a shared ordering channel records cross-party shipment state transitions. Chaincode written in Go enforces escrow rules: payment tokens release when GPS-verified delivery and inspection oracle signatures satisfy contract predicates. Document hashes stored on-chain reference IPFS payloads for bills of lading and certificates, with access controlled via channel membership MSP identities. A .NET middleware service translates ERP events into chaincode proposals and subscribes to block events for downstream ERP status updates.",
    architecture:
      "Each consortium member operates peer nodes on AKS within their own subscription, connected via private endpoints and mutual TLS. Ordering service runs on Raft consensus with three geographically distributed orderer nodes for fault tolerance. The .NET gateway exposes REST APIs to partner ERP systems, handling identity enrollment through Fabric CA and transaction endorsement policy orchestration. State database uses CouchDB for rich JSON queries on shipment metadata without scanning entire blocks.",
    challenges: [
      "Partner IT teams lacked Fabric operational expertise; we packaged node deployment as Terraform modules with automated certificate rotation runbooks.",
      "Chaincode upgrade coordination across channels required governance voting workflows and backward-compatible state migrations.",
      "GPS oracle data trust required multi-source aggregation with outlier rejection before triggering escrow release transactions.",
      "IPFS document availability depended on pinning policies; we implemented redundant pinning across two provider backends with health checks.",
    ],
    results: [
      "Reduced payment dispute resolution time from an average of 34 days to 6 days via on-ledger milestone verification.",
      "Cut provenance audit document assembly from 5–7 days to same-day retrieval through indexed chain queries.",
      "Processed 180,000 shipment state transitions in the first year with zero ledger fork incidents.",
      "Onboarded 8 consortium members to independent peer nodes within a 14-week phased rollout.",
    ],
    lessonsLearned: [
      "Blockchain adds value at organizational boundaries with conflicting incentives—not for internal workflows already governed by a single authority.",
      "Off-chain data strategy determines adoption; partners accept on-chain hashes when document storage remains under their control.",
      "Operational runbooks for certificate expiry and chaincode upgrades are as critical as the initial network design.",
      "Start with one high-value use case (escrow release) rather than attempting full ERP replacement on ledger.",
    ],
  },
  {
    id: "proj-5",
    slug: "document-intelligence-automation",
    title: "Document Intelligence Automation Platform",
    summary:
      "AI-driven document classification and extraction pipeline automating invoice, contract, and compliance form processing with human-in-the-loop validation queues.",
    description:
      "Built an intelligent document processing platform that ingests scanned PDFs, emails, and EDI attachments, classifies document types, extracts structured fields via ML models, and routes exceptions to review workflows integrated with existing ERP and CLM systems.",
    category: "AI",
    categories: ["AI", "Enterprise", "ETL"],
    role: "Principal Software Architect",
    year: 2023,
    client: "Multinational Logistics Provider",
    featured: true,
    coverImage: "/images/projects/document-intelligence-automation-cover.svg",
    screenshots: [
      "/images/projects/document-intelligence-automation-1.svg",
      "/images/projects/document-intelligence-automation-2.svg",
      "/images/projects/document-intelligence-automation-3.svg",
    ],
    technologies: [
      ".NET 7",
      "Azure AI Document Intelligence",
      "Azure OpenAI",
      "Azure Functions",
      "Azure Blob Storage",
      "PostgreSQL",
      "Redis",
      "Power Automate",
      "Python",
    ],
    overview:
      "The logistics provider processed 2.4 million vendor invoices and customs documents annually through a manual data entry team of 85 operators across three regions. Error rates on critical fields such as HS codes and invoice totals drove downstream payment delays and customs holds. I designed a pipeline combining Azure AI Document Intelligence for OCR and layout analysis with custom classification models and GPT-assisted field normalization for unstructured clauses. Human reviewers handle low-confidence extractions through a .NET workflow UI with active learning feedback loops that retrain models quarterly.",
    businessProblem:
      "Manual document processing cost $6.2M annually with 4.8% field error rates on invoice line items. Customs documentation errors caused an average 2.3-day delay on 12% of international shipments. Contract renewal clauses buried in PDF attachments were missed, resulting in unfavorable auto-renewals estimated at $1.1M in excess spend. Scaling the operations team was not viable given 18% annual document volume growth.",
    solution:
      "Documents arrive via email listeners, SFTP drops, and API uploads, landing in Azure Blob Storage with metadata tags for tenant and document class. Azure Functions orchestrate OCR, classification, and extraction stages, publishing structured JSON to a validation queue. Confidence thresholds route fields below 0.92 to human review; approved extractions post directly to SAP via idempotent API calls. Azure OpenAI assists with clause summarization and anomaly detection on payment terms deviating from master agreements.",
    architecture:
      "The platform follows a stage-based pipeline architecture with dead-letter queues and replay capability per document ID. Model serving uses Azure AI Document Intelligence custom models versioned alongside extraction schema definitions stored in PostgreSQL. A .NET API layer manages tenant configuration, reviewer assignments, and audit trails for every field correction. Event-driven notifications via Service Bus trigger downstream ERP posting and exception escalation to Power Automate flows for SLA tracking.",
    challenges: [
      "Multi-language invoices required locale-specific models and fallback OCR settings that degraded throughput until we implemented parallel language detection.",
      "Model drift on new vendor template formats caused extraction accuracy drops; active learning from reviewer corrections needed automated retraining pipelines with approval gates.",
      "ERP posting failures due to master data mismatches required a pre-validation service that checked vendor IDs and GL codes before submission.",
      "GDPR and data residency constraints mandated region-specific blob storage and model endpoints for EU document traffic.",
    ],
    results: [
      "Automated straight-through processing for 73% of invoices, up from 0% manual baseline.",
      "Reduced field error rates from 4.8% to 0.9% on extracted invoice totals and line quantities.",
      "Cut average customs document processing time from 26 minutes to 3 minutes for automated cases.",
      "Realized $3.8M annual operational savings while redeploying 40 operators to exception management roles.",
    ],
    lessonsLearned: [
      "Human-in-the-loop is not a failure mode—it is the control mechanism that makes AI automation acceptable to finance and compliance stakeholders.",
      "Confidence thresholds should be tunable per field severity; a low-confidence date field is tolerable, a low-confidence total is not.",
      "Invest in document lineage and replay early; debugging extraction errors without the original pipeline state wastes more time than model tuning.",
      "Pre-validation against master data prevents the majority of downstream ERP failures that erode trust in automation.",
    ],
  },
  {
    id: "proj-6",
    slug: "platform-engineering-cicd-framework",
    title: "Platform Engineering CI/CD Framework",
    summary:
      "Internal developer platform standardizing build, test, security scanning, and deployment pipelines across 45 repositories with policy-as-code and self-service provisioning.",
    description:
      "Established a platform engineering initiative delivering golden-path CI/CD templates, ephemeral preview environments, and automated compliance gates for a product engineering organization spanning .NET, Node, and Python services.",
    category: "DevOps",
    categories: ["DevOps", "Cloud", "Microservices"],
    role: "Platform Engineering Lead",
    year: 2023,
    client: "Internal — Product Engineering Org",
    featured: false,
    coverImage: "/images/projects/platform-engineering-cicd-framework-cover.svg",
    screenshots: [
      "/images/projects/platform-engineering-cicd-framework-1.svg",
      "/images/projects/platform-engineering-cicd-framework-2.svg",
    ],
    technologies: [
      "Azure DevOps",
      "GitHub Actions",
      "Terraform",
      "Helm",
      "Kubernetes",
      "SonarQube",
      "Trivy",
      "OPA Gatekeeper",
      "Argo CD",
    ],
    overview:
      "Engineering teams maintained 45 repositories with inconsistent pipeline configurations, manual security reviews, and no standardized deployment rollback procedures. Mean lead time for changes exceeded 12 days, and production incidents frequently traced to skipped test stages or untested configuration drift. I led the design of an internal developer platform providing reusable pipeline modules, Terraform landing zones, and a service catalog for self-service environment provisioning. The framework enforces policy-as-code gates while preserving team autonomy over application code and release cadence.",
    businessProblem:
      "Inconsistent CI/CD practices caused 30% of production incidents to involve deployment-related regressions or configuration errors. Security scanning was opt-in, leaving 18 repositories without container vulnerability checks for over six months. Onboarding a new service to production required 3–4 weeks of platform team hand-holding. Infrastructure drift between staging and production environments reproduced bugs that passed all pre-production tests.",
    solution:
      "Golden-path pipeline templates in Azure DevOps and GitHub Actions encapsulate build, unit test, integration test, SAST, container scan, and deployment stages with configurable extension points. Terraform modules provision namespace-scoped Kubernetes resources, databases, and messaging components from a service catalog portal. OPA Gatekeeper policies block deployments failing image signature verification or missing resource limits. Argo CD manages GitOps sync with automated rollback on failed health checks post-deployment.",
    architecture:
      "The platform separates concerns into a control plane (pipeline orchestration, policy engine, service catalog API) and a data plane (AKS clusters per environment tier). Shared pipeline modules are versioned SemVer packages consumed via template references, with changelog-driven migration guides for breaking updates. Ephemeral preview environments spin up per pull request using Helm chart parameterization and auto-destroy after merge. Centralized observability exports DORA metrics—deployment frequency, lead time, change failure rate, and MTTR—to leadership dashboards.",
    challenges: [
      "Teams resisted mandatory gates until we demonstrated reduced incident rates on early adopters and offered escape-hatch exception workflows with expiry.",
      "Terraform state locking contention during peak commit hours required state file sharding by service domain.",
      "Polyglot repository support needed language-specific test runners without fragmenting the unified pipeline interface.",
      "Migrating legacy Jenkins pipelines required parallel operation for eight weeks with automated parity checks on build artifacts.",
    ],
    results: [
      "Reduced mean lead time for changes from 12 days to 2.8 days across adopting teams.",
      "Achieved 100% container vulnerability scanning coverage across all 45 repositories within 90 days.",
      "Cut new service production onboarding from 3–4 weeks to 3 business days via self-service catalog.",
      "Lowered deployment-related production incidents by 58% in the six months following full rollout.",
    ],
    lessonsLearned: [
      "Platform teams succeed when they optimize for developer time-to-production, not infrastructure elegance alone.",
      "Policy-as-code must ship with clear remediation messages; opaque gate failures erode adoption faster than no gates at all.",
      "Version pipeline templates like libraries—breaking changes without migration paths fragment the ecosystem you are trying to unify.",
      "Measure DORA metrics from day one; qualitative platform success stories do not survive budget scrutiny.",
    ],
  },
  {
    id: "proj-7",
    slug: "multi-cloud-disaster-recovery",
    title: "Multi-Cloud Disaster Recovery Architecture",
    summary:
      "Active-passive disaster recovery design spanning Azure primary and AWS secondary regions with automated failover, RPO under 15 minutes, and quarterly game-day validation.",
    description:
      "Architected and implemented a multi-cloud DR strategy for business-critical .NET applications and data services, including automated failover runbooks, cross-cloud networking, and consistency models for asynchronously replicated data stores.",
    category: "Cloud",
    categories: ["Cloud", "DevOps", "Enterprise"],
    role: "Cloud Infrastructure Architect",
    year: 2022,
    client: "SaaS Platform Provider",
    featured: false,
    coverImage: "/images/projects/multi-cloud-disaster-recovery-cover.svg",
    screenshots: [
      "/images/projects/multi-cloud-disaster-recovery-1.svg",
      "/images/projects/multi-cloud-disaster-recovery-2.svg",
      "/images/projects/multi-cloud-disaster-recovery-3.svg",
    ],
    technologies: [
      "Azure AKS",
      "AWS EKS",
      "PostgreSQL",
      "Aurora PostgreSQL",
      "Redis",
      "Terraform",
      "Ansible",
      "HashiCorp Vault",
      "Route 53",
      "Helm",
    ],
    overview:
      "A SaaS provider serving 2,800 enterprise tenants operated entirely from a single Azure region with backup tapes as the only DR mechanism, yielding an effective RPO of 24 hours and RTO untested beyond tabletop exercises. Customer contracts increasingly mandated sub-hour recovery objectives and geographic redundancy independent of a single cloud vendor. I designed an active-passive architecture with Azure as primary and AWS us-east-1 as warm standby, replicating application state, configuration, and data through a combination of native replication services and custom sync workers.",
    businessProblem:
      "A regional Azure outage during a prior year caused 11 hours of customer-facing downtime, triggering SLA credits exceeding $800K. Enterprise renewal negotiations stalled on DR clauses requiring RPO ≤ 15 minutes and documented failover testing. Single-vendor concentration introduced procurement and compliance concerns for customers in regulated industries. Existing backup restore procedures had never been validated against production-scale data volumes within RTO targets.",
    solution:
      "Critical .NET APIs and worker services deploy to both Azure AKS and AWS EKS from the same Helm charts with environment-specific value overlays. PostgreSQL uses cross-region logical replication to Aurora PostgreSQL with lag monitoring and automatic promotion scripts gated by health check quorum. Blob storage replicates via Azure-to-S3 sync jobs with checksum verification, while DNS failover routes through Route 53 health-checked weighted records. Runbook automation via Terraform and Ansible executes failover in documented stages with manual approval gates for production promotion.",
    architecture:
      "The DR topology employs a hub-and-spoke network model with VPN and Direct Connect bridging Azure VNet and AWS VPC for replication traffic isolated from customer-facing paths. Configuration management uses GitOps repositories synced independently to each cluster, with sealed secrets replicated via HashiCorp Vault replication. A DR orchestration service coordinates failover phases: traffic drain, replication lag validation, database promotion, cache warm-up, and DNS cutover. Observability stacks in both regions feed a unified incident dashboard with synthetic transaction probes validating end-to-end tenant workflows.",
    challenges: [
      "Cross-cloud IAM federation required careful role mapping to prevent privilege escalation during failover when identity providers differed between regions.",
      "PostgreSQL logical replication lag spiked during bulk tenant migrations; we throttled migration jobs during DR readiness windows.",
      "Stateful session handling in the SaaS tier needed externalization to Redis with cross-region replication before failover could be transparent to users.",
      "Cost of warm standby infrastructure required auto-scaling policies that reduced AWS EKS node counts during normal operation without compromising failover time.",
    ],
    results: [
      "Achieved validated RPO of 11 minutes and RTO of 47 minutes during quarterly game-day exercises.",
      "Successfully executed unplanned failover drill during maintenance window with zero data loss on financial transaction records.",
      "Unblocked $4.2M in enterprise renewals contingent on documented multi-cloud DR capabilities.",
      "Reduced DR infrastructure standby cost by 35% through scheduled scale-down policies while maintaining failover SLA.",
    ],
    lessonsLearned: [
      "DR architecture is only as credible as its last game day—quarterly automated failover drills surface drift that documentation misses.",
      "Session externalization and idempotent API design are prerequisites for transparent failover, not optional optimizations.",
      "Cross-cloud networking costs and latency affect replication architecture as much as RPO targets on paper.",
      "Manual approval gates on production promotion prevent automated failover from causing split-brain during transient health check flapping.",
    ],
  },
  {
    id: "proj-8",
    slug: "healthcare-analytics-etl-pipeline",
    title: "Healthcare Analytics ETL Pipeline",
    summary:
      "Scalable ETL platform ingesting clinical, claims, and operational data into a governed lakehouse for population health analytics and value-based care reporting.",
    description:
      "Designed a batch and micro-batch ETL pipeline consolidating data from 22 source systems into an Azure Synapse lakehouse with medallion architecture, data quality frameworks, and HIPAA-compliant access controls for analytics teams.",
    category: "ETL",
    categories: ["ETL", "Healthcare", "Cloud"],
    role: "Data Platform Architect",
    year: 2019,
    client: "Accountable Care Organization",
    featured: false,
    coverImage: "/images/projects/healthcare-analytics-etl-pipeline-cover.svg",
    screenshots: [
      "/images/projects/healthcare-analytics-etl-pipeline-1.svg",
      "/images/projects/healthcare-analytics-etl-pipeline-2.svg",
    ],
    technologies: [
      "Azure Data Factory",
      "Azure Synapse Analytics",
      "Azure Databricks",
      "Delta Lake",
      "SQL Server",
      ".NET Core",
      "dbt",
      "Apache Spark",
    ],
    overview:
      "An accountable care organization needed a unified analytics foundation to measure quality metrics, track attributed patient populations, and report on shared savings under value-based contracts. Data resided in siloed EHR extracts, claims feeds, and manual spreadsheets with inconsistent patient identifiers and delayed refresh cycles. I architected a medallion lakehouse pipeline using Azure Data Factory for orchestration, Databricks for transformation, and Delta Lake for ACID-compliant storage with time travel for audit replay. The platform serves curated datasets to Power BI and external quality registries through row-level security aligned to care team assignments.",
    businessProblem:
      "Quality metric reporting lagged 45 days behind clinical activity, preventing timely care gap closure interventions. Analysts spent 60% of their time reconciling conflicting patient counts across claims and clinical sources. Value-based contract calculations lacked auditable lineage, creating disputes with payer partners over attributed population denominators. HIPAA compliance reviews flagged uncontrolled PHI copies on analyst workstations fed by ad hoc extracts.",
    solution:
      "Azure Data Factory pipelines ingest HL7 extracts, X12 claims, and reference data on scheduled and trigger-based cadences, landing raw files in bronze Delta tables with ingestion metadata. Databricks notebooks apply standardized de-identification, patient matching, and clinical concept mapping (ICD, CPT, LOINC) in silver layers. dbt models build gold-layer quality measure calculations with unit tests and schema contracts enforced in CI. Access is brokered through Synapse serverless SQL with Azure AD groups and column-level masking for sensitive attributes.",
    architecture:
      "The pipeline follows medallion architecture: bronze for immutable raw ingestion, silver for cleansed and conformed entities, gold for business-level aggregates and measure definitions. Orchestration dependencies are DAG-modeled in Data Factory with checkpoint files enabling idempotent replays after failure. Spark jobs run on autoscaling Databricks clusters sized by workload class, with job clusters terminated after batch completion to control cost. Metadata and lineage are captured in Azure Purview, linking source systems to downstream reports for audit requests.",
    challenges: [
      "Patient matching across claims and clinical records without a universal identifier required probabilistic linkage with manual override tables maintained by data stewards.",
      "Late-arriving claims data caused measure recalculation cascades; we implemented incremental gold-layer updates with effective-date versioning.",
      "Source schema changes from EHR upgrades broke ingestion mappings; contract tests on bronze layer row counts and schema hashes detected drift within one pipeline run.",
      "De-identification rules for research use cases conflicted with operational analytics needs, requiring dual gold layers with separate access policies.",
    ],
    results: [
      "Reduced quality metric reporting latency from 45 days to 5 days after clinical period close.",
      "Decreased analyst data preparation time by 62%, redirecting capacity to care gap analysis.",
      "Established auditable lineage for 100% of value-based contract measure inputs, resolving payer disputes within one reporting cycle.",
      "Eliminated ad hoc PHI extracts by providing governed self-service access through Synapse and Power BI row-level security.",
    ],
    lessonsLearned: [
      "Medallion architecture discipline prevents silver-layer shortcuts that recreate the silos you are consolidating.",
      "Data quality checks belong at ingestion, not after gold-layer publication—downstream fixes are exponentially more expensive.",
      "Patient identity resolution is a domain problem requiring clinical stakeholder governance, not purely algorithmic matching.",
      "Lineage metadata is a compliance deliverable, not a documentation nicety; build it into the pipeline from the first source connection.",
    ],
  },
  {
    id: "proj-9",
    slug: "payment-microservices-migration",
    title: "Payment Microservices Migration",
    summary:
      "Strategic decomposition of a monolithic payment processor into PCI-scoped microservices with tokenization, idempotent transaction handling, and independent scaling of authorization and settlement paths.",
    description:
      "Led the migration of a legacy .NET Framework payment monolith into a microservices architecture handling authorization, capture, refund, and tokenization workflows for an e-commerce payment gateway processing $1.2B annually.",
    category: "Microservices",
    categories: ["Microservices", "Finance", "Cloud"],
    role: "Lead Software Architect",
    year: 2025,
    client: "Payment Gateway Provider",
    featured: false,
    coverImage: "/images/projects/payment-microservices-migration-cover.svg",
    screenshots: [
      "/images/projects/payment-microservices-migration-1.svg",
      "/images/projects/payment-microservices-migration-2.svg",
      "/images/projects/payment-microservices-migration-3.svg",
    ],
    technologies: [
      ".NET 8",
      "Kubernetes",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "HashiCorp Vault",
      "Stripe Connect",
      "Istio",
      "Prometheus",
    ],
    overview:
      "The payment gateway operated as a single deployable unit handling authorization, tokenization, settlement, and merchant configuration, creating PCI audit scope that encompassed the entire codebase and blocking team parallelization. Transaction volume growth of 40% year-over-year stressed shared thread pools, causing authorization timeouts during flash sales. I defined a microservices decomposition aligned to PCI scope minimization, separating cardholder data environments from merchant-facing configuration services. Migration proceeds via the strangler pattern with dual-write validation on transaction IDs and amount checksums.",
    businessProblem:
      "PCI DSS audit scope covered 120,000 lines of code unrelated to payment processing, extending audit cycles to 11 weeks and $380K in annual compliance costs. Authorization P99 latency reached 2.1 seconds during peak events, causing merchant cart abandonment rates to spike 8%. Refund processing shared the authorization thread pool, creating head-of-line blocking that delayed settlement batches. Independent scaling of read-heavy merchant dashboard APIs was impossible without scaling the entire monolith.",
    solution:
      "Cardholder data flows through dedicated tokenization and authorization services running in PCI-scoped Kubernetes namespaces with strict network policies and HSM-backed key management via HashiCorp Vault. Idempotency keys on all transaction APIs prevent duplicate charges during client retries, with Redis-backed deduplication windows aligned to network timeout profiles. Kafka carries transaction lifecycle events to settlement and notification services decoupled from the authorization hot path. Merchant configuration and reporting APIs operate in a separate trust zone without access to raw PAN data.",
    architecture:
      "Istio service mesh enforces mTLS between microservices with authorization policies scoped to service identities. The authorization service implements a saga pattern for multi-step capture workflows with compensating refund transactions on partial failures. PostgreSQL stores transaction state with row-level tenant isolation; read replicas serve merchant reporting queries. Circuit breakers and bulkhead thread pools isolate authorization from batch settlement processing, with Prometheus alerts on pool saturation thresholds.",
    challenges: [
      "PCI scope boundary definition required third-party QSA review before service extraction could proceed, delaying initial deployments by six weeks.",
      "Dual-write migration validation needed bitwise comparison of transaction responses between monolith and microservice paths under production shadow traffic.",
      "Kafka ordering guarantees for refund-after-capture sequences required partition keys tied to merchant and original transaction ID.",
      "Legacy merchant integrations sent non-idempotent retry patterns; client SDK updates were coordinated alongside backend deduplication rollout.",
    ],
    results: [
      "Reduced PCI audit scope by 68%, shortening audit cycles from 11 weeks to 4 weeks.",
      "Improved authorization P99 latency from 2.1s to 340ms under peak load testing simulating flash sale traffic.",
      "Enabled independent scaling that reduced authorization tier compute cost by 22% while handling 40% volume growth.",
      "Achieved zero duplicate charge incidents in the first 90 days post-migration across 14M transactions.",
    ],
    lessonsLearned: [
      "PCI scope drives decomposition boundaries more than domain purity—design services around cardholder data isolation first.",
      "Shadow traffic comparison during strangler migrations catches semantic differences that unit tests miss, especially in payment rounding rules.",
      "Idempotency is a contract between client and server; backend deduplication alone cannot fix retry behavior in legacy integrations.",
      "Service mesh complexity is justified at PCI boundaries where network policy enforcement must be provable to auditors.",
    ],
  },
];

export const projectCategories = [
  "All",
  "Enterprise",
  "Healthcare",
  "Finance",
  "Blockchain",
  "AI",
  "DevOps",
  "Cloud",
  "ETL",
  "Microservices",
] as const;
