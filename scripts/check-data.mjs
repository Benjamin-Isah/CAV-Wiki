import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { articles } from "../src/data/articles.ts";
import { imageAssets } from "../src/data/images.ts";
import { characterVisuals } from "../src/data/character-visuals.ts";
import { officialMedia } from "../src/data/official-media.ts";
import { mediaCatalogue } from "../src/data/media-catalogue.ts";
import { mediaTexts } from "../src/data/media-texts.ts";
import {
  articlePath,
  categoryPaths,
  searchArticles,
  wiki,
} from "../src/lib/wiki.ts";

const ids = new Set();
const paths = new Set();
const mediaIds = new Set();
for (const record of mediaCatalogue) {
  assert.match(record.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  assert(!mediaIds.has(record.id), `Duplicate media ID: ${record.id}`);
  mediaIds.add(record.id);
  assert(record.title.trim() && record.summary.trim());
  assert(
    ["episode", "song", "trailer", "teaser", "introduction"].includes(
      record.kind,
    ),
  );
  assert.equal(record.source.credit, "ZAMination");
  const sourceUrl = new URL(record.source.sourceUrl);
  assert.equal(sourceUrl.origin, "https://www.youtube.com");
  assert.equal(sourceUrl.searchParams.get("v"), record.source.videoId);
  assert.match(record.source.videoId, /^[A-Za-z0-9_-]{11}$/);
  assert.match(record.source.verifiedAt, /^\d{4}-\d{2}-\d{2}$/);
  if (record.segment) {
    assert(
      ["contributor-note", "verified"].includes(record.segment.identification),
    );
    for (const offset of [
      record.segment.startSeconds,
      record.segment.endSeconds,
    ])
      if (offset !== undefined) assert(Number.isInteger(offset) && offset >= 0);
    if (record.segment.endSeconds !== undefined)
      assert(
        record.segment.startSeconds !== undefined &&
          record.segment.endSeconds > record.segment.startSeconds,
      );
  }
}
const textMediaIds = new Set();
for (const text of mediaTexts) {
  assert(
    mediaIds.has(text.mediaId),
    `Text refers to unknown media: ${text.mediaId}`,
  );
  assert(
    !textMediaIds.has(text.mediaId),
    `Duplicate text record: ${text.mediaId}`,
  );
  textMediaIds.add(text.mediaId);
  assert(["transcript", "lyrics"].includes(text.kind));
  assert(text.language.trim() && text.provenance.description.trim());
  assert(
    ["supplied-text", "recorded-permission"].includes(text.provenance.basis),
  );
  if (text.provenance.basis === "recorded-permission")
    assert(
      text.provenance.permissionReference?.trim(),
      "Permission-based text needs an evidence reference",
    );
  assert(
    text.lines.length > 0,
    "Text records cannot pretend to contain an empty transcript",
  );
  const lineIds = new Set();
  for (const line of text.lines) {
    assert.match(line.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert(!lineIds.has(line.id), "Duplicate transcript line ID");
    lineIds.add(line.id);
    assert(line.text.trim());
    if (line.startSeconds !== undefined)
      assert(Number.isInteger(line.startSeconds) && line.startSeconds >= 0);
  }
}
for (const [id, media] of Object.entries(officialMedia)) {
  assert.equal(media.id, id);
  assert.match(media.videoId, /^[A-Za-z0-9_-]{11}$/);
  const url = new URL(media.sourceUrl);
  assert.equal(url.origin, "https://www.youtube.com");
  assert.equal(url.searchParams.get("v"), media.videoId);
  assert.equal(media.credit, "ZAMination");
  assert(articles.some((article) => article.id === id));
}
for (const [id, asset] of Object.entries(imageAssets)) {
  assert.equal(asset.id, id, `Asset registry ID mismatch: ${id}`);
  assert.match(asset.src, /^\/images\/[a-zA-Z0-9_./-]+$/);
  assert(
    !asset.src.includes(".."),
    `${id}: asset paths cannot escape public/images`,
  );
  assert(
    existsSync(new URL(`../public${asset.src}`, import.meta.url)),
    `${id}: local image is missing`,
  );
  assert(
    asset.alt &&
      asset.credit &&
      asset.license &&
      asset.usageNote &&
      asset.rightsStatus &&
      asset.sourceFileUrl,
    `${id}: source, rights state, or descriptive metadata missing`,
  );
  assert(["unverified", "licensed"].includes(asset.rightsStatus));
  if (asset.rightsStatus === "licensed")
    assert(
      asset.permissionEvidence,
      `${id}: a verified license needs actual evidence`,
    );
  assert(
    Number.isInteger(asset.width) &&
      asset.width > 0 &&
      Number.isInteger(asset.height) &&
      asset.height > 0,
    `${id}: positive intrinsic dimensions required`,
  );
  assert.equal(new URL(asset.sourceUrl).protocol, "https:");
  assert.equal(new URL(asset.sourceFileUrl).protocol, "https:");
}
for (const [id, profile] of Object.entries(characterVisuals)) {
  assert.equal(profile.articleId, id);
  assert(
    articles.some(
      (article) => article.id === id && article.category === "Characters",
    ),
  );
  assert.equal(new URL(profile.referenceUrl).protocol, "https:");
  if (profile.status === "approved" || profile.status === "selected") {
    assert(
      profile.portraitAssetId && imageAssets[profile.portraitAssetId],
      `${id}: selected portrait needs a sourced local asset`,
    );
    if (profile.status === "approved")
      assert.equal(
        imageAssets[profile.portraitAssetId].rightsStatus,
        "licensed",
      );
  } else
    assert.equal(
      profile.portraitAssetId,
      undefined,
      `${id}: pending reference must not be connected as artwork`,
    );
}
const requiredCharacterSections = [
  "overview",
  "appearance",
  "personality",
  "abilities",
  "weapons",
  "relationships",
  "story-and-appearances",
  "trivia",
  "fan-theories",
];
const requiredEpisodeSections = [
  "overview",
  "plot-summary",
  "scene-breakdown",
  "character-appearances",
  "important-events",
  "post-credits",
  "trivia",
];
for (const article of articles) {
  assert(!ids.has(article.id), `Duplicate id: ${article.id}`);
  assert(
    !paths.has(articlePath(article)),
    `Duplicate path: ${articlePath(article)}`,
  );
  ids.add(article.id);
  paths.add(articlePath(article));
  assert.match(article.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  assert(article.title.trim() && article.summary.trim());
  assert(article.category in categoryPaths);
  assert(["Draft", "Incomplete", "Complete"].includes(article.status));
  assert.match(article.updatedAt, /^\d{4}-\d{2}-\d{2}$/);
  assert(!Number.isNaN(Date.parse(article.updatedAt)));
  assert(article.sources.length > 0, `${article.id}: sources missing`);
  assert(
    article.artwork.imageId && imageAssets[article.artwork.imageId],
    `${article.id}: every article needs a registered lead image`,
  );
  assert(
    article.gallery.length >= 1,
    `${article.id}: every article needs at least one gallery image`,
  );
  const sectionIds = new Set(article.sections.map((section) => section.id));
  assert.equal(
    sectionIds.size,
    article.sections.length,
    `${article.id}: duplicate section ids`,
  );
  for (const id of article.category === "Characters"
    ? requiredCharacterSections
    : article.category === "Episodes"
      ? requiredEpisodeSections
      : [])
    assert(sectionIds.has(id), `${article.id}: missing ${id}`);
  const sourceIds = new Set(article.sources.map((source) => source.id));
  assert.equal(sourceIds.size, article.sources.length);
  for (const section of article.sections) {
    assert(
      !["gallery", "references", "media-guide"].includes(section.id),
      "Reserved reader section id",
    );
    assert(section.paragraphs.length > 0);
    if (section.kind === "confirmed")
      assert(
        section.sourceIds?.length,
        `${article.id}/${section.id}: observation needs a source`,
      );
    if (section.id === "fan-theories") assert.equal(section.kind, "theory");
    for (const sourceId of section.sourceIds ?? [])
      assert(
        sourceIds.has(sourceId),
        `${article.id}: broken source ${sourceId}`,
      );
  }
  for (const source of article.sources)
    if (source.url) assert.equal(new URL(source.url).protocol, "https:");
  for (const mediaId of article.mediaIds ?? [])
    assert(
      mediaIds.has(mediaId),
      `${article.id}: missing media record ${mediaId}`,
    );
  assert.equal(
    new Set(article.mediaIds ?? []).size,
    article.mediaIds?.length ?? 0,
    `${article.id}: duplicate media IDs`,
  );
  for (const id of article.relatedIds)
    assert(
      articles.some((related) => related.id === id),
      `${article.id}: broken related link ${id}`,
    );
  for (const imageId of [
    ...article.gallery,
    ...(article.artwork.imageId ? [article.artwork.imageId] : []),
  ]) {
    const asset = imageAssets[imageId];
    assert(
      asset?.src.startsWith("/images/"),
      `${article.id}: asset must be registered and local`,
    );
    assert(
      asset.alt && asset.credit && asset.license && asset.usageNote,
      `${imageId}: source/rights metadata missing`,
    );
  }
  assert.equal(wiki.bySlug(article.category, article.slug)?.id, article.id);
}
assert.equal(wiki.byCategory("Characters").length, 23);
assert.equal(wiki.byId("pilot").artwork.imageId, "pilot-thumbnail");
assert.equal(
  imageAssets["pilot-thumbnail"].width / imageAssets["pilot-thumbnail"].height,
  16 / 9,
);
assert.equal(
  imageAssets["pilot-thumbnail"].sourceUrl,
  officialMedia.pilot.sourceUrl,
);
assert.equal(
  wiki.characters().length,
  25,
  "Supporting cast and cross-listed lore records",
);
for (const id of [
  "paper-king",
  "paper-people",
  "lash",
  "chopsy-the-pie",
  "coffin-villain",
  "wolf-villain",
  "cat-villain",
  "four-eyed-bat-villain",
  "reaper-villain",
  "red-and-black-villain",
  "mechanical-reptile-villain",
  "radio-villain",
  "crowned-cat-villain",
  "white-haired-villain",
  "red-haired-villain",
  "object-headed-villain",
  "james-9512",
  "bone-drones",
]) {
  const article = wiki.byId(id);
  assert(article?.characterIndex, `${id}: missing character index metadata`);
  assert(imageAssets[article.artwork.imageId], `${id}: missing still image`);
}
assert.equal(
  articlePath(wiki.byId("james-9512")),
  "/lore/james-9512",
  "Existing lore routes are preserved",
);
assert.equal(articlePath(wiki.byId("bone-drones")), "/lore/bone-drones");
assert.equal(
  searchArticles("mr puzzles")[0]?.id,
  "mr-puzzles",
  "Punctuation-insensitive title search",
);
assert.equal(searchArticles("Mr. WPNZ")[0]?.id, "wpnz", "Alias search");
assert.equal(searchArticles("9512")[0]?.id, "james-9512", "Identifier search");
assert.equal(searchArticles("Characters").length, 23, "Category search");
assert.equal(
  searchArticles("Hooded villain")[0]?.id,
  "reaper-villain",
  "New cameo alias search",
);
assert.equal(searchArticles("Crowned cat")[0]?.id, "crowned-cat-villain");
assert(
  searchArticles("Lady Killer", "Characters").every(
    (article) => article.category === "Characters",
  ),
);
assert.equal(searchArticles("xyzzynonexistent").length, 0, "No-results search");
assert.equal(
  searchArticles("   ").length,
  articles.length,
  "Empty search browses all",
);
assert.equal(
  searchArticles("", "Locations").length,
  1,
  "Verified location directory",
);
assert.equal(searchArticles("Origam-3")[0]?.id, "origam-3");
assert.equal(searchArticles("Sacred Scribbler")[0]?.id, "sacred-scribbler");
assert.equal(searchArticles("Batch Z")[0]?.id, "batch-z");
assert.equal(
  searchArticles("announcement trailer")[0]?.id,
  "pilot",
  "Media guide search finds the episode article",
);
assert.equal(
  searchArticles("lyrics")[0]?.id,
  "pilot",
  "Song text availability is searchable",
);
assert.equal(
  wiki.bySlug("Episodes", "lady-killer"),
  undefined,
  "Category route isolation",
);
assert(
  wiki
    .byId("lady-killer")
    .sections.some((section) =>
      section.paragraphs.some((p) => p.includes("motive remains unknown")),
    ),
);
console.log(
  `PASS: ${articles.length} articles, ${mediaCatalogue.length} media records, ${mediaTexts.length} supplied text records; unique IDs/routes, required sections, sources, related links, asset/media metadata, and search/routing/content checks.`,
);
