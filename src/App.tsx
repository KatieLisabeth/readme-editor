import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from 'routes/AppRoutes';

function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        README Generator
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ my: 3 }}>
          <Router>
            <AppRoutes />
          </Router>
        </Box>
        <Copyright />
      </Container>
    </>
  );
}
