import { ArticleRoute } from "../../routes/article.routes";
import React from "react";

const Article = () => {
  const { id } = ArticleRoute.useParams();
  return <div>Article preview {id}</div>;
};

export default Article;
