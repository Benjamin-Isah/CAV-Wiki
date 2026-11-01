import type { ImageAsset } from "../types/wiki";
import { supportingImages } from "./supporting-images.ts";

/** Selected at the owner's explicit request for real online character art.
 * Source-site labels do not independently establish a copyright license.
 * The recorded request covers local implementation, not publication. */
export const imageAssets: Readonly<Record<string, ImageAsset>> = {
  ...supportingImages,
  "pilot-thumbnail": {
    id: "pilot-thumbnail",
    src: "/images/episodes/pilot-thumbnail.jpg",
    alt: "Official Calling All Villains pilot thumbnail featuring Mr. Puzzles, WPNZ, Lord General, The Pink Thing, and Lady Killer beside the series logo.",
    credit: "ZAMination · official YouTube pilot thumbnail",
    license:
      "Copyright belongs to the respective rights holders; no independent reuse license verified.",
    rightsStatus: "unverified",
    usageNote:
      "Retrieved from the official upload's published og:image metadata at the owner's explicit request to use the real pilot thumbnail. Preserved without cropping or retouching. This request is not an independently verified rightsholder license.",
    width: 1280,
    height: 720,
    sourceUrl: "https://www.youtube.com/watch?v=3AFJtcP2cp0",
    sourceFileUrl: "https://i.ytimg.com/vi/3AFJtcP2cp0/maxresdefault.jpg",
    framing: "thumbnail",
  },
  "lady-killer-portrait": {
    id: "lady-killer-portrait",
    src: "/images/characters/lady-killer.webp",
    alt: "Lady Killer in green and black, wearing a broad hat and red glasses and holding a curved green sword.",
    credit: "Calling All Villains / ZAMination · via Calling All Villains Wiki",
    license:
      "Copyright belongs to the respective rights holders; no independent reuse license verified.",
    rightsStatus: "unverified",
    usageNote:
      "Retrieved for this local wiki after the owner explicitly requested real character artwork from the Internet. This records the owner's instruction, not a rightsholder permission grant.",
    width: 1000,
    height: 1229,
    sourceUrl: "https://calling-all-villains.fandom.com/wiki/Lady_Killer",
    sourceFileUrl:
      "https://static.wikia.nocookie.net/calling-all-villains/images/1/1e/Lady-Killer.webp/revision/latest",
  },
  "mr-puzzles-portrait": {
    id: "mr-puzzles-portrait",
    src: "/images/characters/mr-puzzles.webp",
    alt: "Mr. Puzzles with a television head, microphone, white gloves, and one hand raised.",
    credit: "Calling All Villains / ZAMination · via Calling All Villains Wiki",
    license:
      "Copyright belongs to the respective rights holders; no independent reuse license verified.",
    rightsStatus: "unverified",
    usageNote:
      "Retrieved for this local wiki after the owner explicitly requested real character artwork from the Internet. This records the owner's instruction, not a rightsholder permission grant.",
    width: 1120,
    height: 1880,
    sourceUrl: "https://calling-all-villains.fandom.com/wiki/Mr._Puzzles",
    sourceFileUrl:
      "https://static.wikia.nocookie.net/calling-all-villains/images/7/76/Calling_All_Villains_Mr._Puzzles_Render.webp/revision/latest",
  },
  "lord-general-portrait": {
    id: "lord-general-portrait",
    src: "/images/characters/lord-general.webp",
    alt: "Lord General in spiked orange-red armour with chains and a sweeping dark cape.",
    credit: "Calling All Villains / ZAMination · via Calling All Villains Wiki",
    license:
      "Copyright belongs to the respective rights holders; no independent reuse license verified.",
    rightsStatus: "unverified",
    usageNote:
      "Retrieved for this local wiki after the owner explicitly requested real character artwork from the Internet. This records the owner's instruction, not a rightsholder permission grant.",
    width: 2491,
    height: 2053,
    sourceUrl: "https://calling-all-villains.fandom.com/wiki/Lord_General",
    sourceFileUrl:
      "https://static.wikia.nocookie.net/calling-all-villains/images/c/cc/Lord-General.webp/revision/latest",
  },
  "wpnz-portrait": {
    id: "wpnz-portrait",
    src: "/images/characters/wpnz.webp",
    alt: "WPNZ's metal-bodied design, with twin barrels above his face, a dark coat, and a raised fist.",
    credit: "Calling All Villains / ZAMination · via Calling All Villains Wiki",
    license:
      "Copyright belongs to the respective rights holders; no independent reuse license verified.",
    rightsStatus: "unverified",
    usageNote:
      "Retrieved for this local wiki after the owner explicitly requested real character artwork from the Internet. This records the owner's instruction, not a rightsholder permission grant.",
    width: 1000,
    height: 1389,
    sourceUrl: "https://calling-all-villains.fandom.com/wiki/WPNZ",
    sourceFileUrl:
      "https://static.wikia.nocookie.net/calling-all-villains/images/5/53/Mr-WPNZ.webp/revision/latest",
  },
  "the-pink-thing-portrait": {
    id: "the-pink-thing-portrait",
    src: "/images/characters/the-pink-thing.webp",
    alt: "The Pink Thing with long pink ear-like appendages, pink glasses, a curled tail, and a dark outfit.",
    credit: "Calling All Villains / ZAMination · via Calling All Villains Wiki",
    license:
      "Copyright belongs to the respective rights holders; no independent reuse license verified.",
    rightsStatus: "unverified",
    usageNote:
      "Retrieved for this local wiki after the owner explicitly requested real character artwork from the Internet. This records the owner's instruction, not a rightsholder permission grant.",
    width: 895,
    height: 937,
    sourceUrl: "https://calling-all-villains.fandom.com/wiki/The_Pink_Thing",
    sourceFileUrl:
      "https://static.wikia.nocookie.net/calling-all-villains/images/c/ce/The-Pink-Thing.webp/revision/latest",
  },
  "the-big-bad-portrait": {
    id: "the-big-bad-portrait",
    src: "/images/characters/the-big-bad.webp",
    alt: "The Big Bad with a white beard, skeletal face, skull-topped cane, and large purple-black armoured silhouette.",
    credit: "Calling All Villains / ZAMination · via Calling All Villains Wiki",
    license:
      "Copyright belongs to the respective rights holders; no independent reuse license verified.",
    rightsStatus: "unverified",
    usageNote:
      "Retrieved for this local wiki after the owner explicitly requested real character artwork from the Internet. This records the owner's instruction, not a rightsholder permission grant.",
    width: 701,
    height: 600,
    sourceUrl: "https://calling-all-villains.fandom.com/wiki/Big_Bad",
    sourceFileUrl:
      "https://static.wikia.nocookie.net/calling-all-villains/images/8/8d/The_Big_Bad_Official_Render.webp/revision/latest",
  },
  "dave-portrait": {
    id: "dave-portrait",
    src: "/images/characters/dave.webp",
    alt: "Dave with spiky yellow hair, round goggles, a metal jaw, and a grey poncho.",
    credit: "Calling All Villains / ZAMination · via Calling All Villains Wiki",
    license:
      "Copyright belongs to the respective rights holders; no independent reuse license verified.",
    rightsStatus: "unverified",
    usageNote:
      "Retrieved for this local wiki after the owner explicitly requested real character artwork from the Internet. This records the owner's instruction, not a rightsholder permission grant.",
    width: 448,
    height: 600,
    sourceUrl: "https://calling-all-villains.fandom.com/wiki/Dave",
    sourceFileUrl:
      "https://static.wikia.nocookie.net/calling-all-villains/images/1/19/Dave_Official_Render.webp/revision/latest",
  },
};
