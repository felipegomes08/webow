import { LoginOutlined } from '@mui/icons-material';
import { Login } from 'pages/Login';

export const publicRoutes = [
  {
    path: '/login',
    element: <Login />,
    title: 'Login',
    icon: LoginOutlined
  }
];
