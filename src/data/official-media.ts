/** Creator-hosted players, kept separate from licenses for downloaded artwork.
 * YouTube's oEmbed endpoint returned each title, channel and embed on 2026-11-01.
 * Players embed the original uploads. The requested pilot thumbnail has a
 * separate source/rights record in images.ts. */
export interface OfficialMedia {
  id: string;
  videoId: string;
  title: string;
  credit: string;
  sourceUrl: string;
  verifiedAt: string;
}

const video = (id: string, videoId: string, title: string): OfficialMedia => ({
  id,
  videoId,
  title,
  credit: "ZAMination",
  verifiedAt: "2026-11-01",
  sourceUrl: `https://www.youtube.com/watch?v=${videoId}`,
});

export const officialMedia: Readonly<Record<string, OfficialMedia>> = {
  "lady-killer": video(
    "lady-killer",
    "bY_ZNIuuWEQ",
    "Meet Lady Killer — Calling All Villains",
  ),
  "mr-puzzles": video(
    "mr-puzzles",
    "tu3bKFKI8yM",
    "Meet Mr. Puzzles — Calling All Villains",
  ),
  "lord-general": video(
    "lord-general",
    "V7wfpNonUIs",
    "Meet Lord General — Calling All Villains",
  ),
  wpnz: video("wpnz", "LAwhIJ9_CCk", "Meet WPNZ — Calling All Villains"),
  "the-pink-thing": video(
    "the-pink-thing",
    "4ZIMmId9Wuo",
    "Meet The Pink Thing — Calling All Villains",
  ),
  pilot: video("pilot", "3AFJtcP2cp0", "Calling All Villains — Pilot"),
};

export function getOfficialMedia(id: string): OfficialMedia | undefined {
  return Object.hasOwn(officialMedia, id) ? officialMedia[id] : undefined;
}
