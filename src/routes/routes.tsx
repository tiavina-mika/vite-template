import { createRouter, createRootRoute } from "@tanstack/react-router";
import Layout from "../pages/Layout";
import publicRoutes from "./public.routes";
import privateRoutes from "./private.routes";

export const appLayout = createRootRoute({
  component: Layout,
});

const routeTree = appLayout.addChildren([...publicRoutes, ...privateRoutes]);

const router = createRouter({ routeTree, defaultPreload: "intent" });
export default router;
