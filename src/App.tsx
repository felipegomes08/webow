import { AuthContextProvider } from 'context/AuthContext';
import { RouterProvider } from 'react-router-dom';
import { dashboardRouter } from 'routes/routes';

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={dashboardRouter} />
    </AuthContextProvider>
  );
}

export default App;
