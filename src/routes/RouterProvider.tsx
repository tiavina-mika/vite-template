import React from "react";
import { RouterProvider as TanstackRouterProvider } from "@tanstack/react-router";
import router from "./routes";
import { auth } from "../constants";

const RouterProvider = () => {
  return <TanstackRouterProvider router={router} context={{ auth }} />;
};

export default RouterProvider;
