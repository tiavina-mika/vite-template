interface IUser {
  lastName: string;
  firstName?: string;
}

export interface IAuthContext {
  auth: {
    isAuthenticated: boolean;
    user?: IUser | null;
  };
}
