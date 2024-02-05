import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./pages/Layout";
import {
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";

const rootRoute = createRootRoute({
  component: Layout,
});

const routes = [
  {
    layout: rootRoute,
    path: "/",
    component: Home,
  },
  {
    layout: rootRoute,
    path: "/about",
    component: About,
  },
];

const paths = routes.map((route) => {
  return createRoute({
    getParentRoute: () => route.layout,
    path: route.path,
    component: route.component,
  });
});

const routeTree = rootRoute.addChildren(paths);

const router = createRouter({ routeTree, defaultPreload: "intent" });
export default router;
