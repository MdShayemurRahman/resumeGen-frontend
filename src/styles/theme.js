import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Lato',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: 'Roboto, serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Roboto, serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Roboto, serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Roboto, serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'Roboto, serif',
      fontWeight: 700,
    },
    h6: {
      fontFamily: 'Roboto, serif',
      fontWeight: 700,
    },
    body1: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 400,
    },
    body2: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 400,
    },
    subtitle1: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 700,
    },
    subtitle2: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 700,
    },
  },
});

export default theme;
