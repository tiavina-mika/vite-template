import React from "react";
import { createRoute } from "@tanstack/react-router";

import { appLayout } from "./routes";

const Login = createRoute({
  getParentRoute: () => appLayout,
  component: () => <div>Login</div>,
  path: "/login",
});

const publicRoutes = [Login];

export default publicRoutes;
