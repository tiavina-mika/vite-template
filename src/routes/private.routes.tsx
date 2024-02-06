import About from "../pages/About";
import Layout from "../pages/Layout";
import Home from "../pages/Home";

import {
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import ArticleLayout from "./article.routes";

export const privateLayout = createRootRoute({
  component: Layout,
  onEnter: (match) => console.log("onEnter", match),
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

const routeTree = privateLayout.addChildren([
  HomeRoute,
  ArticleLayout,
  AboutRoute,
]);

const privateRouter = createRouter({ routeTree, defaultPreload: "intent" });
export default privateRouter;
