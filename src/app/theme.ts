import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  cssVariables: { nativeColor: true },
  palette: {
    primary: { main: 'var(--color-primary)', contrastText: 'var(--color-surface)' },
    secondary: { main: 'var(--color-accent)', contrastText: 'var(--color-text-primary)' },
    background: { default: 'var(--color-background)', paper: 'var(--color-surface)' },
    text: { primary: 'var(--color-text-primary)', secondary: 'var(--color-text-secondary)' },
    divider: 'var(--color-border)',
    success: { main: 'var(--color-success)' },
    warning: { main: 'var(--color-warning)' },
    error: { main: 'var(--color-error)' },
  },
  typography: {
    fontFamily: 'var(--font-family-base)',
    h1: { fontSize: 'var(--font-size-h1)', lineHeight: 'var(--line-height-display)', fontWeight: 'var(--font-weight-bold)' },
    h2: { fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-heading)', fontWeight: 'var(--font-weight-bold)' },
    h3: { fontSize: 'var(--font-size-h3)', lineHeight: 'var(--line-height-heading)', fontWeight: 'var(--font-weight-bold)' },
    body1: { fontSize: 'var(--font-size-body)', lineHeight: 'var(--line-height-body)' },
    body2: { fontSize: 'var(--font-size-body-small)', lineHeight: 'var(--line-height-body-small)' },
    button: { fontSize: 'var(--font-size-button)', fontWeight: 'var(--font-weight-semibold)', textTransform: 'none' },
  },
  shape: { borderRadius: 'var(--radius-sm)' },
  spacing: (factor: number) => `calc(var(--space-1) * ${factor})`,
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 'var(--radius-sm)', boxShadow: 'none' } } },
    MuiPaper: { styleOverrides: { root: { border: 'var(--border-width) var(--border-style) var(--border-color)' } } },
  },
});
