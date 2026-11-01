import { useState } from "react";
import { ArrowRight, ListFilter, MapPin, Search } from "lucide-react";
import { Link } from "react-router";
import { ArticleRow, Breadcrumbs } from "../components/Common";
import { usePageTitle } from "../lib/use-page-title";
import { wiki } from "../lib/wiki";
import { CharacterDirectory } from "./CharacterDirectory";
import type { ArticleCategory, ArticleStatus } from "../types/wiki";
export { EpisodeHub as EpisodesPage } from "./EpisodeHub";

const directoryCopy = {
  Characters: {
    eyebrow: "The character index",
    title: "Characters",
    description:
      "Character profiles, appearances, and relationships from Calling All Villains.",
  },
  Episodes: {
    eyebrow: "The episode index",
    title: "Episodes",
    description:
      "Episode summaries, scene guides, and links to the original uploads.",
  },
  Lore: {
    eyebrow: "Lore articles",
    title: "Lore",
    description:
      "Articles about Batch Z, the Bone Drones, and other details from the show.",
  },
  Locations: {
    eyebrow: "The location index",
    title: "Locations",
    description:
      "Explore the planets and places visited in Calling All Villains.",
  },
  "Weapons & Abilities": {
    eyebrow: "Weapons and objects",
    title: "Weapons & Abilities",
    description:
      "The weapons, strange objects, and abilities seen in the show.",
  },
};

export function DirectoryPage({ category }: { category: ArticleCategory }) {
  return category === "Characters" ? (
    <CharacterDirectory />
  ) : (
    <CategoryDirectory category={category} />
  );
}

function CategoryDirectory({
  category,
}: {
  category: Exclude<ArticleCategory, "Characters">;
}) {
  usePageTitle(category);
  const [query, setQuery] = useState("");
  const copy = directoryCopy[category];
  const all = wiki.byCategory(category);
  const filtered = all.filter((article) =>
    `${article.title} ${article.aliases.join(" ")}`
      .toLowerCase()
      .includes(query.toLowerCase().trim()),
  );
  return (
    <div className="page-width interior-page">
      <Breadcrumbs items={[{ label: category }]} />
      <header className="page-heading">
        <p className="eyebrow">
          <span className="live-dot" />
          {copy.eyebrow}
        </p>
        <h1>{copy.title}</h1>
        <p>{copy.description}</p>
      </header>
      {all.length ? (
        <>
          <div className="directory-toolbar">
            <p>
              <strong>{all.length.toString().padStart(2, "0")}</strong> articles
            </p>
            <div className="directory-filter">
              <Search size={16} />
              <label className="sr-only" htmlFor="directory-filter">
                Filter {category.toLowerCase()}
              </label>
              <input
                id="directory-filter"
                type="search"
                placeholder={`Filter ${category.toLowerCase()}…`}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
          <div aria-live="polite" className="sr-only">
            {filtered.length} matching articles
          </div>
          {filtered.length ? (
            <div className="directory-article-list">
              {filtered.map((article) => (
                <ArticleRow article={article} key={article.id} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Search size={30} />
              <h2>No pages found.</h2>
              <p>Try another name, or clear the filter to see all the pages.</p>
              <button
                className="button button-outline"
                onClick={() => setQuery("")}
              >
                Clear filter
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="location-empty">
          <div className="empty-map" aria-hidden="true">
            <span />
            <span />
            <span />
            <MapPin size={46} strokeWidth={1} />
          </div>
          <div>
            <span className="eyebrow">NO ARTICLES YET</span>
            <h2>Nothing here yet.</h2>
            <p>
              This category doesn’t have any articles yet. The contribution
              guide explains what to include when researching a new page.
            </p>
            <Link className="text-link" to="/community">
              See the research guide
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
      <div className="directory-note">
        <span className="live-dot" />
        <p>Some articles still need more detail or sources.</p>
        <Link to="/needs-completion">
          Pages needing work
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}

export function IncompletePage() {
  usePageTitle("Pages Needing Completion");
  const [filter, setFilter] = useState<ArticleStatus | "All">("All");
  const unfinished = wiki
    .all()
    .filter((article) => article.status !== "Complete");
  const filtered = unfinished.filter(
    (article) => filter === "All" || article.status === filter,
  );
  return (
    <div className="page-width interior-page">
      <Breadcrumbs items={[{ label: "Pages Needing Completion" }]} />
      <header className="page-heading">
        <p className="eyebrow">
          <ListFilter size={15} />A WORK IN PROGRESS
        </p>
        <h1>TO BE CONTINUED…</h1>
        <p>
          These articles need more information, sources, or a check against the
          episode. Use the filters to see drafts or unfinished pages.
        </p>
      </header>
      <div className="completion-summary">
        <div>
          <strong>
            {unfinished
              .filter((a) => a.status === "Draft")
              .length.toString()
              .padStart(2, "0")}
          </strong>
          <span>Draft pages</span>
        </div>
        <div>
          <strong>
            {unfinished
              .filter((a) => a.status === "Incomplete")
              .length.toString()
              .padStart(2, "0")}
          </strong>
          <span>Articles to expand</span>
        </div>
        <Link className="text-link" to="/community">
          Read the contribution guide
          <ArrowRight size={16} />
        </Link>
      </div>
      <div className="filter-tabs" role="group" aria-label="Filter by status">
        {(["All", "Draft", "Incomplete"] as const).map((status) => (
          <button
            key={status}
            className={filter === status ? "selected" : ""}
            onClick={() => setFilter(status)}
            aria-pressed={filter === status}
          >
            {status === "All" ? "All open pages" : status}
          </button>
        ))}
      </div>
      <p className="small-label" aria-live="polite">
        {filtered.length} open pages
      </p>
      <div className="completion-list">
        {filtered.map((article) => (
          <ArticleRow key={article.id} article={article} showDate />
        ))}
      </div>
    </div>
  );
}
