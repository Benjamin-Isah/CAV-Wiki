import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ArticleArtwork } from "./Artwork";
import { articlePath, wiki } from "../lib/wiki";

export function CharacterMiniLink({ id }: { id: string }) {
  const article = wiki.byId(id)!;
  return (
    <Link className="character-mini" to={articlePath(article)}>
      <ArticleArtwork
        artwork={article.artwork}
        articleId={article.id}
        title={article.title}
        label={false}
      />
      <div>
        <strong>{article.title}</strong>
        <span>{article.characterIndex?.role}</span>
      </div>
      <ArrowRight size={14} />
    </Link>
  );
}

export function StoryLinks() {
  return (
    <div className="story-links">
      {[
        {
          id: "origam-3",
          label: "THE SETTING",
          title: "Origam-3",
          copy: "The paper planet visited during the team's first mission.",
          art: "paper-people",
        },
        {
          id: "sacred-scribbler",
          label: "THE OBJECTIVE",
          title: "The Sacred Scribbler",
          copy: "The pencil at the centre of the team's first assignment.",
          art: "paper-king",
        },
        {
          id: "james-9512",
          label: "AFTER THE CREDITS",
          title: "What happened to James?",
          copy: "The Bone Drone Lady Killer disables after the credits. Her motive is unknown.",
          art: "bone-drones",
        },
      ].map((item) => {
        const article = wiki.byId(item.id)!;
        const visual = wiki.byId(item.art)!;
        return (
          <Link className="story-link" to={articlePath(article)} key={item.id}>
            <ArticleArtwork
              artwork={visual.artwork}
              articleId={visual.id}
              title={visual.title}
              label={false}
            />
            <div>
              <span className="small-label">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </div>
            <ArrowRight size={17} />
          </Link>
        );
      })}
    </div>
  );
}
