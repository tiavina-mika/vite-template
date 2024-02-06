import { createRoute } from "@tanstack/react-router";

import ArticlesLayout from "../pages/articles/ArticlesLayout";
import Articles from "../pages/articles/Articles";
import Article from "../pages/articles/Article";
import { privateLayout } from "./private.routes";

const articlesLayout = createRoute({
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
  // loader: (params) => console.log(params),
});

articlesLayout.addChildren([ArticlesRoute, ArticleRoute]);

export default articlesLayout;
