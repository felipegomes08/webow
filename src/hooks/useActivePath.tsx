import { Location } from 'react-router-dom';
import { localRoutes } from 'routes/localRoutes';

const useActivePath = (location: Location) => {
  const path = location.pathname;
  return localRoutes.find((x) => x.path === path);
};

export default useActivePath;
