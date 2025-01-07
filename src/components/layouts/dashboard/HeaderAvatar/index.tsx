import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import {
  Avatar,
  Box,
  Button,
  Divider,
  dividerClasses,
  listClasses,
  ListItemIcon,
  listItemIconClasses,
  ListItemText,
  Menu,
  MenuItem,
  Modal,
  paperClasses,
  Stack,
  Typography
} from '@mui/material';
import { grey } from '@mui/material/colors';
import MenuButton from 'components/layouts/dashboard/MenuButton';
import { AuthContext } from 'context/AuthContext';
import React, { useContext } from 'react';
import theme from 'theme/theme';

const HeaderAvatar = () => {
  const { user, signOut } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openConfirmation, setOpenConfirmation] = React.useState(false);
  const handleOpenConfirmation = () => setOpenConfirmation(true);
  const handleCloseConfirmation = () => setOpenConfirmation(false);
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

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: theme.shape.borderRadius,
    boxShadow: 24,
    p: 4
  };

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
        <MenuItem onClick={handleClose}>Perfil</MenuItem>
        <Divider />

        <MenuItem
          onClick={handleOpenConfirmation}
          sx={{
            [`& .${listItemIconClasses.root}`]: {
              ml: 'auto',
              minWidth: 0
            }
          }}
        >
          <ListItemText>Sair</ListItemText>
          <ListItemIcon>
            <LogoutRoundedIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
      </Menu>
      <Modal
        open={openConfirmation}
        onClose={handleCloseConfirmation}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirmação
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Tem certeza que deseja sair?
          </Typography>
          <Stack mt={4} spacing={2} direction="row" justifyContent={'flex-end'}>
            <Button variant="contained" onClick={() => signOut()}>
              Sair
            </Button>
            <Button
              variant="outlined"
              onClick={() => handleCloseConfirmation()}
            >
              Cancelar
            </Button>
          </Stack>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default HeaderAvatar;
