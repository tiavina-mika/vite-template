import React from "react";
import { RouterProvider as TanstackRouterProvider } from "@tanstack/react-router";
import router from "./routes";
import { getStore } from "../actions/auth.actions";

const RouterProvider = () => {
  const store = getStore();
  return <TanstackRouterProvider router={router} context={{ store }} />;
};

export default RouterProvider;
