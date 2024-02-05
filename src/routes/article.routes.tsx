import ArticlesLayout from "../pages/articles/ArticlesLayout";
import Articles from "../pages/articles/Articles";
import Article from "../pages/articles/Article";
import {
  createRoute,
} from "@tanstack/react-router";
import { layout } from "./routes";

const articleLayout = createRoute({
  getParentRoute: () => layout,
  component: ArticlesLayout,
  path: "/articles",
});

const articlesRoute = createRoute({
  getParentRoute: () => articleLayout,
  component: Articles,
  path: "/",
});

const articleRoute = createRoute({
  getParentRoute: () => articleLayout,
  component: Article,
  path: "$id",
});

articleLayout.addChildren([articlesRoute, articleRoute])

export default articleLayout;
