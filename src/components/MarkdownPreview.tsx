import { Box, Paper, Typography } from '@mui/material';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkEmoji from 'remark-emoji';

const MarkdownPreview: React.FC<IMarkdownPreview> = ({
  markdownText,
  ReactMarkdown,
  rehypeDocument,
  remarkGfm,
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
        <Typography
          variant="h6"
          sx={{
            fontSize: {
              xs: '1rem',
              sm: '1.5rem',
            },
          }}
          gutterBottom
        >
          Preview
        </Typography>
      </Box>
      <Paper
        elevation={2}
        sx={{
          padding: '1rem',
          height: '100%',
          maxHeight: '540px',
          overflow: 'auto',
        }}
      >
        {ReactMarkdown && (
          <ReactMarkdown
            className="content"
            remarkPlugins={[remarkGfm, remarkEmoji]}
            rehypePlugins={[rehypeDocument, rehypeRaw, rehypeSanitize]}
          >
            {markdownText}
          </ReactMarkdown>
        )}
      </Paper>
    </Box>
  );
};

export default MarkdownPreview;
