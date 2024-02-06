export interface IUser {
  lastName: string;
  firstName?: string;
}

export interface IAuthContext {
  store: {
    isAuthenticated: boolean;
    user?: IUser | null;
  } | null;
}
