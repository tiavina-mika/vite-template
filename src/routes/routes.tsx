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
import { IAuth } from "../types/auth.types";

// export const appLayout = createRootRoute({
//   component: () => (
//     <>
//       <Outlet />
//       <TanStackRouterDevtools />
//     </>
//   ),
// });

export const appLayout = createRootRouteWithContext<IAuth>()({
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
    auth: undefined!, // This will be set after we wrap the app in an AuthProvider
  },
});
export default router;
