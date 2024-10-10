import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleRedirect = () => {
    navigate('/playground');
  };

  return (
    <Box
      sx={{
        m: 1,
        height: '100%',
        backgroundImage: theme.customBackground.gradient,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: 8,
        color: theme.palette.mode === 'light' ? 'black' : 'white',
        textAlign: 'center',
        p: 2,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            p: 2,
            boxShadow: 6,
            borderRadius: 3,
            backgroundColor:
              theme.palette.mode === 'light'
                ? 'rgba(255, 255, 255, 0.85)'
                : 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(5px)',
            color: theme.palette.mode === 'light' ? 'black' : 'white',
          }}
        >
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            Welcome to the README Editor!
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Create professional and engaging README files effortlessly.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
            Whether you want to create user stories, decorate your GitHub page,
            or generate a standard README for your project, this tool offers
            various templates to fit your needs.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Start building your README quickly and efficiently by selecting a
            template that suits your requirements. The playground will guide you
            through the sections, allowing you to customize the content and save
            it as a markdown file for your projects.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
            You can select predefined markdown syntax from the sidebar and
            easily edit it to fit your project needs. Our intuitive interface
            allows you to manage different sections, drag and drop elements
            around, and even delete content with a single click to streamline
            your editing experience.
          </Typography>
          <Typography variant="body1" gutterBottom>
            The playground offers full flexibility, enabling you to create your
            own custom layouts or work from existing templates to save time.
            Whether you&rsquo;re organizing elements or refining your syntax,
            the README Editor has got you covered.
          </Typography>

          <Box mt={5}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleRedirect}
              size="large"
              sx={{
                p: 1.5,
                px: 4,
                color: '#fff',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                transition: 'transform 0.3s',
                borderRadius: 8,
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              Go to Playground
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WelcomePage;
