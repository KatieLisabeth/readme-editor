import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const MarkdownSection: React.FC<IMarkdownSection> = ({
  section,
  onSelectElement,
}) => {
  const theme = useTheme();
  if (!section) {
    return (
      <Box sx={{ padding: '1rem' }}>
        <Typography variant="h1" component="h2">
          Please select a section
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h6" sx={{ paddingTop: '1rem' }}>
        Selected {section.title}
      </Typography>
      <List>
        {section.elements.map((el) => (
          <ListItem key={el.id} onClick={() => onSelectElement([el.syntax])}>
            <ListItemText
              primary={el.element}
              sx={{
                px: 2,
                cursor: 'pointer',
                '&:hover': {
                  color: theme.palette.mode === 'light' ? '#333' : '#16a199',
                  fontWeight: 'bold',
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MarkdownSection;
