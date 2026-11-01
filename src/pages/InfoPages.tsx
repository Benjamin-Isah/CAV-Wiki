import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Download,
  FileCheck2,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router";
import { Breadcrumbs } from "../components/Common";
import { usePageTitle } from "../lib/use-page-title";
import { SearchForm } from "../components/Search";
import { communityCapabilities } from "../types/community";

export function CommunityPage() {
  usePageTitle("Community");
  const futureFeatures = [
    {
      label: "Accounts & editor applications",
      active:
        communityCapabilities.accounts ||
        communityCapabilities.editorApplications,
    },
    {
      label: "Approved editing & article creation",
      active: communityCapabilities.articleEditing,
    },
    {
      label: "Moderation & admin tools",
      active: communityCapabilities.moderation || communityCapabilities.admin,
    },
    {
      label: "Revision history & rollback",
      active: communityCapabilities.revisions || communityCapabilities.rollback,
    },
  ];
  return (
    <div className="page-width interior-page">
      <Breadcrumbs items={[{ label: "Community" }]} />
      <header className="page-heading">
        <p className="eyebrow">
          <Users size={16} />
          HELP WITH THE WIKI
        </p>
        <h1>Community & contributions</h1>
        <p>
          Found a detail missing from an article? Here’s how to put together a
          useful note with a source.
        </p>
      </header>
      <div className="community-intro">
        <span className="community-statement">
          WIKI
          <br />
          HELP.
        </span>
        <div>
          <h2>Before you add something</h2>
          <p>
            If you notice a background character, a weapon, or a scene a page
            doesn’t mention, save the episode link and timestamp. That helps
            someone else check it without searching the whole episode.
          </p>
          <p>
            Editing and submissions aren’t available on the site yet. You can
            use the worksheet below to keep your notes until they are.
          </p>
          <Link className="text-link" to="/needs-completion">
            Find a page that needs help
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
      <section className="guide-section" id="contribution-guide">
        <p className="eyebrow">GETTING STARTED</p>
        <h2>Found something we missed?</h2>
        <div className="guide-grid">
          {[
            {
              icon: Search,
              title: "01 / Find it in the show",
              copy: "Use an episode or an official ZAMination post, and save the link. Add a timestamp for a scene. Fan discussions can help you find something to check, but don’t count as official confirmation.",
            },
            {
              icon: FileCheck2,
              title: "02 / Put it in your own words",
              copy: "Describe what happens without copying the dialogue. If you’re suggesting a reason for it, label that part as a theory.",
            },
            {
              icon: ShieldCheck,
              title: "03 / Keep the source handy",
              copy: "Say which detail the source supports. For an image, include the creator’s name and permission to use it. Label fan art so readers can tell it apart from official artwork.",
            },
          ].map(({ icon: Icon, title, copy }) => (
            <div key={title}>
              <Icon size={26} strokeWidth={1.4} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
        <a
          className="button button-outline"
          href="/contribution-template.md"
          download
        >
          <Download size={17} />
          Download the research template
        </a>
        <p className="download-note">
          This downloads a file for your notes. It doesn’t submit anything.
        </p>
      </section>
      <section className="roadmap-section">
        <div>
          <p className="eyebrow">PLANNED FEATURES</p>
          <h2>
            COMMUNITY
            <br />
            EDITING
          </h2>
          <p>
            Accounts, article editing, and moderation still need to be built.
            None of the features listed here is available yet.
          </p>
        </div>
        <div className="roadmap-list">
          {futureFeatures.map((feature) => (
            <div key={feature.label}>
              <span>{feature.label}</span>
              <span className="planned-badge">
                {feature.active ? "Available" : "Planned"}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function AboutPage() {
  usePageTitle("About the wiki");
  return (
    <div className="page-width interior-page about-page">
      <Breadcrumbs items={[{ label: "About" }]} />
      <header className="page-heading">
        <p className="eyebrow">
          <BookOpen size={15} />
          ABOUT THE WIKI
        </p>
        <h1>About CAV Fandom</h1>
        <p>
          CAV Fandom is an unofficial wiki about Calling All Villains by
          ZAMination.
        </p>
      </header>
      <div className="about-layout">
        <aside>
          <span className="small-label">ON THIS PAGE</span>
          <nav aria-label="About page contents">
            <a href="#about">About this wiki</a>
            <a href="#content-policy">How we write articles</a>
            <a href="#copyright">Artwork & credits</a>
            <a href="#privacy">Your privacy</a>
          </nav>
        </aside>
        <div className="prose">
          <section id="about">
            <h2>About this wiki</h2>
            <p>
              Calling All Villains follows Mr. Puzzles as he joins a contest to
              become The Big Bad’s successor. This wiki collects information
              about the characters, episodes, locations, and objects in the
              show.
            </p>
            <p>
              Most pages are still unfinished. If a detail is unknown, we say so
              rather than filling it in with a guess.
            </p>
            <p>
              We’re an unofficial fan wiki. ZAMination and the show’s creators
              aren’t involved with this project and haven’t endorsed it.
            </p>
          </section>
          <section id="content-policy">
            <h2>What’s canon, and what’s a theory?</h2>
            <p>
              We use episodes and official creator posts for facts about the
              story. Sources are linked at the bottom of each article. Fan
              discussions and contributor notes are labelled separately.
            </p>
            <div className="evidence-legend">
              <div>
                <span className="legend-dot observation" />
                <div>
                  <h3>From the show</h3>
                  <p>
                    Things shown or stated in an episode or official release.
                    Contributor scene notes are identified separately in the
                    references.
                  </p>
                </div>
              </div>
              <div>
                <span className="legend-dot interpretation" />
                <div>
                  <h3>Interpretations</h3>
                  <p>
                    An explanation of what a scene might mean, rather than
                    something the creators have confirmed.
                  </p>
                </div>
              </div>
              <div>
                <span className="legend-dot theory" />
                <div>
                  <h3>Fan theories</h3>
                  <p>
                    Unconfirmed ideas from fans. These go in their own section,
                    separate from the character’s biography.
                  </p>
                </div>
              </div>
            </div>
            <p>
              For example, Lady Killer disables James (9512) and appears to
              examine him after the credits, according to a contributor’s scene
              notes. Her motive is unknown. Any explanation of why she does it
              belongs in the theories section until it’s confirmed.
            </p>
            <p>
              Plot summaries are written in our own words. For the full episode
              and dialogue, watch the original upload.
            </p>
          </section>
          <section id="copyright">
            <h2>Artwork & credits</h2>
            <p>
              Calling All Villains and its characters belong to their respective
              rights holders. Official videos are embedded from ZAMination’s
              YouTube channel. Character renders were found on the Calling All
              Villains Wiki, with source links in the galleries. The Calling All
              Fans logo was supplied for this wiki.
            </p>
            <p>
              The renders were added at the site owner’s request for this local
              wiki. Permission to reuse them hasn’t been independently
              confirmed. Please include permission details with any new artwork
              you suggest; crediting the creator doesn’t replace their
              permission.
            </p>
            <p>
              Manrope and Anton are bundled under the SIL Open Font License.
              Their license notices are included alongside the font files.
            </p>
            <a
              className="text-link"
              href="https://www.youtube.com/watch?v=3AFJtcP2cp0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the original pilot on YouTube
              <ArrowUpRight size={15} />
            </a>
          </section>
          <section id="privacy">
            <h2>Your privacy</h2>
            <p>
              You don’t need an account to read the wiki. Search runs in your
              browser, and the wiki doesn’t keep a search history or run
              analytics.
            </p>
            <p>
              Video previews use local images. Choosing “Load video player”
              connects to YouTube in privacy-enhanced mode. YouTube receives
              connection information when its player loads and has its own
              privacy policy. External links also take you to services with
              their own policies.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export function NotFoundPage() {
  usePageTitle("404 · Page not found");
  return (
    <div className="page-width not-found">
      <div className="not-found-art" aria-hidden="true">
        404
      </div>
      <p className="eyebrow">
        <span className="live-dot" />
        PAGE NOT FOUND
      </p>
      <h1>
        THIS PAGE
        <br />
        ISN’T HERE.
      </h1>
      <p>
        The link may be wrong, or the article hasn’t been added yet.
        <br />
        Try searching for it below.
      </p>
      <SearchForm placeholder="Search the wiki…" />
      <Link className="button button-outline" to="/">
        Back to the homepage
        <ArrowRight size={17} />
      </Link>
    </div>
  );
}
