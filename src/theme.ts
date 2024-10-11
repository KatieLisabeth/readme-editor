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
      main: '#1985aa99',
    },
    secondary: {
      main: '#19899a',
    },
    error: {
      main: '#f4a261',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#555555',
      secondary: '#16c197',
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
      main: '#90caf9',
    },
    secondary: {
      main: '#80cbc4',
    },
    error: {
      main: '#e76f51',
    },
    background: {
      default: '#0f172a',
      paper: '#0f122c',
    },
    text: {
      primary: '#16c197',
      secondary: '#16d287',
    },
  },
  customBackground: {
    gradient:
      'radial-gradient(circle, rgba(27,139,94,1) 0%, rgba(15,23,42,1) 94%)',
  },
});

export { darkTheme, lightTheme };
