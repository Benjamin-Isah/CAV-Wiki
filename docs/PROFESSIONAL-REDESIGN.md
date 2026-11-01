# CAV Fandom — professional visual redesign

Completed 1 November 2026. This updates the existing React wiki; its article registry, routes, citations, image provenance, and search repository remain intact.

## Visual changes

- One compact, sticky logo header replaces the duplicate masthead and shortcut rail. Desktop navigation has an Explore menu; phones have a complete navigation panel. Search remains available by button and Ctrl/Cmd+K.
- The homepage pairs large Anton typography and search with the actual pilot thumbnail. Six main-cast portraits lead into a post-credits feature, real article updates, supporting characters, and related story links.
- Charcoal surfaces, off-white text, controlled violet, occasional acid green, thin separators, and restrained hover states replace the heavier purple framing. Fonts remain locally hosted.
- Character directories use consistent artwork-first grids, clear group filters, live filtering, and A–Z sorting. The full 25-entry directory remains available.
- Articles have a clear title/deck/status hierarchy, a sticky desktop contents column, readable central text, and a right-hand infobox. On phones, the portrait/infobox and contents move above the text. Unknown sections are compact; evidence labels, contributor notes, theories, and citations remain visible.
- Character accents share one system: Lady Killer has green details, Mr. Puzzles has a quiet television frame and scanline texture, Lord General has a heavier infobox title, and WPNZ has mechanical framing. These are interface treatments, not added canon.
- The episode guide, search, community/about pages, unfinished-page index, empty states, and 404 share the same spacing and typography.
- Article videos have a local artwork preview. “Load video player” creates the original privacy-enhanced YouTube iframe, without autoplay or replacement controls. Keyboard focus transfers to the player. The external source link remains available.

## Important files

| File                               | Purpose                                                                                                  |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `src/components/Layout.tsx`        | Header, navigation, search shortcut, route handling, and footer.                                         |
| `src/pages/HomePage.tsx`           | Artwork-led editorial homepage and curated article links.                                                |
| `src/styles/premium.css`           | Current visual system, organized by component and responsive breakpoint.                                 |
| `src/index.css`                    | Loads only the shared foundation and current visual system. Earlier CSS files are retained but inactive. |
| `src/components/OfficialVideo.tsx` | Local preview, user-requested original player, attribution, and keyboard focus.                          |
| `src/pages/ArticlePage.tsx`        | Shared reader; supplies each video's existing lead-image record as its preview.                          |
| `src/pages/InfoPages.tsx`          | Updated privacy description for on-request video loading.                                                |

No packages were added. The supplied Calling All Fans logo, existing character images, and official pilot thumbnail were reused. No artwork was generated or newly downloaded during this redesign. A proportional 192 × 192 PNG export of the owner's logo is recorded in the branding manifest for the header and browser icon: 44,091 bytes instead of 1,740,561 bytes (about 97% smaller). The original attachment is unchanged, verified by SHA-256. Image source/rights records remain intact.

## Verification

| Check                                        | Result                                                                                                                                                                                                                                                                         |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Strict TypeScript, `npm run typecheck`       | Passed.                                                                                                                                                                                                                                                                        |
| Registry/search checks, `npm run check:data` | Passed for all 30 articles.                                                                                                                                                                                                                                                    |
| Production build, `npm run build`            | Passed; static `dist/` generated.                                                                                                                                                                                                                                              |
| Route sweep                                  | 42 direct URLs, including all 30 articles and both unknown-path/unknown-slug 404 cases, passed.                                                                                                                                                                                |
| Asset and anchor checks                      | All article images decoded; gallery coverage retained; no missing section/reference anchors or portrait placeholders.                                                                                                                                                          |
| Responsive layouts                           | 90 combinations: 15 representative pages at 320, 390, 768, 1024, 1440, and 1920 pixels. No horizontal overflow or application exceptions.                                                                                                                                      |
| Interaction checks                           | All 11 flows passed: homepage search, keyboard dialog, desktop menu, character controls, aliases/category search/recovery, article anchors/sticky contents, article-status filters, worksheet/signal, mobile menu/search, keyboard-loaded video, reduced motion/focus styling. |
| Text contrast smoke check                    | No flags across 1,326 directly rendered text elements on 10 representative desktop pages, using computed foreground/background colors and normal/large-text thresholds.                                                                                                        |
| Video placement                              | Six previews, only on their corresponding article galleries. No iframe loads before the reader requests it.                                                                                                                                                                    |

Final production assets: CSS **59.48 kB** (**13.00 kB gzip**); JavaScript **379.70 kB** (**115.24 kB gzip**). The earlier CSS build was 85.01 kB. Public images/fonts are separate assets.

Browser checks used Edge with desktop and mobile viewport sizes. These are smoke/visual checks, not a full screen-reader or cross-browser audit. Player loading, URL parameters, dimensions, and focus were checked; video availability and playback remain controlled by YouTube. The local server and SPA redirect configuration remain compatible with Cloudflare Pages. Nothing was deployed or published.

## Before and after

Screenshots and runnable browser-check scripts are in the ignored local artifact directory `output/playwright/professional-redesign/`.

| View                   | Before                                                                          | After                                                                         |
| ---------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Homepage, desktop      | [Before](../output/playwright/professional-redesign/home-before-1440.png)       | [After](../output/playwright/professional-redesign/home-after-1440.png)       |
| Homepage, phone        | [Before](../output/playwright/professional-redesign/home-before-390.png)        | [After](../output/playwright/professional-redesign/home-after-390.png)        |
| Characters, desktop    | [Before](../output/playwright/professional-redesign/characters-before-1440.png) | [After](../output/playwright/professional-redesign/characters-after-1440.png) |
| Pilot article, desktop | [Before](../output/playwright/professional-redesign/pilot-before-1440.png)      | [After](../output/playwright/professional-redesign/pilot-after-1440.png)      |
| Pilot article, phone   | [Before](../output/playwright/professional-redesign/pilot-before-390.png)       | [After](../output/playwright/professional-redesign/pilot-after-390.png)       |

Additional captures: [Lady Killer](../output/playwright/professional-redesign/lady-killer-viewport-1440.png), [Mr. Puzzles](../output/playwright/professional-redesign/mr-puzzles-viewport-1440.png), [episode guide](../output/playwright/professional-redesign/episodes-viewport-1440.png), [mobile navigation](../output/playwright/professional-redesign/mobile-navigation.png), and [pilot gallery preview](../output/playwright/professional-redesign/pilot-gallery-390.png).

The [YouTube embedded-player documentation](https://developers.google.com/youtube/player_parameters) informed the retained player parameters and 200 × 200 minimum player viewport. Standard YouTube controls and branding are preserved after loading.

## Local development

From PowerShell in `C:\Users\benja_0lboc1g\CAV-Fandom`, run `npm run dev`, then open the Local URL Vite prints. If PowerShell blocks npm's script shim, use `npm.cmd run dev`. Full clean-install/build instructions are in the [README](../README.md).
