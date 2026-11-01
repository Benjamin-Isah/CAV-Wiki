import { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import type { OfficialMedia } from "../data/official-media";
import type { ImageAsset } from "../types/wiki";

/** A local preview loads the original player on request. The actual player
 * retains YouTube's branding, controls, and a 200 × 200 minimum viewport. */
export function OfficialVideo({
  media,
  poster,
}: {
  media: OfficialMedia;
  poster?: ImageAsset;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <figure className="official-video">
      <div className="official-video-player">
        {loaded ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${media.videoId}?autoplay=0&rel=0&playsinline=1`}
            title={media.title}
            width="560"
            height="315"
            ref={(frame) => {
              frame?.focus({ preventScroll: true });
            }}
            allow="encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            className={`video-preview ${poster?.framing === "thumbnail" ? "has-thumbnail" : "has-portrait"}`}
            aria-label={`Load official video: ${media.title}`}
            onClick={() => setLoaded(true)}
          >
            {poster && (
              <img
                src={poster.src}
                alt={poster.alt}
                width={poster.width}
                height={poster.height}
                loading="lazy"
                decoding="async"
              />
            )}
            <span className="video-preview-copy">
              <span className="video-play-icon">
                <Play size={21} aria-hidden="true" />
              </span>
              <span>
                <span className="small-label">ZAMination · Official video</span>
                <strong>{media.title}</strong>
                <span className="video-load-label">Load video player</span>
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption>
        <span>Official video · {media.credit}</span>
        <a href={media.sourceUrl} target="_blank" rel="noopener noreferrer">
          Watch on YouTube <ArrowUpRight size={12} />
        </a>
      </figcaption>
    </figure>
  );
}
