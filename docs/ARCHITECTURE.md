# Architecture

Phase 1.5 retains the existing static, browser-rendered React + TypeScript application. The route table, search, statuses, citations, and repository boundary are retained; the content update expands the registry to 30 articles. Vite builds HTML, CSS, JavaScript, fonts, and public assets into `dist/`. Official media is delivered through creator-hosted YouTube players. There is no server, database, authentication service, analytics SDK, or paid dependency.

## Important files

| File                               | Purpose                                                                                                                                                                                                              |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/App.tsx`                      | React Router route table; every article category uses the same reader. Unknown paths and unknown article slugs render the custom 404.                                                                                |
| `src/types/wiki.ts`                | Typed article, section, evidence, source, artwork, and image contracts. Selection is separate from verified licensing.                                                                                               |
| `src/data/articles.ts`             | The 30 article records, combining character, episode, lore, location, and object content. Dates are wiki update dates; the pilot’s release date is a separate infobox field.                                         |
| `src/data/character-content.ts`    | Individual character sections and summaries, with section-level references to the pilot or the relevant official introduction.                                                                                       |
| `src/data/world-content.ts`        | The Batch Z, Origam-3, and Sacred Scribbler articles.                                                                                                                                                                |
| `src/data/official-media.ts`       | Six official video records verified through YouTube oEmbed. A separate model from local-image authorization.                                                                                                         |
| `src/components/OfficialVideo.tsx` | Local artwork preview, then a requested creator-hosted privacy-enhanced embed; no autoplay, original branding/controls, attribution, source link, and a minimum 200 × 200 player viewport.                           |
| `src/lib/wiki.ts`                  | Central repository boundary, canonical URL construction, dates, and ranked search. Components do not individually scan the data file.                                                                                |
| `src/pages/ArticlePage.tsx`        | Shared article reader: infobox, contents navigation, sections, citations, gallery, theory boundary, references, status, and related records.                                                                         |
| `src/components/Artwork.tsx`       | Local still-image renderer with dimensions, containment, loading priority, and nameplate fallback. It never renders video players.                                                                                   |
| `src/data/images.ts`               | The combined local image registry with source pages/files, credits, actual dimensions, alt text, and explicit unverified rights state. The logo has a separate branding record.                                      |
| `src/data/branding.ts`             | Central record for the project-owner-supplied original 1254 × 1254 logo PNG: local path, native dimensions, alt text, provenance, and requested display scope. It does not assert an independently verified license. |
| `src/components/ShowLogo.tsx`      | Shared logo image renderer for the compact header, with explicit dimensions, asynchronous decoding, and an optional decorative alt treatment.                                                                        |
| `src/data/character-visuals.ts`    | Seven interface profiles and selected portrait IDs. Selected records an image choice; approved additionally requires verified license evidence.                                                                      |
| `src/components/Search.tsx`        | Reusable search form and native modal dialog with focus management and keyboard support.                                                                                                                             |
| `src/components/Layout.tsx`        | One compact sticky header with supplied logo, desktop Explore menu, mobile navigation, search shortcut, route scroll handling, and editorial footer.                                                                 |
| `src/pages/HomePage.tsx`           | Asymmetric pilot feature and search, six main-cast portraits, a post-credits feature, actual article updates, supporting cast, story links, and contribution guide.                                                  |
| `src/lib/use-page-title.ts`        | Shared document-title hook, kept outside component exports for reliable Vite Fast Refresh.                                                                                                                           |
| `src/index.css`                    | Style entry point loading only `base.css` followed by `premium.css`.                                                                                                                                                 |
| `src/styles/base.css`              | Design tokens, resets, shared controls, typography, and reduced-motion behavior. Manrope body text and Anton display headings are served locally.                                                                    |
| `src/styles/premium.css`           | Current charcoal/violet editorial design: header, homepage, artwork, directories, article reader, episode guide, search, community, footer, character treatments, and responsive/reduced-motion rules.               |
| `src/types/community.ts`           | Future domain contracts and false capability flags. These are not an authentication or permission implementation.                                                                                                    |
| `src/lib/easter-eggs.ts`           | Opt-in interaction registry. The footer signal is an accessible toggle with a text response; no audio, typing interception, or persistent tracking.                                                                  |
| `scripts/check-data.mjs`           | Registry and search checks: route/ID uniqueness, section coverage, references, related links, local asset existence/metadata/dimensions, character portrait approval references, and important query behavior.       |
| `public/_redirects`                | Cloudflare Pages SPA fallback for direct links and refreshing nested routes.                                                                                                                                         |
| `docs/ASSET-CHECKLIST.md`          | Owner-review asset requests, official reference links, primary visual-review notes, and permission requirements. No linked art is assumed licensed.                                                                  |

## Expanded collections

`supporting-characters.ts` supplies sixteen supporting-character articles. `supporting-images.ts` supplies seventeen distinct source files and a shared Bone Drone reference for James. `CharacterDirectory.tsx` reads `wiki.characters()`, with group filters and A–Z sorting. The optional `characterIndex` field cross-lists lore records without changing their category or URL. `EpisodeHub.tsx` and `WikiFeatures.tsx` compose episode facts, chapter links, and the official pilot thumbnail; videos remain in article galleries. `premium.css` provides the current responsive layouts. Source type `community-reference` is rendered distinctly from official material.

Earlier `layout.css`, `home.css`, `wiki.css`, `support.css`, `fandom.css`, and `collections.css` files are retained as design history but are not imported. Current visual changes belong in `premium.css`, avoiding the earlier cascade of overlapping overrides.

## Data and routing

An article has a stable ID and a category-local slug. Links are always produced by `articlePath()`. References and related records use IDs so titles can change without making relationships ambiguous. Article content is rendered as React text, not raw HTML; there is no Markdown execution or `dangerouslySetInnerHTML`.

The repository is synchronous because the Phase 1 article data remains bundled. A future remote implementation should add asynchronous loaders, error/loading states, and pagination at this boundary. Do not treat a Promise-returning backend as a drop-in synchronous implementation.

Search normalizes case, punctuation, and Latin diacritics, then requires every query word to match the combined article index. Title and alias matches rank above category matches, which rank above body matches. Search and category filters are encoded in the URL and work with browser back/forward. An empty query browses the index. A zero-result search has a recovery action.

## Evidence and editorial state

`EvidenceKind` separates observations, wiki notes, interpretations, theories, and unknowns. Theory sections have their own visual treatment and “not canon” label. Recorded scene details have citations and a provenance note. The Lady Killer/James observation is attributed to the owner’s contributor note and is not represented as independently timestamp-verified. Other pilot information was reviewed through the official synopsis, metadata, and English captions. The original pilot is linked and embedded; its video and transcript are not copied locally.

`Draft` is a newly opened record. `Incomplete` has some recorded information but still needs research. `Complete` is supported by the schema and badge; none of the limited seed records is falsely marked complete. All unfinished articles show “To Be Continued...”.

## Character identity and asset resolution

The header and browser icon use a proportional 192 × 192 PNG display export of the owner's logo, recorded under `branding.logo.navigation`. It is 44,091 bytes; the untouched full-resolution attachment is 1,740,561 bytes. This is a resize of the supplied artwork, without a redraw or background replacement. `ShowLogo` uses the display export's actual dimensions.

The owner's supplied Calling All Fans logo anchors the visual identity. Its original PNG is bundled at `public/images/branding/calling-all-fans-logo.png` and remains unchanged at its native 1254 × 1254 resolution. The earlier 225 × 225 show logo is retained separately. `src/data/branding.ts` records that the fan logo was attached by the project owner with the request to use it in this wiki. This is provenance and the requested local display scope, not independent license verification or a broader redistribution grant. `ShowLogo` reserves the native aspect ratio with explicit dimensions; its decorative header instance has empty alt text because the enclosing link names the site.

The shared layout places the logo beside the CAV Fandom wordmark in one compact header. `premium.css` uses deep charcoal, off-white text, restrained violet, thin separators, and occasional acid green. The homepage pairs an asymmetrical headline and search with the official pilot artwork. Articles use a sticky contents column, readable central text, and a right-hand infobox; mobile moves the infobox and contents above the text. Routes, article records, search, and asset APIs remain shared.

Character identity is supplied by the article name and the editorial hierarchy, with restrained per-character accents/framing from `src/data/character-visuals.ts`. The `treatment` values are interface decisions informed by references; they do not add appearance descriptions, species, abilities, or other canon facts to the article registry. Characters without a sufficiently reviewed visual reference retain neutral framing.

Twenty-four character reference images, the pilot thumbnail, and the supplied logos are bundled locally. After the earlier preview-only implementation, the owner explicitly asked to find real artwork online. Selected online references have rightsStatus set to unverified. The owner's request is not presented as a copyright license. See [image provenance](CHARACTER-IMAGES.md) and [the later supporting-cast additions](MORE-SIDE-CHARACTERS.md).

ArticleArtwork resolves an explicit article artwork image ID first, then the portrait ID of a selected or approved character profile. Both paths require a local imageAssets entry. Pending profiles leave their image ID unset. Cards link their image and caption to the article. Videos are rendered only in ArticleReader's gallery; they are never used as portrait fallbacks.

ImageAsset requires a local path, alt text, credit, rights notice, usage note, rights status, real dimensions, and HTTPS source-page and source-file URLs. Licensed assets additionally need actual permissionEvidence. The data check enforces this distinction; an approved profile must resolve to a licensed asset.

Portrait rendering forces `contain` to preserve complete silhouettes and the original aspect ratio. Width/height attributes reserve layout space, decoding is asynchronous, and `priority` controls eager/high-priority loading for above-the-fold artwork; other portraits lazy-load. Load failures return to the typographic treatment. Gallery figures also include intrinsic dimensions, lazy loading, credit/source captions, and an unavailable state. There is no third-party image hotlinking, remote image service, character-art generation, or image download built into the application.

## Future community implementation

The public site accurately states that these features are planned. No sign-in, application, save, submit, moderation, or admin button pretends to work.

The contracts in `src/types/community.ts` describe roles, applications, immutable revision snapshots, parent revision references, and moderation/rollback decisions. Before enabling any capability:

1. Add real authentication and server-side role checks. Client flags are presentation only and cannot grant privileges.
2. Store stable articles separately from append-only revisions. Give revisions immutable IDs and retain their parent IDs.
3. Queue editor applications and proposed changes for authorized review; publish only approved revisions.
4. Implement rollback as a new audited revision referencing an earlier snapshot, preserving all history.
5. Add moderation and administration interfaces backed by server authorization, rate limits, audit records, conflict detection, and privacy policies.

Choosing an identity provider or database is deferred. Phase 1.5 can be developed, built, and hosted as static files without either.

## Accessibility and compatibility

Semantic landmarks, a skip link, labeled search controls, visible focus states, native dialog focus trapping with a consistent Escape handler, status text, responsive navigation, and reduced-motion styling are included. Decorative icons/nameplate lettering are hidden where appropriate from assistive technology; content images require alt text. Main article text and metadata have separate readable scales, and contents links remain accessible in the single-column mobile layout. The browser must support modern CSS and native dialogs. The site requires JavaScript. Browser checks are smoke tests and visual checks, not a complete assistive-technology audit.

## Cloudflare Pages

The build command is `npm run build`, the output directory is `dist`, and the root directory is the project root. Use Node 24 (also recorded in `.node-version`). `public/_redirects` is copied into the output. Do not add a physical top-level `404.html`, which can interfere with SPA fallback. The custom 404 is a client route, so the host still returns a 200 HTML document for unknown routes; it is not an HTTP 404 response.

No Cloudflare configuration, account, API key, Wrangler installation, or deployment is required to build locally. No deployment has been performed.

## Official setup references

Consulted on 1 November 2026:

- [Vite getting started](https://vite.dev/guide/) — React TypeScript scaffold and commands.
- [React Router declarative installation](https://reactrouter.com/start/declarative/installation) — `react-router` and `BrowserRouter`.
- [Lucide React getting started](https://lucide.dev/guide/react/getting-started) — selective icon imports.
- [Cloudflare Pages React guide](https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/) — static React build settings.
- [Cloudflare Pages serving behavior](https://developers.cloudflare.com/pages/configuration/serving-pages/) — SPA fallback behavior.

The lockfile records exact resolved versions. There is no UI framework, animation library, hosted font dependency, or search service.
