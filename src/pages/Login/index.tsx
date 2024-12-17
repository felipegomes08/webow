import { AuthContext } from 'context/AuthContext';
import LoginBannerCard from 'pages/Login/components/LoginBannerCard';
import LoginFormCard from 'pages/Login/components/LoginFormCard';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const { authenticated, signOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (authenticated) navigate('/app/home');
    else signOut();
    setLoading(false);
  }, [authenticated]);

  return (
    <>
      <LoginFormCard />
      <LoginBannerCard />
    </>
  );
};
