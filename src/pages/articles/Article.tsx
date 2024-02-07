import React from "react";

import { ArticleRoute } from "../../routes/private/article.routes";

const Article = () => {
  const { id } = ArticleRoute.useParams();
  // this data is fetched from the route loader func
  const article = ArticleRoute.useLoaderData();

  return (
    <div className="space-y-3">
      <div className="space-x-2">
        <span className="text-grey-500">Id:</span>
        <span className="font-medium">{id}</span>
      </div>
      <div className="space-x-2">
        <span className="text-grey-500">Title:</span>
        <span className="font-medium">{article.title}</span>
      </div>
      <div className="flex flex-col space-y-1">
        <span className="text-grey-500">Content:</span>
        <p className="font-medium">{article.content}</p>
      </div>
    </div>
  );
};

export default Article;
