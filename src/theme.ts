import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Light theme for the app
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#556cd6', // Your primary blue color
    },
    secondary: {
      main: '#19857b', // Teal color
    },
    error: {
      main: red.A400, // Red color for error
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
    },
  },
});

// Dark theme for the app
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Light blue for dark mode contrast
    },
    secondary: {
      main: '#80cbc4', // Lighter teal for secondary
    },
    error: {
      main: red.A200, // Slightly lighter red for error in dark mode
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    },
  },
});

export { darkTheme, lightTheme };
