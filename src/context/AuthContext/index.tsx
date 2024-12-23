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
      const { 'webow.accessToken': accessToken } = parseCookies();
      const { 'webow.currentUserId': currentUserId } = parseCookies();
      if (accessToken && currentUserId) {
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
          api.defaults.headers.Authorization = `Bearer ${response.data.accessToken}`;
          setCookie(undefined, 'webow.accessToken', response.data.accessToken, {
            maxAge: 60 * 15 //15 minutes
          });
          setCookie(undefined, 'webow.currentUserId', response.data.id, {
            maxAge: 60 * 15 //15 minutes
          });
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
    destroyCookie(undefined, 'webow.accessToken');
    destroyCookie(undefined, 'webow.currentUserId');
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
