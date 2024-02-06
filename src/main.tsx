import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  Outlet,
  // RouterProvider,
  Link,
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import CustomRouterProvider from "./routes/RouterProvider";
import router from "./routes/routes";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("app")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <CustomRouterProvider />
    </StrictMode>,
  );
}
