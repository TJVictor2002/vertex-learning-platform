# Add Clerk authentication to the Vertex web app

## Goal

Wire up Clerk as the authentication provider for the `vertex` Next.js app, per AGENTS.md section 7 ("Authentication is Clerk... keep browsing public and gate only what a feature marks as protected") and section 5's server/client boundary rules (Clerk's secret key stays server-only; only the publishable key reaches the browser). This is infrastructure only — no protected pages or progress-writing routes exist yet to gate, so this prompt sets up the provider, the proxy, and visible sign-in/sign-up/account controls, and leaves route protection ready to extend later.

## Skills / docs read

- `AGENTS.md` (root) — sections 2, 5, 6, 7, 12, 13.
- `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/proxy.md` and `middleware.md` — confirms this project's Next `16.3.6` has **deprecated `middleware.ts` in favor of `proxy.ts`** (same code, renamed file/export convention; default export still works).
- `.agents/skills/clerk-setup/SKILL.md`, `.agents/skills/clerk-cli/SKILL.md`, `.agents/skills/clerk-nextjs-patterns/SKILL.md` (+ `references/middleware-strategies.md`) — CLI flows (Scenario B: existing project + existing app), file naming (`proxy.ts` for Next.js 16), and the "public-first" middleware pattern.
- The user's pasted Clerk CLI setup guide, which pins this project to the existing Clerk application `app_3JhD3DZJDlskUnJgyi4KBqoiIpE`.

## Code inspected

- `package.json` — no `@clerk/*` dependency yet, Next `16.3.6`, npm lockfile present (`package-lock.json`), no `typecheck` script.
- `app/layout.tsx` — root layout renders `<html><body>{children}</body></html>` with no providers.
- `app/page.tsx`, `components/ui/Navbar.tsx` — homepage nav (`variant="home"`) currently renders a **static, non-functional** bell icon and a placeholder circular avatar (`<span role="img" aria-label="Your profile">`) with no auth behind either. The `default` navbar variant (used elsewhere) has no account/avatar slot at all today.
- `components/ui/Button.tsx` — existing button component to reuse for any sign-in/sign-up affordance instead of introducing new styling.
- No `middleware.ts`/`proxy.ts`, no `.env*` files, no `.env.example`, and `.gitignore` already ignores `.env*`.
- No `components.json` — shadcn/ui isn't in use, so no Clerk shadcn theme step applies.
- No Clerk CLI installed on PATH (`command -v clerk` empty).

## Decisions / assumptions

1. **CLI flow** — install/update the `clerk` CLI, run `clerk auth login` (pauses for the user to complete OAuth in a browser), then `clerk init --app app_3JhD3DZJDlskUnJgyi4KBqoiIpE` against this existing project. This links the real, already-created Clerk app rather than minting a new accountless one.
2. **Proxy filename** — Next 16 has renamed `middleware.ts` to `proxy.ts` (confirmed from the local Next docs, not assumed). The file will be `proxy.ts` at the repo root, default-exporting `clerkMiddleware(...)`, since Next's proxy convention accepts a default export regardless of function name.
3. **Middleware strategy** — "public-first": nothing is gated yet (catalog/course/lesson pages are read-only public per AGENTS.md section 5; My Learning/progress writes don't exist yet). `proxy.ts` will run `clerkMiddleware` with an empty protected-route matcher for now (so auth context is available everywhere) and a documented spot to add `createRouteMatcher([...])` + `auth.protect()` once a protected route/server action exists. Per the pasted setup guide, the `config.matcher` will include `'/(api|trpc)(.*)'` and, once `clerk init` scaffolds it, verify `'/__clerk/:path*'` is present right after it (Clerk's own auto-proxy path).
4. **`ClerkProvider` placement** — inside `<body>` in `app/layout.tsx`, wrapping `{children}`, per Clerk's Next.js App Router requirement.
5. **Auth UI, since no design reference exists for it** — reuse the existing placeholder slots rather than invent new UI:
   - In `Navbar` (`variant="home"`): replace the static profile `<span>` with `SignedIn`/`SignedOut` — signed out shows `SignInButton`/`SignUpButton` (styled to match the existing nav text/Button patterns), signed in shows Clerk's `UserButton` in the same slot the placeholder avatar occupies. The bell icon stays as-is (presentational only, per AGENTS.md section 7).
   - In `Navbar` (`default` variant): add the same `SignedIn`/`SignedOut` block to the right side of the nav, since that variant currently has no account slot at all.
   - No dedicated `/sign-in` or `/sign-up` pages — `SignInButton`/`SignUpButton` will use Clerk's default modal/Account Portal behavior, keeping this minimal per "build nothing beyond what's asked."
6. **`.env.example`** — none exists yet. Create one at the repo root listing `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` with empty/placeholder values, per AGENTS.md section 12 ("keep a committed `.env.example` as the canonical list"). `clerk init`/`clerk env pull` will write real values to `.env.local`, which stays untracked.

## Files expected to touch

- `package.json`, `package-lock.json` — add `@clerk/nextjs` (via `clerk init`).
- `.env.local` — created/updated by the CLI with real dev keys; **not committed** (already gitignored).
- `.env.example` — new, committed, placeholder key names only.
- `proxy.ts` — new, root-level, `clerkMiddleware` + matcher.
- `app/layout.tsx` — wrap `{children}` in `ClerkProvider` inside `<body>`.
- `components/ui/Navbar.tsx` — swap the placeholder avatar for real Clerk auth controls in both variants.

## Requirements

- `CLERK_SECRET_KEY` is never referenced outside server-only files (`proxy.ts` runs server-side; no client component reads it).
- Only `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` reaches client components (`ClerkProvider`, `SignInButton`, `SignUpButton`, `UserButton`).
- Public browsing stays public — no page becomes gated by this change.
- `auth()`/`auth.protect()` usage (once added later) must `await` — Next.js 15+/Clerk Core 3 requirement.
- Reuse existing Tailwind/Button/Navbar patterns; no new design system elements.

## Security considerations

- Verify after `clerk init` that `.env.local` is not staged/tracked by git (`.gitignore` already covers `.env*`, but confirm `git status` doesn't show it).
- Confirm `.env.example` contains no real key values, only placeholders.
- Confirm `proxy.ts`'s matcher doesn't accidentally block static assets, `_next`, or the app's own public catalog routes.
- Confirm no `@clerk/nextjs/server` import leaks into a `"use client"` file.

## Acceptance criteria

- `clerk doctor` reports no failing checks.
- `npm run dev` boots without errors.
- Signed-out state: nav shows working Sign In / Sign Up controls (home and default variants).
- Sign-up creates a real user in the linked Clerk app (`app_3JhD3DZJDlskUnJgyi4KBqoiIpE`).
- Signed-in state: nav shows a working `UserButton` (opens menu, can sign out) in place of the old placeholder avatar.
- Homepage layout is otherwise visually unchanged from the current design.

## Checks to run

- `npm run lint`
- `npx tsc --noEmit` (no `typecheck` script exists yet; run the compiler directly)
- `npm run build` (routes, root layout, and a new root-level `proxy.ts` are all changing)
- `npm run dev` for the manual test below

## Manual test steps

1. Run `npm run dev`, open `http://localhost:3000`.
2. Confirm the homepage renders unchanged except the nav's profile slot now shows a real Sign In / Sign Up control.
3. Click Sign Up, create a test account through Clerk's flow.
4. After sign-up completes, confirm the nav now shows Clerk's `UserButton` avatar instead of Sign In/Sign Up.
5. Click the `UserButton`, confirm the account menu opens and Sign Out works, returning the nav to the signed-out state.
6. Run `clerk doctor` and confirm all checks pass.
