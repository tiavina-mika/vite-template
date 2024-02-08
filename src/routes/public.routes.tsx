import React from "react";
import { Outlet, createRoute, redirect } from "@tanstack/react-router";

import { appLayout } from "./routes";
import { z } from "zod";
import Login from "../pages/auth/Login";

/**
 * add id to pathless route (sub layouts)
 * @see: https://github.com/TanStack/router/discussions/696
 */
const publicLayout = createRoute({
  id: "public",
  getParentRoute: () => appLayout,
  component: () => (
    <div>
      <h3>Public</h3>
      <Outlet />
    </div>
  ),
  beforeLoad: ({ context }) => {
    if (context.store?.isAuthenticated) {
      throw redirect({ to: "/" });
    }
  },
});

const loginRoute = createRoute({
  validateSearch: z.object({
    redirect: z.string().optional(),
    // redirect: z.string().catch("/"),
  }),
  getParentRoute: () => publicLayout,
  component: Login,
  path: "/login",
});

const publicRoutes = publicLayout.addChildren([loginRoute]);

export default publicRoutes;
