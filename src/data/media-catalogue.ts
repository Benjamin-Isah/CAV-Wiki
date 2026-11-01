import { officialMedia, type OfficialMedia } from "./official-media.ts";
import type { MediaRecord } from "../types/media-text";

/** Title and channel verified through YouTube oEmbed on 1 November 2026.
 * This registry contains links and original summaries, not copied captions. */
const promotion = (
  id: string,
  videoId: string,
  title: string,
): OfficialMedia => ({
  id,
  videoId,
  title,
  credit: "ZAMination",
  sourceUrl: `https://www.youtube.com/watch?v=${videoId}`,
  verifiedAt: "2026-11-01",
});

const introductionNotes: Readonly<Record<string, string>> = {
  "mr-puzzles":
    "Puzzles’ official character introduction, showing his television head and showman’s outfit.",
  wpnz: "WPNZ’s official introduction, showing his mechanical body and arm-mounted gun.",
  "the-pink-thing":
    "The Pink Thing’s official introduction, showing her pink glasses, long ears, and book.",
  "lord-general":
    "Lord General’s official introduction, showing his armour, spikes, chains, and cape.",
  "lady-killer":
    "Lady Killer’s official introduction, showing her green outfit, red lenses, and curved sword.",
};

export const mediaCatalogue: readonly MediaRecord[] = [
  {
    id: "pilot",
    title: "The pilot",
    kind: "episode",
    source: officialMedia.pilot,
    summary:
      "Mr. Puzzles enters The Big Bad’s competition and joins the team sent to steal the Sacred Scribbler from Origam-3. Their mission ends with the Batch Z ranking.",
    sourceNote:
      "The episode article has the full plot summary and scene guide. Post-credits details are attributed separately in its references.",
  },
  {
    id: "pilot-song",
    title: "Song in the pilot",
    kind: "song",
    source: officialMedia.pilot,
    summary:
      "This entry refers to the song within the pilot. Its official title, credits, and exact timestamp have not been confirmed for this wiki.",
    sourceNote:
      "Contributor note. This is a descriptive label, not a confirmed song title. A song summary can be added once the scene has been identified.",
    segment: { identification: "contributor-note" },
  },
  {
    id: "announcement-trailer",
    title: "Announcement trailer",
    kind: "trailer",
    source: promotion(
      "announcement-trailer",
      "hIZlkMJ6H0w",
      "Calling All Villains - Announcement Trailer",
    ),
    summary:
      "ZAMination announces Calling All Villains, with Mr. Puzzles returning from SMG4. The accompanying description presents the series as a new starting point rather than a direct continuation of SMG4.",
    sourceNote:
      "Summary of the creator’s announcement description; not a scene-by-scene trailer breakdown.",
  },
  {
    id: "trailer-2",
    title: "Trailer #2",
    kind: "trailer",
    source: promotion(
      "trailer-2",
      "6AFrjp_-ODA",
      "Calling All Villains - Trailer #2",
    ),
    summary:
      "The second numbered Calling All Villains trailer on ZAMination’s channel.",
    sourceNote:
      "The upload’s title and channel have been verified. A detailed scene summary has not been added.",
  },
  {
    id: "official-trailer",
    title: "Official trailer",
    kind: "trailer",
    source: promotion(
      "official-trailer",
      "3lEUqM5ondI",
      "Calling All Villains - Official Trailer",
    ),
    summary:
      "The upload titled Calling All Villains - Official Trailer on ZAMination’s channel, promoting the pilot.",
    sourceNote:
      "The upload’s title and channel have been verified. A detailed scene summary has not been added.",
  },
  {
    id: "incoming-broadcast",
    title: "Incoming Broadcast",
    kind: "teaser",
    source: promotion(
      "incoming-broadcast",
      "VAGphRcl9wc",
      "INCOMING BROADCAST...",
    ),
    summary: "A teaser upload from ZAMination’s official channel.",
    sourceNote:
      "The upload’s title and channel have been verified. No additional scene details are recorded here yet.",
  },
  {
    id: "meet-the-villains",
    title: "Meet the Villains",
    kind: "introduction",
    source: promotion(
      "meet-the-villains",
      "IoUxPuoB1XE",
      "MEET THE VILLAINS - Calling All Villains",
    ),
    summary:
      "The group promotional upload titled Meet the Villains on ZAMination’s channel.",
    sourceNote:
      "The upload’s title and channel have been verified. A detailed scene summary has not been added.",
  },
  ...Object.entries(introductionNotes).map(([id, summary]): MediaRecord => ({
    id: `intro-${id}`,
    title: officialMedia[id].title,
    kind: "introduction",
    source: officialMedia[id],
    summary,
  })),
];

export const pilotMediaIds = mediaCatalogue.map((record) => record.id);
