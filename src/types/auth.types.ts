interface IUser {
  lastName: string;
  firstName?: string;
}

export interface IAuth {
  auth: {
    isAuthenticated: true;
    user?: IUser;
  };
}
