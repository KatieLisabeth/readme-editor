import { Box, List, ListItem, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Section: React.FC<IMarkdownSection> = ({
  section,
  onSelectElement,
  isSearch = false,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: isSearch ? 'absolute' : 'static',
        background: isSearch ? theme.palette.background.paper : 'transparent',
        borderTop: isSearch ? '1px solid #c4c4c4' : '',
        boxShadow: isSearch ? '0px 4px 6px rgba(0,0,0,0.1)' : 'none',
        width: isSearch ? '300px' : 'auto',
        maxHeight: isSearch ? '300px' : 'none',
        overflowY: isSearch ? 'auto' : 'visible',
        zIndex: isSearch ? 10 : 'auto',
      }}
    >
      <List>
        {section &&
          section.elements.map((el) => (
            <ListItem
              key={el.id}
              onClick={() => onSelectElement([el.syntax])}
              sx={{ cursor: 'pointer' }}
            >
              <ListItemText
                primary={el.element}
                sx={{
                  px: 2,
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

export default Section;
