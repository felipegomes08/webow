import Auth from 'layouts/Auth';
import Dashboard from 'layouts/Dashboard';
import PageNotFound from 'layouts/PageNotFound';
import { createBrowserRouter } from 'react-router-dom';
import { privateRoutes } from 'routes/privateRoutes';
import { publicRoutes } from 'routes/publicRoutes';

export const dashboardRouter = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
    children: publicRoutes
  },
  {
    path: '/app',
    element: <Dashboard />,
    children: privateRoutes,
    errorElement: <PageNotFound />
  }
]);
