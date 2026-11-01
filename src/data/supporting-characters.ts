import type { ArticleSection, WikiArticle } from "../types/wiki";

const pilot = {
  id: "official-pilot",
  title: "Calling All Villains — Pilot",
  publisher: "ZAMination · YouTube",
  type: "primary" as const,
  url: "https://www.youtube.com/watch?v=3AFJtcP2cp0",
  locator: "Registration and competition scenes; Origam-3 mission",
};
const minorPage = "Minor_Characters_(Calling_All_Villains)";
const section = (
  id: string,
  title: string,
  paragraphs: string[],
  kind: ArticleSection["kind"] = "editorial",
  sourceIds = ["character-reference"],
): ArticleSection => ({ id, title, paragraphs, kind, sourceIds });
const unknown = (id: string, title: string, text: string) =>
  section(id, title, [text], "unknown", []);

interface SupportingSeed {
  id: string;
  title: string;
  page: string;
  summary: string;
  appearance: string;
  story: string;
  role: string;
  group: "Origam-3" | "Background villains";
  accent: string;
  nameNote?: string;
  aliases?: string[];
  confirmedStory?: boolean;
  personality?: string;
  weapons?: string;
  relationships?: string;
  trivia: string;
  relatedIds?: string[];
  updateNote?: string;
}

const seeds: SupportingSeed[] = [
  {
    id: "paper-king",
    title: "Paper King",
    page: "Paper_King",
    group: "Origam-3",
    accent: "#dfc680",
    role: "Ruler of Origam-3",
    aliases: ["King of Origam-3", "King of Origami 3"],
    confirmedStory: true,
    summary:
      "The Paper King rules Origam-3 and owns the Sacred Scribbler that Puzzles’ team is sent to steal.",
    appearance:
      "The king wears a yellow crown and a red-purple cape. His design combines stationery and craft materials, including coloured paper, scissors, and a pencil hanging at his chest.",
    story:
      "The Big Bad sends the team to steal the Sacred Scribbler from the king. After their first plan fails, Puzzles approaches him disguised as a jester. They talk about being unhappy with their lives. The villains later take the pencil.",
    personality:
      "The king tells Puzzles that he is unhappy with his life during their private conversation.",
    weapons:
      "He is shown with a large pair of scissors and the Sacred Scribbler. The pencil’s powers are covered in its own article.",
    relationships:
      "He says his father created the paper planet. He meets Puzzles, disguised as a jester, and talks with him about their frustrations.",
    trivia:
      "His design uses stationery and craft materials, like the rest of Origam-3.",
  },
  {
    id: "paper-people",
    title: "Paper People",
    page: "Paper_People",
    group: "Origam-3",
    accent: "#d8ccb6",
    role: "Inhabitants of Origam-3",
    aliases: ["Paper Knights", "Paper civilians", "Paper guards"],
    confirmedStory: true,
    summary:
      "Origam-3’s paper inhabitants, including the knights who stand between the villains and the king.",
    appearance:
      "The inhabitants have drawn features on flat, folded paper bodies. The knights are illustrated in armour, with red crests on their helmets. The gallery reference shows a group carrying scissors.",
    story:
      "The Paper People appear when the team arrives on Origam-3. The guards confront the villains and are caught up in their distractions during the mission to steal the Sacred Scribbler.",
    weapons:
      "The knights in the image carry a large pair of scissors. Other inhabitants’ weapons are unknown.",
    relationships:
      "They live on the planet ruled by the Paper King. Individual names and relationships are unknown.",
    trivia: "This page covers the people of Origam-3 as a group.",
  },
  {
    id: "lash",
    title: "Lash",
    page: "Lash",
    group: "Background villains",
    accent: "#b79ee8",
    role: "Background contestant",
    nameNote: "Name used by fans; official name unconfirmed.",
    summary:
      "A one-eyed contestant in a purple coat who briefly meets Mr. Puzzles. The linked fan wiki calls this character Lash.",
    appearance:
      "This design has one large yellow eye, pointed shapes rising above the head, a purple coat, spiked cuffs, and tall boots fastened with several buckles.",
    story:
      "The linked fan wiki lists a brief encounter with Puzzles among the contestants. No further role or backstory has been confirmed.",
    trivia:
      "Lash is the name used on the linked fan wiki. An official source for the name is still needed.",
  },
  {
    id: "chopsy-the-pie",
    title: "Chopsy the Pie",
    page: "Chopsy_The_Pie",
    group: "Background villains",
    accent: "#c2cf87",
    role: "Pie-shaped background character",
    nameNote: "Name used by fans; official name unconfirmed.",
    aliases: ["Pie villain", "Chopsy"],
    summary:
      "A pie-shaped background character called Chopsy the Pie on the linked fan wiki. The name has not been confirmed in an official source.",
    appearance:
      "The image shows a pie in a purple tin with green and red toppings. Only a small picture is available.",
    story:
      "The linked fan wiki lists the pie character in the pilot’s opening and villain roster. The exact appearances still need checking against the episode.",
    trivia:
      "The name Chopsy the Pie comes from fans, not confirmed dialogue in the episode.",
  },
  {
    id: "coffin-villain",
    title: "Coffin villain",
    page: minorPage,
    group: "Background villains",
    accent: "#8fdbbc",
    role: "Background contestant",
    nameNote: "Descriptive name · official name unknown.",
    aliases: ["Coffin-bodied villain"],
    relatedIds: [
      "reaper-villain",
      "radio-villain",
      "red-and-black-villain",
      "pilot",
    ],
    summary:
      "A green-glowing, coffin-bodied contestant seen among the pilot’s background villains. Their official name is unknown.",
    appearance:
      "The reference shows a tall coffin-shaped body, glowing green features, thin hands, and a rectangular head above the torso. A wide green mouth dominates the front of the coffin.",
    story:
      "This contestant appears in the crowd around Puzzles in the pilot. Their backstory and powers are unknown.",
    trivia:
      "The name “Coffin villain” describes the character’s appearance. It isn’t a name spoken in the show.",
  },
  {
    id: "wolf-villain",
    title: "Wolf villain",
    page: minorPage,
    group: "Background villains",
    accent: "#d7bc7e",
    role: "Roster cameo",
    nameNote: "Descriptive name · official name unknown.",
    aliases: ["Wolf-like villain", "Werewolf roster portrait"],
    summary:
      "An unnamed wolf-like face on the villain roster, recognisable by grey fur and a bright yellow eye.",
    appearance:
      "The roster portrait shows grey fur, a dark nose, pointed teeth, and a bright yellow eye. The character’s species and any transformation abilities are unknown.",
    story:
      "The character appears in a villain roster portrait. A speaking role, team assignment, and later appearances have not been confirmed.",
    trivia:
      "Only a small roster portrait is available; it doesn’t show the full body.",
  },
  {
    id: "cat-villain",
    title: "Cat villain",
    page: minorPage,
    group: "Background villains",
    accent: "#a0bba9",
    role: "Roster cameo",
    nameNote: "Descriptive name · official name unknown.",
    aliases: ["Cat detective", "Cat-like villain"],
    summary:
      "A cat-like contestant pictured in a green hat and tie on the villain roster. A name and occupation have not been confirmed.",
    appearance:
      "The portrait shows a grey-green, cat-like face, a green hat, and a white shirt and tie. The outfit looks like a detective’s, but the character’s job is unknown.",
    story:
      "The roster provides a glimpse of this contestant’s design. Their team, abilities, and role in the competition remain unknown.",
    trivia:
      "“Cat detective” is another descriptive name for this character, not a confirmed name or job.",
  },
  {
    id: "four-eyed-bat-villain",
    title: "Four-eyed bat villain",
    page: minorPage,
    group: "Background villains",
    accent: "#e68daa",
    role: "Roster cameo",
    nameNote: "Descriptive name · official name unknown.",
    aliases: ["Bat-like villain", "Four-eyed villain"],
    summary:
      "A red, bat-like roster character with four cyan eyes and a toothy grin. Their official name is still unknown.",
    appearance:
      "The portrait shows a red face, four bright cyan eyes, pointed ears, and a broad grin lined with cyan teeth. Only the head and upper portrait are visible.",
    story:
      "The character appears in the villain roster. Their species and abilities, including whether they can fly, are unknown.",
    trivia: "“Four-eyed bat villain” is a descriptive name used by this wiki.",
  },
  {
    id: "reaper-villain",
    title: "Reaper villain",
    page: minorPage,
    group: "Background villains",
    accent: "#8dbbdd",
    role: "Roster cameo",
    nameNote: "Descriptive name · official name unknown.",
    aliases: ["Hooded villain", "Reaper-like contestant"],
    summary:
      "An unnamed contestant in a dark hood with pale blue eyes, seen on the villain roster.",
    appearance:
      "The portrait shows a dark blue hood around a nearly black face. Two bright, sharply angled eyes stand out from the shadow. The cropped image does not show a full outfit or a weapon.",
    story:
      "The linked fan wiki includes this portrait in its roster index. No dialogue, team assignment, or backstory has been confirmed.",
    trivia: "The eyes are the only brightly coloured part of the portrait.",
    relatedIds: ["coffin-villain", "red-and-black-villain", "pilot"],
    updateNote: "Added the hooded roster portrait and visible design details.",
  },
  {
    id: "red-and-black-villain",
    title: "Red-and-black villain",
    page: minorPage,
    group: "Background villains",
    accent: "#df807f",
    role: "Roster cameo",
    nameNote: "Descriptive name · official name unknown.",
    aliases: ["Red and black contestant", "Angular red villain"],
    summary:
      "An unnamed red-and-black roster character with an angular silhouette and a bright white crescent-shaped facial detail.",
    appearance:
      "The portrait shows red shapes on either side of a dark centre, with a white crescent on the face. The rest of the body is outside the image.",
    story:
      "The portrait is listed among the background contestants on the linked fan wiki. A role beyond the roster has not been confirmed.",
    trivia:
      "The page’s name comes from the portrait’s red-and-black colouring. The character’s identity is unknown.",
    relatedIds: ["reaper-villain", "mechanical-reptile-villain", "pilot"],
    updateNote:
      "Added an illustrated entry for the red-and-black roster design.",
  },
  {
    id: "mechanical-reptile-villain",
    title: "Mechanical reptile villain",
    page: minorPage,
    group: "Background villains",
    accent: "#dbaa7b",
    role: "Roster cameo",
    nameNote: "Descriptive name · official name unknown.",
    aliases: ["Reptile-like contestant", "Mechanical reptile"],
    summary:
      "A pale, reptile-like roster design with a red oval eye and curved orange appendages. Its name and species are unconfirmed.",
    appearance:
      "The portrait shows a long pale muzzle, a red eye that looks like a lens, dark markings, and curved orange shapes above the head. The design looks mechanical, but its abilities are unknown.",
    story:
      "This character is listed through a cropped villain-roster image. The character’s team assignment and role outside the roster remain unknown.",
    trivia:
      "“Mechanical reptile” describes the portrait. It is unknown whether the character is a robot or a living creature.",
    relatedIds: ["radio-villain", "red-and-black-villain", "pilot"],
    updateNote:
      "Added the mechanical-looking roster portrait and appearance notes.",
  },
  {
    id: "radio-villain",
    title: "Radio villain",
    page: minorPage,
    group: "Background villains",
    accent: "#bca4d6",
    role: "Roster cameo",
    nameNote: "Descriptive name · official name unknown.",
    aliases: ["Radio-headed contestant", "Grille-faced villain"],
    summary:
      "A radio-like background design with a tall grille and purple facial details, pictured on the villain roster.",
    appearance:
      "The crop shows a tall, rectangular grille above purple eye-like shapes and an angular grey lower face. Only a portion of the character’s design is visible.",
    story:
      "The portrait appears in the linked fan wiki’s roster index. An official name, speaking role, and team have not been confirmed.",
    trivia:
      "The available image only shows part of the character, including the tall grille.",
    relatedIds: [
      "mechanical-reptile-villain",
      "object-headed-villain",
      "pilot",
    ],
    updateNote: "Added a sourced radio-like portrait and identification notes.",
  },
  {
    id: "crowned-cat-villain",
    title: "Crowned cat villain",
    page: minorPage,
    group: "Background villains",
    accent: "#d9c87e",
    role: "Roster cameo",
    nameNote: "Descriptive name · official name unknown.",
    aliases: ["Crowned cat", "Cat with a crown"],
    summary:
      "A dark, cat-like contestant wearing a yellow crown and a red collar. The character’s official name is unknown.",
    appearance:
      "The portrait shows a pointed, dark blue-grey face, pale yellow eyes, a small yellow crown, and a high red collar. The lower body is outside the crop.",
    story:
      "The character appears in the roster index. Their name, kingdom, team, and any connection to the other cat-like contestant are unknown.",
    trivia:
      "This is a different character design from the cat wearing a green hat and tie. Neither has a confirmed official name.",
    relatedIds: ["cat-villain", "paper-king", "pilot"],
    updateNote:
      "Added the crowned cat’s portrait and a distinction from the other cat-like cameo.",
  },
  {
    id: "white-haired-villain",
    title: "White-haired villain",
    page: minorPage,
    group: "Background villains",
    accent: "#d5abe6",
    role: "Roster cameo",
    nameNote: "Descriptive name · official name unknown.",
    aliases: ["White-haired contestant", "Purple-faced villain"],
    summary:
      "A purple-faced roster character with swept white hair, pale earrings, and a broad grin.",
    appearance:
      "The portrait has a violet-pink face framed by large white locks. Pale circular earrings and purple clothing are visible beneath a wide smile.",
    story:
      "The linked fan wiki includes this portrait among the roster characters. Their name, backstory, and team are unknown.",
    trivia:
      "The character smiles in the portrait. Nothing else about their personality has been confirmed.",
    relatedIds: ["red-haired-villain", "lash", "pilot"],
    updateNote:
      "Added the white-haired contestant’s roster portrait and visible details.",
  },
  {
    id: "red-haired-villain",
    title: "Red-haired villain",
    page: minorPage,
    group: "Background villains",
    accent: "#cf8ca6",
    role: "Roster cameo",
    nameNote: "Descriptive name · official name unknown.",
    aliases: ["Red-haired contestant", "Dark-red-haired villain"],
    summary:
      "A background roster face partly hidden by sweeping dark red hair, with a bright eye visible beneath it.",
    appearance:
      "The small crop shows dark red hair sweeping across the upper face, pink-red colouring, and a sharply outlined pale eye. Much of the character is outside the image.",
    story:
      "This character appears in a roster portrait. Their official name and any larger role in the competition remain unconfirmed.",
    trivia:
      "The page is named after the character’s red hair. Their powers and motives are unknown.",
    relatedIds: ["white-haired-villain", "four-eyed-bat-villain", "pilot"],
    updateNote:
      "Added a source-linked portrait of the red-haired roster character.",
  },
  {
    id: "object-headed-villain",
    title: "Object-headed villain",
    page: minorPage,
    group: "Background villains",
    accent: "#c8a283",
    role: "Roster cameo",
    nameNote: "Descriptive name · official name unknown.",
    aliases: ["Rectangular-headed contestant", "Stacked-object villain"],
    summary:
      "An unnamed roster character with stacked red-brown shapes forming its head. The type of object is unclear.",
    appearance:
      "The portrait shows red-brown rectangular layers, dark horizontal bands, and a pale lower edge. The full body is not visible, and the object forming the head has not been identified.",
    story:
      "The linked fan wiki lists this portrait among the background contestants. No name, dialogue, or scenes involving this character have been confirmed.",
    trivia: "The object forming the character’s head is still unidentified.",
    relatedIds: ["radio-villain", "coffin-villain", "pilot"],
    updateNote:
      "Added the object-shaped roster portrait with its identification left open.",
  },
];

export const supportingCharacters: readonly WikiArticle[] = seeds.map(
  (seed, index) => ({
    id: seed.id,
    slug: seed.id,
    title: seed.title,
    category: "Characters",
    status:
      seed.nameNote?.startsWith("Name used") || seed.id === "chopsy-the-pie"
        ? "Draft"
        : "Incomplete",
    updatedAt: "2026-11-01",
    summary: seed.summary,
    eyebrow:
      seed.group === "Origam-3"
        ? "Origam-3 · supporting cast"
        : "Beyond Batch Z · background cast",
    aliases: seed.aliases ?? [],
    characterIndex: {
      group: seed.group,
      role: seed.role,
      nameNote: seed.nameNote,
    },
    artwork: {
      symbol: seed.id === "paper-king" ? "crown" : "asterisk",
      accent: seed.accent,
      initials: seed.title
        .split(" ")
        .map((word) => word[0])
        .slice(0, 2)
        .join(""),
      serial: String(index + 8).padStart(3, "0"),
      imageId: `${seed.id}-portrait`,
    },
    infobox: [
      { label: "Series", value: "Calling All Villains" },
      { label: "Role", value: seed.role },
      {
        label: "Appearance",
        value:
          seed.group === "Origam-3"
            ? "Pilot · Origam-3 mission"
            : seed.role === "Roster cameo"
              ? "Villain roster"
              : "Pilot · background",
      },
      ...(seed.nameNote ? [{ label: "Name note", value: seed.nameNote }] : []),
    ],
    sections: [
      section(
        "overview",
        "Overview",
        [seed.summary],
        seed.confirmedStory ? "confirmed" : "editorial",
        seed.confirmedStory ? ["official-pilot"] : ["character-reference"],
      ),
      ...(seed.nameNote
        ? [
            section(
              "identification",
              "Name and identification",
              [
                seed.nameNote,
                "An episode, credit, or creator post is needed to confirm the name.",
              ],
              "editorial",
            ),
          ]
        : []),
      section("appearance", "Appearance", [seed.appearance]),
      seed.personality
        ? section(
            "personality",
            "Personality",
            [seed.personality],
            "confirmed",
            ["official-pilot"],
          )
        : unknown("personality", "Personality", "Unknown."),
      unknown("abilities", "Abilities", "Unknown."),
      seed.weapons
        ? section("weapons", "Weapons and objects", [seed.weapons])
        : unknown("weapons", "Weapons", "No weapon has been confirmed."),
      seed.relationships
        ? section(
            "relationships",
            "Relationships",
            [seed.relationships],
            "confirmed",
            ["official-pilot"],
          )
        : unknown("relationships", "Relationships", "Unknown."),
      section(
        "story-and-appearances",
        "Story and appearances",
        [seed.story],
        seed.confirmedStory ? "confirmed" : "editorial",
        seed.confirmedStory ? ["official-pilot"] : ["character-reference"],
      ),
      section("trivia", "Trivia", [seed.trivia]),
      section(
        "fan-theories",
        "Fan theories",
        ["No fan theories have been added yet."],
        "theory",
        [],
      ),
    ],
    sources: [
      pilot,
      {
        id: "character-reference",
        title:
          seed.page === minorPage
            ? "Minor character image index"
            : `${seed.title} · community image reference`,
        publisher: "Calling All Villains Wiki · community reference",
        type: "community-reference",
        url: `https://calling-all-villains.fandom.com/wiki/${seed.page}`,
        note: "Used for the character image and fan identification. Names and descriptions still need confirmation from the show or its creators. Permission to reuse the image has not been independently confirmed.",
      },
    ],
    relatedIds:
      seed.relatedIds ??
      (seed.group === "Origam-3"
        ? [
            "pilot",
            "origam-3",
            seed.id === "paper-king" ? "paper-people" : "paper-king",
            "sacred-scribbler",
          ]
        : ["pilot", "the-big-bad", "mr-puzzles"]),
    gallery: [`${seed.id}-portrait`],
    updateNote:
      seed.updateNote ?? "Created the character page and added an image.",
  }),
);
