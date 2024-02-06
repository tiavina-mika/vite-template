import About from "../pages/About";
import Layout from "../pages/Layout";
import Home from "../pages/Home";

import {
  createRoute,
} from "@tanstack/react-router";
import ArticleLayout from "./article.routes";
import { appLayout } from "./routes";

const HomeRoute = createRoute({
  getParentRoute: () => appLayout,
  component: Home,
  path: "/",
});

const AboutRoute = createRoute({
  getParentRoute: () => appLayout,
  component: About,
  path: "/about",
});

const privateRoutes = [
  HomeRoute,
  ArticleLayout,
  AboutRoute,
]

export default privateRoutes;
