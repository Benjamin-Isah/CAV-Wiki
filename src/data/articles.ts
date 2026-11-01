import { characterContent } from "./character-content.ts";
import { getOfficialMedia } from "./official-media.ts";
import { worldArticles } from "./world-content.ts";
import { supportingCharacters } from "./supporting-characters.ts";
import { pilotMediaIds } from "./media-catalogue.ts";
import type {
  ArticleSection,
  ArtworkSymbol,
  Source,
  WikiArticle,
} from "../types/wiki";

const updatedAt = "2026-11-01";
const pilotSource: Source = {
  id: "official-pilot",
  title: "Calling All Villains — Pilot",
  publisher: "ZAMination · YouTube",
  type: "primary",
  url: "https://www.youtube.com/watch?v=3AFJtcP2cp0",
  note: "The original pilot, its synopsis, and English captions. Scene names are used where timestamps still need checking.",
};
const observationSource: Source = {
  id: "project-observation",
  title: "Pilot post-credits observation",
  publisher: "CAV Fandom · contributor scene note",
  type: "project-observation",
  locator: "Pilot · post-credits scene; exact timestamp pending",
  note: "A contributor’s account of Lady Killer disabling and apparently examining James (9512) after the credits. The exact timestamp needs checking. Her motive is unknown.",
};

const unknown = (
  id: string,
  title: string,
  text = "Unknown.",
): ArticleSection => ({ id, title, kind: "unknown", paragraphs: [text] });
const theorySection: ArticleSection = {
  id: "fan-theories",
  title: "Fan theories",
  kind: "theory",
  paragraphs: ["No fan theories have been added yet."],
};

interface CharacterSeed {
  id: string;
  slug: string;
  title: string;
  initials: string;
  symbol: ArtworkSymbol;
  accent: string;
  serial: string;
  aliases?: string[];
}

const characterSeeds: CharacterSeed[] = [
  {
    id: "lady-killer",
    slug: "lady-killer",
    title: "Lady Killer",
    initials: "LK",
    symbol: "blade",
    accent: "#b7ed75",
    serial: "001",
  },
  {
    id: "mr-puzzles",
    slug: "mr-puzzles",
    title: "Mr. Puzzles",
    initials: "MP",
    symbol: "signal",
    accent: "#ab8eff",
    serial: "002",
    aliases: ["Mr Puzzles", "Puzzles"],
  },
  {
    id: "lord-general",
    slug: "lord-general",
    title: "Lord General",
    initials: "LG",
    symbol: "crown",
    accent: "#e2a17b",
    serial: "003",
  },
  {
    id: "wpnz",
    slug: "wpnz",
    title: "WPNZ",
    initials: "WZ",
    symbol: "spark",
    accent: "#8dcce3",
    serial: "004",
    aliases: ["Mr. WPNZ", "Mr WPNZ"],
  },
  {
    id: "the-pink-thing",
    slug: "the-pink-thing",
    title: "The Pink Thing",
    initials: "PT",
    symbol: "orbit",
    accent: "#ed9ac4",
    serial: "005",
    aliases: ["Pink Thing"],
  },
  {
    id: "the-big-bad",
    slug: "the-big-bad",
    title: "The Big Bad",
    initials: "BB",
    symbol: "eclipse",
    accent: "#c2a2e8",
    serial: "006",
    aliases: ["Big Bad"],
  },
  {
    id: "dave",
    slug: "dave",
    title: "Dave",
    initials: "D",
    symbol: "asterisk",
    accent: "#d3c19b",
    serial: "007",
  },
];

const characters: WikiArticle[] = characterSeeds.map((seed) => {
  const content = characterContent[seed.id];
  const media = getOfficialMedia(seed.id);
  const introSource: Source | undefined = media
    ? {
        id: "official-intro",
        title: media.title,
        publisher: "ZAMination · YouTube",
        type: "primary",
        url: media.sourceUrl,
        locator: "Character introduction",
        note: "Official character design and promotional introduction.",
      }
    : undefined;
  return {
    id: seed.id,
    slug: seed.slug,
    title: seed.title,
    category: "Characters",
    characterIndex: {
      group: seed.id === "the-big-bad" ? "The competition" : "Batch Z",
      role:
        seed.id === "the-big-bad"
          ? "Host of the competition"
          : seed.id === "dave"
            ? "Original trainee"
            : "Batch Z member",
    },
    status: seed.id === "dave" ? "Draft" : "Incomplete",
    updatedAt,
    summary: content.summary,
    eyebrow: "Character",
    aliases: seed.aliases ?? [],
    artwork: {
      symbol: seed.symbol,
      accent: seed.accent,
      initials: seed.initials,
      serial: seed.serial,
      imageId: `${seed.id}-portrait`,
    },
    infobox: [
      { label: "Series", value: "Calling All Villains" },
      { label: "Created by", value: "ZAMination" },
      { label: "Role", value: content.role },
      { label: "Affiliation", value: content.affiliation },
      { label: "Episode debut", value: "Pilot" },
    ],
    sections: [...content.sections, theorySection],
    sources: [
      pilotSource,
      ...(introSource ? [introSource] : []),
      ...(seed.id === "lady-killer" ? [observationSource] : []),
    ],
    relatedIds:
      seed.id === "lady-killer"
        ? ["pilot", "batch-z", "james-9512"]
        : [
            "pilot",
            "batch-z",
            ...(seed.id === "mr-puzzles" ? ["wpnz"] : ["mr-puzzles"]),
          ],
    gallery: [seed.id + "-portrait"],
    updateNote:
      seed.id === "lady-killer"
        ? "Added her design, Batch Z role, and the James encounter."
        : "Expanded with details from the pilot and official introductions.",
  };
});

export const articles: readonly WikiArticle[] = [
  ...characters,
  ...supportingCharacters,
  ...worldArticles,
  {
    id: "pilot",
    mediaIds: pilotMediaIds,
    slug: "pilot",
    title: "The Pilot",
    category: "Episodes",
    status: "Incomplete",
    updatedAt,
    summary:
      "Mr. Puzzles answers The Big Bad’s call and joins a team of villains on their first mission.",
    eyebrow: "Episode 01 · Pilot",
    aliases: ["Calling All Villains Pilot", "Episode 1", "Pilot"],
    artwork: {
      symbol: "signal",
      accent: "#ab8eff",
      initials: "01",
      serial: "EP.01",
      imageId: "pilot-thumbnail",
    },
    infobox: [
      { label: "Official title", value: "Calling All Villains - Pilot" },
      { label: "Studio", value: "ZAMination" },
      { label: "Format", value: "Animated pilot" },
      { label: "Runtime", value: "About 30 minutes" },
      { label: "Release date", value: "31 October 2026" },
    ],
    sections: [
      {
        id: "overview",
        title: "Episode overview",
        kind: "editorial",
        paragraphs: [
          "The pilot introduces Mr. Puzzles, The Big Bad’s succession contest, and the villains who become Batch Z. ZAMination released it on 31 October 2026.",
        ],
        sourceIds: ["official-pilot"],
      },
      {
        id: "plot-summary",
        title: "Plot summary",
        kind: "confirmed",
        paragraphs: [
          "After years of failed careers, Mr. Puzzles answers The Big Bad’s invitation to compete for his throne. At the lair, he meets his fellow contestants and reunites with WPNZ.",
          "Their first assignment is to steal the Sacred Scribbler from the king of Origam-3. The first attempt fails after the villains argue among themselves. They regroup, and Puzzles disguises himself as a jester to approach the king. The two have a personal conversation before the team steals the pencil.",
          "The team completes the mission, but The Big Bad places them in Batch Z after reviewing their mistakes. After the credits, Lady Killer encounters James (9512).",
        ],
        sourceIds: ["official-pilot", "project-observation"],
      },
      {
        id: "scene-breakdown",
        title: "Scene-by-scene breakdown",
        kind: "editorial",
        paragraphs: [
          "The scenes are listed in episode order. These are wiki headings, not official chapter titles. Timestamps still need checking.",
        ],
        points: [
          "Opening: Puzzles struggles to find a purpose and sees The Big Bad’s broadcast.",
          "The lair: registration, dorm introductions, and a reunion with WPNZ.",
          "The briefing: The Big Bad assigns the theft of the Sacred Scribbler.",
          "Origam-3: the villains’ first approach falls apart, then they regroup.",
          "The castle: Puzzles poses as a jester while his teammates create distractions.",
          "The result: the pencil is taken and the group receives its Batch Z ranking.",
          "Post-credits: Lady Killer encounters James (9512), disables it, and appears to examine it.",
        ],
        sourceIds: ["official-pilot", "project-observation"],
      },
      {
        id: "character-appearances",
        title: "Character appearances",
        kind: "confirmed",
        paragraphs: [
          "The main cast includes Mr. Puzzles, WPNZ, Lord General, The Pink Thing, Lady Killer, The Big Bad, and Dave. Bone Drones and the people of Origam-3 also appear. James (9512) is identified in the post-credits contributor note.",
        ],
        sourceIds: ["official-pilot", "project-observation"],
      },
      {
        id: "important-events",
        title: "Important events",
        kind: "confirmed",
        paragraphs: [
          "Puzzles joins the competition and reunites with WPNZ. Their team steals the Sacred Scribbler from Origam-3 and is ranked Batch Z. In the post-credits scene, Lady Killer disables James (9512), but her motive is unknown.",
        ],
        sourceIds: ["official-pilot", "project-observation"],
      },
      {
        id: "post-credits",
        title: "Post-credits scenes",
        kind: "confirmed",
        paragraphs: [
          "Lady Killer encounters a Bone Drone identified as “James” (9512). She disables it and appears to examine it. Her motive remains unknown.",
        ],
        sourceIds: ["project-observation"],
      },
      unknown("trivia", "Trivia", "No trivia has been added yet."),
    ],
    sources: [pilotSource, observationSource],
    relatedIds: [
      "mr-puzzles",
      "paper-king",
      "paper-people",
      "origam-3",
      "sacred-scribbler",
      "james-9512",
    ],
    gallery: ["pilot-thumbnail"],
    updateNote:
      "Added a plot summary, scene guide, release date, and main cast.",
  },
  {
    id: "james-9512",
    slug: "james-9512",
    title: "James (9512)",
    category: "Lore",
    characterIndex: {
      group: "The competition",
      role: "Post-credits Bone Drone",
      nameNote: "General Bone Drone image; not a confirmed portrait of James.",
    },
    status: "Incomplete",
    updatedAt,
    summary: "The Bone Drone Lady Killer encounters after the pilot’s credits.",
    eyebrow: "Lore",
    aliases: ["James", "9512", "Bone Drone James"],
    artwork: {
      symbol: "asterisk",
      accent: "#b7ed75",
      initials: "95",
      serial: "9512",
      imageId: "james-reference",
      caption:
        "The general Bone Drone design. This is not a confirmed portrait of James.",
    },
    infobox: [
      { label: "Name", value: "James" },
      { label: "Identifier", value: "9512" },
      { label: "Type", value: "Bone Drone" },
      { label: "Recorded appearance", value: "Pilot · post-credits" },
    ],
    sections: [
      {
        id: "overview",
        title: "Overview",
        kind: "confirmed",
        paragraphs: [
          "James (9512) is the Bone Drone encountered by Lady Killer in the pilot’s post-credits scene. She disables it and appears to examine it.",
        ],
        sourceIds: ["project-observation"],
      },
      {
        id: "the-encounter",
        title: "The encounter",
        kind: "confirmed",
        paragraphs: [
          "Lady Killer disables James and appears to examine him. The scene does not explain why she chooses him or what she is looking for.",
        ],
        sourceIds: ["project-observation"],
      },
      unknown(
        "open-questions",
        "Open questions",
        "Lady Killer’s motive and James’s role beyond this scene are unknown.",
      ),
      theorySection,
    ],
    sources: [observationSource, pilotSource],
    relatedIds: ["lady-killer", "pilot", "bone-drones"],
    gallery: ["james-reference"],
    updateNote:
      "Added James’s name and number from the post-credits scene note.",
  },
  {
    id: "bone-drones",
    slug: "bone-drones",
    title: "Bone Drones",
    category: "Lore",
    characterIndex: {
      group: "The competition",
      role: "The Big Bad’s assistants",
    },
    status: "Incomplete",
    updatedAt,
    summary:
      "The assistants working throughout The Big Bad’s lair and competition.",
    eyebrow: "Lore",
    aliases: ["Bone Drone"],
    artwork: {
      symbol: "eclipse",
      accent: "#a5b2bf",
      initials: "BD",
      serial: "L.02",
      imageId: "bone-drone-portrait",
    },
    infobox: [
      { label: "Known example", value: "James (9512)" },
      { label: "Origin", value: "Unknown" },
      { label: "Allegiance", value: "Unknown" },
    ],
    sections: [
      {
        id: "overview",
        title: "Overview",
        kind: "confirmed",
        paragraphs: [
          "Bone Drones assist with registration, directions, and performance reports in The Big Bad’s competition. James (9512) is the Bone Drone identified in Lady Killer’s post-credits encounter.",
        ],
        sourceIds: ["official-pilot", "project-observation"],
      },
      unknown("origins", "Origins and purpose"),
      unknown(
        "capabilities",
        "Capabilities",
        "Unknown. What happens to James does not tell us what every Bone Drone can do.",
      ),
      theorySection,
    ],
    sources: [observationSource, pilotSource],
    relatedIds: ["james-9512", "pilot", "lady-killer"],
    gallery: ["bone-drone-portrait"],
    updateNote: "Added the Bone Drones’ role in the competition.",
  },
  {
    id: "post-credits-encounter",
    slug: "post-credits-encounter",
    title: "The Post-Credits Encounter",
    category: "Weapons & Abilities",
    status: "Incomplete",
    updatedAt,
    summary:
      "Lady Killer disables James (9512) and appears to examine him after the pilot’s credits. Her motive is unknown.",
    eyebrow: "Observed action",
    aliases: ["Lady Killer abilities", "Disabling James"],
    artwork: {
      symbol: "blade",
      accent: "#b7ed75",
      initials: "PC",
      serial: "A.01",
      imageId: "lady-killer-portrait",
      caption:
        "Lady Killer’s character render, not a screenshot of the post-credits scene.",
    },
    infobox: [
      { label: "Character", value: "Lady Killer" },
      { label: "Encountered", value: "James (9512)" },
      { label: "Mechanism", value: "Unknown" },
      { label: "Motive", value: "Unknown" },
    ],
    sections: [
      {
        id: "overview",
        title: "Overview",
        kind: "confirmed",
        paragraphs: [
          "In the pilot’s post-credits scene, Lady Killer encounters the Bone Drone James (9512), disables it, and appears to examine it.",
        ],
        sourceIds: ["project-observation"],
      },
      {
        id: "evidence-boundary",
        title: "What happens",
        kind: "editorial",
        paragraphs: [
          "Lady Killer disables James and appears to examine him. The scene does not explain her motive or give the action a named power.",
        ],
      },
      unknown("weapons", "Weapons"),
      unknown("limits", "Abilities and limitations"),
      theorySection,
    ],
    sources: [observationSource, pilotSource],
    relatedIds: ["lady-killer", "james-9512", "pilot"],
    gallery: ["lady-killer-portrait", "james-reference"],
    updateNote: "Added a short account of Lady Killer’s encounter with James.",
  },
];
