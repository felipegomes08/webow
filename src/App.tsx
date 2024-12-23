import { AuthContextProvider } from 'context/AuthContext';
import { MetadataProvider } from 'context/MetadataContext';
import { RouterProvider } from 'react-router-dom';
import { dashboardRouter } from 'routes/routes';

function App() {
  return (
    <AuthContextProvider>
      <MetadataProvider>
        <RouterProvider router={dashboardRouter} />
      </MetadataProvider>
    </AuthContextProvider>
  );
}

export default App;
