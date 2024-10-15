import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Avatar from 'components/layouts/dashboard/HeaderAvatar';
import SearchNavbar from 'components/layouts/dashboard/SearchNavbar';

const Header = () => {
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5
      }}
      spacing={2}
    >
      <Stack direction="row" width={'100%'} justifyContent={'space-between'}>
        <Box margin={'auto'}>
          <SearchNavbar />
        </Box>
        <Avatar />
      </Stack>
    </Stack>
  );
};

export default Header;
