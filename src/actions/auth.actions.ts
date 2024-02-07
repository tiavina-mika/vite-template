import { IAuthContext, IUser } from "../types/auth.types";
import { delay } from "../utils/utils";

// mock data
export const store: IAuthContext["store"] = {
  isAuthenticated: false,
  user: null,
};
export const login = async (user: IUser) => {
  await delay(2000);
  store.isAuthenticated = true;
  store.user = user;
};

export const logout = async () => {
  await delay(1000);
  store.isAuthenticated = false;
  store.user = null;
};

export const getStore = async (): Promise<IAuthContext["store"] | null> => {
  await delay(1000);
  const store = localStorage.getItem("store");
  if (!store) return null;
  return JSON.parse(store);
};

export const getCurrentUser = async (): Promise<IUser | null | undefined> => {
  await delay(1000);
  return store.user;
};
