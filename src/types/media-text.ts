import type { OfficialMedia } from "../data/official-media";

export type MediaKind =
  "episode" | "song" | "trailer" | "teaser" | "introduction";

export interface MediaRecord {
  id: string;
  title: string;
  kind: MediaKind;
  source: OfficialMedia;
  summary: string;
  /** Metadata verification does not imply that the video's dialogue was reviewed. */
  sourceNote?: string;
  segment?: {
    identification: "contributor-note" | "verified";
    officialTitle?: string;
    startSeconds?: number;
    endSeconds?: number;
  };
}

/** Only add text actually supplied for the project or covered by recorded permission.
 * A link to a video, captions endpoint, or online transcript is not supplied text. */
export interface MediaText {
  mediaId: string;
  kind: "transcript" | "lyrics";
  language: string;
  provenance: {
    basis: "supplied-text" | "recorded-permission";
    description: string;
    permissionReference?: string;
  };
  lines: readonly {
    id: string;
    text: string;
    speaker?: string;
    startSeconds?: number;
  }[];
}
