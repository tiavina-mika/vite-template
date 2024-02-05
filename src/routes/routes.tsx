import About from "../pages/About";
import Layout from "../pages/Layout";
import Home from "../pages/Home";

import {
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import articleLayout from "./article.routes";

export const layout = createRootRoute({
  component: Layout,
});

const homeRoute = createRoute({
  getParentRoute: () => layout,
  component: Home,
  path: "/",
});

const aboutRoute = createRoute({
  getParentRoute: () => layout,
  component: About,
  path: "/about",
});

const routeTree = layout.addChildren([homeRoute, articleLayout, aboutRoute]);

const router = createRouter({ routeTree, defaultPreload: "intent" });
export default router;
