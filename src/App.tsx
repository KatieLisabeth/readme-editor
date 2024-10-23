import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@mui/material/styles';
import SearchBar from 'components/SearchBar';
import { MarkdownProvider } from 'config/Context';
import Footer from 'navigation/Footer';
import Sidebar from 'navigation/Sidebar';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from 'routes/AppRoutes';
import { darkTheme, lightTheme } from './theme';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : false;
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
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
          <Box sx={{ display: 'flex', height: '100vh' }}>
            <Sidebar />

            {/* Main Content Area */}
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                margin: 0,
              }}
            >
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
                <SearchBar />
                {/* Switch Button */}
                <IconButton
                  onClick={handleThemeSwitch}
                  color="inherit"
                  sx={{ m: 1 }}
                >
                  {isDarkMode ? (
                    <LightModeIcon color="warning" />
                  ) : (
                    <DarkModeIcon color="info" />
                  )}
                </IconButton>
              </Box>
              {/* Body */}
              <Box
                sx={{
                  flex: 1,
                  paddingX: '1rem',
                }}
              >
                {/* Github star button */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '14px',
                    zIndex: 10,
                  }}
                >
                  <iframe
                    src="https://ghbtns.com/github-btn.html?user=katielisabeth&repo=readme-editor&type=star&count=true&size=small"
                    width="170"
                    height="30"
                    title="GitHub"
                    style={{ border: 'none' }}
                  ></iframe>
                </Box>
                {/* Pages */}
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
