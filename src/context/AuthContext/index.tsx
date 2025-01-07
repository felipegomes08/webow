import { UserType } from 'enums/enums';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { LoginResponse } from 'pages/Login/types/Login.type';
import { UserResponse } from 'pages/User/types/UserApi.type';
import { createContext, useEffect, useState } from 'react';
import api from 'services/api';
import { getApi } from 'services/apiService';
import { loginApi } from 'services/authService';
import { APIResponse } from 'types/api/Api.type';
import { AuthContextProviderProps, AuthContextType } from './AuthContext.type';

const AuthContext = createContext({} as AuthContextType);

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState<UserResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const validateData = async () => {
      setLoading(true);
      const { 'webow.refreshToken': refreshToken } = parseCookies();
      const accessToken = localStorage.getItem('webow.accessToken');
      const currentUserId = localStorage.getItem('webow.currentUserId');
      if (accessToken && currentUserId && refreshToken) {
        const response: APIResponse = await getApi({
          url: `/users/${currentUserId}`
        });
        if (response.success) setUser(response.data);
        setAuthenticated(true);
      } else {
        signOut();
      }
      setLoading(false);
    };

    validateData();
  }, []);

  const signIn = async (cpf: string, password: string) => {
    const res = await loginApi(cpf, password)
      .then((response: LoginResponse) => {
        if (response.success) {
          if (response.data.userTypeId !== UserType.ADMINISTRATOR)
            return {
              success: false,
              message: 'Você não possui permissão para acessar a plataforma'
            };
          api.defaults.headers.Authorization = `Bearer ${response.data.accessToken}`;
          localStorage.setItem('webow.accessToken', response.data.accessToken);

          setCookie(
            undefined,
            'webow.refreshToken',
            response.data.refreshToken,
            {
              maxAge: 30 * 24 * 60 * 60, // 30 days
              path: '/',
              secure: true,
              sameSite: 'strict'
            }
          );
          localStorage.setItem('webow.currentUserId', response.data.id);
          setUser(response.data);
          setAuthenticated(true);
          return response;
        }
      })
      .catch((err) => err.response.data);
    return res;
  };

  const signOut = async () => {
    setAuthenticated(false);
    localStorage.removeItem('webow.accessToken');
    localStorage.removeItem('webow.currentUserId');
    destroyCookie(null, 'webow.refreshToken', {
      path: '/'
    });
    setUser(null);
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
