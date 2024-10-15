import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  shape: { borderRadius: 3 },
  palette: {
    primary: {
      main: '#ff5900',
      light: '#ff5900',
      dark: '#ff5900',
    },
    background: { default: grey[100] },
    grey: {
      '50': '#ffffff',
      '100': '#fcfcfc',
      '200': '#efefef',
      '300': '#e2e2e2',
      '400': '#d4d4d4',
      '500': '#b0b0b0',
      '600': '#8f8f8f',
      '700': '#676767',
      '800': '#545454',
      '900': '#161616',
    },
  },
  typography: {
    fontFamily: 'Urbanist, sans-serif',
    h1: { fontSize: 22, fontWeight: '600', color: grey[900], letterSpacing: 1 },
    h2: { fontSize: 18, fontWeight: '500', color: grey[900] },
    h3: { fontSize: 12, fontWeight: 'bold', color: grey[900] },
    h4: { fontSize: 10, fontWeight: 'normal', color: grey[900] },
    subtitle1: { fontSize: 12, fontWeight: 'normal', color: grey[600] },
    subtitle2: { fontSize: 10, fontWeight: 'normal', color: grey[600] },
  },
  components: {
    MuiDrawer: { styleOverrides: { paper: { background: grey[100] } } },
  },
});

export default theme;
