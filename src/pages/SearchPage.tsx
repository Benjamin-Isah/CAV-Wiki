import { ArrowRight, Search, X } from "lucide-react";
import { Link, useSearchParams } from "react-router";
import { ArticleRow, Breadcrumbs } from "../components/Common";
import { usePageTitle } from "../lib/use-page-title";
import { SearchForm } from "../components/Search";
import { categoryPaths, searchArticles } from "../lib/wiki";
import type { ArticleCategory } from "../types/wiki";

export function SearchPage() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") ?? "";
  const rawCategory = params.get("category");
  const category =
    rawCategory && Object.hasOwn(categoryPaths, rawCategory)
      ? (rawCategory as ArticleCategory)
      : undefined;
  const results = searchArticles(query, category);
  usePageTitle(query ? `Search: ${query}` : "Browse the wiki");
  const filter = (value?: ArticleCategory) => {
    const next = new URLSearchParams(params);
    if (value) next.set("category", value);
    else next.delete("category");
    setParams(next);
  };
  return (
    <div className="page-width interior-page search-page">
      <Breadcrumbs items={[{ label: "Search" }]} />
      <header className="page-heading">
        <p className="eyebrow">
          <Search size={15} />
          ARTICLE INDEX
        </p>
        <h1>Search the wiki</h1>
        <p>Find articles by title, character name, category, or content.</p>
      </header>
      <SearchForm initialValue={query} className="results-search" />
      <div
        className="filter-tabs"
        role="group"
        aria-label="Filter search by category"
      >
        <button
          className={!category ? "selected" : ""}
          aria-pressed={!category}
          onClick={() => filter()}
        >
          All pages
        </button>
        {(Object.keys(categoryPaths) as ArticleCategory[]).map((name) => (
          <button
            key={name}
            className={category === name ? "selected" : ""}
            aria-pressed={category === name}
            onClick={() => filter(name)}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="results-summary" aria-live="polite">
        <p>
          <strong>{results.length}</strong>{" "}
          {results.length === 1 ? "article" : "articles"}
          {query && (
            <>
              {" "}
              for <span>“{query}”</span>
            </>
          )}
          {category && ` in ${category}`}
        </p>
        {query && (
          <Link to="/search" className="text-link">
            Clear search
            <X size={14} />
          </Link>
        )}
      </div>
      {results.length ? (
        <div className="search-results">
          {results.map((article) => (
            <ArticleRow article={article} key={article.id} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-symbol">?</div>
          <span className="eyebrow">NO RESULTS</span>
          <h2>No matching articles</h2>
          <p>
            Check the spelling or try fewer words. If nothing comes up, we may
            not have a page about it yet.
          </p>
          <button
            className="button button-primary"
            onClick={() => setParams({})}
          >
            Browse all pages
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
