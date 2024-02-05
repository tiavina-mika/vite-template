import ArticlesLayout from "../pages/articles/ArticlesLayout";
import Articles from "../pages/articles/Articles";
import Article from "../pages/articles/Article";
import { createRoute } from "@tanstack/react-router";
import { layout } from "./routes";

const ArticleLayout = createRoute({
  getParentRoute: () => layout,
  component: ArticlesLayout,
  path: "/articles",
});

const ArticlesRoute = createRoute({
  getParentRoute: () => ArticleLayout,
  component: Articles,
  path: "/x",
});

export const ArticleRoute = createRoute({
  getParentRoute: () => ArticleLayout,
  component: Article,
  path: "$id",
  // loader: (params) => console.log(params),
});

ArticleLayout.addChildren([ArticlesRoute, ArticleRoute]);

export default ArticleLayout;
