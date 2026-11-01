import type { ArticleSection } from "../types/wiki";

interface CharacterContent {
  summary: string;
  role: string;
  affiliation: string;
  sections: readonly ArticleSection[];
}

const fact = (
  id: string,
  title: string,
  text: string,
  source = "official-pilot",
): ArticleSection => ({
  id,
  title,
  kind: "confirmed",
  paragraphs: [text],
  sourceIds: [source],
});
const stub = (
  id: string,
  title: string,
  text = "Unknown.",
): ArticleSection => ({
  id,
  title,
  kind: "unknown",
  paragraphs: [text],
});
const intro = (id: string, title: string, text: string) =>
  fact(id, title, text, "official-intro");

export const characterContent: Readonly<Record<string, CharacterContent>> = {
  "lady-killer": {
    summary:
      "Lady Killer is a member of Batch Z who takes part in the mission to Origam-3.",
    role: "Villain contestant",
    affiliation: "Batch Z",
    sections: [
      fact(
        "overview",
        "Overview",
        "Lady Killer is one of the villains in Mr. Puzzles’ group, later ranked Batch Z. She takes part in the mission to Origam-3.",
      ),
      intro(
        "appearance",
        "Appearance",
        "Lady Killer has a green-and-black, insect-like design, a pale face, large red lenses, and a broad green hat. She carries a large curved green sword.",
      ),
      stub(
        "personality",
        "Personality",
        "Lady Killer says little during the group’s introductions. Her reasons for joining the competition are unknown.",
      ),
      intro(
        "abilities",
        "Abilities",
        "She uses a sword in her official introduction. The rest of her abilities are unknown.",
      ),
      intro(
        "weapons",
        "Weapons",
        "Lady Killer carries a large curved sword. Its name is unknown.",
      ),
      fact(
        "relationships",
        "Relationships",
        "She works alongside Mr. Puzzles, WPNZ, Lord General, and The Pink Thing in Batch Z. Pink enthusiastically introduces her to Puzzles.",
      ),
      {
        id: "story-and-appearances",
        title: "Story and appearances",
        kind: "confirmed",
        paragraphs: [
          "After the pilot’s credits, Lady Killer encounters a Bone Drone identified as James (9512). She disables it and appears to examine it. Her motive remains unknown.",
        ],
        sourceIds: ["project-observation"],
      },
      intro(
        "trivia",
        "Trivia",
        "ZAMination released a dedicated Meet Lady Killer introduction before the pilot.",
      ),
    ],
  },
  "mr-puzzles": {
    summary:
      "Mr. Puzzles is a TV-headed contestant competing to become The Big Bad’s successor.",
    role: "Protagonist / villain contestant",
    affiliation: "Batch Z",
    sections: [
      fact(
        "overview",
        "Overview",
        "Mr. Puzzles is the main character of Calling All Villains. After several failed careers, he enters The Big Bad’s competition to become his successor.",
      ),
      intro(
        "appearance",
        "Appearance",
        "Puzzles is tall and thin, with a television for a head, a small dark hat, a purple outfit, and white gloves. His expressions appear on his screen.",
      ),
      fact(
        "personality",
        "Personality",
        "Puzzles wants recognition as a villain and treats villainy as a performance, but he is unsure what he wants to do with his life.",
      ),
      intro(
        "abilities",
        "Abilities",
        "His screen displays different faces and images. Abilities he has in SMG4 are not automatically confirmed for Calling All Villains.",
      ),
      stub("weapons", "Weapons", "No regular weapon has been confirmed."),
      fact(
        "relationships",
        "Relationships",
        "Puzzles reunites with WPNZ, who already knows him and had searched for him after they became separated. They join the same trainee group.",
      ),
      fact(
        "story-and-appearances",
        "Story and appearances",
        "In the pilot, Puzzles joins the competition and helps his team steal the Sacred Scribbler from Origam-3. The Big Bad then places the team in Batch Z.",
      ),
      {
        id: "trivia",
        title: "Trivia",
        kind: "confirmed",
        paragraphs: [
          "The official series description says that Puzzles originally comes from SMG4.",
        ],
        sourceIds: ["official-pilot"],
      },
    ],
  },
  "lord-general": {
    summary:
      "Lord General is an armoured contestant who tries to lead the team’s first mission.",
    role: "Villain contestant",
    affiliation: "Batch Z",
    sections: [
      fact(
        "overview",
        "Overview",
        "Lord General is one of the villains grouped with Mr. Puzzles in the pilot. He competes for the chance to succeed The Big Bad.",
      ),
      intro(
        "appearance",
        "Appearance",
        "Lord General wears bulky red-and-black armour, spikes, chains, and a dark, tattered cape. In his introduction, he towers over the presenter.",
      ),
      fact(
        "personality",
        "Personality",
        "He tries to look intimidating and insists on leading the mission, though a compliment from Puzzles briefly catches him off guard.",
      ),
      stub(
        "abilities",
        "Abilities",
        "His full powers and their limits are unknown.",
      ),
      stub("weapons", "Weapons", "No named weapon has been confirmed."),
      fact(
        "relationships",
        "Relationships",
        "He is grouped with Puzzles, WPNZ, Lady Killer, and The Pink Thing. They argue over who should lead their first mission.",
      ),
      fact(
        "story-and-appearances",
        "Story and appearances",
        "Lord General joins the mission to steal the Sacred Scribbler from Origam-3. After their initial infighting, the remaining villains cooperate.",
      ),
      intro(
        "trivia",
        "Trivia",
        "He has a dedicated introduction in ZAMination’s Meet the Villains promotional shorts.",
      ),
    ],
  },
  wpnz: {
    summary:
      "A heavily armed mechanical villain and an old acquaintance of Mr. Puzzles.",
    role: "Villain contestant",
    affiliation: "Batch Z",
    sections: [
      fact(
        "overview",
        "Overview",
        "WPNZ is a mechanical villain who reunites with Mr. Puzzles at The Big Bad’s lair. He joins Puzzles’ group in the competition.",
      ),
      intro(
        "appearance",
        "Appearance",
        "WPNZ has a metal body, segmented limbs, and twin barrels above his face. His official introduction shows a gun incorporated into his arm.",
      ),
      fact(
        "personality",
        "Personality",
        "WPNZ is blunt, aggressive, and comfortable with violence. Despite the insults he trades with Puzzles, he promises to have his back.",
      ),
      intro(
        "abilities",
        "Abilities",
        "WPNZ has weapons built into his body. His official introduction shows him firing an arm-mounted gun.",
      ),
      intro(
        "weapons",
        "Weapons",
        "He fires an arm-mounted gun in his introduction. Its model and the rest of his weapon inventory are unknown.",
      ),
      fact(
        "relationships",
        "Relationships",
        "WPNZ and Puzzles knew each other before the pilot. WPNZ says he searched for Puzzles after they were separated; they resume working together in the competition.",
      ),
      fact(
        "story-and-appearances",
        "Story and appearances",
        "He arrives late to the group’s dorm, reunites with Puzzles, and participates in the Origam-3 mission. He remains with the team after its Batch Z ranking.",
      ),
      intro(
        "trivia",
        "Trivia",
        "His name is styled in capitals as WPNZ in his official introduction.",
      ),
    ],
  },
  "the-pink-thing": {
    summary:
      "A pink, book-carrying villain who takes the rules of villainy very seriously.",
    role: "Villain contestant",
    affiliation: "Batch Z",
    sections: [
      fact(
        "overview",
        "Overview",
        "The Pink Thing, also called Pink, is one of Puzzles’ fellow contestants. She often refers to The Big Book of Villainy.",
      ),
      intro(
        "appearance",
        "Appearance",
        "Pink has a rounded pink body, long ear-like appendages, pink glasses, and a curling tail. She wears a dark outfit and carries a purple book.",
      ),
      fact(
        "personality",
        "Personality",
        "She is enthusiastic about villainy, admires The Big Bad, and looks to her book for guidance. She is excited to introduce Lady Killer to Puzzles.",
      ),
      stub(
        "abilities",
        "Abilities",
        "Her full abilities and their limits are unknown.",
      ),
      stub(
        "weapons",
        "Weapons",
        "Her book is a guide to villainy. It has not been confirmed as a magical weapon.",
      ),
      fact(
        "relationships",
        "Relationships",
        "Pink joins Puzzles, WPNZ, Lady Killer, and Lord General in Batch Z. She treats The Big Bad as a celebrity and asks him for a villain-inflicted injury.",
      ),
      fact(
        "story-and-appearances",
        "Story and appearances",
        "Pink meets Puzzles in the dorms and joins the mission to Origam-3. She tries to take charge as the group arrives.",
      ),
      intro(
        "trivia",
        "Trivia",
        "The official introduction uses The Pink Thing as her full name.",
      ),
    ],
  },
  "the-big-bad": {
    summary: "The Big Bad runs the competition to choose his successor.",
    role: "Competition organiser",
    affiliation: "His lair and Bone Drones",
    sections: [
      fact(
        "overview",
        "Overview",
        "The Big Bad organises the competition at the centre of Calling All Villains. Announcing that he is dying, he invites villains to train and compete to become his successor.",
      ),
      stub("appearance", "Appearance", "Not yet described."),
      fact(
        "personality",
        "Personality",
        "He is cheerful and theatrical even when threatening people or judging the contestants harshly. He expects them to put on a show.",
      ),
      stub(
        "abilities",
        "Abilities",
        "The full extent of his powers is unknown. His claims about his past have not all been shown on screen.",
      ),
      stub("weapons", "Weapons", "A full weapon list hasn’t been added yet."),
      fact(
        "relationships",
        "Relationships",
        "The contestants compete for his approval. Bone Drones handle registration, assistance, and performance reporting around his competition.",
      ),
      fact(
        "story-and-appearances",
        "Story and appearances",
        "He sends the group to Origam-3 to steal the Sacred Scribbler, then assesses their performance and assigns them the Batch Z ranking.",
      ),
      stub("trivia", "Trivia", "No trivia has been added yet."),
    ],
  },
  dave: {
    summary:
      "One of the original six contestants assigned to Puzzles’ group in the pilot.",
    role: "Villain contestant",
    affiliation: "Puzzles’ original trainee group",
    sections: [
      fact(
        "overview",
        "Overview",
        "Dave is introduced as one of the six villains assigned to Puzzles’ group at The Big Bad’s lair.",
      ),
      stub("appearance", "Appearance", "Not yet described."),
      stub(
        "personality",
        "Personality",
        "His brief appearance gives little background about him.",
      ),
      stub("abilities", "Abilities", "Unknown."),
      stub("weapons", "Weapons", "No weapon has been identified."),
      fact(
        "relationships",
        "Relationships",
        "Dave initially shares a group with Puzzles, WPNZ, Lady Killer, Lord General, and The Pink Thing.",
      ),
      fact(
        "story-and-appearances",
        "Story and appearances",
        "He is introduced in the dorm sequence. By the first mission briefing, The Big Bad refers to the group as being one Dave short.",
      ),
      stub("trivia", "Trivia", "No trivia has been added yet."),
    ],
  },
};
