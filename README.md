# Portfolio redesign → Next.js handoff

A drop-in redesign of your portfolio in the **senior-engineer / terminal** aesthetic:
dark-by-default with a light toggle, IBM Plex Mono + Inter, a typewriter terminal hero,
scroll-spy nav, animated reveals, a numbered project list with a cursor-following preview,
and full case-study modals.

It's built to match **your existing repo** (`jis-sunnyy/new-portfolio`): App Router, TypeScript,
the same `pageContainer → Header + sections + Footer` structure, your `@/` import alias,
your local IBM Plex Mono fonts, and `react-icons` (already a dependency).

---

## 1. What changed vs. your current repo

| Area | Before | After |
|---|---|---|
| Sections | 5 (a–e), each a different bright bg color | 6 (a–f), one cohesive dark/light theme |
| Section map | About/Career/Projects/Contact | **Hero · About · Stack · Career · Work · Contact** |
| Styling | per-component `.scss` + `variables.scss` colors | CSS custom-property tokens in `globals.css` (theme-aware) |
| Fonts | IBM Plex Mono only | IBM Plex Mono (mono) + Inter via `next/font` (headings) |
| Theme | OS `prefers-color-scheme` | explicit dark/light **toggle** (persisted in `localStorage`) |
| Hero | static text + mouse gif | animated **terminal** that types itself out |
| Projects | card grid | numbered list + cursor preview + **case-study modal** |

> A new **Stack** section was added (your original brief was "redesign based on my skills"),
> so there are now 6 body sections instead of 5.

---

## 2. How to apply it

From this handoff folder, the files mirror your repo exactly under `src/`. Copy them over:

```
handoff/src/app/globals.css                                  → src/app/globals.css        (replace)
handoff/src/app/layout.tsx                                   → src/app/layout.tsx         (replace)
handoff/src/app/home/pageContainer.tsx                       → src/app/home/pageContainer.tsx (replace)
handoff/src/components/header/page.tsx                       → src/components/header/page.tsx (replace)
handoff/src/components/footer/page.tsx                       → src/components/footer/page.tsx (replace)
handoff/src/data/portfolio.ts                                → src/data/portfolio.ts      (NEW)
handoff/src/data/projects.ts                                 → src/data/projects.ts       (replace — interface extended)
handoff/src/app/home/components/section1/section1.tsx        → (replace)
handoff/src/app/home/components/section1/Terminal.tsx        → (NEW)
handoff/src/app/home/components/section2/section2.tsx        → (replace)
handoff/src/app/home/components/section3/section3.tsx        → (replace)
handoff/src/app/home/components/section4/section4.tsx        → (replace)
handoff/src/app/home/components/section5/section5.tsx        → (replace)
handoff/src/app/home/components/section5/ProjectModal.tsx    → (NEW)
handoff/src/app/home/components/section6/section6.tsx        → (NEW — Contact)
```

`src/app/page.tsx` (the `QueryClientProvider` wrapper) and `src/app/home/page.tsx` are **unchanged** — leave them as-is.

### Delete (no longer used)
These per-section SCSS files and helpers are dead once the new components are in:

```
src/app/home/styles.scss
src/app/home/components/section1/styles.scss
src/app/home/components/section2/styles.scss
src/app/home/components/section3/styles.scss
src/app/home/components/section4/styles.scss   + ProjectCard.tsx
src/app/home/components/section5/styles.scss
src/app/home/components/section2/section2.tsx … (old versions, replaced above)
src/app/home/components/autoType/                (terminal replaces the type animation)
src/components/header/styles.scss
src/components/header/drawer.tsx                 (mobile menu is now built into the header)
src/components/footer/styles.scss
src/config/variables.scss                        (optional — only old SCSS referenced it)
```

> Don't delete `src/assets/fonts/*` — `globals.css` loads those IBM Plex Mono files.
> `src/assets/images/m2.gif` / `mouse.gif` are no longer referenced; delete if you like.

### `public/`
Make sure `public/Jis_Software_Engineer_CV.pdf` still exists (the resume link points there).

---

## 3. Dependencies

**Nothing new is required.** The redesign only uses `react-icons` (already installed) + `next/font`.

You can optionally **remove** packages the old UI used that the new one doesn't:
`bootstrap`, `react-bootstrap`, `antd`, `gsap`, `react-type-animation`, `react-delay`,
`react-awesome-reveal`, `react-query` (the legacy one — `@tanstack/react-query` is still used by `page.tsx`).
Leaving them installed is harmless; the old `bootstrap` CSS import was dropped from `layout.tsx`
so it no longer affects styling.

---

## 4. Run it

```bash
npm install      # only if you changed deps
npm run dev
```

Open http://localhost:3000 — you should see the dark terminal hero type itself out,
the nav highlight as you scroll, projects open in a modal, and the sun/moon button toggle the theme.

---

## 5. Editing content

All copy lives in two files — no JSX edits needed:

- **`src/data/portfolio.ts`** — your name, role, status, links, about pillars, skills (`stack`), and `career`.
- **`src/data/projects.ts`** — projects, each with `problem` / `solution` / `highlights` / `technologies` for the modal.

### Real project screenshots (optional, recommended)
Right now the hover preview and modal show a placeholder tile. To use real images:
1. Drop images in `public/projects/<slug>.png` (slugs are in `projects.ts`).
2. In `section5.tsx` replace `.proj-preview-inner` content with an `<img src={"/projects/" + hover.slug + ".png"} />`.
3. In `ProjectModal.tsx` replace `.modal-preview` content the same way.
   (Ping me and I'll wire this up for you.)

### Want Geist instead of Inter for headings?
In `layout.tsx` swap `Inter` for `Geist` from `next/font/google` and update the `--font-inter`
variable name — that's the only change; everything else reads the `--font-sans` token.
