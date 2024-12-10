import { RouterProvider } from 'react-router-dom';
import { dashboardRouter } from 'routes/routes';
import {AuthContextProvider} from 'context/AuthContext'

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={dashboardRouter} />
    </AuthContextProvider>
  );
}

export default App;
