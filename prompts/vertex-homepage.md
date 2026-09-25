# Implementation prompt: Vertex homepage

## Goal

Implement `app/page.tsx` to match `design/vertex-home.png`: navbar (logo, Courses, My Learning, bell, avatar), hero ("Intelligent learning" pill, Playfair headline, subcopy, Explore Courses button, search bar with ⌘K chip), "All Courses" grid of three course cards with a "View all courses" link, a "New courses and lessons added every week." divider line, and the decorative orange bar footer. Responsive down to mobile.

## Skills read

- `AGENTS.md` in full. Sanity, Clerk and search skills do not apply: Sanity and Clerk are not set up yet, and search is out of scope for this task.
- Next.js docs in `node_modules/next/dist/docs/` are consulted for `next/link` and `next/font` conventions. The project already uses both, unchanged.

## Code inspected

- `app/page.tsx` (still the create-next-app scaffold), `app/layout.tsx` (Playfair Display and Inter loaded), `app/globals.css` (design tokens: primary, neutral, radius, shadow, type scale).
- `components/ui/`: `Navbar` (logo and two links only, white with a bottom border), `Logo`, `Button` (primary, `href` support), `Input` (`SearchInput` with a shortcut chip), `Card` (`CourseCard` with a letter tile, level, duration and modules row), `Badge`.
- `design/vertex-home.png`, the source of truth.

## Decisions and assumptions

1. **Data:** Sanity is not set up, so the three courses (Next.js for Production, Docker Essentials, TypeScript Deep Dive) live in one typed constant, `lib/home-courses.ts`. Its shape mirrors the course fields in AGENTS.md §8 (title, summary, level, duration, module count) so the swap to a GROQ fetch later is a single-file change. No fake data goes anywhere else.
2. **Course icons:** the design shows brand logos (Next.js "N", Docker whale, TypeScript "TS"). I will draw them as small inline SVG components in `components/ui/CourseIcon.tsx`. No image assets or new dependencies.
3. **Avatar:** no photo asset was provided. I will use a neutral circular placeholder (user icon on a neutral tile) in the navbar. Replace it with the Clerk `UserButton` when auth lands.
4. **Bell:** presentational only (AGENTS.md §7). No notification logic.
5. **Search bar:** presentational for now. It is a styled, non-functional input row with the ⌘K chip, and the real search page and API are a separate task. It will not call anything, and I will not wire a ⌘K listener.
6. **Links:** Explore Courses and "View all courses" go to `/courses`, and course cards go to `/courses/[slug]`. Those routes do not exist yet, so they will 404 until built.
7. **Navbar:** extend the existing `Navbar` instead of forking it. It gets a transparent background variant for the hero, plus the right-side bell and avatar. The `/design-system` page must keep rendering it unchanged, so the additions are optional props with the current defaults.
8. **CourseCard:** the existing card is a compact version. The homepage card is larger (bigger icon, serif title, divider above the meta row). I will add a `variant="home"` to `CourseCard` and keep the default output identical.
9. **Background:** the warm off-white page tint, the faint hatch edge and the framed content column are page-level styling on the homepage only. Global tokens stay untouched. I will use Tailwind arbitrary values for the few off-token colors (cream background, hero pill), and no new tokens unless a value repeats.
10. **Decorative bars:** pure CSS, absolutely positioned gradient columns (orange to transparent, varying heights) at the bottom, `aria-hidden`.
11. **Metadata:** update the page title and description in `layout.tsx` only if the existing text no longer fits. It probably still fits, so likely no change.

## Files expected to touch

- Modify `app/page.tsx`, `components/ui/Navbar.tsx` (optional props), `components/ui/Card.tsx` (`home` variant).
- New `lib/home-courses.ts`, `components/ui/CourseIcon.tsx`.
- No config, dependency, or route changes.

## Requirements

- Match the reference for layout, spacing, type and color: Playfair display headline (about 56px, two lines, centered), Inter subcopy in neutral-500, orange primary button with an arrow, and a search card with a magnifier, placeholder "Ask anything about your learning…" and a ⌘K chip.
- Course grid: 3 columns on desktop, 2 on tablet, 1 on mobile. Each card has the icon, serif title, description, and a footer of level, duration and modules.
- Header: the nav collapses sensibly on mobile (the bell and avatar stay, and the links stay visible since there are only two).
- Server component only. No client JS is needed.
- Accessible: real `<h1>`, `<nav>`, link text, `aria-label` on the bell and avatar, `aria-hidden` on decoration.

## Security considerations

- No secrets, tokens, fetches, or user input. The search field is inert, and nothing is written or read from the browser.

## Acceptance criteria

- At about 1024px wide, the page visually matches the reference: same order, proportions, and copy.
- At 375px there is no horizontal scroll and everything stacks.
- `/design-system` looks the same as before.
- Type check, lint and build all pass.

## Checks to run

- `npx tsc --noEmit`, `npm run lint`, `npm run build`, then `npm run dev` for a visual check.

## Manual test steps

1. `npm run dev`, open `http://localhost:3000`.
2. Compare it with `design/vertex-home.png` at a desktop width.
3. Narrow the window to 375px and confirm the stacked layout with no sideways scroll.
4. Open `/design-system` and confirm the navbar and course card are unchanged.
5. Hover the button, links and cards and check the hover states.
