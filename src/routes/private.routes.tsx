import About from "../pages/About";
import Layout from "../pages/Layout";
import Home from "../pages/Home";

import { createRoute } from "@tanstack/react-router";
// import ArticleLayout from "./article.routes";
import { appLayout } from "./routes";
import articlesLayout from "./article.routes";

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
  articlesLayout,
  AboutRoute,
]);

export default privateRoutes;
