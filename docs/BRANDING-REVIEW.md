# Logo-led wiki redesign

Reviewed 1 November 2026. This update follows the owner's request to make the interface feel more like a fandom wiki and match the attached Calling All Villains logo. It updates the existing application in place.

## Visual changes

- The supplied logo anchors a lavender masthead, saturated purple navigation, aubergine article surfaces, and angular background details inspired by its V shape.
- A bounded wiki surface, desktop shortcut rail, category navigation, breadcrumbs, and Read / Contents / Sources links establish a clearer encyclopedia hierarchy.
- The homepage has a compact welcome/search panel, featured Lady Killer entry, character index, episode guide, editorial updates, and related subject links.
- Infobox names now sit above the portrait area in a stronger title bar. Lady Killer retains green accents; Mr. Puzzles retains restrained broadcast framing. Mobile uses a compact infobox and wrapping contents links.
- Existing routes, article records, citations, statuses, search, and reduced-motion behavior are retained. No packages were added.

## Supplied logo

`public/images/branding/calling-all-villains-logo.png` is an unchanged copy of the owner's 225 × 225 attachment. Its SHA-256 is `9782a69e04926ea657ee6715ed1b3e22e48a99b25109b0b2807301c820cb21ed`.

`src/data/branding.ts` records the file, dimensions, alt text, attachment provenance, and requested display scope. `ShowLogo.tsx` renders it consistently in the masthead and navigation; the same file is the favicon. Explicit dimensions and `object-fit: contain` preserve its proportions. It is displayed at 160px on desktop and smaller sizes on mobile. CSS blending integrates the original white background into the pale masthead without modifying the PNG.

The owner explicitly supplied the logo to use in this implementation. No independent license or broader redistribution grant is claimed. The [official ZAMination collection](https://zamination.store/collections/calling-all-villains) was consulted as a brand reference; its merchandise images were not copied.

No character portraits or episode stills were integrated. The seven pending portrait requests and their official reference links remain in [ASSET-CHECKLIST.md](ASSET-CHECKLIST.md). Authorized images can replace the current nameplates through the existing manifest flow.

## Screenshots

Screenshots are local artifacts under the ignored `output/playwright/` directory. The previous editorial design is preserved separately from this update.

| Surface | Previous design | Current design |
| --- | --- | --- |
| Homepage | [Previous desktop](../output/playwright/phase-1.5/after/home-desktop.png) | [Desktop](../output/playwright/logo-redesign/home-desktop.png), [mobile](../output/playwright/logo-redesign/home-mobile.png) |
| Lady Killer | [Previous desktop](../output/playwright/phase-1.5/after/lady-killer-desktop.png) | [Desktop](../output/playwright/logo-redesign/lady-killer-desktop.png), [mobile](../output/playwright/logo-redesign/lady-killer-mobile.png) |
| Characters | [Previous desktop](../output/playwright/phase-1.5/after/characters-desktop.png) | [Desktop](../output/playwright/logo-redesign/characters-desktop.png), [mobile](../output/playwright/logo-redesign/characters-mobile.png) |
| Mr. Puzzles | [Previous desktop](../output/playwright/phase-1.5/after/mr-puzzles-desktop.png) | [Desktop](../output/playwright/logo-redesign/mr-puzzles-desktop.png), [mobile](../output/playwright/logo-redesign/mr-puzzles-mobile.png) |
| Pilot | [Previous desktop](../output/playwright/phase-1.5/after/pilot-desktop.png) | [Desktop](../output/playwright/logo-redesign/pilot-desktop.png), [mobile](../output/playwright/logo-redesign/pilot-mobile.png) |

[Desktop viewport preview](../output/playwright/logo-redesign/preview-desktop.png) · [Expanded mobile menu](../output/playwright/logo-redesign/mobile-navigation.png)

## Verification

- `npm run typecheck`, `npm run check:data`, and `npm run build`: passed.
- Production build: 326.72 kB JavaScript (100.78 kB gzip), 67.97 kB CSS (15.07 kB gzip), plus static assets/fonts.
- 23 direct routes checked, including all 11 article records and two custom-404 cases. No JavaScript runtime/console errors or broken same-article anchors were reported.
- 30 responsive checks across six representative pages at 320, 390, 768, 1024, and 1440px: no horizontal overflow.
- Ctrl+K search focused its input, found James using `9512`, and closed with Escape. Reduced-motion checks found automatic scrolling and zero running animations. The research worksheet returned HTTP 200.
- The original logo loaded with its expected 225px intrinsic width and 160 × 160 desktop display size.
- The in-app browser was used for desktop/mobile visual review and mobile navigation. Choosing Characters closed the menu and opened the directory. Temporary viewport overrides were reset.

The existing development server remains available at `http://localhost:5173/`. Nothing was deployed or published. Character artwork and incomplete source-reviewed article content remain the principal gaps; the interface does not invent them.
