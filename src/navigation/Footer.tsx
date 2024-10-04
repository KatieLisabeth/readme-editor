import GitHubIcon from '@mui/icons-material/GitHub';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Footer: React.FC = () => {
  return (
    <Box>
      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          textAlign: 'center',
        }}
      >
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          README Editor
        </Link>{' '}
        {2024}.
        <IconButton
          href="https://github.com/KatieLisabeth/readme-editor"
          target="_blank"
          rel="noopener"
          color="inherit"
          sx={{ ml: 1 }}
        >
          <GitHubIcon />
        </IconButton>
      </Typography>
    </Box>
  );
};
export default Footer;
