import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton, Paper, Typography } from '@mui/material';

const MarkdownPreview: React.FC<IMarkdownPreview> = ({
  markdownText,
  ReactMarkdown,
  rehypeDocument,
  remarkGfm,
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
          Markdown Preview
        </Typography>
        <IconButton color="default" onClick={onToggleView}>
          <EditIcon />
        </IconButton>
      </Box>
      <Paper
        elevation={2}
        sx={{
          padding: '1rem',
          height: '100%',
        }}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm, rehypeDocument]}>
          {markdownText}
        </ReactMarkdown>
      </Paper>
    </Box>
  );
};

export default MarkdownPreview;
