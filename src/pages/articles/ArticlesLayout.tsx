import React from "react";
import {
  Outlet,
  Link,
} from "@tanstack/react-router";

const ArticlesLayout = () => {
    return (
        <div>
          <div>Articles layout</div>
          <Outlet />
        </div>
      )
}

export default ArticlesLayout;