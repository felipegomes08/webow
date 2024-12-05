import { ArrowBack } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import image from 'assets/touro.png';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Box
      height={'100vh'}
      width={'100vw'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <img src={image} width={'15%'} />
      <Typography variant="h1" marginBottom={2}>
        Opss... Página não encontrada!
      </Typography>
      <Link to={'/'}>
        <Button variant="contained" startIcon={<ArrowBack />}>
          Voltar
        </Button>
      </Link>
    </Box>
  );
};

export default PageNotFound;
