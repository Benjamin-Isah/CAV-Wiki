import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { ArticleRow, CharacterCard } from "../components/Common";
import { SearchForm } from "../components/Search";
import { usePageTitle } from "../lib/use-page-title";
import { articlePath, wiki } from "../lib/wiki";
import { ArticleArtwork } from "../components/Artwork";
import { StoryLinks } from "../components/WikiFeatures";

export function HomePage() {
  usePageTitle("Calling All Villains Wiki");
  const pilot = wiki.byId("pilot")!;
  const ladyKiller = wiki.byId("lady-killer")!;
  const cast = [
    "mr-puzzles",
    "wpnz",
    "lady-killer",
    "lord-general",
    "the-pink-thing",
    "the-big-bad",
  ];
  return (
    <div className="page-width front-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-copy">
          <p className="eyebrow">
            <span className="live-dot" /> AN INDEPENDENT FAN ENCYCLOPEDIA
          </p>
          <h1 id="home-title">
            Calling all
            <br />
            <span>villain fans.</span>
          </h1>
          <p className="hero-description">
            A fan wiki for <em>Calling All Villains</em> by ZAMination.
            <br className="desktop-break" /> Start with the pilot, or look up
            your favourite character.
          </p>
          <SearchForm placeholder="Search characters, episodes, and lore…" />
          <div className="hero-start-links">
            <span>QUICK LINKS</span>
            <Link to="/lore/batch-z">Batch Z</Link>
            <Link to="/characters/mr-puzzles">Mr. Puzzles</Link>
            <Link to="/about">
              About the wiki <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
        <div className="home-hero-feature">
          <div className="hero-release-line">
            <span className="small-label">PILOT EPISODE GUIDE</span>
            <span>01 / PILOT</span>
          </div>
          <Link
            className="hero-pilot-image"
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
          <Link className="hero-feature-caption" to={articlePath(pilot)}>
            <div>
              <span className="small-label">ZAMINATION · 31 OCTOBER 2026</span>
              <h2>The Pilot</h2>
            </div>
            <span className="round-arrow">
              <ArrowUpRight size={22} />
            </span>
          </Link>
        </div>
      </section>
      <section className="home-cast" aria-labelledby="character-index-title">
        <div className="editorial-section-title">
          <div>
            <span className="small-label">THE CHARACTERS</span>
            <h2 id="character-index-title">The main cast</h2>
          </div>
          <Link className="text-link" to="/characters">
            All {wiki.characters().length} characters <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="cast-strip">
          {cast.map((id) => (
            <CharacterCard key={id} article={wiki.byId(id)!} />
          ))}
        </div>
      </section>
      <div className="home-editorial-grid">
        <section className="home-mystery" aria-labelledby="mystery-title">
          <div className="mystery-copy">
            <span className="small-label">AFTER THE CREDITS</span>
            <h2 id="mystery-title">
              Lady Killer
              <br />
              <span>and James (9512)</span>
            </h2>
            <p>
              Lady Killer disables a Bone Drone named James (9512) and appears
              to examine him after the credits. We don’t know why yet.
            </p>
            <p className="mystery-source">
              This account comes from a contributor’s scene notes. The exact
              timestamp still needs checking.
            </p>
            <Link
              className="text-link"
              to="/weapons-and-abilities/post-credits-encounter"
            >
              Read about the scene <ArrowRight size={16} />
            </Link>
          </div>
          <Link
            className="mystery-art"
            to={articlePath(ladyKiller)}
            aria-label="Read about Lady Killer"
          >
            <ArticleArtwork
              artwork={ladyKiller.artwork}
              articleId={ladyKiller.id}
              title={ladyKiller.title}
              label={false}
            />
          </Link>
        </section>
        <section className="home-updates" aria-labelledby="wiki-updates-title">
          <div className="editorial-section-title">
            <div>
              <span className="small-label">ON THE WIKI</span>
              <h2 id="wiki-updates-title">Recently updated</h2>
            </div>
          </div>
          <div className="recent-articles">
            {[
              "reaper-villain",
              "mechanical-reptile-villain",
              "crowned-cat-villain",
            ].map((id) => (
              <ArticleRow key={id} article={wiki.byId(id)!} showDate />
            ))}
          </div>
          <Link className="text-link" to="/needs-completion">
            Pages needing work <ArrowUpRight size={15} />
          </Link>
        </section>
      </div>
      <section
        className="supporting-spotlight"
        aria-labelledby="supporting-title"
      >
        <div className="editorial-section-title">
          <div>
            <span className="small-label">SUPPORTING CAST</span>
            <h2 id="supporting-title">Other characters</h2>
          </div>
          <Link className="text-link" to="/characters">
            The full character directory <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="supporting-cast-grid">
          {[
            "paper-king",
            "reaper-villain",
            "crowned-cat-villain",
            "mechanical-reptile-villain",
          ].map((id) => (
            <CharacterCard key={id} article={wiki.byId(id)!} />
          ))}
        </div>
      </section>
      <section
        className="front-story-trails"
        aria-labelledby="story-trails-title"
      >
        <div className="editorial-section-title">
          <div>
            <span className="small-label">LORE & LOCATIONS</span>
            <h2 id="story-trails-title">More from the pilot</h2>
          </div>
          <Link className="text-link" to="/lore">
            All lore articles <ArrowUpRight size={16} />
          </Link>
        </div>
        <StoryLinks />
      </section>
      <div className="community-margin">
        <span className="community-margin-index" aria-hidden="true">
          +
        </span>
        <div>
          <span className="small-label">HELP WITH THE WIKI</span>
          <h2>Found something we missed?</h2>
          <p>
            Keep a link and timestamp for anything you think belongs on a page.
          </p>
        </div>
        <Link className="button button-outline" to="/community">
          How to contribute <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
