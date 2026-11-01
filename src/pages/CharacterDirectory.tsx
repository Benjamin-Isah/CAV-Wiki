import { useState, type CSSProperties } from "react";
import { ArrowRight, Search } from "lucide-react";
import { Link } from "react-router";
import { Breadcrumbs, CharacterCard } from "../components/Common";
import { CharacterMiniLink } from "../components/WikiFeatures";
import { usePageTitle } from "../lib/use-page-title";
import { wiki } from "../lib/wiki";
import type { CharacterGroup } from "../types/wiki";

const groups: { name: CharacterGroup; description: string }[] = [
  {
    name: "Batch Z",
    description: "Puzzles’ team. Dave is included as an original member.",
  },
  {
    name: "The competition",
    description: "The Big Bad and the Bone Drones, including James (9512).",
  },
  {
    name: "Origam-3",
    description: "The Paper King and the inhabitants of his planet.",
  },
  {
    name: "Background villains",
    description:
      "Contestants seen in the crowd and on the roster. Some have no confirmed name.",
  },
];

export function CharacterDirectory() {
  usePageTitle("Characters");
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<CharacterGroup | "All">("All");
  const [sort, setSort] = useState("featured");
  const all = wiki.characters();
  const filtered = all.filter(
    (article) =>
      (group === "All" || article.characterIndex?.group === group) &&
      `${article.title} ${article.aliases.join(" ")} ${article.characterIndex?.role} ${article.characterIndex?.group}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  const ordered =
    sort === "alphabetical"
      ? [...filtered].sort((a, b) => a.title.localeCompare(b.title))
      : groups.flatMap((item) =>
          filtered.filter(
            (article) => article.characterIndex?.group === item.name,
          ),
        );

  return (
    <div className="page-width interior-page character-directory-page">
      <Breadcrumbs items={[{ label: "Characters" }]} />
      <header className="directory-heading">
        <div>
          <p className="eyebrow">THE CALLING ALL VILLAINS CAST</p>
          <h1>Characters</h1>
          <p>
            Characters from Calling All Villains, from Puzzles’ team to the
            contestants in the background. Names used by fans are marked below.
          </p>
        </div>
        <div className="directory-margin-note">
          <span className="small-label">NEW TO THE SERIES?</span>
          <strong>Watch the pilot first.</strong>
          <Link to="/episodes/pilot">
            Pilot episode guide <ArrowRight size={14} />
          </Link>
        </div>
      </header>
      <div className="character-controls">
        <div
          className="cast-filter-tabs"
          role="group"
          aria-label="Filter characters by group"
        >
          {(["All", ...groups.map((item) => item.name)] as const).map(
            (name) => (
              <button
                key={name}
                aria-pressed={group === name}
                onClick={() => setGroup(name)}
              >
                {name === "All" ? "All characters" : name}
                <span>
                  {name === "All"
                    ? all.length
                    : all.filter((a) => a.characterIndex?.group === name)
                        .length}
                </span>
              </button>
            ),
          )}
        </div>
        <div className="character-filter-row">
          <div className="directory-filter">
            <Search size={17} />
            <label className="sr-only" htmlFor="directory-filter">
              Filter characters
            </label>
            <input
              id="directory-filter"
              type="search"
              placeholder="Find a character, role, or group…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <p role="status">
            {filtered.length} of {all.length} entries
          </p>
          <label className="sort-control">
            Sort by{" "}
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
            >
              <option value="featured">Group</option>
              <option value="alphabetical">A–Z</option>
            </select>
          </label>
        </div>
      </div>
      {ordered.length ? (
        sort === "alphabetical" || group === "All" ? (
          <div className="directory-character-grid">
            {ordered.map((article) => (
              <CharacterCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          groups.map((item) => {
            const members = ordered.filter(
              (article) => article.characterIndex?.group === item.name,
            );
            return members.length ? (
              <section
                className="character-group"
                key={item.name}
                aria-labelledby={`group-${item.name.replaceAll(" ", "-")}`}
              >
                <div className="character-group-heading">
                  <h2 id={`group-${item.name.replaceAll(" ", "-")}`}>
                    {item.name}
                    <span>{members.length.toString().padStart(2, "0")}</span>
                  </h2>
                  <p>{item.description}</p>
                </div>
                <div
                  className="directory-character-grid"
                  style={
                    {
                      "--cast-columns": Math.min(members.length, 3),
                    } as CSSProperties
                  }
                >
                  {members.map((article) => (
                    <CharacterCard key={article.id} article={article} />
                  ))}
                </div>
              </section>
            ) : null;
          })
        )
      ) : (
        <div className="empty-state">
          <Search size={28} />
          <h2>No characters found.</h2>
          <p>Try a different name or browse the full cast.</p>
          <button
            className="button button-outline"
            onClick={() => {
              setQuery("");
              setGroup("All");
            }}
          >
            Show all characters <ArrowRight size={15} />
          </button>
        </div>
      )}
      <aside className="cast-reading-note">
        <div>
          <span className="small-label">UNNAMED CHARACTERS</span>
          <h2>Recognise someone?</h2>
          <p>
            Some contestants only appear in roster portraits. We use names like
            “Coffin villain” to help readers find them. Their official names,
            powers, and backstories are still unknown.
          </p>
          <Link className="text-link" to="/community">
            Help identify a cameo <ArrowRight size={15} />
          </Link>
        </div>
        <div>
          <CharacterMiniLink id="coffin-villain" />
          <CharacterMiniLink id="wolf-villain" />
        </div>
      </aside>
    </div>
  );
}
