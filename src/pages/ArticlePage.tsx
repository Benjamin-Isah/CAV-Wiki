import { useState, type CSSProperties } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Clock3,
  ImageOff,
  Info,
  List,
  ShieldCheck,
} from "lucide-react";
import { Link, useParams } from "react-router";
import { ArticleArtwork } from "../components/Artwork";
import { ArticleRow, Breadcrumbs, StatusBadge } from "../components/Common";
import { usePageTitle } from "../lib/use-page-title";
import { imageAssets } from "../data/images";
import { getCharacterVisual } from "../data/character-visuals";
import { getOfficialMedia } from "../data/official-media";
import { OfficialVideo } from "../components/OfficialVideo";
import { MediaGuide } from "../components/MediaGuide";
import { categoryPaths, formatDate, wiki } from "../lib/wiki";
import type {
  ArticleCategory,
  ArticleSection,
  ImageAsset,
  WikiArticle,
} from "../types/wiki";
import { NotFoundPage } from "./InfoPages";

export function ArticlePage({ category }: { category: ArticleCategory }) {
  const { slug } = useParams();
  const article = wiki.bySlug(category, slug ?? "");
  return article ? (
    <ArticleReader key={article.id} article={article} />
  ) : (
    <NotFoundPage />
  );
}

function ArticleReader({ article }: { article: WikiArticle }) {
  usePageTitle(article.title);
  const sections = article.sections.filter(
    (section) => section.kind !== "theory",
  );
  const theories = article.sections.filter(
    (section) => section.kind === "theory",
  );
  const toc = [
    ...sections.map(({ id, title }) => ({ id, title })),
    { id: "gallery", title: "Gallery" },
    ...(article.mediaIds?.length
      ? [{ id: "media-guide", title: "Videos & transcripts" }]
      : []),
    ...theories.map(({ id, title }) => ({ id, title })),
    { id: "references", title: "References" },
  ];
  const related = article.relatedIds
    .map((id) => wiki.byId(id))
    .filter((a): a is WikiArticle => Boolean(a));
  const hasObservation = article.sources.some(
    (source) => source.type === "project-observation",
  );
  const visual = getCharacterVisual(article.id);
  const media = getOfficialMedia(article.id);
  return (
    <div
      className={`page-width interior-page article-page ${article.category === "Episodes" ? "episode-article" : ""} character-${article.id} treatment-${visual?.treatment ?? "neutral"}`}
      style={
        { "--character-accent": visual?.accent ?? "#ab94c7" } as CSSProperties
      }
    >
      <Breadcrumbs
        items={[
          { label: article.category, to: categoryPaths[article.category] },
          { label: article.title },
        ]}
      />
      <div className="article-page-tools">
        <span>
          {article.category === "Characters"
            ? "Character article"
            : article.category === "Episodes"
              ? "Episode article"
              : "Wiki article"}
        </span>
        <nav aria-label="Article tools">
          <a href="#overview" className="selected">
            Read
          </a>
          <a href="#article-contents">Contents</a>
          <a href="#references">Sources</a>
        </nav>
      </div>
      <header className="article-heading">
        <p className="eyebrow">{article.eyebrow}</p>
        <h1>{article.title}</h1>
        <p className="article-deck">{article.summary}</p>
        <div className="article-meta">
          <StatusBadge status={article.status} />
          <span>
            <Clock3 size={13} />
            Updated{" "}
            <time dateTime={article.updatedAt}>
              {formatDate(article.updatedAt)}
            </time>
          </span>
          <Link to="/community">
            Contribution guide
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </header>
      <div className="article-grid">
        <aside className="article-toc" id="article-contents">
          <div className="toc-sticky">
            <span className="small-label">
              <List size={14} />
              Contents
            </span>
            <nav aria-label="Article contents">
              {toc.map((item, index) => (
                <a key={item.id} href={`#${item.id}`}>
                  <span>{(index + 1).toString().padStart(2, "0")}</span>
                  {item.title}
                </a>
              ))}
            </nav>
            <Link className="toc-help" to="/needs-completion">
              <BookOpen size={17} />
              <span>
                This article is unfinished.
                <br />
                See other pages needing work.
                <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </aside>
        <article className="article-body">
          {hasObservation && (
            <div className="provenance-note">
              <Info size={17} />
              <p>
                <strong>Source note:</strong> The account of James (9512) comes
                from a contributor’s notes on the post-credits scene. The exact
                timestamp still needs checking.{" "}
                <a href="#references">See source notes.</a>
              </p>
            </div>
          )}
          {sections.map((section) => (
            <ContentSection
              key={section.id}
              section={section}
              article={article}
            />
          ))}
          <section className="content-section" id="gallery">
            <div className="content-section-heading">
              <h2>Gallery</h2>
              <span className="section-kind kind-editorial">
                IMAGES & VIDEO
              </span>
            </div>
            {media && (
              <OfficialVideo
                media={media}
                poster={imageAssets[article.artwork.imageId ?? ""]}
              />
            )}
            {article.gallery.length ? (
              <div className="gallery-grid">
                {article.gallery.map((id) =>
                  imageAssets[id] ? (
                    <ImageFigure
                      key={id}
                      asset={imageAssets[id]}
                      caption={
                        id === article.artwork.imageId
                          ? article.artwork.caption
                          : undefined
                      }
                    />
                  ) : null,
                )}
              </div>
            ) : !media ? (
              <div className="gallery-empty">
                <ImageOff size={25} strokeWidth={1.3} />
                <div>
                  <h3>No gallery images yet.</h3>
                  <p>
                    Have an image we can use? Check the contribution guide for
                    credit and permission details.
                  </p>
                </div>
              </div>
            ) : null}
          </section>
          {Boolean(article.mediaIds?.length) && (
            <section className="content-section" id="media-guide">
              <div className="content-section-heading">
                <h2>Videos, song & trailers</h2>
                <span className="section-kind kind-editorial">MEDIA GUIDE</span>
              </div>
              <MediaGuide ids={article.mediaIds!} />
            </section>
          )}
          {theories.map((section) => (
            <ContentSection
              key={section.id}
              section={section}
              article={article}
            />
          ))}
          <section
            className="content-section references-section"
            id="references"
          >
            <div className="content-section-heading">
              <h2>References</h2>
              <span className="section-kind kind-editorial">SOURCES</span>
            </div>
            <ol className="source-list">
              {article.sources.map((source, index) => (
                <li id={`source-${source.id}`} key={source.id}>
                  <span className="source-number">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <div>
                    <span className="small-label">
                      {source.type === "primary"
                        ? "OFFICIAL SOURCE"
                        : source.type === "community-reference"
                          ? "COMMUNITY REFERENCE"
                          : "CONTRIBUTOR SCENE NOTE"}
                    </span>
                    {source.url ? (
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {source.title}
                        <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <strong>{source.title}</strong>
                    )}
                    <span className="source-publisher">
                      {source.publisher}
                      {source.locator && ` · ${source.locator}`}
                    </span>
                    {source.note && <p>{source.note}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </section>
          {article.status !== "Complete" && (
            <div className="to-be-continued">
              <span />{" "}
              <div>
                <p>To Be Continued...</p>
                <span>This article needs more information or sources.</span>
              </div>
              <Link to="/community" aria-label="Read how to contribute">
                <ArrowRight size={19} />
              </Link>
            </div>
          )}
        </article>
        <aside className="article-infobox">
          <ArticleArtwork
            artwork={article.artwork}
            articleId={article.id}
            title={article.title}
            priority
          />
          {article.artwork.caption && (
            <p className="infobox-image-caption">{article.artwork.caption}</p>
          )}
          <div className="infobox-title">
            <span className="small-label">
              {article.category === "Characters"
                ? "CHARACTER"
                : article.category.toUpperCase()}
            </span>
            <h2>{article.title}</h2>
          </div>
          <dl>
            {article.infobox.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd className={fact.value === "Unknown" ? "unknown-value" : ""}>
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="infobox-article-status">
            <span>Article status</span>
            <StatusBadge status={article.status} />
          </div>
          <div className="infobox-policy">
            <ShieldCheck size={17} />
            <p>
              Questions about a source?
              <br />
              <Link to="/about#content-policy">
                Read the source guidelines
                <ArrowUpRight size={12} />
              </Link>
            </p>
          </div>
        </aside>
      </div>
      {related.length > 0 && (
        <section className="related-section">
          <p className="eyebrow">See also</p>
          <h2>Related articles</h2>
          <div className="related-grid">
            {related.map((item) => (
              <ArticleRow key={item.id} article={item} />
            ))}
          </div>
        </section>
      )}
      <Link
        className="text-link back-to-directory"
        to={categoryPaths[article.category]}
      >
        Back to {article.category.toLowerCase()}
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}

function ContentSection({
  section,
  article,
}: {
  section: ArticleSection;
  article: WikiArticle;
}) {
  const labels = {
    confirmed: "FROM THE SHOW",
    editorial: "WIKI NOTE",
    interpretation: "INTERPRETATION · NOT CANON",
    theory: "FAN THEORY · NOT CANON",
    unknown: "STUB",
  };
  return (
    <section
      className={`content-section ${section.kind === "theory" ? "theory-section" : ""} ${article.category === "Episodes" ? "episode-section" : ""}`}
      id={section.id}
      data-evidence={section.kind}
    >
      <div className="content-section-heading">
        <h2>{section.title}</h2>
        <span className={`section-kind kind-${section.kind}`}>
          {labels[section.kind]}
        </span>
      </div>
      {section.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {section.points && (
        <ul>
          {section.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
      {Boolean(section.sourceIds?.length) && (
        <div className="section-citations">
          SOURCE{section.sourceIds!.length > 1 ? "S" : ""}
          {section.sourceIds!.map((id) => (
            <a
              key={id}
              href={`#source-${id}`}
              aria-label={`Read source ${article.sources.findIndex((source) => source.id === id) + 1}`}
            >
              [{article.sources.findIndex((source) => source.id === id) + 1}]
            </a>
          ))}
        </div>
      )}
    </section>
  );
}

function ImageFigure({
  asset,
  caption,
}: {
  asset: ImageAsset;
  caption?: string;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <figure>
      {failed ? (
        <div className="gallery-empty">
          <ImageOff />
          <p>This image is unavailable.</p>
        </div>
      ) : (
        <img
          src={asset.src}
          alt={asset.alt}
          width={asset.width}
          height={asset.height}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
      <figcaption>
        {caption && <span className="image-description">{caption}</span>}
        {asset.credit} ·{" "}
        <a href={asset.sourceUrl} target="_blank" rel="noopener noreferrer">
          Image source
        </a>
      </figcaption>
    </figure>
  );
}
