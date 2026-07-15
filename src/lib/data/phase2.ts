/**
 * Phase 2 expansion map (architecture only — not implemented)
 *
 * Admin Dashboard  → src/app/(admin)/*
 * Authentication   → next-auth / Clerk + middleware
 * Prisma + Postgres → src/lib/data/* swap implementations
 * Blog CMS         → src/app/blog + Prisma models
 * Media Upload     → S3/R2 + src/app/api/media
 * Newsletter       → src/app/api/newsletter
 * Analytics        → provider in layout (plausible/posthog)
 * AI Chatbot       → src/components/chat + API route
 * Search           → pagefind / Algolia / pg full-text
 * Contact Mgmt     → ✅ persist ContactForm via Prisma + Supabase Postgres (`contact` table)
 *
 * UI imports data only from @/lib/data — keep that boundary.
 */
export {};
