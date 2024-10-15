import { RouterProvider } from 'react-router-dom';
import { dashboardRouter } from './routes/routes';

function App() {
  return <RouterProvider router={dashboardRouter} />;
}

export default App;
