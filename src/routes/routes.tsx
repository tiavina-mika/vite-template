import React from "react";
import { createRouter, createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import publicRoutes from "./public.routes";
import privateRoutes from "./private.routes";

export const appLayout = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

const routeTree = appLayout.addChildren([publicRoutes, privateRoutes]);

const router = createRouter({ routeTree, defaultPreload: "intent" });
export default router;
