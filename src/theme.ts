import {createTheme} from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    accent: PaletteOptions['primary'];
  }
}

// Create a theme instance.
const theme = createTheme({
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
      fontFamily: 'QanelasEB',
      fontStyle: 'italic',
      lineHeight: '75%',
      fontSize: '22vw',
    },
    h2: {
      fontFamily: 'QanelasEB',
      color: '#D6D5D5',
      transform: 'rotate(-180deg)',
      writingMode: 'vertical-rl',
      textOrientation: 'sideways',
      fontSize: '15vw',
      lineHeight: '2.5em',
    },
    subtitle1: {
      fontFamily: 'QanelasEB',
      color: '#D6D5D5',
      transform: 'rotate(-180deg)',
      writingMode: 'vertical-rl',
      textOrientation: 'sideways',
      fontSize: '15vw',
      lineHeight: '2.5em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          ':hover': {
            color: '#202020',
          },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButtonGroup: {
      styleOverrides: {},
      defaultProps: {
        disableRipple: true,
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
    // MuiToolbar: {
    //   styleOver
    // }
  },
});

export default theme;
