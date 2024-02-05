import { useParams } from "@tanstack/react-router";
import React from "react";

const Article = () => {
    const { id } = useParams({ strict: false })
  return <div>Article preview {id}</div>;
};

export default Article;
