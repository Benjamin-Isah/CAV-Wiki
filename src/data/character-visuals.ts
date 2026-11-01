/**
 * Interface treatments and requested portrait slots, not canonical character facts.
 * Official videos can be embedded through official-media.ts. No separate image
 * license has been verified. Selected renders were retrieved at the owner's
 * explicit request; their sources and rights state live in images.ts.
 */
export interface CharacterVisualProfile {
  articleId: string;
  title: string;
  accent: string;
  treatment: "insect" | "broadcast" | "gothic" | "industrial" | "neutral";
  portraitAssetId?: string;
  referenceUrl: string;
  requestedFile: string;
  status: "permission-pending" | "selected" | "approved";
}

export const characterVisuals: Readonly<
  Partial<Record<string, CharacterVisualProfile>>
> = {
  "lady-killer": {
    articleId: "lady-killer",
    portraitAssetId: "lady-killer-portrait",
    title: "Lady Killer",
    accent: "#b6da6f",
    treatment: "insect",
    referenceUrl: "https://www.youtube.com/watch?v=bY_ZNIuuWEQ",
    requestedFile: "lady-killer-full.webp",
    status: "selected",
  },
  "mr-puzzles": {
    articleId: "mr-puzzles",
    portraitAssetId: "mr-puzzles-portrait",
    title: "Mr. Puzzles",
    accent: "#aa8bc4",
    treatment: "broadcast",
    referenceUrl: "https://www.youtube.com/watch?v=tu3bKFKI8yM",
    requestedFile: "mr-puzzles-full.webp",
    status: "selected",
  },
  "lord-general": {
    articleId: "lord-general",
    portraitAssetId: "lord-general-portrait",
    title: "Lord General",
    accent: "#8e969c",
    treatment: "gothic",
    referenceUrl: "https://www.youtube.com/watch?v=V7wfpNonUIs",
    requestedFile: "lord-general-full.webp",
    status: "selected",
  },
  wpnz: {
    articleId: "wpnz",
    portraitAssetId: "wpnz-portrait",
    title: "WPNZ",
    accent: "#8a9caa",
    treatment: "industrial",
    referenceUrl: "https://www.youtube.com/watch?v=LAwhIJ9_CCk",
    requestedFile: "wpnz-full.webp",
    status: "selected",
  },
  "the-pink-thing": {
    articleId: "the-pink-thing",
    portraitAssetId: "the-pink-thing-portrait",
    title: "The Pink Thing",
    accent: "#b47f98",
    treatment: "neutral",
    referenceUrl: "https://www.youtube.com/watch?v=4ZIMmId9Wuo",
    requestedFile: "pink-thing-full.webp",
    status: "selected",
  },
  "the-big-bad": {
    articleId: "the-big-bad",
    portraitAssetId: "the-big-bad-portrait",
    title: "The Big Bad",
    accent: "#aea89a",
    treatment: "neutral",
    referenceUrl: "https://www.youtube.com/watch?v=3AFJtcP2cp0",
    requestedFile: "the-big-bad-full.webp",
    status: "selected",
  },
  dave: {
    articleId: "dave",
    portraitAssetId: "dave-portrait",
    title: "Dave",
    accent: "#a3a098",
    treatment: "neutral",
    referenceUrl: "https://www.youtube.com/watch?v=3AFJtcP2cp0",
    requestedFile: "dave-full.webp",
    status: "selected",
  },
};

export function getCharacterVisual(
  id: string,
): CharacterVisualProfile | undefined {
  return Object.hasOwn(characterVisuals, id) ? characterVisuals[id] : undefined;
}
