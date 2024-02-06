import React from "react";
import {
  createRouter,
  createRootRoute,
  Outlet,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import publicRoutes from "./public.routes";
import privateRoutes from "./private.routes";
import { IAuthContext } from "../types/auth.types";

export const appLayout = createRootRouteWithContext<IAuthContext>()({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

const routeTree = appLayout.addChildren([publicRoutes, privateRoutes]);

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: {
    store: undefined!, // This will be set after we wrap the app in an AuthProvider
  },
});
export default router;
