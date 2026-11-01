import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { ArrowRight, Search, X } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { articlePath, searchArticles } from "../lib/wiki";

export function SearchForm({
  initialValue = "",
  className = "",
  placeholder = "Search characters, episodes, and lore…",
}: {
  initialValue?: string;
  className?: string;
  placeholder?: string;
}) {
  const navigate = useNavigate();
  const id = useId();
  const [query, setQuery] = useState(initialValue);
  useEffect(() => {
    setQuery(initialValue);
  }, [initialValue]);
  const submit = (event: FormEvent) => {
    event.preventDefault();
    navigate(
      `/search${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ""}`,
    );
  };
  return (
    <form
      className={`search-form ${className}`}
      onSubmit={submit}
      role="search"
    >
      <Search size={20} aria-hidden="true" />
      <label htmlFor={id} className="sr-only">
        Search the wiki
      </label>
      <input
        id={id}
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
      />
      <button type="submit" aria-label="Submit search">
        <ArrowRight size={21} />
      </button>
    </form>
  );
}

export function SearchDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const results = searchArticles(query).slice(0, 5);
  useEffect(() => {
    if (open && !dialog.current?.open) {
      dialog.current?.showModal();
      searchInput.current?.focus();
    }
    if (!open && dialog.current?.open) dialog.current?.close();
  }, [open]);
  const submit = (event: FormEvent) => {
    event.preventDefault();
    navigate(
      `/search${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ""}`,
    );
    onClose();
  };
  return (
    <dialog
      ref={dialog}
      className="search-dialog"
      onClose={onClose}
      onCancel={onClose}
      aria-labelledby="search-dialog-title"
      onKeyDownCapture={(event) => {
        // Search inputs can consume Escape to clear their value. Keep the
        // documented close shortcut consistent even when a query is present.
        if (event.key === "Escape") {
          event.preventDefault();
          event.stopPropagation();
          onClose();
        }
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="search-dialog-inner">
        <div className="dialog-heading">
          <h2 id="search-dialog-title">Search the wiki</h2>
          <button
            className="icon-button"
            onClick={onClose}
            aria-label="Close search"
          >
            <X size={20} />
          </button>
        </div>
        <form className="search-form" onSubmit={submit} role="search">
          <Search size={20} />
          <label className="sr-only" htmlFor="dialog-search">
            Search articles
          </label>
          <input
            ref={searchInput}
            id="dialog-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What are you looking for?"
          />
          <button aria-label="Submit search">
            <ArrowRight size={20} />
          </button>
        </form>
        <p className="small-label" aria-live="polite">
          {query
            ? `${results.length === 5 ? "Top 5" : results.length} matching articles`
            : "Suggested pages"}
        </p>
        <div className="quick-results">
          {results.map((article) => (
            <Link key={article.id} onClick={onClose} to={articlePath(article)}>
              <span>
                <strong>{article.title}</strong>
                <small>{article.category}</small>
              </span>
              <ArrowRight size={16} />
            </Link>
          ))}
          {!results.length && (
            <p>
              No results. Try a character name such as “Lady Killer” or “James”.
            </p>
          )}
        </div>
        <button
          className="text-link dialog-all"
          onClick={(event) => submit(event)}
        >
          View all results <ArrowRight size={15} />
        </button>
        <span className="dialog-hint">
          <kbd>esc</kbd> to close · Search includes titles, aliases, categories,
          and article text.
        </span>
      </div>
    </dialog>
  );
}
