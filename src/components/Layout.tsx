import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  Radio,
  Search,
  X,
} from "lucide-react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { SearchDialog } from "./Search";
import { easterEggs } from "../lib/easter-eggs";
import { ShowLogo } from "./ShowLogo";

const extraLinks = [
  { to: "/episodes/pilot#media-guide", label: "Videos & trailers" },
  { to: "/locations", label: "Locations" },
  { to: "/weapons-and-abilities", label: "Weapons & Abilities" },
  { to: "/needs-completion", label: "Pages Needing Completion" },
  { to: "/about", label: "About this wiki" },
];

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [signal, setSignal] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setMobileOpen(false);
    setExploreOpen(false);
    setSearchOpen(false);
    if (!location.hash) window.scrollTo({ top: 0, behavior: "instant" });
    else
      requestAnimationFrame(() =>
        document.getElementById(location.hash.slice(1))?.scrollIntoView(),
      );
  }, [location.pathname, location.search, location.hash]);
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen((value) => !value);
      }
      if (event.key === "Escape") {
        setMobileOpen(false);
        setExploreOpen(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="wiki-stage">
        <header className="site-header">
          <div className="header-inner">
            <Link to="/" className="brand" aria-label="CAV Fandom home">
              <span className="brand-emblem">
                <ShowLogo decorative className="nav-show-logo" />
              </span>
              <span className="brand-word">
                CAV <strong>FANDOM</strong>
                <span>THE UNOFFICIAL FAN WIKI</span>
              </span>
            </Link>
            <nav
              className={`primary-nav ${mobileOpen ? "is-open" : ""}`}
              aria-label="Main navigation"
              id="main-navigation"
            >
              <NavLink to="/" end>
                Home
              </NavLink>
              <NavLink to="/characters">Characters</NavLink>
              <NavLink to="/episodes">Episodes</NavLink>
              <NavLink to="/lore">Lore</NavLink>
              <NavLink to="/community">Community</NavLink>
              <div className="explore-menu">
                <button
                  className={exploreOpen ? "active" : ""}
                  aria-expanded={exploreOpen}
                  aria-controls="explore-links"
                  onClick={() => setExploreOpen(!exploreOpen)}
                >
                  Explore <ChevronDown size={13} />
                </button>
                {exploreOpen && (
                  <div className="explore-links" id="explore-links">
                    {extraLinks.map((item) => (
                      <NavLink key={item.to} to={item.to}>
                        {item.label}
                        <ArrowUpRight size={14} />
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
              <div className="mobile-extra">
                {extraLinks.map((item) => (
                  <NavLink key={item.to} to={item.to}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </nav>
            <div className="header-actions">
              <button
                className="header-search"
                onClick={() => setSearchOpen(true)}
                aria-label="Search the wiki"
              >
                <Search size={17} />
                <span>Search the wiki</span>
                <kbd>⌘ / Ctrl K</kbd>
              </button>
              <button
                className="mobile-menu icon-button"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-expanded={mobileOpen}
                aria-controls="main-navigation"
                aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              >
                {mobileOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </header>
        <main id="main-content" tabIndex={-1}>
          <Outlet />
        </main>
        <footer className="site-footer">
          <div className="footer-top">
            <div className="footer-intro">
              <Link className="footer-brand" to="/">
                CAV<span>FANDOM</span>
                <span className="brand-period">.</span>
              </Link>
              <p>
                A Calling All Villains wiki
                <br />
                made by fans of the show.
              </p>
              <span className="footer-independence">
                AN UNOFFICIAL FAN PROJECT
              </span>
            </div>
            <div className="footer-links">
              <div>
                <span className="small-label">Browse the wiki</span>
                <Link to="/characters">Characters</Link>
                <Link to="/episodes">Episodes</Link>
                <Link to="/lore">Lore</Link>
                <Link to="/locations">Locations</Link>
              </div>
              <div>
                <span className="small-label">The community</span>
                <Link to="/community">Get involved</Link>
                <Link to="/needs-completion">Pages needing completion</Link>
                <Link to="/about">About & content policy</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              Unofficial and fan-made. Not affiliated with or endorsed by
              ZAMination.
              <br />
              <span>
                Calling All Villains and its characters belong to their
                respective rights holders.
              </span>
            </p>
            <div className="footer-signal">
              <button
                className="signal-button"
                aria-label={easterEggs.signal.label}
                aria-pressed={signal}
                onClick={() => setSignal(!signal)}
              >
                <Radio size={15} />
                <span>{signal ? "SIGNAL FOUND" : "TUNE SIGNAL"}</span>
                <span className="live-dot" />
              </button>
              <span role="status" className="signal-message">
                {signal ? easterEggs.signal.message : ""}
              </span>
            </div>
          </div>
        </footer>
      </div>
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
