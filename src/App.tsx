import { Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import {
  DirectoryPage,
  EpisodesPage,
  IncompletePage,
} from "./pages/DirectoryPage";
import { ArticlePage } from "./pages/ArticlePage";
import { SearchPage } from "./pages/SearchPage";
import { AboutPage, CommunityPage, NotFoundPage } from "./pages/InfoPages";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="characters"
          element={<DirectoryPage category="Characters" />}
        />
        <Route
          path="characters/:slug"
          element={<ArticlePage category="Characters" />}
        />
        <Route path="episodes" element={<EpisodesPage />} />
        <Route
          path="episodes/:slug"
          element={<ArticlePage category="Episodes" />}
        />
        <Route path="lore" element={<DirectoryPage category="Lore" />} />
        <Route path="lore/:slug" element={<ArticlePage category="Lore" />} />
        <Route
          path="locations"
          element={<DirectoryPage category="Locations" />}
        />
        <Route
          path="locations/:slug"
          element={<ArticlePage category="Locations" />}
        />
        <Route
          path="weapons-and-abilities"
          element={<DirectoryPage category="Weapons & Abilities" />}
        />
        <Route
          path="weapons-and-abilities/:slug"
          element={<ArticlePage category="Weapons & Abilities" />}
        />
        <Route path="community" element={<CommunityPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="needs-completion" element={<IncompletePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
