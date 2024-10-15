import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import brand from 'assets/brand.svg';
import MenuContent from 'components/layouts/dashboard/MenuContent';
import SelectProject from 'components/layouts/dashboard/SelectProject';
import React from 'react';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}));

const SideMenu = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Drawer
        sx={{
          width: open ? drawerWidth : 0,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            border: 'none'
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Box display={'flex'} justifyContent={'center'} width={'100%'}>
            <img src={brand} width={'60%'} />
          </Box>
          <IconButton
            onClick={handleDrawerClose}
            color="inherit"
            aria-label="close drawer"
            sx={[
              {
                backgroundColor: grey[200],
                borderRadius: theme.shape.borderRadius
              }
            ]}
          >
            <MenuIcon fontSize={'small'} />
          </IconButton>
        </DrawerHeader>
        <Box
          height={'100%'}
          display={'flex'}
          flexDirection={'column'}
          paddingX={2}
          paddingTop={4}
        >
          <Box
            borderRadius={theme.shape.borderRadius}
            sx={{ background: grey[50], border: `solid ${grey[400]} 1px` }}
          >
            <Box
              sx={{
                display: 'flex',
                mt: 'calc(var(--template-frame-height, 0px) + 4px)',
                p: 1.5
              }}
            >
              <SelectProject />
            </Box>

            <MenuContent />
          </Box>
        </Box>
      </Drawer>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={[
          {
            backgroundColor: grey[300],
            borderRadius: theme.shape.borderRadius,
            ml: 1,
            mt: 1
          },
          open && { display: 'none' }
        ]}
      >
        <MenuIcon fontSize={'small'} />
      </IconButton>
    </Box>
  );
};

export default SideMenu;
