# Implementation prompt: Vertex Design System foundation

## Goal

Implement the design-system foundation shown in `design/vertex-designsystem.png` — color tokens, typography, type scale, spacing, radius, shadows, icon set, and the primitive UI components (buttons, inputs, badges, status indicators, progress bar, cards, navigation, principles) — as reusable Tailwind tokens and React components, plus a `/design-system` reference route that reproduces the mockup exactly so it can be checked against the source image.

This is foundation-only. It does not build any of the actual app pages (catalog, course, lesson, search, My Learning) described in AGENTS.md sections 5–11 — those depend on the Sanity content model and don't have a reference design yet. It also does not touch `app/page.tsx` (the current create-next-app homepage) — there's no reference design for a homepage, and AGENTS.md §3 says not to restyle or improve beyond the reference.

## Skills read

- Re-read `AGENTS.md` in full (it now contains the actual Vertex project spec, not just the Next.js scaffold note).
- Checked `.claude/skills` / `.agents/skills` listing. None of the Sanity skills (sanity-best-practices, sanity-migration, create-agent-with-sanity-context, dial-your-context, shape-your-agent) apply here — they concern content modeling and the search agent, not static UI tokens/components. Not loading them for this prompt.
- Skimmed `node_modules/next/dist/docs/01-app/01-getting-started/13-fonts.md` earlier this session — confirms standard `next/font/google` usage (no breaking change from training data).

## Code inspected

- `app/globals.css`, `app/layout.tsx`, `app/page.tsx` — current state is the unmodified create-next-app scaffold (Geist fonts, default Tailwind v4 `@theme inline` block, default landing page).
- `package.json` — Next 16.3.6, React 19.2.8, Tailwind v4 (`@tailwindcss/postcss`), no component/icon libraries installed yet.
- `tsconfig.json` — `include: ["**/*.ts", "**/*.tsx", ...]`, `exclude: ["node_modules"]`. No existing `components/` or `lib/` directories — nothing to reuse yet, so this prompt establishes the base primitives.
- `design/vertex-designsystem.png` — the one reference image, containing 14 numbered sections (Colors, Typography, Type Scale, Spacing, Radius & Shadows, Icons, Buttons, Inputs, Badges/Tags, Status/Indicators, Progress Bar, Cards, Navigation, Principles). Full values transcribed below under Requirements.

## Decisions and assumptions

1. **Icon library:** the spec's icon spec (24×24 grid, 2px stroke, rounded line caps, outline + filled variants) matches `lucide-react` icon-for-icon. Proposing to add it as a dependency rather than hand-drawing ~15 custom SVGs. Flagging since it's a new dependency, not silently adding it.
2. **New `/design-system` route:** since there's no existing app page to drop these components into yet, I'm adding a dedicated route that renders all 14 sections with real components (not a screenshot), so the build is checkable against the reference image. This route is scaffolding/documentation, not a product page — happy to drop it, gate it, or move it if you'd rather.
3. **`app/page.tsx` is left untouched.** No reference exists for a homepage, and §3 says not to invent beyond the reference. (Last attempt wrongly rewrote this into a branded landing page — not repeating that.)
4. **Tailwind spacing:** the spec's 4px-based scale (4/8/12/16/24/32/40/48/64) is already exactly Tailwind v4's default spacing scale (`1,2,3,4,6,8,10,12,16` × 4px). No custom spacing tokens needed — just documented in the reference page.
5. **Known build hazard (found last attempt):** `tsconfig.json`'s `**/*.tsx` include sweeps in unrelated example code bundled inside `agent/skills/create-agent-with-sanity-context/references/ecommerce/...` (a Sanity skill's reference project), which uses the same `@/components/ui/button` etc. import alias as a standalone project. On Windows (case-insensitive filesystem), adding real `components/ui/Button.tsx`, `Badge.tsx`, `Pagination.tsx` collides with that example's lowercase filenames and breaks `next build` with `TS1149` casing errors. **Proposed fix:** exclude `agent`, `.agents`, `.claude` from `tsconfig.json`'s `exclude` array, since those are skill/agent reference directories, not app source. Flagging explicitly since it's a config change outside the design system itself.

## Files expected to touch

- `app/globals.css` — modify: add color, radius, shadow, and type-scale tokens via Tailwind v4's `@theme` block.
- `app/layout.tsx` — modify: swap Geist fonts for Playfair Display + Inter via `next/font/google`; update `metadata` title/description to Vertex copy.
- `tsconfig.json` — modify: add `agent`, `.agents`, `.claude` to `exclude` (see decision 5).
- `package.json` / `package-lock.json` — modify: add `lucide-react`.
- New: `lib/cn.ts` — tiny classname-join helper used by the components below.
- New: `components/ui/Button.tsx`, `Input.tsx` (Search/Text/Select), `Badge.tsx`, `StatusIndicator.tsx`, `ProgressBar.tsx`, `Card.tsx` (Course/Lesson/Resource variants), `Logo.tsx`, `Navbar.tsx`, `Breadcrumbs.tsx`, `Pagination.tsx`, `Section.tsx` (numbered-section wrapper for the reference page).
- New: `app/design-system/page.tsx` — the living reference page, 14 sections matching the mockup's numbering and content.

No other files touched. `app/page.tsx` is explicitly out of scope (see decision 3).

## Requirements (exact values from the reference image)

**Colors** — Primary: 500 `#F97316`, 400 `#FB923C`, 300 `#FDBA74`, 200 `#FED7AA`, 100 `#FFEEE5`. Neutral: 900 `#0F172A`, 700 `#33415A`, 500 `#64748B`, 300 `#CBD5E1`, 200 `#E2E8F0`, 100 `#F1F5F9`, 50 `#FAFAFC`, White `#FFFFFF`.

**Typography** — Playfair Display (display styles: "Elegant · Readable · Timeless"), Inter (everything else: "Clean · Modern · Highly legible").

**Type scale** — Display 1: Playfair 48/56 Bold, page titles. Display 2: Playfair 36/44 Bold, section titles. Heading 1: Inter 28/36 SemiBold, card titles. Heading 2: Inter 22/30 SemiBold, sub-section. Heading 3: Inter 18/26 Medium, small titles. Body Large: Inter 16/24 Regular, body copy. Body: Inter 14/20 Regular, supporting text. Small: Inter 12/16 Regular, captions/meta.

**Spacing** — base unit 4px: 4, 8, 12, 16, 24, 32, 40, 48, 64 (already covered by default Tailwind scale, see decision 4).

**Radius** — 4px (xs), 8px (sm), 12px (md), 16px (lg), 24px (xl), full (circle).

**Shadows** — Sm `0 1px 2px 0 rgba(15,23,42,0.05)`. Md `0 4px 12px -2px rgba(15,23,42,0.08)`. Lg `0 12px 24px -4px rgba(15,23,42,0.1)`. Xl `0 20px 40px -8px rgba(15,23,42,0.12)`.

**Icons** — outline (default, 2px stroke) and filled variants of: bell, search, play, document/file, bookmark, bar-chart, clock, user, chevron-right. 24×24 grid, rounded line caps.

**Buttons** — Primary (filled orange), Secondary (orange outline), Tertiary (text + external-link icon), Text (orange text + play icon). Each needs Default / Hover / Disabled states. Height 44px default, padding `0 16px` (lg) / `0 12px` (md), radius 12px, font Inter Medium 14–16px.

**Inputs** — Search/text input: search icon, "Search anything..." placeholder, `⌘K` shortcut chip. Select: "Most Relevant" dropdown. Field specs: height 44px, radius 12px, border `1px solid #E2E8F0`, padding `0 16px`, focus border `#FB923C`.

**Badges/Tags** — `VIDEO` (filled orange), `LESSON` (filled dark navy), `POPULAR` (light peach fill, orange text).

**Status/Indicators** — In Progress (orange spinner), Completed (green check), Now Playing (orange play), Locked (gray lock).

**Progress bar** — horizontal track, orange fill, percentage label (e.g. "35% complete").

**Cards** — Course Card (dark initial badge, title, description, level/duration/modules meta row with icons). Lesson Card – Video (`VIDEO` badge, title, description, "Lesson 5.1 · 12:45" meta, "Watch from 12:45" action). Lesson Card – Lesson (`LESSON` badge, title, description, "Module 5" meta, "View lesson" action). Resource Card (document icon, title, description, "PDF · 1.2 MB" meta).

**Navigation** — Navbar (Vertex logo mark + wordmark, "Courses" / "My Learning" links). Breadcrumbs ("All Courses › Next.js for Production › Data Fetching & Caching"). Pagination (prev/next chevrons, numbered pages with ellipsis, current page highlighted, e.g. `1 2 3 … 8`).

**Principles** — 4 blocks, icon + title + one-line description: Clarity First (eye), Consistency (grid), Focus & Calm (target), Accessible (accessibility icon).

## Security considerations

None material — this is static, presentational UI with no data fetching, no auth, no secrets, and no user input beyond inert demo controls. Nothing here touches Clerk, Sanity, or PostHog per AGENTS.md §5's boundaries.

## Acceptance criteria

- Every color/spacing/radius/shadow/type-scale value matches the reference image exactly.
- Playfair Display used only for Display 1/2; Inter used everywhere else; both self-hosted via `next/font/google`.
- All 4 button variants render with default and disabled states; hover implemented via CSS (not screenshot-verifiable but functionally present).
- Inputs, badges, status indicators, progress bar, all 4 card types, navbar, breadcrumbs, pagination, and the 4 principle blocks are all present and match the mockup's sample content.
- `/design-system` renders cleanly at desktop width and reflows sensibly at mobile width (no reference given for mobile, so reasonable stacking/column-collapse per AGENTS.md §3).
- No console errors/warnings.

## Checks to run

- `npx tsc --noEmit` (type check)
- `npm run lint`
- `npm run build` (production build, since routes/config change)
- `npm run dev` and manually verify the route

## Manual test steps

1. `npm install` (pulls in `lucide-react`)
2. `npm run dev`, open `http://localhost:3000/design-system`
3. Compare each numbered section (01–14) against `design/vertex-designsystem.png` side by side
4. Resize the browser to a mobile width (~375px) and confirm sections reflow without horizontal scroll or overlapping content
5. Tab through buttons, inputs, and pagination controls to confirm visible focus states
6. Confirm `npx tsc --noEmit`, `npm run lint`, and `npm run build` all exit cleanly
