import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { Breadcrumbs, StatusBadge } from "../components/Common";
import { CharacterMiniLink, StoryLinks } from "../components/WikiFeatures";
import { ArticleArtwork } from "../components/Artwork";
import { usePageTitle } from "../lib/use-page-title";
import { articlePath, wiki } from "../lib/wiki";

const chapters = [
  {
    title: "The invitation",
    text: "Puzzles answers The Big Bad’s call after a string of failed careers.",
    section: "plot-summary",
  },
  {
    title: "Meet the competition",
    text: "Registration, new teammates, and a reunion with WPNZ.",
    section: "character-appearances",
  },
  {
    title: "The first assignment",
    text: "A trip to Origam-3 to steal the Sacred Scribbler.",
    section: "scene-breakdown",
  },
  {
    title: "Puzzles meets the king",
    text: "Puzzles gets closer to the king as the team creates a distraction.",
    section: "scene-breakdown",
  },
  {
    title: "The Batch Z ranking",
    text: "The team finishes the mission, but The Big Bad gives them the Batch Z ranking.",
    section: "important-events",
  },
  {
    title: "Lady Killer and James",
    text: "After the credits, Lady Killer finds James (9512). Her motive is unknown.",
    section: "post-credits",
  },
];

export function EpisodeHub() {
  usePageTitle("Episodes");
  const pilot = wiki.byId("pilot")!;
  return (
    <div className="page-width interior-page episode-hub">
      <Breadcrumbs items={[{ label: "Episodes" }]} />
      <header className="directory-heading">
        <div>
          <p className="eyebrow">EPISODES</p>
          <h1>Episode guide</h1>
          <p>
            Episode summaries, scene guides, and cast lists. Watch the episode
            before reading if you want to avoid spoilers.
          </p>
        </div>
        <p className="spoiler-label">
          SPOILERS AHEAD
          <br />
          <span>Plot details throughout</span>
        </p>
      </header>
      <article className="pilot-feature">
        <Link
          className="pilot-feature-art"
          to={articlePath(pilot)}
          aria-label="Read the pilot episode guide"
        >
          <ArticleArtwork
            artwork={pilot.artwork}
            articleId={pilot.id}
            title={pilot.title}
            label={false}
            priority
          />
        </Link>
        <div className="pilot-feature-copy">
          <div className="pilot-topline">
            <span className="small-label">EPISODE 01</span>
            <StatusBadge status={pilot.status} />
          </div>
          <h2>The Pilot</h2>
          <p className="pilot-logline">
            Puzzles joins The Big Bad’s competition.
          </p>
          <p>
            {pilot.summary} The team is sent to Origam-3 to steal the Sacred
            Scribbler from its king.
          </p>
          <dl className="episode-facts">
            <div>
              <dt>Released</dt>
              <dd>31 October 2026</dd>
            </div>
            <div>
              <dt>Runtime</dt>
              <dd>About 30 minutes</dd>
            </div>
            <div>
              <dt>Created by</dt>
              <dd>ZAMination</dd>
            </div>
          </dl>
          <div className="episode-actions">
            <Link className="button button-primary" to={articlePath(pilot)}>
              Read the summary <ArrowRight size={16} />
            </Link>
            <a
              className="text-link"
              href={pilot.sources[0].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch on YouTube <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </article>
      <div className="episode-reading-layout">
        <Link className="episode-media-link" to="/episodes/pilot#media-guide">
          <span>
            <span className="small-label">VIDEOS & TEXT</span>
            <strong>Pilot, song & trailers</strong>
            <span>
              Official uploads, short summaries, and transcript availability.
            </span>
          </span>
          <ArrowRight size={20} />
        </Link>
        <section className="episode-chapters" aria-labelledby="chapters-title">
          <div className="editorial-section-title">
            <div>
              <span className="small-label">SCENE GUIDE</span>
              <h2 id="chapters-title">What happens in the pilot</h2>
            </div>
          </div>
          <ol>
            {chapters.map((chapter, index) => (
              <li key={chapter.title}>
                <Link to={`/episodes/pilot#${chapter.section}`}>
                  <span className="chapter-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{chapter.title}</h3>
                    <p>{chapter.text}</p>
                  </div>
                  <ArrowRight size={16} />
                </Link>
              </li>
            ))}
          </ol>
          <p className="chapter-note">
            These are our scene headings, not official chapter titles.
          </p>
        </section>
        <aside className="episode-cast" aria-labelledby="episode-cast-title">
          <span className="small-label">WHO’S WHO</span>
          <h2 id="episode-cast-title">In this episode</h2>
          <div>
            {[
              "mr-puzzles",
              "wpnz",
              "lady-killer",
              "lord-general",
              "the-pink-thing",
              "the-big-bad",
              "dave",
              "paper-king",
              "bone-drones",
            ].map((id) => (
              <CharacterMiniLink key={id} id={id} />
            ))}
          </div>
          <Link className="text-link" to="/characters">
            All {wiki.characters().length} characters <ArrowRight size={14} />
          </Link>
        </aside>
      </div>
      <section
        className="episode-connections"
        aria-labelledby="connections-title"
      >
        <div className="editorial-section-title">
          <div>
            <span className="small-label">RELATED PAGES</span>
            <h2 id="connections-title">Places, objects, and characters</h2>
          </div>
          <Link className="text-link" to="/lore">
            All lore <ArrowRight size={14} />
          </Link>
        </div>
        <StoryLinks />
      </section>
      <p className="archive-endnote">
        This wiki currently covers the pilot. More episode pages can be added
        after official releases.
      </p>
    </div>
  );
}
