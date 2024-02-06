import { createRoute } from "@tanstack/react-router";

import ArticlesLayout from "../../pages/articles/ArticlesLayout";
import Articles from "../../pages/articles/Articles";
import Article from "../../pages/articles/Article";
import { privateLayout } from "../private.routes";

export const articlesLayout = createRoute({
  getParentRoute: () => privateLayout,
  component: ArticlesLayout,
  path: "/articles",
});

const ArticlesRoute = createRoute({
  getParentRoute: () => articlesLayout,
  component: Articles,
  path: "/",
});

export const ArticleRoute = createRoute({
  getParentRoute: () => articlesLayout,
  component: Article,
  path: "$id",
});

const articleRoutes = [ArticlesRoute, ArticleRoute];

export default articleRoutes;
