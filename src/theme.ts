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

// Module augmentation to add scale
declare module '@mui/material/styles' {
  interface Theme {
    scale: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  }

  interface ThemeOptions {
    scale?: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
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
  scale: {
    xs: 1,
    sm: 0.65,
    md: 0.5,
    lg: 0.25,
    xl: 0.5,
  },
});

// Create a theme instance.
const theme = createTheme({
  spacing: 4,
  breakpoints: {
    values: forerunner.breakpoints?.values,
  },
  scale: forerunner.scale,
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
    // h3 is a buffer style
    h1: {
      color: forerunner.palette.primary.main,
      fontFamily: 'QanelasEB',
      fontStyle: 'italic',
      lineHeight: '75%',
      fontSize: `${22 * forerunner.scale.xs}vw`,
      [forerunner.breakpoints.up('sm')]: {
        fontSize: `${22 * forerunner.scale.sm}vw`,
      },
      [forerunner.breakpoints.up('md')]: {
        fontSize: `${22 * forerunner.scale.md}vw`,
      },
      [forerunner.breakpoints.up('lg')]: {
        fontSize: `${22 * forerunner.scale.lg}vw`,
      },
    },
    h2: {
      color: forerunner.palette.primary.main,
      fontFamily: 'QanelasEB',
      fontStyle: 'italic',
      lineHeight: '75%',
      fontSize: `${25 * forerunner.scale.xs}vw`,
      [forerunner.breakpoints.up('sm')]: {
        fontSize: `${25 * forerunner.scale.sm}vw`,
      },
      [forerunner.breakpoints.up('md')]: {
        fontSize: `${25 * forerunner.scale.md}vw`,
      },
      [forerunner.breakpoints.up('lg')]: {
        fontSize: `${25 * forerunner.scale.lg}vw`,
      },
    },
    // H4: Header text (CAPS BLACK ITALIC)
    h4: {
      fontFamily: 'QanelasEB',
      color: forerunner.palette.primary.main,
      fontStyle: 'italic',
      fontSize: '10vw',
      [forerunner.breakpoints.up('sm')]: {
        fontSize: `${10 * forerunner.scale.sm}vw`,
      },
      [forerunner.breakpoints.up('md')]: {
        fontSize: `${10 * forerunner.scale.md}vw`,
      },
      [forerunner.breakpoints.up('lg')]: {
        fontSize: `${10 * forerunner.scale.lg}vw`,
      },
    },
    h5: {
      color: forerunner.palette.secondary.main,
      fontStyle: 'italic',
      fontSize: '6vw',
      [forerunner.breakpoints.up('sm')]: {
        fontSize: `${6 * forerunner.scale.sm}vw`,
      },
      [forerunner.breakpoints.up('md')]: {
        fontSize: `${6 * forerunner.scale.md}vw`,
      },
      [forerunner.breakpoints.up('lg')]: {
        fontSize: `${6 * forerunner.scale.lg}vw`,
      },
    },
    // Vertical text
    subtitle1: {
      fontFamily: 'QanelasEB',
      color: forerunner.palette.accent.main,
      transform: 'rotate(-180deg)',
      writingMode: 'vertical-rl',
      textOrientation: 'sideways',
      fontSize: `${8.7 * forerunner.scale.xs}vw`,
      lineHeight: `${7.5 * forerunner.scale.xs}vw`,
      textAlign: 'center',
      [forerunner.breakpoints.up('sm')]: {
        fontSize: `${8.7 * forerunner.scale.sm}vw`,
        lineHeight: `${7.5 * forerunner.scale.sm}vw`,
      },
      [forerunner.breakpoints.up('md')]: {
        fontSize: `${8.7 * forerunner.scale.md}vw`,
        lineHeight: `${7.5 * forerunner.scale.md}vw`,
      },
      [forerunner.breakpoints.up('lg')]: {
        fontSize: `${8.7 * forerunner.scale.lg}vw`,
        lineHeight: `${7.5 * forerunner.scale.lg}vw`,
      },
    },
    // body1: normal body text
    body1: {
      color: forerunner.palette.secondary.main,
      fontSize: '4.5vw',
      lineHeight: '5vw',
      [forerunner.breakpoints.up('sm')]: {
        fontSize: `${4.5 * forerunner.scale.sm}vw`,
        lineHeight: `${5 * forerunner.scale.sm}vw`,
      },
      [forerunner.breakpoints.up('md')]: {
        fontSize: `${4.5 * forerunner.scale.sm}vw`,
        lineHeight: `${5 * forerunner.scale.sm}vw`,
      },
      [forerunner.breakpoints.up('lg')]: {
        fontSize: `${4.5 * forerunner.scale.lg}vw`,
        lineHeight: `${5 * forerunner.scale.lg}vw`,
      },
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
          fontSize: `${6 * forerunner.scale.xs}vw`,
          [forerunner.breakpoints.up('sm')]: {
            fontSize: `${6 * forerunner.scale.sm}vw`,
          },
          [forerunner.breakpoints.up('md')]: {
            fontSize: `${6 * forerunner.scale.md}vw`,
          },
          [forerunner.breakpoints.up('lg')]: {
            fontSize: `${6 * forerunner.scale.lg}vw`,
          },
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
        disableFocusRipple: true,
        disableTouchRipple: true,
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
      styleOverrides: {
        root: {
          color: forerunner.palette.secondary.main,
          fontSize: '6vw',
          ':hover': {
            color: forerunner.palette.primary.main,
          },
          [forerunner.breakpoints.up('sm')]: {
            fontSize: `${6 * forerunner.scale.sm}vw`,
          },
          [forerunner.breakpoints.up('md')]: {
            fontSize: `${6 * forerunner.scale.md}vw`,
          },
          [forerunner.breakpoints.up('lg')]: {
            fontSize: `${6 * forerunner.scale.lg}vw`,
          },
        },
      },
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
          fontSize: '6vw',
          ':hover': {
            color: forerunner.palette.secondary.main,
          },
          [forerunner.breakpoints.up('sm')]: {
            fontSize: `${6 * forerunner.scale.sm}vw`,
          },
          [forerunner.breakpoints.up('md')]: {
            fontSize: `${6 * forerunner.scale.md}vw`,
          },
          [forerunner.breakpoints.up('lg')]: {
            fontSize: `${6 * forerunner.scale.lg}vw`,
          },
        },
      },
      defaultProps: {
        underline: 'none',
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: `${30 * forerunner.scale.xs}vw`,
          height: `${30 * forerunner.scale.xs}vw`,
          [forerunner.breakpoints.up('sm')]: {
            width: `${30 * forerunner.scale.sm}vw`,
            height: `${30 * forerunner.scale.sm}vw`,
          },
          [forerunner.breakpoints.up('md')]: {
            width: `${30 * forerunner.scale.md}vw`,
            height: `${30 * forerunner.scale.md}vw`,
          },
          [forerunner.breakpoints.up('lg')]: {
            width: `${30 * forerunner.scale.lg * 1.25}vw`,
            height: `${30 * forerunner.scale.lg * 1.25}vw`,
          },
        },
      },
    },
  },
});

export default theme;
