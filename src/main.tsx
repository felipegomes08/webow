import { ThemeProvider } from '@emotion/react';
import '@fontsource/urbanist';
import '@fontsource/urbanist/400-italic.css';
import '@fontsource/urbanist/400.css';
import { CssBaseline } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import theme from './theme/theme.tsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer />
      <App />
    </ThemeProvider>
  </StrictMode>
);
