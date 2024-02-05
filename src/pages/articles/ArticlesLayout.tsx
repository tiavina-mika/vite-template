import React from "react";
import {
  Outlet,
  Link,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const ArticlesLayout = () => {
    return (
        <div>
          <div>Articles layout</div>
          <Outlet />
        </div>
      )
}

export default ArticlesLayout;