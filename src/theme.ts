import {createTheme} from '@mui/material/styles';

// Module augmentation to add accent color tone
declare module '@mui/material/styles/createPalette' {
  interface Palette {
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    accent: PaletteOptions['primary'];
  }
}

// Theme can't reference itself
// Using this object makes editing constants across overrides easier
const forerunner = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
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
});

// Create a theme instance.
const theme = createTheme({
  spacing: 4,
  breakpoints: {
    values: forerunner.breakpoints?.values,
  },
  palette: forerunner.palette,
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
      color: forerunner.palette.primary.main,
      fontFamily: 'QanelasEB',
      fontStyle: 'italic',
      lineHeight: '75%',
      fontSize: '22vw',
    },
    h2: {
      fontFamily: 'QanelasEB',
      color: forerunner.palette.primary.main,
      fontStyle: 'italic',
      fontSize: '10vw',
    },
    h3: {
      color: forerunner.palette.secondary.main,
      fontStyle: 'italic',
      fontSize: '6vw',
    },
    subtitle1: {
      fontFamily: 'QanelasEB',
      color: forerunner.palette.accent.main,
      transform: 'rotate(-180deg)',
      writingMode: 'vertical-rl',
      textOrientation: 'sideways',
      fontSize: '8.7vw',
      lineHeight: '7.5vw',
    },
    body1: {
      color: forerunner.palette.secondary.main,
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
            color: forerunner.palette.primary.main,
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
          backgroundColor: forerunner.palette.background.default,
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: forerunner.palette.background.default,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          ':hover': {
            color: forerunner.palette.primary.main,
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
            backgroundColor: forerunner.palette.background.default,
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
    MuiLink: {
      styleOverrides: {
        root: {
          color: forerunner.palette.accent.main,
          fontSize: '4.5vw',
          ':hover': {
            color: forerunner.palette.secondary.main,
          },
        },
      },
      defaultProps: {
        underline: 'none',
      },
    },
  },
});

export default theme;
