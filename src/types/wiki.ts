export type ArticleCategory =
  "Characters" | "Episodes" | "Lore" | "Locations" | "Weapons & Abilities";
export type ArticleStatus = "Draft" | "Incomplete" | "Complete";
export type EvidenceKind =
  "confirmed" | "editorial" | "interpretation" | "theory" | "unknown";
export type ArtworkSymbol =
  "blade" | "signal" | "crown" | "spark" | "orbit" | "eclipse" | "asterisk";

export interface ArticleSection {
  id: string;
  title: string;
  kind: EvidenceKind;
  paragraphs: readonly string[];
  points?: readonly string[];
  sourceIds?: readonly string[];
}

export interface Source {
  id: string;
  title: string;
  publisher: string;
  type: "primary" | "project-observation" | "community-reference";
  url?: string;
  locator?: string;
  note?: string;
}

export interface Artwork {
  symbol: ArtworkSymbol;
  accent: string;
  initials: string;
  serial: string;
  imageId?: string;
  /** Explains a contextual image without implying it depicts the exact scene. */
  caption?: string;
}

export interface ImageAsset {
  id: string;
  src: string;
  alt: string;
  credit: string;
  license: string;
  usageNote: string;
  /** A selected reference is not represented as a verified reuse license. */
  rightsStatus: "unverified" | "licensed";
  /** Intrinsic dimensions reserve space and preserve the supplied composition. */
  width: number;
  height: number;
  sourceUrl: string;
  sourceFileUrl: string;
  /** Reference to an actual permission record; never inferred from publicity. */
  permissionEvidence?: string;
  fit?: "cover" | "contain";
  framing?: "portrait" | "roster" | "scene" | "thumbnail";
}

export type CharacterGroup =
  "Batch Z" | "The competition" | "Origam-3" | "Background villains";

export interface CharacterIndexEntry {
  group: CharacterGroup;
  role: string;
  /** Editorial identification, never presented as an official character name. */
  nameNote?: string;
}

export interface WikiArticle {
  id: string;
  slug: string;
  title: string;
  category: ArticleCategory;
  status: ArticleStatus;
  updatedAt: string;
  summary: string;
  eyebrow: string;
  aliases: readonly string[];
  artwork: Artwork;
  infobox: readonly { label: string; value: string }[];
  sections: readonly ArticleSection[];
  sources: readonly Source[];
  relatedIds: readonly string[];
  gallery: readonly string[];
  updateNote: string;
  /** Cross-lists existing lore records without changing their canonical routes. */
  characterIndex?: CharacterIndexEntry;
  /** Optional official-video/text guide, separate from confirmed article prose. */
  mediaIds?: readonly string[];
}
