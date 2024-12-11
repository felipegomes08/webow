import { createContext, useState } from 'react';
import { loginApi, logoutApi } from 'services/authService';
import { AuthContextProviderProps, AuthContextType } from './AuthContext.type';
import { NavigateFunction } from 'react-router-dom';
import { LoginResponse } from 'pages/Login/types/Login.type';

const AuthContext = createContext<AuthContextType>({
  authenticated: false,
  signIn: () => {},
  signOut: () => {},
  loading: false
});

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const signIn = async (cpf: string, password: string) => {
    setLoading(true);
    let res = null
    await loginApi(cpf, password).then((response: LoginResponse) => {
      if(response.success) {
        setAuthenticated(true);
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('currentUserName', response.data.name);
        res = response
      }
    })
    .catch(err => res = err.response.data)
    .finally(() => {
      setLoading(false);
    })
    return res
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
    <AuthContext.Provider value={{ authenticated, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
