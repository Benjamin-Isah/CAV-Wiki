# Character still images and article-only videos

This records the original seven-character image update. For the expanded cast, nine additional source files, and current verification, see [the expansion review](EXPANSION-REVIEW.md).


Updated 1 November 2026. The owner asked for videos only in articles and real pictures for all seven characters, explicitly following up: “Find the real arts of them on the Internet.” This supersedes the earlier preview-only implementation for this local project.

## Result

All seven characters now have local WebP renders on the homepage, character directory, infoboxes, and article galleries. The Big Bad and Dave are included. Image and caption are one article link. There are no video players on the homepage or directory; the five character introductions and pilot video remain inside their article galleries, one player per relevant article.

The images were found through the Calling All Villains Wiki's character index and full-size image viewer. The files were exported from the normally rendered browser page with its asset-download capability. They are original WebP assets, with no AI generation, background removal, cropping, or resampling. CSS containment preserves the complete figures. The files total 1085.3 KiB; below-the-fold images load lazily.

## Provenance and rights

The source wiki labels these as character renders. Their visible designs match the relevant Calling All Villains characters; this is not an independent verification of the original upload chain or image license. No rightsholder reuse grant was found or claimed. All seven ImageAsset records have rightsStatus unverified, with a truthful rights notice, source-page and source-file URLs, and a usage note recording the owner's request. No permissionEvidence is invented. The source wiki's general text license is not assumed to cover the character artwork.

These are selected local reference images. The owner has not authorized deployment or publication; none occurred. The About page identifies the sources and does not describe the images as licensed. Gallery figures link to the source page.

| Character | Local file | Dimensions | Source page | Original file |
| --- | --- | --- | --- | --- |
| Lady Killer | [lady-killer.webp](../public/images/characters/lady-killer.webp) | 1000 × 1229 | [Source](https://calling-all-villains.fandom.com/wiki/Lady_Killer) | [WebP](https://static.wikia.nocookie.net/calling-all-villains/images/1/1e/Lady-Killer.webp/revision/latest) |
| Mr Puzzles | [mr-puzzles.webp](../public/images/characters/mr-puzzles.webp) | 1120 × 1880 | [Source](https://calling-all-villains.fandom.com/wiki/Mr._Puzzles) | [WebP](https://static.wikia.nocookie.net/calling-all-villains/images/7/76/Calling_All_Villains_Mr._Puzzles_Render.webp/revision/latest) |
| Lord General | [lord-general.webp](../public/images/characters/lord-general.webp) | 2491 × 2053 | [Source](https://calling-all-villains.fandom.com/wiki/Lord_General) | [WebP](https://static.wikia.nocookie.net/calling-all-villains/images/c/cc/Lord-General.webp/revision/latest) |
| Wpnz | [wpnz.webp](../public/images/characters/wpnz.webp) | 1000 × 1389 | [Source](https://calling-all-villains.fandom.com/wiki/WPNZ) | [WebP](https://static.wikia.nocookie.net/calling-all-villains/images/5/53/Mr-WPNZ.webp/revision/latest) |
| The Pink Thing | [the-pink-thing.webp](../public/images/characters/the-pink-thing.webp) | 895 × 937 | [Source](https://calling-all-villains.fandom.com/wiki/The_Pink_Thing) | [WebP](https://static.wikia.nocookie.net/calling-all-villains/images/c/ce/The-Pink-Thing.webp/revision/latest) |
| The Big Bad | [the-big-bad.webp](../public/images/characters/the-big-bad.webp) | 701 × 600 | [Source](https://calling-all-villains.fandom.com/wiki/Big_Bad) | [WebP](https://static.wikia.nocookie.net/calling-all-villains/images/8/8d/The_Big_Bad_Official_Render.webp/revision/latest) |
| Dave | [dave.webp](../public/images/characters/dave.webp) | 448 × 600 | [Source](https://calling-all-villains.fandom.com/wiki/Dave) | [WebP](https://static.wikia.nocookie.net/calling-all-villains/images/1/19/Dave_Official_Render.webp/revision/latest) |

## Checks

- Strict TypeScript, article/image data checks, and production build passed.
- 26 direct routes and 30 responsive page checks at 320, 390, 768, 1024, and 1440px passed; no broken same-page anchors, horizontal overflow, or JavaScript errors were reported in that pass.
- All seven local images decoded successfully. Their natural dimensions match the manifest and width/height attributes; computed fit is contain.
- Homepage: zero iframes. Character directory: zero iframes and seven linked image cards.
- All seven character articles have an infobox image and gallery image. The five introductory videos occur only in the gallery; The Big Bad and Dave have no unrelated video substituted for a portrait.
- Dave's directory filter reduces the list to one, and clicking the card opens the correct article. Dave's article fits at 320 and 390px.
- Existing quick search, keyboard focus, Escape, reduced motion, and research download checks passed.

## Screenshots

[All seven characters](../output/playwright/portraits/characters-final.png) · [Homepage](../output/playwright/portraits/home-final.png) · [The Big Bad](../output/playwright/portraits/the-big-bad-desktop.png) · [Dave](../output/playwright/portraits/dave-desktop.png) · [Dave on mobile](../output/playwright/portraits/dave-390.png).

The screenshot directory is a local ignored output folder. It is not included in the site build.

## File integrity

SHA-256 values of the bundled originals:

- lady-killer.webp: 789ff1afb417428d9823ca8e58f8af2a0914a7c247319e3a45cb95732cadcde3
- mr-puzzles.webp: 23ab59f470fbc29481333c1faa50ad1bf4aecbbbf0ef7e1ccf299339eac47be6
- lord-general.webp: 4138483573fcbc1a29868cbc537b17397cc7c327abcf6164e4cfa202672d74cf
- wpnz.webp: ff420ac366ac8d4c7a4b2cd75098a137998e65217a56ffd164459cd20f52b7b1
- the-pink-thing.webp: ceb3353e284577c97015320e8a63f50abed4bcc31de20ab8776712f913061ba6
- the-big-bad.webp: 593e7ea1b16fc9ceaeb093e5a17395d0ac85ea5ff1339cd8c69bb22d53f3406a
- dave.webp: 3aa3c060a521f3eff8c5a54e3db3a99e2c32b577d9ac0dc5442d0da16a00c2d5
