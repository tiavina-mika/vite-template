import React from "react";

import {
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import ArticleLayout from "./article.routes";

export const authLayout = createRootRoute({
  component: () => (
    <div>
        <h5>Auth layout</h5>
    </div>
  ),
  onEnter: (match) => console.log("onEnter", match),
});

const Login = createRoute({
  getParentRoute: () => authLayout,
  component:() => <div>Login</div>,
  path: "/login",
});



const routeTree = authLayout.addChildren([Login, ArticleLayout, AboutRoute]);

const publicRouter = createRouter({ routeTree, defaultPreload: "intent" });
export default publicRouter;
