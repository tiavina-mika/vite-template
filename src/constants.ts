import { IAuthContext } from "./types/auth.types";

/**
 * mock global state or a context
 * it's mutable so it will be changed directly (mutable)
 */
export const auth: IAuthContext['auth'] = {
  isAuthenticated: false,
  user: null,
};

// export const auth = {
//     isAuthenticated: true,
//     user: {
//         lastName: 'Mik'
//     }
// }
