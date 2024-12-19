import { UserResponse } from 'pages/User/types/UserApi.type';

export type AuthContextType = {
  authenticated: Boolean;
  signIn: Function;
  signOut: Function;
  loading: Boolean;
  user: UserResponse | null;
};

export type AuthContextProviderProps = {
  children: React.ReactElement;
};
