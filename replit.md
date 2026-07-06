# Green Valley PU College

A complete school website for Green Valley PU College (Bengaluru) — featuring admissions, courses, facilities, faculty, gallery, achievements, and a contact form, all backed by a live PostgreSQL database.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Neon PostgreSQL connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS v4, Framer Motion, shadcn/ui
- API: Express 5 (artifact: `api-server`, port 8080, path `/api`)
- DB: PostgreSQL (Neon) + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/skyforger/` — React frontend (served at `/`)
- `artifacts/api-server/` — Express API server (served at `/api`)
- `lib/db/src/schema/` — Drizzle schema source of truth (`admissionsTable`, `contactsTable`, `testimonialsTable`)
- `lib/api-spec/` — OpenAPI spec + Orval codegen config
- `lib/api-client-react/` — Generated React Query hooks
- `artifacts/skyforger/src/pages/` — All 9 school pages
- `artifacts/skyforger/src/index.css` — Theme (primary: deep green hsl(152 60% 20%), fonts: Playfair Display + Plus Jakarta Sans)

## Architecture decisions

- Contract-first API: OpenAPI spec → Orval generates React Query hooks and Zod schemas. Never hand-write fetch calls.
- Date serialization: Drizzle returns `Date` objects; must call `.toISOString()` before Zod parsing in all GET routes.
- Named exports in layout components (Navbar, Footer, FloatingButtons) must use `export default` — App.tsx imports them as default.
- Google Fonts `@import url(...)` must be the **first** line in `index.css` — Tailwind `@import` directives must come after.
- Pages do **not** use `PageLayout` wrapper — App.tsx already wraps all routes in `<Navbar> + <Footer>`.

## Product

A public-facing school website for Green Valley PU College with:
- **Home** — Hero, stats, course overview, principal's message, achievements, testimonials (live from DB)
- **About** — History, vision/mission, core values, principal message
- **Courses** — Science (PCMB/PCMC), Commerce (CEBA/SEBA), Arts (HEPS) with collapsible details
- **Facilities** — Labs, library, sports, computer centre, auditorium, cafeteria, transport, smart classrooms
- **Faculty** — Profile cards for all 12 teaching staff
- **Gallery** — Filterable photo grid with lightbox
- **Achievements** — Board toppers table and awards grid
- **Admission** — Online application form (saves to DB) with success dialog
- **Contact** — Contact form (saves to DB), WhatsApp link, office details

## User preferences

- School name: Green Valley PU College
- Location: MG Road, Bengaluru, Karnataka 560001
- Affiliation: Karnataka Pre-University Education Board
- Theme: Deep green primary, warm off-white background, Playfair Display headings

## Gotchas

- Run `pnpm --filter @workspace/api-spec run codegen` after any OpenAPI spec change before editing frontend hooks.
- `pnpm --filter @workspace/db run push` only works in dev (requires `DATABASE_URL` in env).
- Do not run `pnpm dev` at workspace root — use workflows or `pnpm --filter` instead.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
