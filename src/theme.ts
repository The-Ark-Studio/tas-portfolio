'use client';
import { createTheme } from '@mui/material/styles';
import { Be_Vietnam_Pro } from 'next/font/google';

const beVNPro = Be_Vietnam_Pro({
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});
const theme = createTheme({
  components: {
    MuiGrid: {
      styleOverrides: {},
    },
  },
  typography: {
    fontFamily: beVNPro.style.fontFamily,
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
