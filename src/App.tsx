import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@mui/material/styles';
import { MarkdownProvider } from 'config/Context';
import Footer from 'navigation/Footer';
import Sidebar from 'navigation/Sidebar';
import { useEffect, useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import AppRoutes from 'routes/AppRoutes';
import { darkTheme, lightTheme } from './theme';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : false;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const handleThemeSwitch = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Router>
        <MarkdownProvider>
          <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />

            {/* Main Content Area */}
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  padding: '.5rem',
                  position: 'relative',
                  zIndex: 10,
                }}
              >
                {/* Theme Switch Button */}
                <IconButton onClick={handleThemeSwitch} color="inherit">
                  {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  padding: '1rem',
                }}
              >
                <AppRoutes />
              </Box>

              {/* Footer */}
              <Footer />
            </Box>
          </Box>
        </MarkdownProvider>
      </Router>
    </ThemeProvider>
  );
}