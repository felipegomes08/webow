import { setCookie } from 'nookies';
import { LoginResponse } from 'pages/Login/types/Login.type';
import { UserResponse } from 'pages/User/types/UserApi.type';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from 'services/api';
import { loginApi } from 'services/authService';
import { AuthContextProviderProps, AuthContextType } from './AuthContext.type';

const AuthContext = createContext({} as AuthContextType);

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState<UserResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setAuthenticated(true);
    } else {
      signOut();
    }
    setLoading(false);
  }, []);

  const signIn = async (cpf: string, password: string) => {
    const res = await loginApi(cpf, password)
      .then((response: LoginResponse) => {
        if (response.success) {
          setCookie(undefined, 'webow.accessToken', response.data.accessToken, {
            maxAge: 60 * 60 * 1
          });
          setUser(response.data);
          // localStorage.setItem('accessToken', response.data.accessToken);
          // localStorage.setItem('currentUserName', response.data.name);
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
  };

  return (
    <AuthContext.Provider
      value={{ authenticated, signIn, signOut, loading, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
