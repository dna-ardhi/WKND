import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.

const theme = createTheme({
  palette: {
    primary: {
      main: '#EEBECE',
      light: '#fcdee8',
      dark: '#FF8787',
    },
    secondary: {
      main: '#0B24FB',
      light: '#3348ff',
      dark: '#0217c7',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ['Work Sans', 'Roboto', 'sans-serif'].join(','),
    h1: {
      fontSize: '3.5rem',
      fontWeight: 900,
    },
    h6: {
      fontSize: '0.8rem',
    },
    subtitle1: {
      fontStyle: 'italic',
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1.5rem',
      lineHeight: 1.5,
      fontWeight: 500,
    },
    body2: {
      textAlign: 'center',
    },
    body3: {
      fontSize: '0.75rem',
      lineHeight: 1.5,
    },
    body4: {
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    caption: {
      fontSize: '1.25rem',
      fontStyle: 'italic',
      fontWeight: 500,
    },
    subtitle3: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: 1.5,
    },
    subtitle4: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
  },
});

theme.typography.h2 = {
  fontSize: '2rem',
  fontWeight: 900,
  [theme.breakpoints.up('md')]: {
    textAlign: 'center',
  },
};

theme.typography.body4 = {
  [theme.breakpoints.up('md')]: {
    textAlign: 'center',
  },
};

export default theme;
