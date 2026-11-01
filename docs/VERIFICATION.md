# Verification — 1 November 2026

## Build and registry

- `npm run typecheck` — passed with strict TypeScript enabled.
- `npm run check:data` — passed for all 11 article records. Validates IDs, canonical route uniqueness, required character/episode sections, dates, source references, related records, authorized-asset metadata, alias/title/category search, empty queries, no results, and category route isolation.
- `npm run build` — passed. Vite emitted `dist/` with the SPA fallback, fonts, license notices, favicon, and research worksheet.
- npm reported zero known vulnerabilities during lockfile synchronization.

Environment: Windows, Node 24.14.0, npm 11.9.0. Resolved runtime packages: React/React DOM 19.3.1, React Router 8.5.1, Lucide React 1.66.0. Build tools: Vite 8.3.5, TypeScript 7.0.2. Exact dependency resolutions are in `package-lock.json`.

Final production bundle: approximately 328.12 kB JavaScript (101.98 kB gzip), 54.43 kB CSS (11.97 kB gzip), plus locally hosted fonts and small static files. No remote fonts, copyrighted series images, or third-party runtime services are requested by the app.

## Production browser checks

Tested the actual production build using Vite preview and Microsoft Edge via Playwright CLI.

- **23 direct routes**: homepage, all seven character articles, character/episode/lore/location/action directories, all other seeded articles, Community, About, Pages Needing Completion, Search, an unknown route, and an unknown character slug.
- Each route rendered one main heading and an appropriate document title. Unknown paths rendered the custom 404.
- **25 responsive checks**: homepage, character directory, Lady Killer, pilot, and search at 320, 390, 768, 1024, and 1440 CSS pixels. No horizontal page overflow remained.
- Article contents links and citations resolved to existing anchors. No broken same-document links were found in the route pass.
- No JavaScript runtime errors or browser console errors in the final production pass.
- Search from the homepage to Mr. Puzzles and onward to its article worked. Punctuation-insensitive titles, the WPNZ alias, James’s identifier, and category matching passed data checks.
- Search category filtering narrowed “Lady” from five matches to one character match and encoded the filter in the URL. Browser Back restored five matches.
- Nonmatching search displayed the recovery state.
- Character filtering narrowed to Dave; an unknown name displayed the empty state; Clear restored seven cards.
- Draft and Incomplete filters displayed six and five open records respectively.
- Mobile navigation opened and its Characters link navigated and closed the menu.
- Ctrl+K opened search and focused the input. Typing `9512` showed James. Escape closed the dialog even with a populated search field.
- Reduced-motion emulation disabled the portal animation.
- The research worksheet returned successfully and contained the expected content.
- The footer signal toggle changed its pressed state and exposed the text response.

## Visual review

Full-page desktop and mobile screenshots of the homepage were inspected, along with desktop and mobile article layouts. Screenshots and the temporary browser smoke script are in ignored `output/playwright/`. Final browser images include `article-mobile.png` and `search-empty-mobile.png`; representative homepage screenshots include `home-desktop.png` and `home-mobile.png`.

The checks found and resolved a 320px minimum-width overflow and search-dialog keyboard issues. A temporary development-server reconnection during formatting was resolved before testing the production build; it is not present in the final production pass.

## Scope and limits

This is functional Phase 1 software with intentionally limited editorial content. Source-reviewed biographies, a full pilot plot summary/scene breakdown, named locations, and authorized gallery assets remain research tasks. The supplied post-credits observation is attributed and its independent timestamp review remains pending. These gaps are displayed in the app and are not represented as completed research.

Edge is the only browser tested in this environment. The checks are smoke and visual checks, not a complete accessibility audit or exhaustive cross-browser test. Cloudflare Pages compatibility is configured for static hosting, but no Cloudflare deployment or production host check has been performed. No services were purchased and nothing was published to GitHub.
