import About from "../pages/About";
import DashboardLayout from "../pages/DashboardLayout";
import Home from "../pages/Home";

import { createRoute, redirect } from "@tanstack/react-router";
import { appLayout } from "./routes";
import articleRoutes, { articlesLayout } from "./private/article.routes";
import Profile from "../pages/auth/Profile";

/**
 * add id to pathless route (sub layouts)
 * @see: https://github.com/TanStack/router/discussions/696
 */
export const privateLayout = createRoute({
  id: "private",
  getParentRoute: () => appLayout,
  component: DashboardLayout,
  beforeLoad: ({ context, location }) => {
    // If the user is logged out, redirect them to the login page
    // ERROR: the store is not loaded
    if (!context.store?.isAuthenticated) {
      throw redirect({
        to: "/login",
        search: {
          // Use the current location to power a redirect after login
          // (Do not use `router.state.resolvedLocation` as it can
          // potentially lag behind the actual current location)
          redirect: location.href,
        },
      });
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

const ProfileRoute = createRoute({
  getParentRoute: () => privateLayout,
  component: Profile,
  path: "/profile",
});

const privateRoutes = privateLayout.addChildren([
  HomeRoute,
  // use addChildren in the root because of type errors
  articlesLayout.addChildren(articleRoutes),
  AboutRoute,
  ProfileRoute,
]);

export default privateRoutes;
