# Fan copy, researched articles, and official media

This is the earlier preview-only review. The subsequent still-image implementation for all seven characters is documented in [CHARACTER-IMAGES.md](CHARACTER-IMAGES.md).

Updated 1 November 2026. The user requested natural fan-wiki writing, real series information, and character imagery.

## Writing and articles

The homepage, About, Community, directories, search labels, and article reader now use plain fan-wiki language. Generic dossiers, repeated editorial boilerplate, and development terminology were removed from the reading experience. The site does not pretend that online editing or submissions are available.

The seven characters now have individual summaries and pilot roles. Five also have appearance descriptions drawn from their official introductions. Unverified details remain stubs; interpretations and fan theories retain separate labels. The post-credits account of Lady Killer and James (9512) retains its contributor provenance and unknown motive.

The pilot has an original plot summary, ordered scene guide, main-character list, important events, and release information. The page’s metadata gives 31 October 2026 as its publication date and about 30 minutes as its runtime. Three new articles cover Batch Z, Origam-3, and the Sacred Scribbler, bringing the registry to 14. No transcript or song lyrics were added to the application.

## Sources consulted

- [Calling All Villains — Pilot](https://www.youtube.com/watch?v=3AFJtcP2cp0): official synopsis, publication/duration metadata, and English captions viewed through YouTube’s transcript interface. The captions support the competition, dorm introductions, mission briefing, Origam-3 story, and Batch Z ranking. Exact scene timestamps are still being checked, so the wiki does not invent them.
- [Meet Lady Killer](https://www.youtube.com/watch?v=bY_ZNIuuWEQ): green/black design, red lenses, blade-like arms.
- [Meet Mr. Puzzles](https://www.youtube.com/watch?v=tu3bKFKI8yM): television head and costume.
- [Meet Lord General](https://www.youtube.com/watch?v=V7wfpNonUIs): armour, spikes, chains, and cape.
- [Meet WPNZ](https://www.youtube.com/watch?v=LAwhIJ9_CCk): mechanical design and built-in firearm.
- [Meet The Pink Thing](https://www.youtube.com/watch?v=4ZIMmId9Wuo): pink design, curling tail, costume, and book.

All six uploads returned their correct title, ZAMination channel identity, and iframe markup from YouTube’s official oEmbed endpoint. Official-store pages were also consulted but no merchandise images were copied, and product materials/sizes were not treated as character biology.

## What imagery was added

Five character introductions and the pilot are displayed using YouTube’s own embedded player. Its previews supply the authentic creator-hosted imagery. The original controls, platform branding, and video proportions are retained. Files are not scraped, downloaded, converted into cutouts, or rehosted.

`src/data/official-media.ts` centralizes source IDs, titles, channel credit, URLs, and verification dates. `OfficialVideo.tsx` uses privacy-enhanced `youtube-nocookie.com` embeds with no autoplay, explicit dimensions, lazy loading, descriptive iframe titles, and visible source links. The player area stays at least 200 × 200 pixels at tested widths. These choices follow [YouTube’s embed guide](https://support.google.com/youtube/answer/171780?hl=en) and [player documentation](https://developers.google.com/youtube/player_parameters).

No independent image license is claimed. Separate local portrait files still need permission as described in [ASSET-CHECKLIST.md](ASSET-CHECKLIST.md). The Big Bad and Dave still need suitable approved portraits or individual official introductions. Their nameplates remain, rather than mislabeling an unrelated preview as their portrait.

The About page now explains that loading a YouTube player contacts YouTube. Local article search still runs in the browser without a backend or saved search history. Embeds require internet access and may be blocked by a viewer’s browser or become unavailable; each has a visible Watch on YouTube link.

## Verification and screenshots

Strict TypeScript, data checks, and the production build pass. The data checker validates all 14 articles, references, related links, local asset metadata, official-video identities/URLs, and searches for the new topics. A production browser pass covered 26 direct routes, including the new articles and custom 404s, plus 30 responsive checks at 320, 390, 768, 1024, and 1440px. No horizontal overflow or broken same-article anchors was found. Search focus, `9512` results, Escape, reduced motion, and the research worksheet remain functional.

The browser recorded a non-fatal `compute-pressure` permissions-policy diagnostic from YouTube’s player script. It is a third-party player message; the embeds visibly load. No additional permission was granted to silence it.

Current screenshots are stored locally in the ignored `output/playwright/content-update/` folder:

- [Character directory](../output/playwright/content-update/characters-loaded.png)
- [Lady Killer](../output/playwright/content-update/lady-killer-desktop.png)
- [Pilot](../output/playwright/content-update/pilot-desktop.png)
- [About](../output/playwright/content-update/about-desktop.png)

Nothing was deployed, published, or sent to a third-party account. The existing development server remains at `http://localhost:5173/`.
