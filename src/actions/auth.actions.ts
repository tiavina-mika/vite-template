import { IAuthContext, IUser } from "../types/auth.types";
import { delay } from "../utils/utils";

export const login = async (user: IUser) => {
  const values: IAuthContext["store"] = {
    isAuthenticated: true,
    user,
  };

  await delay(2000);
  localStorage.setItem("store", JSON.stringify(values));
};

export const logout = async () => {
  await delay(1000);
  localStorage.removeItem("store");
};

export const getStore = async (): Promise<IAuthContext["store"] | null> => {
  await delay(1000);
  const store = localStorage.getItem("store");
  if (!store) return null;
  return JSON.parse(store);
};

export const getCurrentUser = async (): Promise<IUser | null | undefined> => {
  const store = await getStore();
  if (!store) return null;
  return store.user;
};
