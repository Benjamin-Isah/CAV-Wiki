import { ArrowUpRight, ChevronDown } from "lucide-react";
import { mediaCatalogue } from "../data/media-catalogue";
import { mediaTexts } from "../data/media-texts";
import { formatDate } from "../lib/wiki";
import type { MediaKind } from "../types/media-text";

const kindLabels: Record<MediaKind, string> = {
  episode: "Episode",
  song: "Song",
  trailer: "Trailer",
  teaser: "Teaser",
  introduction: "Character promo",
};

export function MediaGuide({ ids }: { ids: readonly string[] }) {
  const records = ids.flatMap((id) => {
    const record = mediaCatalogue.find((item) => item.id === id);
    return record ? [record] : [];
  });
  return (
    <div className="media-guide">
      <p className="media-guide-intro">
        Official uploads and short wiki summaries. Each entry shows whether
        transcript text or lyrics have been added. You can use captions on the
        original videos where available.
      </p>
      <div className="media-source-list">
        {records.map((record) => {
          const text = mediaTexts.find((item) => item.mediaId === record.id);
          const sourceUrl = new URL(record.source.sourceUrl);
          if (record.segment?.startSeconds !== undefined)
            sourceUrl.searchParams.set(
              "t",
              String(record.segment.startSeconds),
            );
          return (
            <details
              className="media-source"
              id={`media-${record.id}`}
              key={record.id}
            >
              <summary>
                <span className="media-source-title">
                  <span className="small-label">{kindLabels[record.kind]}</span>
                  <strong>{record.title}</strong>
                </span>
                <span className="media-text-status">
                  {text
                    ? "Text available"
                    : record.kind === "song"
                      ? "Lyrics not added"
                      : "Transcript not added"}
                </span>
                <ChevronDown size={16} aria-hidden="true" />
              </summary>
              <div className="media-source-body">
                <p>{record.summary}</p>
                {record.sourceNote && (
                  <p className="media-source-note">{record.sourceNote}</p>
                )}
                {record.segment && (
                  <dl className="media-segment-facts">
                    <div>
                      <dt>Official song title</dt>
                      <dd>{record.segment.officialTitle ?? "Unconfirmed"}</dd>
                    </div>
                    <div>
                      <dt>Timestamp</dt>
                      <dd>
                        {record.segment.startSeconds === undefined
                          ? "Not yet checked"
                          : formatTimestamp(record.segment.startSeconds)}
                      </dd>
                    </div>
                  </dl>
                )}
                <a
                  className="text-link"
                  href={sourceUrl.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {record.kind === "song"
                    ? "Open the pilot on YouTube"
                    : "Watch the official upload"}
                  <ArrowUpRight size={14} />
                </a>
                <p className="media-upload-credit">
                  {record.source.title} · {record.source.credit}
                  <br />
                  Upload details checked{" "}
                  <time dateTime={record.source.verifiedAt}>
                    {formatDate(record.source.verifiedAt)}
                  </time>
                  .
                </p>
                {text && (
                  <section
                    className="media-transcript"
                    aria-label={`${record.title} ${text.kind}`}
                  >
                    <h3>{text.kind === "lyrics" ? "Lyrics" : "Transcript"}</h3>
                    <p className="media-source-note">
                      {text.language} · {text.provenance.description}
                    </p>
                    <ol>
                      {text.lines.map((line) => (
                        <li key={line.id} id={`text-${record.id}-${line.id}`}>
                          {line.startSeconds !== undefined && (
                            <span className="transcript-time">
                              {formatTimestamp(line.startSeconds)}
                            </span>
                          )}
                          <p>
                            {line.speaker && <strong>{line.speaker}: </strong>}
                            {line.text}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </section>
                )}
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}

function formatTimestamp(seconds: number) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}
