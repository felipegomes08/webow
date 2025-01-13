import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton } from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import brand from 'assets/brand.svg';
import Avatar from 'components/layouts/dashboard/HeaderAvatar';
import SearchNavbar from 'components/layouts/dashboard/SearchNavbar';
import { headerHeight, layoutPadding } from 'theme/globalStyles';
import theme from 'theme/theme';
import { HeaderProps } from './HeaderProps.type';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}));
const Header = ({ open, handleDrawerOpen, handleDrawerClose }: HeaderProps) => {
  return (
    <Box
      height={headerHeight}
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1700px' },
        px: layoutPadding
      }}
    >
      <Box display={'flex'} justifyContent={'space-between'} width={240}>
        <img src={brand} width={'60%'} />
        <IconButton
          onClick={open ? handleDrawerClose : handleDrawerOpen}
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
      </Box>
      <Box margin={'auto'}>
        <SearchNavbar />
      </Box>
      <Avatar />
    </Box>
  );
};

export default Header;
