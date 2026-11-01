# Content and authorized assets — Phase 1.5

## Current editorial scope

There are 30 articles: twenty-three character articles, the pilot, James (9512), Bone Drones, the post-credits encounter, Batch Z, Origam-3, and the Sacred Scribbler. The character directory cross-lists James and Bone Drones for 25 entries, preserving their lore routes. Character roles and the pilot summary are expanded from official material. Unknown biographical details and unverified powers remain stubs. The pilot’s release date and approximate runtime have been checked against its official metadata.

The James observation was supplied by the project owner. Its source record says so. Independently review the original pilot and add exact timestamps before treating it as independently checked. Do not invent a motive for Lady Killer. There are no fabricated fan theories, episode transcripts, purported quotations, accounts, contributors, or public activity metrics.

The Locations directory now includes Origam-3, named in the pilot’s mission briefing. New locations still require an identifiable source.

The supplied logo and twenty-four selected WebP character reference files are local. The owner specifically requested real online artwork after the earlier preview-only version. Source pages/files and unverified reuse rights are recorded in imageAssets. All character cards and infoboxes use still images; creator-hosted videos appear only in article galleries. See [the latest side-character sources](MORE-SIDE-CHARACTERS.md), [earlier expansion provenance](EXPANSION-REVIEW.md) and the [original seven-image record](CHARACTER-IMAGES.md).

## Writing style

Use plain fan-wiki language. Say who a character is, what they do, or what happens in a scene. Keep navigation labels direct. Avoid promotional teasers, repeated rhetorical questions, and stock phrases such as “follow the clues” or “connect the threads.” The homepage can be welcoming without sounding like an advert.

Keep article prose factual and in the third person. Preserve source links, evidence labels, and the difference between an unknown fact and an unfinished description. A short “Unknown” or “Not yet described” is better than a paragraph about missing information. Label fan names, interpretations, and theories without repeating the same disclaimer in every sentence. Do not add canon claims just to make a sentence more colourful.

## Adding or updating an article

1. Edit `src/data/articles.ts` or add a typed data module and include its records in the exported registry.
2. Use a unique stable `id`, a lowercase hyphenated `slug`, and a supported category. Do not reuse IDs.
3. Provide a summary, real editorial update date, status, infobox, sections, source records, and related IDs.
4. Give each section a stable ID. `gallery` and `references` are reserved for the reader. Character/episode section requirements are checked automatically.
5. A recorded factual observation needs `sourceIds`. New source IDs must resolve within the same article. Prefer the original work or an official creator publication, with a timestamp.
6. Label interpretations and theories with their own evidence kinds. Theories belong in the separate theory section and need attribution; do not mix them into a canonical biography.
7. Keep unknown details explicit. Only mark an article complete after actual editorial review.
8. Run `npm run check:data` and `npm run build`.

A new article automatically participates in category lists, search, related links, and open-page lists. The homepage character and supporting-cast strips are curated from the article registry. Its Lady Killer feature, James record, pilot guide, and three recent-update entries are curated explicitly in `HomePage.tsx`; they are editorial selections, not a live activity feed or fabricated community activity.

## Supporting cast and identification

Use `characterIndex` metadata (group, role, optional name note) to include an article in the character directory. Descriptive labels such as Wolf villain do not claim official names or species. Lash and Chopsy use explicitly marked community identifications; official naming needs a primary reference. Community sources use `community-reference`. Do not add Allie, Kazam, or Sarge as confirmed pilot characters from a community listing alone.

## Images and official videos

The current references were selected at the owner's explicit request to find real online character artwork. Selection is separate from a verified license. Do not treat a source-site caption, credit, or the owner's instruction as a rightsholder grant.

Register local artwork in src/data/images.ts as an ImageAsset. Required fields are id, src, alt, credit, license (a truthful rights notice), usageNote, rightsStatus, width, height, sourceUrl, and sourceFileUrl. Keep local paths under public/images and record real intrinsic dimensions. Use sourceUrl for the source page and sourceFileUrl for the exact upstream file.

rightsStatus can be unverified or licensed. Only licensed assets may claim a verified reuse grant, and they must include actual permissionEvidence. Keep private correspondence out of the public bundle; record a public-safe evidence reference instead. All current character reference assets are explicitly unverified.

Connect a character's portraitAssetId in character-visuals.ts. Status selected means that a sourced image is selected for display under the owner's instruction; approved is reserved for licensed assets. Pending profiles leave the ID unset. The data checker verifies that all selected IDs resolve and that approved profiles point to licensed records.

Every article must include a registered artwork.imageId and at least one gallery image. Use artwork.caption to explain when a picture is a contextual reference rather than a direct scene or object view. Captions appear in the infobox and the matching gallery figure.

An article's artwork.imageId takes precedence over its profile. Add an image ID to article.gallery for a figure with source credit and a clickable source page. Artwork.tsx renders still images only. Missing or failed images return to a nameplate; failed gallery figures show an unavailable state.

Images use object-fit: contain and preserve full native compositions, including limbs, props, hats, and tails. Width/height reserve space. Above-the-fold portraits load eagerly; other images use lazy loading and asynchronous decoding. Character references are WebP. The pilot thumbnail is the original 1280 × 720 JPEG from the official upload’s published og:image metadata, stored separately under public/images/episodes. No AI edits or background removal were used.

Official uploads are registered separately in official-media.ts and rendered by OfficialVideo.tsx inside the article gallery. Keep original player branding, no autoplay, and at least a 200 by 200 viewport. An embeddable video is not a license to republish its frames as separate files.

Run npm run check:data and npm run build after changing article or image records. Check the images in desktop and mobile previews too: metadata validation cannot judge an incorrect character or misleading alt text.

Phase 1.5 uses Manrope for readable body text and Anton for condensed display headings. Both are bundled locally with their SIL Open Font License notices in `public/fonts/`; Barlow Condensed is retired from the design. Interface treatments remain restrained and shared across pages: Lady Killer has an acid-green insect/sticker influence, Mr. Puzzles a broadcast frame, Lord General angular gothic framing, and WPNZ industrial lines. Other characters retain neutral framing where detailed visual reference is insufficient. These are interface decisions, not claims about abilities, species, weapons, or affiliations.
