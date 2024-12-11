import { LoginResponse } from 'pages/Login/types/Login.type';
import { createContext, useEffect, useState } from 'react';
import api from 'services/api';
import { loginApi } from 'services/authService';
import { AuthContextProviderProps, AuthContextType } from './AuthContext.type';

const AuthContext = createContext<AuthContextType>({
  authenticated: false,
  signIn: () => {},
  signOut: () => {},
  loading: false
});

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      api.defaults.headers.Authorization = `Bearer ${accessToken}`;
      setAuthenticated(true);
    } else {
      signOut();
    }
  }, []);

  const signIn = async (cpf: string, password: string) => {
    const res = await loginApi(cpf, password)
      .then((response: LoginResponse) => {
        if (response.success) {
          localStorage.setItem('accessToken', response.data.accessToken);
          localStorage.setItem('currentUserName', response.data.name);
          api.defaults.headers.Authorization = `Bearer ${response.data.accessToken}`;
          setAuthenticated(true);
          return response;
        }
      })
      .catch((err) => err.response.data);
    return res;
  };

  const signOut = async () => {
    setAuthenticated(false);
    localStorage.removeItem('accessToken');
    api.defaults.headers.Authorization = null;
  };
  return (
    <AuthContext.Provider value={{ authenticated, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
