import React from "react";

import { ArticleRoute } from "../../routes/private/article.routes";

const Article = () => {
  const { id } = ArticleRoute.useParams();
  return <div>Article preview {id}</div>;
};

export default Article;
