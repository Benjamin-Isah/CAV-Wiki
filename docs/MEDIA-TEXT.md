# Pilot, song, and promotional-video guide

The pilot article now has a **Videos, song & trailers** section at `/episodes/pilot#media-guide`. The episode hub and navigation menu link to it. Existing article routes and still-image directories are unchanged; video players remain in article galleries.

The guide has 12 entries covering 11 distinct creator uploads: the pilot, a separately marked song segment within that pilot, three trailers, the Incoming Broadcast teaser, the group Meet the Villains promo, and five character introductions. The song entry comes from the owner's identification of a song inside the pilot. Its official title, performer credits, and exact timestamp remain unconfirmed. No invented song name, lyrics, or scene timing has been added.

## Sources

Title and channel metadata for the following uploads was checked against YouTube's official oEmbed endpoint on 1 November 2026. Each returned ZAMination and `https://www.youtube.com/@ZAMinationProductions` as the author. Checking upload metadata is not a review of all dialogue or scenes.

| Entry                | Official source                                                                            |
| -------------------- | ------------------------------------------------------------------------------------------ |
| Pilot / song source  | [Calling All Villains - Pilot](https://www.youtube.com/watch?v=3AFJtcP2cp0)                |
| Announcement trailer | [Calling All Villains - Announcement Trailer](https://www.youtube.com/watch?v=hIZlkMJ6H0w) |
| Trailer #2           | [Calling All Villains - Trailer #2](https://www.youtube.com/watch?v=6AFrjp_-ODA)           |
| Official trailer     | [Calling All Villains - Official Trailer](https://www.youtube.com/watch?v=3lEUqM5ondI)     |
| Teaser               | [INCOMING BROADCAST...](https://www.youtube.com/watch?v=VAGphRcl9wc)                       |
| Group promo          | [MEET THE VILLAINS - Calling All Villains](https://www.youtube.com/watch?v=IoUxPuoB1XE)    |

Individual introductions reuse the five source records already in `src/data/official-media.ts`. Short descriptions are original wiki text. The announcement description is summarized from the creator's published announcement; unreviewed trailers are marked as needing a detailed scene summary. No full transcripts, caption files, or song lyrics have been retrieved or bundled.

## Files

- `src/data/media-catalogue.ts`: source links, short descriptions, media kinds, and the unconfirmed song segment.
- `src/types/media-text.ts`: typed media records and supplied/permission-recorded text, including optional speakers and timestamps.
- `src/data/media-texts.ts`: empty until actual text and its provenance are supplied. A video URL is not supplied transcript text.
- `src/components/MediaGuide.tsx`: native keyboard-accessible disclosure rows, external source links, availability labels, and a renderer for text when supplied.
- `src/data/articles.ts`: attaches media IDs to the pilot through the shared article model.
- `src/lib/wiki.ts`: searches media titles, descriptions, and any supplied text through the parent article.
- `scripts/check-data.mjs`: validates media IDs, source URLs, article references, timestamps, and text provenance; empty text records cannot claim that a transcript is available.

To add text later, provide the actual text with its provenance and record it in `media-texts.ts`. Keep speakers and timestamps unknown unless they are supplied or checked. Text is rendered as React text, never raw HTML. Keep private permission correspondence out of the public bundle; record only a suitable evidence reference.

The full-text request was not fulfilled: only official links, original summaries, availability information, and the text-rendering structure were added. No publication or deployment was performed.

## Verification

Strict TypeScript, the expanded data checker (30 articles, 12 media records, zero supplied text records), and the production build passed. Browser checks passed for 24 page/viewport combinations, plus expanded-guide checks at 320, 390, 768, and 1440 pixels. Keyboard disclosure controls, the episode-guide link, mobile navigation, source URLs, song uncertainty, and media search were checked. No horizontal overflow or application exceptions were found. Screenshots and the check script are in `output/media-guide/`.
