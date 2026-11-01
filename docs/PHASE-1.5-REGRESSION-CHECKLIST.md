# Phase 1.5 preservation checklist

Independent, read-only source audit for the visual redesign. This document is a test plan, not a report that the redesigned UI has passed these checks.

## Keep the content and route contracts

There are 11 seed articles: seven character dossiers, one episode record, two lore records, and one observed-action record. Preserve their IDs, slugs, category assignments, sections, source IDs, status, provenance, and related-article relationships.

| Article ID | Canonical URL | Current status |
| --- | --- | --- |
| `lady-killer` | `/characters/lady-killer` | Incomplete |
| `mr-puzzles` | `/characters/mr-puzzles` | Draft |
| `lord-general` | `/characters/lord-general` | Draft |
| `wpnz` | `/characters/wpnz` | Draft |
| `the-pink-thing` | `/characters/the-pink-thing` | Draft |
| `the-big-bad` | `/characters/the-big-bad` | Draft |
| `dave` | `/characters/dave` | Draft |
| `pilot` | `/episodes/pilot` | Incomplete |
| `james-9512` | `/lore/james-9512` | Incomplete |
| `bone-drones` | `/lore/bone-drones` | Incomplete |
| `post-credits-encounter` | `/weapons-and-abilities/post-credits-encounter` | Incomplete |

Keep these additional routes: `/`, `/characters`, `/episodes`, `/lore`, `/locations`, `/weapons-and-abilities`, `/community`, `/about`, `/needs-completion`, and `/search`. Unknown paths and unknown category-local slugs must show the custom 404. The location-article route pattern remains supported even though the current location directory has no verified records.

The existing model includes `id`, `slug`, `title`, `category`, `status`, `updatedAt`, `summary`, `eyebrow`, `aliases`, `artwork`, `infobox`, `sections`, `sources`, `relatedIds`, `gallery`, and `updateNote`. Section objects carry `id`, `title`, `kind`, `paragraphs`, optional `points`, and optional `sourceIds`. Source objects distinguish primary sources from project observations.

All character entries have section IDs `overview`, `appearance`, `personality`, `abilities`, `weapons`, `relationships`, `story-and-appearances`, `trivia`, and `fan-theories`. The pilot has `overview`, `plot-summary`, `scene-breakdown`, `character-appearances`, `important-events`, `post-credits`, and `trivia`. The shared reader also supplies `gallery` and `references` anchors.

## Content and source checks

- Keep six Draft and five Incomplete records unless a separate, justified editorial change is made. There are no Complete records.
- Retain the unfinished-article message and status labels as text, not color alone.
- Preserve `#source-{source.id}` citation targets and section anchors. Reordering visual sections must not break these IDs.
- Keep fan theories separate from confirmed observations, and preserve unknowns.
- Keep the project-observation provenance note. The supplied Lady Killer/James observation has not been independently timestamp-verified in the seed data.
- Do not infer a species, allegiance, power, weapon, or motive from a visual reference. The existing character infobox has Series, Creator / studio, Species, Affiliation, and First appearance. It does not establish named powers or weapons.
- Preserve the original pilot link, `https://www.youtube.com/watch?v=3AFJtcP2cp0`, and the primary/project-observation distinction.
- Keep the empty Locations state honest; no verified named locations are in the current registry.

## Assets

The initial `authorizedImages` registry is empty. No approved character artwork is bundled in `public/` or `src/`; the only shipped SVG file is the original favicon, with other artwork generated as inline SVG code.

- Pending candidate artwork must not be treated as authorized merely because it appears in an official post.
- Register approved local assets with descriptive alt text, credit, license/authorization information, and permission evidence.
- New portrait rendering should preserve the original image ratio; the old renderer defaults to `cover`, which can crop important character features. Prefer `contain` for full-character portraits and cutouts.
- Give approved images intrinsic dimensions or a stable aspect-ratio container, appropriate loading priority, and a visible error fallback.
- Keep pending requests distinct from approved manifest entries so the UI cannot accidentally load unapproved candidate URLs.

## Interaction and accessibility checks

1. Header links, overflow navigation, active page styling, and mobile navigation work. Mobile navigation closes on route changes and Escape.
2. Search can be opened from the header and with Ctrl+K/Cmd+K. The native dialog traps focus, focuses the input, and closes on Escape even when the search field contains a value. Closing returns focus to a sensible control.
3. Search forms submit to `/search?q=...`; empty queries browse all articles. Category filters encode the category in the URL and browser Back restores results.
4. Search matches `Mr Puzzles`, `Mr. WPNZ`, `9512`, and `Characters`, with title/alias matches ranked above category/body matches. Unknown queries show a usable recovery state.
5. Character filtering narrows to Dave; an unknown name shows zero matches; Clear restores seven dossiers.
6. Open-page filters show six Draft or five Incomplete entries.
7. Article contents links, citations, source links, breadcrumb links, category-back links, and related records remain navigable.
8. The skip link targets `#main-content`; visible keyboard focus, labeled inputs, adequate body-text size, and sufficient contrast remain intact.
9. Reduced-motion preferences are honored. A redesign with no decorative animation does not need to retain the old animated portal.
10. The research worksheet still downloads from `/contribution-template.md`; future community capabilities stay clearly unavailable.
11. The optional footer signal toggle remains keyboard accessible if retained. It is not a core editorial navigation action.

## Minimal final validation

Run:

```powershell
npm run typecheck
npm run check:data
npm run build
```

The current runtime dependencies are React/React DOM 19.3.1, React Router 8.5.1, and Lucide React 1.66.0; Vite 8.3.5 and TypeScript 7.0.2 are build tools. Keep strict TypeScript, the current static architecture, and `public/_redirects` (`/* /index.html 200`) for Cloudflare Pages SPA routing. No new dependency is required solely for a visual overhaul.

On the production preview, visit all 21 real route URLs above and at least `/not-a-page` and `/characters/not-a-character`. At desktop and mobile sizes, visually review the homepage, character directory, Lady Killer, Mr. Puzzles, pilot, search, and expanded mobile navigation. Check horizontal overflow at 320, 390, 768, 1024, and 1440 pixels. Preserve before screenshots under distinct filenames rather than overwriting them with after screenshots.

## Existing browser-smoke coupling to update

`output/playwright/smoke.js` is an ignored, temporary QA script rather than a maintained project test. Its route, title-suffix, same-document anchor, responsive-overflow, template, and search-keyboard checks remain useful. Several checks depend on the old visual implementation:

- `.signal-halo` for reduced-motion inspection: removing the portal makes this locator fail. Replace it with an assertion appropriate to the new design; do not retain the generic portal only to satisfy a test.
- Exact homepage title, `NO SIGNAL FOUND`, and `WRONG TURN` strings: update if legitimate editorial copy changes.
- Existing screenshots use generic filenames. Capture Phase 1.5 before/after images separately.

Do not report the earlier Phase 1 browser results as validation of the redesign. Record new results and any browser-coverage limits.
