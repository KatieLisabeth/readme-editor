import FileOpenIcon from '@mui/icons-material/FileOpen';
import { Box, IconButton, TextField, Typography } from '@mui/material';

const MarkdownEditor: React.FC<IMarkdownEditor> = ({
  markdownText,
  onMarkdownChange,
  onToggleView,
}) => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          pb: 0.5,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Edit Markdown
        </Typography>
        <IconButton color="primary" onClick={onToggleView}>
          <FileOpenIcon />
        </IconButton>
      </Box>
      <TextField
        multiline
        rows={25}
        variant="outlined"
        fullWidth
        value={markdownText}
        onChange={onMarkdownChange}
        placeholder="Write your markdown here..."
        inputProps={{
          style: { fontFamily: 'monospace' },
        }}
      />
    </Box>
  );
};

export default MarkdownEditor;
