# Phase 1.5 — visual redesign and verification

This is the historical editorial redesign review. The subsequent owner-supplied logo and purple wiki-shell update is documented in [BRANDING-REVIEW.md](BRANDING-REVIEW.md).

Reviewed 1 November 2026. The existing React/TypeScript/Vite application was redesigned in place. No routes or article records were removed, no backend was added, no dependency was added to the application, and nothing was deployed or published.

## What changed

The front page now uses an editorial cover, a featured character record, a compact character index, a three-column reading section, an episode guide, a dated editorial log, and a text-based universe index. The animated portal, glow treatments, gradient artwork, decorative category counters, repetitive promotional headings, and generic feature-card grid were removed.

Anton supplies the compact display typography; Manrope remains the readable body face. Both fonts and their OFL notices are served locally. Thin rules, muted charcoal, off-white text, a limited purple palette, and a few acid-green details establish the shared visual system. The retired Barlow font files were removed from the public bundle.

Article pages retain their content-driven renderer, left contents navigation, body, right infobox, gallery, references, related articles, and status. Reading measure is capped at 74ch. Source/evidence labels and portrait notices were enlarged. Unknown sections are more compact. Mobile stacks the infobox, wrapping contents navigation, and article body into one column.

Lady Killer uses restrained acid-green framing and a small muted red rule; Mr. Puzzles uses a television-like double frame with static scanlines; Lord General uses heavier steel-colored rules; WPNZ uses industrial lines. The other characters retain neutral framing, with a subdued pink accent for The Pink Thing. These are interface treatments informed by references, not claims about canon traits, powers, species, or relationships.

Episode sections keep the existing content order and display section numbers. The post-credits section has a distinct rule. Section numbers indicate article order, not newly invented scene timestamps.

## Artwork integrated and still needed

**Actual character images integrated: none.** No owner-approved character artwork was found in the repository, and no independently verified reuse grant accompanied the official references. No series frames, character art, stock art, AI character substitutes, or third-party fan art were downloaded or bundled.

All seven still need authorized local portraits: Lady Killer, Mr. Puzzles, Lord General, WPNZ, The Pink Thing, The Big Bad, and Dave. An ensemble image, pilot keyframe, and post-credits still are also listed as optional later assets. The exact requests, official source links, verified visual-reference notes, recommended dimensions, and grant-record checklist are in [ASSET-CHECKLIST.md](ASSET-CHECKLIST.md).

The centralized `character-visuals.ts` manifest separates reference links and pending requests from approved portrait IDs. The existing `images.ts` registry remains empty. Approved assets require source and permission evidence, credit, license, file-specific alt text, and intrinsic width/height. Profile approval and a registered local asset are required before a profile portrait is used. The existing article image override remains supported. Portraits use `object-fit: contain`, reserved boxes, decoding hints, lazy loading below the fold, and eager loading for the featured portrait/infobox. No important body parts are intentionally cropped.

Until approved files arrive, compact typographic nameplates explicitly say that a portrait has not been supplied. These are not character depictions. Authentic character identity is therefore still the principal visual limitation of this delivery.

## Screenshot review

All links below refer to actual captured screenshots in the ignored local `output/playwright/phase-1.5/` folder. Before images were captured and inspected during this run, before source modification. After images were captured from the production build.

| Step | Surface and general health | Evidence and result |
| --- | --- | --- |
| 1 | Homepage — improved; artwork limited | [Before desktop](../output/playwright/phase-1.5/before/home-desktop.png), [after desktop](../output/playwright/phase-1.5/after/home-desktop.png), [before mobile](../output/playwright/phase-1.5/before/home-mobile.png), [after mobile](../output/playwright/phase-1.5/after/home-mobile.png). Useful search/content replaces the decorative portal. Pending portrait slots are smaller; no reuse permission is implied. |
| 2 | Character directory — functional; portraits pending | [Desktop](../output/playwright/phase-1.5/after/characters-desktop.png), [mobile](../output/playwright/phase-1.5/after/characters-mobile.png). Seven correct article links, names, character framing, and a working filter. Text-only records reserve space for future art. |
| 3 | Lady Killer — readable, sourced, incomplete | [Before desktop](../output/playwright/phase-1.5/before/lady-killer-desktop.png), [after desktop](../output/playwright/phase-1.5/after/lady-killer-desktop.png), [after mobile](../output/playwright/phase-1.5/after/lady-killer-mobile.png). Infobox, readable contents, provenance note, citations, unknown motive, and distinct theories remain. |
| 4 | Mr. Puzzles — consistent, draft state clear | [Desktop](../output/playwright/phase-1.5/after/mr-puzzles-desktop.png), [mobile](../output/playwright/phase-1.5/after/mr-puzzles-mobile.png). Static broadcast framing gives local identity without inventing a portrait or biography. |
| 5 | Pilot — chronological structure clear within the limited record | [Desktop](../output/playwright/phase-1.5/after/pilot-desktop.png), [mobile](../output/playwright/phase-1.5/after/pilot-mobile.png). Article-order numbers, appearances, events, post-credits notes, and references are retained. The full plot and full scene review are still editorial gaps. |
| 6 | Mobile navigation — working | [Menu open](../output/playwright/phase-1.5/after/mobile-navigation.png). Main and secondary routes are accessible, the expanded state is announced, and choosing Characters navigated and closed the menu. |

An independent screenshot review identified long body lines, small meaningful captions, oversized pending artwork areas, and a narrow mobile contribution block. Those were corrected. Production viewport checks also found and resolved a homepage grid/aspect-ratio overflow.

## Verification results

- `npm run typecheck`: **passed**, strict TypeScript retained.
- `npm run check:data`: **passed**, 11 records; required sections, unique IDs/routes, sources, related links, aliases, category searches, and unknown-motive assertion retained. Extended checks validate local asset existence, positive dimensions, required permission metadata, safe paths, HTTPS provenance, and approved-profile consistency.
- `npm run build`: **passed**. Final bundle approximately 323.21 kB JS (99.85 kB gzip), 48.87 kB CSS (10.60 kB gzip), plus fonts and static files.
- Production browser pass: **23 direct routes**, including all 11 articles and two unknown-path cases.
- Responsive pass: **30 checks**, covering homepage, character directory, Lady Killer, Mr. Puzzles, pilot, and search at 320, 390, 768, 1024, and 1440 CSS pixels. No horizontal overflow remains in those checks.
- No JavaScript runtime/console errors and no broken same-article anchors in the final production pass.
- Search dialog: Ctrl+K opens, input receives focus, `9512` returns James, and Escape closes a populated dialog.
- Directory filter: Dave reduced the list to one; an unmatched name displayed recovery; Clear restored seven records.
- Status filters: Draft showed six records and Incomplete showed five, preserving the existing editorial states.
- Mobile menu: opened, displayed routes, and navigated/closed correctly.
- Reduced motion: smooth scrolling disabled and zero active animations under the preference.
- Research worksheet: returned HTTP 200.
- Cloudflare Pages fallback and static Vite output remain present. No deployment was performed.

## Limits and remaining issues

Edge was used for repeatable Playwright verification after the current in-app preview failed to connect to its old IPv4 address. The existing development server listens on `localhost`; it was not terminated. The local preview is `http://localhost:5173/`. No browser security warning was bypassed.

This is not an exhaustive assistive-technology audit or cross-browser certification. Meaningful labels were enlarged, focus states and native dialog behavior are preserved, controls have accessible names, and reduced-motion behavior was exercised. Real portrait quality, alpha edges, derivative sizes, and composition cannot be visually validated until actual authorized files are supplied. The article content remains deliberately incomplete where facts are not verified; the redesign did not invent canon to fill it.
