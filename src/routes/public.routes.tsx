import React from "react";
import { Outlet, createRoute } from "@tanstack/react-router";

import { appLayout } from "./routes";

const publicLayout = createRoute({
  id: "public",
  getParentRoute: () => appLayout,
  component: () => (
    <div>
      <h3>Public</h3>
      <Outlet />
    </div>
  ),
});

const LoginRoute = createRoute({
  getParentRoute: () => publicLayout,
  component: () => <div>Login</div>,
  path: "/login",
});

const publicRoutes = publicLayout.addChildren([LoginRoute]);

export default publicRoutes;
