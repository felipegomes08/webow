import { AuthContext } from 'context/AuthContext';
import LoginBannerCard from 'pages/Login/components/LoginBannerCard';
import LoginFormCard from 'pages/Login/components/LoginFormCard';
import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Login = () => {
  const { authenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [pathname, setPathname] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const path = location.pathname;
    console.log(path);
    if (authenticated) navigate('/app/home');
    else setPathname(path);
    setLoading(false);
  }, [authenticated]);

  return (
    <>
      <LoginFormCard pathname={pathname} />
      <LoginBannerCard />
    </>
  );
};
