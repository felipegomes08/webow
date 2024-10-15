import Dashboard from 'layouts/Dashboard';
import { createBrowserRouter } from 'react-router-dom';
import { localRoutes } from 'routes/localRoutes';

export const dashboardRouter = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    children: localRoutes
  }
]);
