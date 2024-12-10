export type AuthContextType = {
  authenticated: Boolean;
  signIn: Function;
  signOut: Function;
  loading: Boolean
};

export type AuthContextProviderProps = {
  children: React.ReactElement;
};
