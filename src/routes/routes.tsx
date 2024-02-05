import About from "../pages/About";
import Layout from "../pages/Layout";
import Home from "../pages/Home";

import {
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import ArticleLayout from "./article.routes";

export const layout = createRootRoute({
  component: Layout,
});

const HomeRoute = createRoute({
  getParentRoute: () => layout,
  component: Home,
  path: "/",
});

const AboutRoute = createRoute({
  getParentRoute: () => layout,
  component: About,
  path: "/about",
});

const routeTree = layout.addChildren([HomeRoute, ArticleLayout, AboutRoute]);

const router = createRouter({ routeTree, defaultPreload: "intent" });
export default router;
