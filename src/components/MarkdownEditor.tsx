import { Box, TextField } from '@mui/material';
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
      <TextField
        multiline
        rows={10}
        variant="outlined"
        fullWidth
        value={combinedMarkdown}
        onChange={handleTextChange}
        placeholder="Edit all markdown items here"
        slotProps={{ input: { style: { fontFamily: 'monospace' } } }}
        sx={{
          '& textarea': {
            minHeight: '51px',
          },
        }}
      />
    </Box>
  );
};

export default MarkdownEditor;
