import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import type { ArticleStatus, WikiArticle } from "../types/wiki";
import { articlePath, formatDate } from "../lib/wiki";
import { ArticleArtwork } from "./Artwork";

export function StatusBadge({ status }: { status: ArticleStatus }) {
  return (
    <span className={`status-badge status-${status.toLowerCase()}`}>
      <span />
      {status}
    </span>
  );
}
export function Breadcrumbs({
  items,
}: {
  items: { label: string; to?: string }[];
}) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`}>
          <ChevronRight size={12} />
          {item.to ? (
            <Link to={item.to}>{item.label}</Link>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
export function SectionHeading({
  number,
  eyebrow,
  title,
  to,
  linkText = "Explore all",
}: {
  number: string;
  eyebrow?: string;
  title: string;
  to?: string;
  linkText?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">
          <span className="section-number">{number}</span>
          {eyebrow ?? "From the archive"}
        </span>
        <h2>{title}</h2>
      </div>
      {to && (
        <Link className="text-link" to={to}>
          {linkText}
          <ArrowRight size={16} />
        </Link>
      )}
    </div>
  );
}
export function CharacterCard({ article }: { article: WikiArticle }) {
  return (
    <Link className="character-card" to={articlePath(article)}>
      <ArticleArtwork
        artwork={article.artwork}
        articleId={article.id}
        title={article.title}
      />
      <div className="character-card-caption">
        <div>
          <span className="small-label">
            {article.characterIndex?.role ?? "Character"}
          </span>
          <h3>{article.title}</h3>
          {article.characterIndex?.nameNote && (
            <span className="character-name-note">
              {article.id === "james-9512"
                ? "Shared design reference"
                : article.characterIndex.nameNote.startsWith("Descriptive")
                  ? "Official name unknown"
                  : "Community identification"}
            </span>
          )}
        </div>
        <ArrowRight className="card-arrow" size={15} />
      </div>
    </Link>
  );
}
export function ArticleRow({
  article,
  showDate = false,
}: {
  article: WikiArticle;
  showDate?: boolean;
}) {
  return (
    <Link className="article-row" to={articlePath(article)}>
      <ArticleArtwork
        artwork={article.artwork}
        articleId={article.id}
        title={article.title}
        label={false}
        className="row-thumbnail"
      />
      <div className="article-row-copy">
        <div className="row-meta">
          <span>{article.category}</span>
          <StatusBadge status={article.status} />
        </div>
        <h3>{article.title}</h3>
        <p>{showDate ? article.updateNote : article.summary}</p>
        {showDate && (
          <time dateTime={article.updatedAt}>
            {formatDate(article.updatedAt)}
          </time>
        )}
      </div>
      <ArrowRight className="row-arrow" size={19} />
    </Link>
  );
}
