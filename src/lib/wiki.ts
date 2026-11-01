import { articles } from "../data/articles.ts";
import { mediaCatalogue } from "../data/media-catalogue.ts";
import { mediaTexts } from "../data/media-texts.ts";
import type { ArticleCategory, WikiArticle } from "../types/wiki";

export const categoryPaths: Record<ArticleCategory, string> = {
  Characters: "/characters",
  Episodes: "/episodes",
  Lore: "/lore",
  Locations: "/locations",
  "Weapons & Abilities": "/weapons-and-abilities",
};
export const articlePath = (article: WikiArticle) =>
  `${categoryPaths[article.category]}/${article.slug}`;
export const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));

export interface ArticleRepository {
  all(): readonly WikiArticle[];
  byId(id: string): WikiArticle | undefined;
  bySlug(category: ArticleCategory, slug: string): WikiArticle | undefined;
  byCategory(category: ArticleCategory): readonly WikiArticle[];
  characters(): readonly WikiArticle[];
}

// All readers go through this boundary. A future backend can replace the data
// access layer and introduce loading/auth states without changing article data.
export const wiki: ArticleRepository = {
  all: () => articles,
  byId: (id) => articles.find((article) => article.id === id),
  bySlug: (category, slug) =>
    articles.find(
      (article) => article.category === category && article.slug === slug,
    ),
  byCategory: (category) =>
    articles.filter((article) => article.category === category),
  characters: () => articles.filter((article) => article.characterIndex),
};

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("en")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const mediaSearchText = new Map(
  mediaCatalogue.map((record) => [
    record.id,
    `${record.title} ${record.source.title} ${record.summary} ${record.kind === "song" ? "song lyrics" : "video transcripts transcriptions"} ${
      mediaTexts
        .find((text) => text.mediaId === record.id)
        ?.lines.map((line) => `${line.speaker ?? ""} ${line.text}`)
        .join(" ") ?? ""
    }`,
  ]),
);

export function searchArticles(
  query: string,
  category?: ArticleCategory,
): readonly WikiArticle[] {
  const words = normalize(query).split(/\s+/).filter(Boolean);
  return articles
    .filter((article) => !category || article.category === category)
    .map((article) => {
      const title = normalize(`${article.title} ${article.aliases.join(" ")}`);
      const categoryText = normalize(article.category);
      const body = normalize(
        `${article.summary} ${article.sections.map((s) => `${s.title} ${s.paragraphs.join(" ")} ${s.points?.join(" ") ?? ""}`).join(" ")} ${article.mediaIds?.map((id) => mediaSearchText.get(id) ?? "").join(" ") ?? ""}`,
      );
      const score = words.reduce(
        (sum, word) =>
          sum +
          (title.includes(word)
            ? 10
            : categoryText.includes(word)
              ? 5
              : body.includes(word)
                ? 1
                : 0),
        0,
      );
      const matches = words.every((word) =>
        `${title} ${categoryText} ${body}`.includes(word),
      );
      return { article, score, matches };
    })
    .filter((result) => result.matches)
    .sort(
      (a, b) =>
        b.score - a.score || a.article.title.localeCompare(b.article.title),
    )
    .map(({ article }) => article);
}
