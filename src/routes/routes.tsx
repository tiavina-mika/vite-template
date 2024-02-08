import React from "react";
import {
  createRouter,
  Outlet,
  createRootRouteWithContext,
  createRoute,
  redirect,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import publicRoutes from "./public.routes";
import privateRoutes from "./private.routes";
import { IAuthContext } from "../types/auth.types";
import { logout } from "../actions/auth.actions";
import Loading from "../components/Loading";

export const appLayout = createRootRouteWithContext<IAuthContext>()({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
});

const logoutRoute = createRoute({
  path: "/logout",
  getParentRoute: () => appLayout,
  component: () => <Loading />,
  beforeLoad: async (): Promise<void> => {
    await logout();
    redirect({
      to: "/login",
      throw: true,
      search: {
        // the login url need a redirection path
        redirect: "/",
      },
    });
  },
});

const routeTree = appLayout.addChildren([
  publicRoutes,
  privateRoutes,
  logoutRoute,
]);

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: {
    store: undefined!, // This will be set after we wrap the app in an AuthProvider
  },
});
export default router;
