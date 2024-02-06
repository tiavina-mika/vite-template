import About from "../pages/About";
import Layout from "../pages/Layout";
import Home from "../pages/Home";

import { createRoute } from "@tanstack/react-router";
import { appLayout } from "./routes";
import articleRoutes, { articlesLayout } from "./article.routes";

/**
 * add id to pathless route (sub layouts)
 * @see: https://github.com/TanStack/router/discussions/696
 */
export const privateLayout = createRoute({
  id: "private",
  getParentRoute: () => appLayout,
  component: Layout,
});

const HomeRoute = createRoute({
  getParentRoute: () => privateLayout,
  component: Home,
  path: "/",
});

const AboutRoute = createRoute({
  getParentRoute: () => privateLayout,
  component: About,
  path: "/about",
});

const privateRoutes = privateLayout.addChildren([
  HomeRoute,
  articlesLayout.addChildren(articleRoutes),
  AboutRoute,
]);

export default privateRoutes;
