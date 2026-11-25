import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { App } from './app/App';
import { theme } from './app/theme';
import 'medeo-font/sans.css';
import './styles/main.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}><App /></ThemeProvider>
  </StrictMode>,
);
