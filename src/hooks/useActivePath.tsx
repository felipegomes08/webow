import { Location } from 'react-router-dom';
import { privateRoutes } from 'routes/privateRoutes';

const useActivePath = (location: Location) => {
  const path = location.pathname;
  return privateRoutes.find((x) => '/app/' + x.path === path);
};

export default useActivePath;
