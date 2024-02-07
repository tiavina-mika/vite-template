import React from "react";
import { Outlet, useRouter } from "@tanstack/react-router";

const ArticlesLayout = () => {
  const router = useRouter();
  const onBack = () => router.history.back();
  return (
    <div>
      <div className="flex gap-2">
        <button type="button" onClick={onBack}>⬅</button>
        <span>Articles layout</span>
      </div>
      <Outlet />
    </div>
  );
};

export default ArticlesLayout;
