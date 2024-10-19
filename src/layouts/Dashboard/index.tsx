import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { alpha } from '@mui/material/styles';
import Header from 'components/layouts/dashboard/Header';
import PageTitle from 'components/layouts/dashboard/PageTitle';
import SideMenu from 'components/layouts/dashboard/SideMenu';
import useActivePath from 'hooks/useActivePath';
import { Outlet, useLocation } from 'react-router-dom';

const Dashboard = (props: { disableCustomTheme?: boolean }) => {
  const location = useLocation();
  const activePath = useActivePath(location);
  return (
    <Box width={'100vw'} height={'100vh'} sx={{ overflowX: 'hidden' }}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: alpha(theme.palette.background.default, 1),
            overflow: 'auto'
          })}
        >
          <Header />
          <PageTitle
            title={activePath?.title}
            breadcrumb={activePath?.breadcrumbs}
          />
          <Box width={'100%'} pr={2}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
