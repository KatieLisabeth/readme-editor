import { Box, TextField, Typography } from '@mui/material';
import React from 'react';

const MarkdownEditor: React.FC<IMarkdownEditor> = ({
  savedItems,
  onMarkdownChange,
}) => {
  const combinedMarkdown = savedItems.join('\n\n');

  const handleTextChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const updatedMarkdown = event.target.value;
    const updatedItems = updatedMarkdown.split('\n\n');
    onMarkdownChange(updatedItems);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Editor
      </Typography>

      <Box sx={{ marginBottom: '1rem' }}>
        <TextField
          multiline
          minRows={20}
          variant="outlined"
          fullWidth
          value={combinedMarkdown}
          onChange={handleTextChange}
          placeholder="Edit all markdown items here"
          inputProps={{
            style: { fontFamily: 'monospace' },
          }}
        />
      </Box>
    </Box>
  );
};

export default MarkdownEditor;
