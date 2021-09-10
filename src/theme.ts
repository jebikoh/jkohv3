import {createTheme} from '@mui/material/styles';
import {ReactText} from 'react';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    accent: PaletteOptions['primary'];
  }
}

// Create a theme instance.
const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#202020',
    },
    secondary: {
      main: '#8F8F8F',
    },
    accent: {
      main: '#D6D5D5',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFAFA',
    },
  },
  typography: {
    fontFamily: [
      'QanelasSB',
      'Arial',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      color: '#202020',
      fontFamily: 'QanelasEB',
      fontStyle: 'italic',
      lineHeight: '75%',
      fontSize: '22vw',
    },
    h2: {
      fontFamily: 'QanelasEB',
      color: '#202020',
      fontStyle: 'italic',
      fontSize: '10vw',
    },
    subtitle1: {
      fontFamily: 'QanelasEB',
      color: '#D6D5D5',
      transform: 'rotate(-180deg)',
      writingMode: 'vertical-rl',
      textOrientation: 'sideways',
      fontSize: '8.7vw',
      lineHeight: '7.5vw',
    },
    body1: {
      color: '#8F8F8F',
      fontSize: '4.5vw',
      lineHeight: '5vw',
      textAlign: 'justify',
      textJustify: 'inter-character',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          ':hover': {
            color: '#202020',
          },
          padding: '0',
          fontSize: '6vw',
        },
      },
      defaultProps: {
        disableRipple: true,
        color: 'secondary',
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          ':hover': {
            color: '#202020',
          },
        },
      },
      defaultProps: {
        color: 'secondary',
        disableRipple: true,
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          ':hover': {
            backgroundColor: '#FFFFFF',
          },
          padding: 0,
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiListItemText: {
      defaultProps: {
        primaryTypographyProps: {
          fontSize: '6vw',
        },
        secondaryTypographyProps: {
          fontSize: '6vw',
          fontStyle: 'italic',
        },
      },
    },
  },
});

export default theme;
