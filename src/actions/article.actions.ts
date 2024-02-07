import { articles } from "../utils/data/article";
import { delay } from "../utils/utils";
import { IArticle } from "../types/article.types";

export const getArticles = async (): Promise<IArticle[]> => {
  await delay(2000);
  return articles;
};

export const getArticle = async (id: string): Promise<IArticle | undefined> => {
  await delay(1000);
  const currentArticle = articles.find(
    (article: IArticle): boolean => article.objectId === id,
  );
  return currentArticle;
};
