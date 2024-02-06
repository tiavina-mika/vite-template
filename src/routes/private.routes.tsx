import About from "../pages/About";
import Layout from "../pages/Layout";
import Home from "../pages/Home";

import { createRoute, redirect } from "@tanstack/react-router";
import { appLayout } from "./routes";
import articleRoutes, { articlesLayout } from "./article.routes";
import { isAuth } from "../constants";

/**
 * add id to pathless route (sub layouts)
 * @see: https://github.com/TanStack/router/discussions/696
 */
export const privateLayout = createRoute({
  id: "private",
  getParentRoute: () => appLayout,
  component: Layout,
  loader: (): void => {
    if (!isAuth) {
      redirect({ to: "/login", throw: true });
    }
  },
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
