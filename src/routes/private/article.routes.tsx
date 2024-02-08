import { createRoute } from "@tanstack/react-router";
import { z } from "zod";

import ArticlesLayout from "../../pages/articles/ArticlesLayout";
import Articles from "../../pages/articles/Articles";
import Article from "../../pages/articles/Article";
import { privateLayout } from "../private.routes";
import { getArticle, getArticles } from "../../actions/article.actions";
import { IArticleParams } from "src/types/article.types";

export const articlesLayout = createRoute({
  getParentRoute: () => privateLayout,
  component: ArticlesLayout,
  path: "/articles",
});

export const articlesRoute = createRoute({
  getParentRoute: () => articlesLayout,
  loader: getArticles,
  component: Articles,
  path: "/",
});

export const articleRoute = createRoute({
  parseParams: (params: IArticleParams) => ({
    id: z.string().parse(params.id),
  }),
  loader: ({ params }: { params: IArticleParams }) => getArticle(params.id),
  getParentRoute: () => articlesLayout,
  component: Article,
  path: "$id",
});

const articleRoutes = [articlesRoute, articleRoute];

export default articleRoutes;
