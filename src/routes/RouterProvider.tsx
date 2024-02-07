import React, { useEffect, useState } from "react";
import { RouterProvider as TanstackRouterProvider } from "@tanstack/react-router";
import router from "./routes";
import { store } from "../actions/auth.actions";

const RouterProvider = () => {
  return <TanstackRouterProvider router={router} context={{ store }} />;
};

export default RouterProvider;
