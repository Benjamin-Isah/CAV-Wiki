import { useState, type CSSProperties } from "react";
import { imageAssets } from "../data/images";
import { getCharacterVisual } from "../data/character-visuals";
import type { Artwork } from "../types/wiki";

/** Local still images only. Video players belong to the article's media section. */
export function ArticleArtwork({
  artwork,
  articleId,
  title,
  className = "",
  label = true,
  priority = false,
}: {
  artwork: Artwork;
  articleId?: string;
  title?: string;
  className?: string;
  label?: boolean;
  priority?: boolean;
}) {
  const profile = articleId ? getCharacterVisual(articleId) : undefined;
  const imageId =
    artwork.imageId ??
    (profile?.status === "approved" || profile?.status === "selected"
      ? profile.portraitAssetId
      : undefined);
  const asset = imageId ? imageAssets[imageId] : undefined;
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const hasImage = asset && asset.src !== failedSrc;
  const displayName = title ?? artwork.initials;
  return (
    <div
      className={`article-art treatment-${profile?.treatment ?? "neutral"} ${profile ? "is-character" : "is-record"} ${hasImage ? "has-portrait" : "is-nameplate"} image-${asset?.framing ?? "portrait"} ${className}`}
      style={
        { "--art-accent": profile?.accent ?? artwork.accent } as CSSProperties
      }
    >
      {hasImage ? (
        <>
          <img
            src={asset.src}
            alt={asset.alt}
            width={asset.width}
            height={asset.height}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={priority ? "high" : "auto"}
            style={{ objectFit: "contain" }}
            onError={() => setFailedSrc(asset.src)}
          />
          {label && (
            <span className="portrait-credit">
              Calling All Villains · ZAMination
            </span>
          )}
        </>
      ) : (
        <>
          <span className="nameplate-index" aria-hidden="true">
            {artwork.serial}
          </span>
          <span className="nameplate-name" aria-hidden="true">
            {displayName}
          </span>
          {label && (
            <span className="portrait-pending">
              {profile ? "Portrait coming soon" : "Image coming soon"}
            </span>
          )}
        </>
      )}
    </div>
  );
}
