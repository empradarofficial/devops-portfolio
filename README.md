# Muhammad Waqas — Portfolio

Premium enterprise portfolio for **Muhammad Waqas**, Senior Software Architect (12+ years). Built as a production-ready Phase 1 static site with a data-access layer ready for CMS/database migration in Phase 2.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript (strict)
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- Lucide Icons
- next-themes
- React Hook Form + Zod
- Prisma + Supabase Postgres (contact form)
- ESLint + Prettier

## Getting started

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |
| `npm run format` | Prettier write |
| `npm run format:check` | Prettier check |

## Project structure

```text
src/
  app/                 # Routes (App Router)
  components/
    common/            # Shared UI primitives
    layout/            # Navbar, footer
    sections/          # Page sections
    portfolio/         # Portfolio-specific
    ui/                # shadcn/ui
  data/                # Static content modules
  lib/
    data/              # Data access layer (swap for Prisma/CMS later)
    seo/               # Metadata + JSON-LD
    animations/        # Framer Motion variants
    validations/       # Zod schemas
  hooks/
  types/
  utils/
public/
  images/
  resume/
```

## Content updates

**Personal bio (single source of truth):** edit `src/constants/bio.ts` for name, email, resume filename, LinkedIn, GitHub, portfolio URL, location, and availability. Site config and SEO derive from it.

Other content lives under `src/data/` — components should not hardcode copy.

- `site.ts` — SEO defaults, hero, stats (uses `BIO` constants)
- `projects.ts` — portfolio case studies
- `experience.ts` — career timeline
- `skills.ts` — skill categories
- `services.ts` — service offerings
- `testimonials.ts`, `certifications.ts`, `navigation.ts`

UI consumes data only through `src/lib/data` so Phase 2 can replace static modules with Prisma, an API, or a CMS without rewriting pages.

## Theme

Light/dark themes via `next-themes` (persisted in `localStorage` under `mw-portfolio-theme`).

Brand colors:

- Primary `#2563EB`
- Secondary `#7C3AED`
- Accent `#06B6D4`
- Background light `#FAFAFA` / dark `#0A0A0A`

Typography: Space Grotesk (headings) + Inter (body).

## Contact form

`POST /api/contact` validates with Zod and saves via Prisma to Supabase Postgres (`contact` table).

1. Copy `.env.example` → `.env.local` (or update existing).
2. Set a single direct `DATABASE_URL` from Supabase → **Project Settings → Database → Connect → URI (Direct)**:

```bash
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@db.YOUR_PROJECT_REF.supabase.co:5432/postgres?sslmode=require"
```

URL-encode special characters in the password (e.g. `&` → `%26`).

3. Run migrations:

```bash
npm run db:migrate
```

4. Restart `npm run dev`.

Useful scripts: `db:generate`, `db:migrate`, `db:deploy` (production), `db:studio`.

## SEO

- Dynamic Metadata API + Open Graph / Twitter cards
- `sitemap.xml` / `robots.txt`
- JSON-LD: Person, WebSite, Breadcrumb, FAQ, CreativeWork (projects)

Update `siteConfig.url` in `src/data/site.ts` before production.

## Phase 2 readiness

Architecture is prepared for (not implemented):

- Admin dashboard + auth
- Blog CMS + media upload
- Newsletter, analytics, search
- AI chatbot

Contact submissions persist to Supabase Postgres via Prisma (`contact` table).

## License

Private portfolio — all rights reserved.
# devops-portfolio
