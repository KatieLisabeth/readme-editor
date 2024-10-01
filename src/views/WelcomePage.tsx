import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/playground');
  };

  return (
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Box sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to the README Generator!
        </Typography>
        <Typography variant="body1" gutterBottom>
          The README Generator is a tool designed to help you easily create
          professional and engaging README files for your projects. Whether you
          want to create user stories, decorate your GitHub page, or generate a
          standard README for your project, this tool offers various templates
          to fit your needs.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Start building your README quickly and efficiently by selecting a
          template that suits your requirements. The playground will guide you
          through the sections, allowing you to customize the content and save
          it as a markdown file for your projects.
        </Typography>
        <Box mt={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleRedirect}
            size="large"
          >
            Go to Playground
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default WelcomePage;
