import { Button, InputAdornment } from '@mui/material';
import { grey } from '@mui/material/colors';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import theme from 'theme/theme';

const SearchNavbar = () => {
  return (
    <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Buscar"
        sx={{
          flexGrow: 1,
          fontSize: '12px',
          borderRadius: theme.shape.borderRadius,
          bgcolor: grey[50]
        }}
        endAdornment={
          <InputAdornment position="end" sx={{ color: 'text.primary' }}>
            <Button
              variant="contained"
              size="small"
              sx={{
                boxShadow: 'none',
                bgcolor: grey[200],
                color: grey[900],
                textTransform: 'capitalize',
                fontWeight: 'bold',
                fontSize: '10px',
                border: 'none',
                borderRadius: theme.shape.borderRadius
              }}
            >
              Enviar
            </Button>
          </InputAdornment>
        }
        inputProps={{
          'aria-label': 'search'
        }}
      />
    </FormControl>
  );
};

export default SearchNavbar;
