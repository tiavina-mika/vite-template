import React from "react";
import { ArticlesRoute } from "../../routes/private/article.routes";

const Articles = () => {
  const articles = ArticlesRoute.useLoaderData();

  console.log("articles", articles);

  return <div>Articles</div>;
};

export default Articles;
