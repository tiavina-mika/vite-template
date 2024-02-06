import { IAuthContext, IUser } from "../types/auth.types";

export const login = (user: IUser) => {
  const values: IAuthContext["store"] = {
    isAuthenticated: true,
    user,
  };

  localStorage.setItem("store", JSON.stringify(values));
};

export const logout = () => {
  localStorage.removeItem("store");
};

export const getStore = (): IAuthContext["store"] | null => {
  const store = localStorage.getItem("store");
  if (!store) return null;
  return JSON.parse(store);
};

export const getCurrentUser = (): IUser | null | undefined => {
  const store = getStore();
  if (!store) return null;
  return store.user;
};
