import { createContext, useState } from 'react';
import { loginApi, logoutApi } from 'services/authService';
import { AuthContextProviderProps, AuthContextType } from './AuthContext.type';

const AuthContext = createContext<AuthContextType>({
  authenticated: false,
  signIn: () => {},
  signOut: () => {}
});

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [authenticated, setAuthenticated] = useState(false);

  const signIn = async (cpf: string, password: string) => {
    try {
      const data = await loginApi(cpf, password);
      setAuthenticated(true);
      localStorage.setItem('accessToken', data.accessToken);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await logoutApi();
      setAuthenticated(false);
      localStorage.removeItem('accessToken');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      throw error;
    }
  };
  return (
    <AuthContext.Provider value={{ authenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
