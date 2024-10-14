import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customBackground: {
      gradient: string;
    };
  }

  interface ThemeOptions {
    customBackground?: {
      gradient?: string;
    };
  }
}

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#9AC8CD',
    },
    action: {
      hover: '#00999915',
    },
    secondary: {
      main: '#0E46A3',
    },
    error: {
      main: '#FF8551',
    },
    background: {
      default: '#ffffff',
      paper: '#E1F7F5',
    },
    text: {
      primary: '#555555',
      secondary: '#1E0342',
    },
  },
  customBackground: {
    gradient:
      'radial-gradient(circle, rgba(139,27,115,0.5) 0%, rgba(111,233,422,0.4) 94%)',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF71CD',
    },
    action: {
      hover: '#00999911',
    },
    secondary: {
      main: '#114ee9',
    },
    error: {
      main: '#FF71CD',
    },
    background: {
      default: '#0f172a',
      paper: '#0f122c',
    },
    text: {
      primary: '#16c197',
      secondary: '#37B7C3',
    },
  },
  customBackground: {
    gradient:
      'radial-gradient(circle, rgba(27,139,94,1) 0%, rgba(15,23,42,1) 94%)',
  },
});

export { darkTheme, lightTheme };
