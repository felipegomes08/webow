import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import {
  Avatar,
  Box,
  Divider,
  dividerClasses,
  listClasses,
  ListItemIcon,
  listItemIconClasses,
  ListItemText,
  Menu,
  MenuItem,
  paperClasses
} from '@mui/material';
import { grey } from '@mui/material/colors';
import MenuButton from 'components/layouts/dashboard/MenuButton';
import { AuthContext } from 'context/AuthContext';
import React, { useContext } from 'react';
import theme from 'theme/theme';

const HeaderAvatar = () => {
  const { user } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function stringAvatar(name: string) {
    const nameSplitted = name.split(' ');
    let nameFormatted = '';
    nameSplitted.forEach((name) => {
      nameFormatted += name[0];
    });
    return {
      children: nameFormatted
    };
  }
  return (
    <React.Fragment>
      <MenuButton
        aria-label="Open menu"
        onClick={handleClick}
        sx={{
          borderColor: 'transparent',
          ':hover': { bgcolor: 'transparent' }
        }}
      >
        <Box display={'flex'} alignItems={'center'}>
          <Avatar
            {...stringAvatar(user?.name ? user.name : '-')}
            src="/broken-image.jpg"
            sx={{
              borderRadius: theme.shape.borderRadius,
              width: 34,
              height: 34,
              bgcolor: grey[300],
              color: grey[900],
              fontSize: '11px',
              fontWeight: 'bold'
            }}
          />
          <KeyboardArrowDownIcon sx={{ color: grey[900], fontSize: '18px' }} />
        </Box>
      </MenuButton>
      <Menu
        anchorEl={anchorEl}
        id="menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        sx={{
          [`& .${listClasses.root}`]: {
            padding: '4px'
          },
          [`& .${paperClasses.root}`]: {
            padding: 0
          },
          [`& .${dividerClasses.root}`]: {
            margin: '4px -4px'
          }
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Add another account</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <Divider />
        <MenuItem
          onClick={handleClose}
          sx={{
            [`& .${listItemIconClasses.root}`]: {
              ml: 'auto',
              minWidth: 0
            }
          }}
        >
          <ListItemText>Logout</ListItemText>
          <ListItemIcon>
            <LogoutRoundedIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default HeaderAvatar;
