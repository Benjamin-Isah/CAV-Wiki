# CAV Fandom — Phase 1.5

An independent, unofficial fan encyclopedia for **Calling All Villains** by ZAMination. React, TypeScript, Vite, React Router, Lucide, and local structured article data. No backend or paid services are required.

## Run locally on Windows

Install **Node.js 24 LTS** with npm, then open PowerShell:

```powershell
git clone https://github.com/Benjamin-Isah/CAV-Wiki.git
cd CAV-Wiki
npm ci
npm run dev
```

Open the Local URL printed by Vite (normally `http://localhost:5173`). Keep that terminal open. Stop the server with **Ctrl+C**. If PowerShell blocks `npm.ps1` under your execution policy, use `npm.cmd ci` and `npm.cmd run dev`; no policy change is necessary.

Dependencies are already installed in the delivered workspace. `npm ci` is for a clean checkout or reinstall. Node 24 is recorded in `.node-version`; package requirements are also recorded in `package.json`. The setup follows the current [Vite guide](https://vite.dev/guide/), [React Router guide](https://reactrouter.com/start/declarative/installation), and [Lucide React guide](https://lucide.dev/guide/react/getting-started).

## Checks and production preview

```powershell
npm run typecheck
npm run check:data
npm run build
npm run preview
```

`typecheck` runs strict TypeScript checks. `check:data` validates the article registry, sources, related links, required sections, image metadata, and search behavior using Node’s built-in assertions. `build` repeats TypeScript checks and produces the static `dist` directory. `preview` serves that build locally, normally at `http://localhost:4173`; it is not a deployment command.

## Included

- Charcoal editorial design with a compact logo header, controlled violet and acid-green accents, an artwork-led homepage, readable article columns, Anton/Manrope typography, locally hosted OFL fonts, and responsive layouts.
- The project-owner-supplied CAV / Calling All Fans logo, preserved as the original 1254 × 1254 PNG. A proportional 192 × 192 PNG export is used in the header and browser icon to reduce download size. Its provenance is recorded; no independent license or broader reuse grant is claimed.
- Twenty-three character articles: the main seven, Paper King, Paper People, and fourteen background villains. James and Bone Drones are cross-listed for 25 directory entries, preserving their lore routes.
- Twenty-four local WebP references with descriptive alt text and recorded sources. James uses a clearly identified general Bone Drone design reference.
- The real 1280 × 720 pilot thumbnail from the official ZAMination upload, used on the homepage, episode guide, article infobox, and gallery, with source metadata.
- Creator-hosted videos for five character introductions and the pilot, shown only in article galleries. Local artwork previews load the original privacy-enhanced player on request, without autoplay.
- A fuller episode hub with the official pilot thumbnail, release facts, six story chapters, cast links, and related lore; the pilot article supports every requested section.
- A searchable pilot media guide links to three official trailers, teasers/promos, and the song's pilot source. Full transcripts and lyrics have not been supplied; the song's title and timestamp remain unconfirmed. See [media sources and text support](docs/MEDIA-TEXT.md).
- Lore, Locations, Weapons & Abilities, Community, About, Pages Needing Completion, search, and custom 404 pages.
- Every article has a sourced lead image and at least one gallery image, with contextual captions where the picture represents a related character or design. Directories, search results, and related links also show thumbnails.
- One reusable article reader with infoboxes, contents navigation, citations, source provenance, gallery, theories, related records, and Draft / Incomplete / Complete statuses.
- Client-side ranked search across titles, aliases, categories, summaries, and article text; URL-based queries and filters; recovery states; keyboard search via **Ctrl+K** or **Cmd+K**.
- Character group filters, live name/role filtering, A–Z sorting, and unfinished-article status filters.
- A downloadable research worksheet and clearly described future community capabilities.
- A small optional, keyboard-accessible footer signal interaction.

There are 30 articles. Unknown details remain stubs and fan theories stay separate. Community identifications are labelled; descriptive cameo titles do not claim official names. The Lady Killer/James note retains its contributor provenance and unknown motive. Online artwork has recorded sources and unverified reuse rights. The homepage and directories contain still images only; videos remain in article galleries. No transcripts are bundled. Community editing is planned rather than simulated. See the [latest side-character additions and sources](docs/MORE-SIDE-CHARACTERS.md), [article image coverage](docs/ARTICLE-IMAGE-COVERAGE.md), and [earlier expansion review](docs/EXPANSION-REVIEW.md).

## Architecture and editing

- **`src/data/articles.ts`** holds the structured records. **`src/types/wiki.ts`** defines their contracts.
- **`src/data/character-content.ts`** contains the character-specific sections; **`src/data/world-content.ts`** contains the new group, location, and object articles.
- **`src/data/supporting-characters.ts`** adds the supporting cast through the same article model. **`characterIndex`** metadata controls grouping and cross-lists lore records without duplicating pages.
- **`src/pages/CharacterDirectory.tsx`**, **`src/pages/EpisodeHub.tsx`**, and **`src/components/WikiFeatures.tsx`** provide cast filters, episode chapters, shared cast links, and the official pilot thumbnail.
- **`src/data/official-media.ts`** records six verified official uploads. **`src/components/OfficialVideo.tsx`** shows a local poster until the reader loads the original player, retaining platform branding and controls. These records are separate from licenses for local images.
- **`src/lib/wiki.ts`** centralizes article lookup, URLs, dates, and search.
- **`src/pages/ArticlePage.tsx`** renders every article from that data.
- **`src/data/images.ts`** records local images, source pages/files, credits, dimensions, alt text, usage notes, and rights status.
- **`src/data/supporting-images.ts`** supplies new references and a roster framing option that avoids excessive enlargement of small crops.
- **`src/data/branding.ts`** records the supplied logo’s file, native dimensions, alt text, provenance, and requested display scope. **`src/components/ShowLogo.tsx`** renders it in the compact header.
- **`src/data/character-visuals.ts`** connects all seven characters to selected portraits and shared interface treatments. Selection is separate from verified licensing.
- **`src/index.css`** loads **`src/styles/base.css`** for fonts/resets/shared controls and **`src/styles/premium.css`** for the complete visual system, grouped by component and responsive breakpoint. Earlier styles remain on disk as design history and are not loaded.
- **`src/types/community.ts`** defines future roles, applications, revisions, and moderation contracts; all capabilities are disabled.

See the [professional redesign report](docs/PROFESSIONAL-REDESIGN.md) for the current visual changes and verification, [character image update](docs/CHARACTER-IMAGES.md) for image sources, [architecture](docs/ARCHITECTURE.md) for file purposes, and [content guidance](docs/CONTENT.md) for adding articles/images. Earlier visual/content reviews are historical records.

## Cloudflare Pages compatibility

This is a static Vite SPA. After deployment is separately approved, use **`npm run build`** with **`dist`** as the output directory and **Node 24**. The included `public/_redirects` handles direct nested routes on Cloudflare Pages. The client 404 is a designed page, not a server HTTP 404 response. See the [official React Pages guide](https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/) and [SPA serving behavior](https://developers.cloudflare.com/pages/configuration/serving-pages/).

No deployment, GitHub publication, paid resource, or service purchase has been performed.

## Rights and independence

Unofficial, fan-made, and not affiliated with or endorsed by ZAMination. Calling All Villains, its logo, and its characters belong to their respective rights holders. The logo was supplied by the project owner with a request to use it in this local fan-wiki implementation; this records that instruction rather than an independently verified license. Unavailable image files fall back to typographic nameplates. Selected online renders retain an explicit unverified rights state. Fonts include their SIL Open Font License notices in `public/fonts/`.
