import Box from '@mui/material/Box';
import { AuthContext } from 'context/AuthContext';
import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Auth = () => {
  const { authenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (authenticated) navigate('/app');
    else navigate('/login');
  }, []);
  return (
    <Box
      width={'100vw'}
      height={'100vh'}
      display={'flex'}
      sx={{ overflowX: 'hidden', padding: 4, margin: 0 }}
    >
      <Outlet />
    </Box>
  );
};

export default Auth;
