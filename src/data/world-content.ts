import type { ArticleSection, WikiArticle } from "../types/wiki";

const section = (id: string, title: string, text: string): ArticleSection => ({
  id,
  title,
  kind: "confirmed",
  paragraphs: [text],
  sourceIds: ["official-pilot"],
});
const shared = {
  status: "Incomplete",
  updatedAt: "2026-11-01",
  sources: [
    {
      id: "official-pilot",
      title: "Calling All Villains — Pilot",
      publisher: "ZAMination · YouTube",
      type: "primary",
      url: "https://www.youtube.com/watch?v=3AFJtcP2cp0",
      locator: "Mission briefing, Origam-3 mission, and final ranking",
      note: "Based on the episode’s English captions. Exact timestamps still need checking.",
    },
  ],
} as const;

export const worldArticles: readonly WikiArticle[] = [
  {
    ...shared,
    id: "batch-z",
    slug: "batch-z",
    title: "Batch Z",
    category: "Lore",
    eyebrow: "Groups",
    summary:
      "Puzzles and his teammates’ ranking after their first mission for The Big Bad.",
    aliases: ["BatchZ", "Puzzles team"],
    artwork: {
      initials: "Z",
      serial: "L.03",
      accent: "#b98ce6",
      symbol: "crown",
      imageId: "pilot-thumbnail",
      caption: "Batch Z’s five members in the official pilot thumbnail.",
    },
    infobox: [
      { label: "Type", value: "Villain trainee group" },
      { label: "Ranked by", value: "The Big Bad" },
      { label: "Episode", value: "Pilot" },
    ],
    sections: [
      section(
        "overview",
        "Overview",
        "Batch Z is the ranking The Big Bad gives Puzzles’ team after its first mission. They steal the Sacred Scribbler, but their performance report lists several mistakes.",
      ),
      section(
        "members",
        "Members",
        "The remaining team consists of Mr. Puzzles, WPNZ, Lord General, The Pink Thing, and Lady Killer. Dave was part of their original group before the mission.",
      ),
      section(
        "first-mission",
        "First mission",
        "The team goes to Origam-3 to steal the king’s pencil. Their first attempt fails after they argue among themselves, so they work together on a second plan.",
      ),
    ],
    relatedIds: ["pilot", "mr-puzzles", "origam-3", "sacred-scribbler"],
    gallery: ["pilot-thumbnail"],
    updateNote: "Added the team’s members and first mission.",
  },
  {
    ...shared,
    id: "origam-3",
    slug: "origam-3",
    title: "Origam-3",
    category: "Locations",
    eyebrow: "Locations",
    summary: "The paper planet targeted in Batch Z’s first mission.",
    aliases: ["Origam 3", "Paper planet"],
    artwork: {
      initials: "O3",
      serial: "LOC.01",
      accent: "#d7c8ad",
      symbol: "orbit",
      imageId: "paper-people-portrait",
      caption:
        "Paper Knights from Origam-3. The image shows the inhabitants, not the planet itself.",
    },
    infobox: [
      { label: "Type", value: "Planet" },
      { label: "Ruler", value: "The king" },
      { label: "Notable object", value: "Sacred Scribbler" },
      { label: "Episode", value: "Pilot" },
    ],
    sections: [
      section(
        "overview",
        "Overview",
        "Origam-3 is the paper planet where Puzzles’ group carries out its first assignment. The Big Bad wants its Sacred Scribbler.",
      ),
      section(
        "the-mission",
        "The mission",
        "The king keeps the pencil with him. After the team’s first attempt to steal it leads to a pursuit, they try again with Puzzles disguised as a jester.",
      ),
      section(
        "the-king",
        "The king",
        "The king tells Puzzles that his father created the planet with the pencil. He talks about struggling to live up to his father, and the two discuss their frustrations.",
      ),
    ],
    relatedIds: ["pilot", "sacred-scribbler", "batch-z", "mr-puzzles"],
    gallery: ["paper-people-portrait"],
    updateNote: "Added the paper planet and its role in the pilot.",
  },
  {
    ...shared,
    id: "sacred-scribbler",
    slug: "sacred-scribbler",
    title: "Sacred Scribbler",
    category: "Weapons & Abilities",
    eyebrow: "Objects",
    summary:
      "The powerful pencil The Big Bad sends the team to steal from Origam-3.",
    aliases: ["The pencil", "Magic pencil"],
    artwork: {
      initials: "SS",
      serial: "A.02",
      accent: "#e2c17d",
      symbol: "spark",
      imageId: "paper-king-portrait",
      caption:
        "The Paper King with a yellow pencil at his chest. This image is used for context, not as a close-up of the Sacred Scribbler.",
    },
    infobox: [
      { label: "Form", value: "Pencil" },
      { label: "Location", value: "Origam-3" },
      { label: "Episode", value: "Pilot" },
    ],
    sections: [
      section(
        "overview",
        "Overview",
        "The Sacred Scribbler is the object of the villains’ first mission. The Big Bad describes it as a pencil capable of controlling the people of Origam-3.",
      ),
      section(
        "history",
        "History",
        "According to the king, the pencil belonged to his father, who used it to create the planet. The king keeps it with him until the villains’ mission.",
      ),
      section(
        "in-the-pilot",
        "In the pilot",
        "The team’s initial attempt to steal it goes wrong. They later regroup and obtain it, allowing The Big Bad to add it to his collection.",
      ),
    ],
    relatedIds: ["pilot", "origam-3", "the-big-bad", "batch-z"],
    gallery: ["paper-king-portrait"],
    updateNote: "Added the objective of the Origam-3 mission.",
  },
];
