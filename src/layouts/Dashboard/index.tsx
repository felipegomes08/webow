import { Drawer } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { alpha } from '@mui/material/styles';
import Header from 'components/layouts/dashboard/Header';
import PageTitle from 'components/layouts/dashboard/PageTitle';
import SideMenu from 'components/layouts/dashboard/SideMenu';
import useActivePath from 'hooks/useActivePath';
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { layoutPadding, sidebarWidth } from 'theme/globalStyles';
import theme from 'theme/theme';

const Dashboard = (_: { disableCustomTheme?: boolean }) => {
  const location = useLocation();
  const activePath = useActivePath(location);
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box
      width={'100vw'}
      height={'100vh'}
      sx={{ overflowX: 'hidden', padding: 0, margin: 0 }}
    >
      <CssBaseline enableColorScheme />
      <Header
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <Drawer
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            border: 'none',
            marginTop: '60px',
            py: layoutPadding,
            pl: layoutPadding
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <SideMenu />
      </Drawer>
      <Box
        marginLeft={`calc(${sidebarWidth} + ${layoutPadding})`}
        component="main"
        sx={{
          backgroundColor: alpha(theme.palette.background.default, 1),
          overflow: 'auto',
          p: layoutPadding
        }}
      >
        <PageTitle
          title={activePath?.title}
          breadcrumb={activePath?.breadcrumbs}
        />
        <Box width={'100%'}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
