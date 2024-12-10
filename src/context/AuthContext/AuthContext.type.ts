export type AuthContextType = {
  authenticated: Boolean;
  signIn: Function;
  signOut: Function;
};

export type AuthContextProviderProps = {
  children: React.ReactElement;
};
