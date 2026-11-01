import type { ImageAsset } from "../types/wiki";

const wikiRoot = "https://calling-all-villains.fandom.com/wiki/";
const fileRoot =
  "https://static.wikia.nocookie.net/calling-all-villains/images/";
function reference(
  id: string,
  file: string,
  width: number,
  height: number,
  alt: string,
  page: string,
  framing: ImageAsset["framing"] = "portrait",
): ImageAsset {
  return {
    id: `${id}-portrait`,
    src: `/images/characters/${id}.webp`,
    width,
    height,
    alt,
    credit:
      "Calling All Villains / ZAMination · image reference via Calling All Villains Wiki",
    license:
      "Copyright belongs to the respective rights holders; no independent reuse license verified.",
    rightsStatus: "unverified",
    usageNote:
      "Selected for the local wiki following the owner's request for real online character images. Source attribution does not establish a reuse license. The downloaded reference is preserved without retouching or generative alterations.",
    sourceUrl: wikiRoot + page,
    sourceFileUrl: fileRoot + file,
    framing,
  };
}

const boneDrone = reference(
  "bone-drone",
  "d/dd/Bone_Drone_Render.webp/revision/latest?cb=20260329053150",
  1638,
  2048,
  "A Bone Drone with a skull-shaped head, magenta eye, thin mechanical limbs, and antenna.",
  "Bone_Drone",
);

export const supportingImages: Readonly<Record<string, ImageAsset>> = {
  "reaper-villain-portrait": reference(
    "reaper-villain",
    "a/af/Unknown_Villain_6.png/revision/latest?cb=20261024173206",
    126,
    172,
    "Roster portrait of an unnamed hooded villain with a dark face and pale blue angular eyes.",
    "Minor_Characters_(Calling_All_Villains)",
    "roster",
  ),
  "red-and-black-villain-portrait": reference(
    "red-and-black-villain",
    "e/e3/Unknown_Villain_7.png/revision/latest?cb=20261024173320",
    217,
    216,
    "Roster portrait with angular red and black forms surrounding a white crescent-shaped facial detail.",
    "Minor_Characters_(Calling_All_Villains)",
    "roster",
  ),
  "mechanical-reptile-villain-portrait": reference(
    "mechanical-reptile-villain",
    "e/eb/Unknown_Villain_8.png/revision/latest?cb=20261024173417",
    234,
    226,
    "Roster portrait of a pale reptile-like design with a red oval eye and curved orange appendages.",
    "Minor_Characters_(Calling_All_Villains)",
    "roster",
  ),
  "radio-villain-portrait": reference(
    "radio-villain",
    "4/41/Unknown_Villain_12.png/revision/latest?cb=20261024173859",
    148,
    109,
    "Roster crop of a radio-like design with a tall grey grille, purple eye-like shapes, and an angular lower face.",
    "Minor_Characters_(Calling_All_Villains)",
    "roster",
  ),
  "crowned-cat-villain-portrait": reference(
    "crowned-cat-villain",
    "4/4d/New_TBA_Villain_5.png/revision/latest?cb=20261031194917",
    223,
    232,
    "Roster portrait of a dark cat-like villain with yellow eyes, a small yellow crown, and a high red collar.",
    "Minor_Characters_(Calling_All_Villains)",
    "roster",
  ),
  "white-haired-villain-portrait": reference(
    "white-haired-villain",
    "9/98/Unknown_Villain_3.png/revision/latest?cb=20261024172229",
    139,
    171,
    "Roster portrait of a purple-faced character with swept white hair, circular pale earrings, and a broad smile.",
    "Minor_Characters_(Calling_All_Villains)",
    "roster",
  ),
  "red-haired-villain-portrait": reference(
    "red-haired-villain",
    "6/66/Unknown_Villain_10.png/revision/latest?cb=20261024173649",
    178,
    117,
    "Roster crop showing a character's dark red hair and a pale eye below it.",
    "Minor_Characters_(Calling_All_Villains)",
    "roster",
  ),
  "object-headed-villain-portrait": reference(
    "object-headed-villain",
    "5/5a/Unknown_Villain_13.png/revision/latest?cb=20261024173934",
    139,
    121,
    "Roster crop of a design with layered red-brown rectangular shapes and dark horizontal bands.",
    "Minor_Characters_(Calling_All_Villains)",
    "roster",
  ),
  "paper-king-portrait": reference(
    "paper-king",
    "0/01/Paper_King_Pose.png/revision/latest/scale-to-width-down/1000?cb=20261031210329",
    1000,
    1000,
    "The Paper King wearing a yellow crown and a cape, with stationery armour and a large pair of scissors.",
    "Paper_King",
  ),
  "paper-people-portrait": reference(
    "paper-people",
    "f/f3/Paper_People_1.png/revision/latest/scale-to-width-down/1000?cb=20261031223058",
    1000,
    563,
    "Paper Knights from Origam-3, drawn on folded paper and carrying a large pair of red-handled scissors.",
    "Paper_People",
    "scene",
  ),
  "lash-portrait": reference(
    "lash",
    "8/82/LASH.png/revision/latest?cb=20261031223212",
    449,
    1000,
    "Lash's one-eyed purple design with tall pointed head shapes, spiked cuffs, a fitted coat, and buckled boots.",
    "Lash",
  ),
  "chopsy-the-pie-portrait": reference(
    "chopsy-the-pie",
    "7/78/Chopsy_The_Pie.webp/revision/latest?cb=20261101020548",
    396,
    288,
    "The pie-shaped character identified as Chopsy the Pie by the community index, in a purple pie tin.",
    "Chopsy_The_Pie",
  ),
  "four-eyed-bat-villain-portrait": reference(
    "four-eyed-bat-villain",
    "9/93/Unknown_Villain_1.png/revision/latest?cb=20261024172055",
    166,
    184,
    "Roster portrait of an unnamed red bat-like villain with four cyan eyes and a wide grin.",
    "Minor_Characters_(Calling_All_Villains)",
    "roster",
  ),
  "wolf-villain-portrait": reference(
    "wolf-villain",
    "1/1a/Unknown_Villain_2.png/revision/latest?cb=20261024172143",
    153,
    175,
    "Roster portrait of an unnamed grey wolf-like villain with a glowing yellow eye.",
    "Minor_Characters_(Calling_All_Villains)",
    "roster",
  ),
  "cat-villain-portrait": reference(
    "cat-villain",
    "5/52/Unknown_Villain_4.png/revision/latest?cb=20261024172315",
    205,
    199,
    "Roster portrait of an unnamed cat-like villain wearing a green hat, white shirt, and tie.",
    "Minor_Characters_(Calling_All_Villains)",
    "roster",
  ),
  "coffin-villain-portrait": reference(
    "coffin-villain",
    "c/c2/Villain-2.jpg/revision/latest?cb=20261031194352",
    559,
    563,
    "Pilot image of a coffin-bodied background villain with green glowing features and a rectangular head.",
    "Minor_Characters_(Calling_All_Villains)",
    "scene",
  ),
  "bone-drone-portrait": boneDrone,
  "james-reference": {
    ...boneDrone,
    id: "james-reference",
    alt: "General Bone Drone design used as a reference for James (9512); this is not an image identifying James individually.",
    usageNote:
      boneDrone.usageNote +
      " This is a shared design reference, not a verified portrait or screenshot of James.",
  },
};
