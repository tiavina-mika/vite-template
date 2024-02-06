import {
  createRouter,
  createRootRoute,
  Outlet,
  // createRoute,
} from "@tanstack/react-router";
import React from "react";
// import Layout from "../pages/Layout";
import publicRoutes from "./public.routes";
import privateRoutes from "./private.routes";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const appLayout = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

// const privateLayout = createRoute({
//   id: "dashboard",
//   getParentRoute: () => appLayout,
//   component: () => (
//     <div>
//       <h3>Dashboard</h3>
//       <Outlet />
//     </div>
//   ),
//   // path: "/",
// });

// const publicLayout = createRoute({
//   id: "public",
//   getParentRoute: () => appLayout,
//   component: () => (
//     <div>
//       <h3>Public</h3>
//       <Outlet />
//     </div>
//   ),
// });

// const HomeRoute = createRoute({
//   getParentRoute: () => privateLayout,
//   component: () => (
//     <div>
//       <div>Home</div>
//     </div>
//   ),
//   path: "/",
// });

// const LoginRoute = createRoute({
//   getParentRoute: () => publicLayout,
//   component: () => (
//     <div>
//       <div>Login</div>
//     </div>
//   ),
//   path: "/login",
// });

// const routeTree = appLayout.addChildren([
//   privateLayout.addChildren([HomeRoute]),
//   // HomeRoute,
//   publicLayout.addChildren([LoginRoute]),
// ]);

const routeTree = appLayout.addChildren([publicRoutes, privateRoutes]);

const router = createRouter({ routeTree, defaultPreload: "intent" });
export default router;
