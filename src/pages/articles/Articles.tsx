import React from "react";
import { Link } from "@tanstack/react-router";

import { ArticlesRoute } from "../../routes/private/article.routes";
import { IArticle } from "../../types/article.types";

const Articles = () => {
  // this data is fetched from the route loader func
  const articles = ArticlesRoute.useLoaderData();

  return (
    <div className="container flex justify-center">
      <div className="flex flex-col">
        <div className="w-full">
          <div className="border-b border-gray-200 shadow">
            <table>
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-2 text-xs text-gray-500">Title</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {articles.map((article: IArticle, index: number) => (
                  <tr
                    className="whitespace-nowrap"
                    key={article.objectId + index}
                  >
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {article.title}
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        to="/articles/$id"
                        params={{ id: article.objectId }}
                        className="px-4 py-1 text-sm text-white bg-red-400 rounded"
                      >
                        Preview
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
