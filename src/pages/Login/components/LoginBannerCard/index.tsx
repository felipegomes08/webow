import { IcecreamRounded } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const LoginBannerCard = () => {
  return (
    <Box
      position={'relative'}
      width={'65%'}
      display={['none', 'none', 'block']}
      height={'100%'}
      p={10}
      sx={{
        borderRadius: '40px',
        background:
          'linear-gradient(to bottom, rgb(255, 88, 0), rgb(255, 182, 146))'
      }}
    >
      <Typography
        width={'50%'}
        fontSize={'45px'}
        fontWeight={'400'}
        color={'grey.50'}
      >
        SLOGAN DO JOGO NESSE LOCAL. SLOGAN DO JOGO NESSE LOCAL.
      </Typography>
      <IcecreamRounded sx={{ position: 'absolute', bottom: 40, right: 40 }} />
    </Box>
  );
};

export default LoginBannerCard;
