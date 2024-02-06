import React from "react";
import { RouterProvider as TanstackRouterProvider } from "@tanstack/react-router";
import router from "./routes";

const RouterProvider = () => {
  return <TanstackRouterProvider router={router} />;
};

export default RouterProvider;
