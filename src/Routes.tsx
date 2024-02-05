import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./pages/Layout";
import ArticlesLayout from "./pages/articles/ArticlesLayout";
import Articles from "./pages/articles/Articles";
import Article from "./pages/articles/Article";
import {
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";

const layout = createRootRoute({
  component: Layout,
});

const articleLayout = createRoute({
  getParentRoute: () => layout,
  component: ArticlesLayout,
  path: "/articles",
});

const routes = [
  {
    layout: layout,
    path: "/",
    component: Home,
  },
  {
    layout: layout,
    path: "/about",
    component: About,
  },
  {
    layout: articleLayout,
    children: [
      {
        layout: articleLayout,
        path: "/",
        component: Articles,
      },
      {
        layout: articleLayout,
        path: "$id",
        component: Article,
      },
    ],
  },
];

const paths = routes.map((route) => {
  if (route.children && route.children.length > 0) {
    return route.layout.addChildren(
      route.children.map((child) =>
        createRoute({
          getParentRoute: () => child.layout,
          path: child.path,
          component: child.component,
        }),
      ),
    );
  }

  return createRoute({
    getParentRoute: () => route.layout,
    path: route.path as string,
    component: route.component,
  });
});

const routeTree = layout.addChildren(paths);

const router = createRouter({ routeTree, defaultPreload: "intent" });
export default router;
