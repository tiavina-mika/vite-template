import React, { useEffect, useState } from "react";
import { RouterProvider as TanstackRouterProvider } from "@tanstack/react-router";
import router from "./routes";
import { getStore } from "../actions/auth.actions";
import { IAuthContext } from "src/types/auth.types";

const RouterProvider = () => {
  const [store, setStore] = useState<IAuthContext["store"] | null>(null);

  useEffect(() => {
    const init = async () => {
      const currentStore = await getStore();
      setStore(currentStore);
    };
    init();
  }, [getStore]);

  return <TanstackRouterProvider router={router} context={{ store }} />;
};

export default RouterProvider;
