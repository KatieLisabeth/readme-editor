import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { Box, Button, Container, Tooltip, Typography } from '@mui/material';
import MarkdownEditor from 'components/MarkdownEditor';
import MarkdownPreview from 'components/MarkdownPreview';
import { useMarkdownContext } from 'config/Context';
import React, { useEffect, useState } from 'react';

const Playground: React.FC = () => {
  const { savedItems, setSavedItems, setMarkdownText } = useMarkdownContext();
  const [ReactMarkdown, setReactMarkdown] = useState<any>(null);
  const [rehypeDocument, setRehypeDocument] = useState<any>(null);
  const [remarkGfm, setRemarkGfm] = useState<any>(null);

  useEffect(() => {
    const loadModules = async () => {
      const [markdownModule, rehypeModule, gfmModule] = await Promise.all([
        import('react-markdown'),
        import('rehype-document'),
        import('remark-gfm'),
      ]);
      setReactMarkdown(() => markdownModule.default);
      setRehypeDocument(() => rehypeModule.default);
      setRemarkGfm(() => gfmModule.default);
    };

    loadModules();
  }, []);

  const handleMarkdownChange = (updatedItems: string[]) => {
    setSavedItems(updatedItems);
    setMarkdownText(updatedItems.join('\n\n'));
  };

  const downloadMarkdown = () => {
    const blob = new Blob([savedItems.join('\n\n')], { type: 'text/markdown' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'README.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          my: 2,
        }}
      >
        <Typography variant="h4">Markdown Playground</Typography>
        <Tooltip title="Click to download README file">
          <Button onClick={downloadMarkdown} variant="contained">
            Download <CloudDownloadIcon sx={{ ml: 2 }} />
          </Button>
        </Tooltip>
      </Box>

      <Box
        sx={{
          display: 'flex',
          height: '100%',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '1rem',
          overflowY: 'auto',
        }}
      >
        <Box sx={{ width: '50%', paddingRight: '1rem' }}>
          <MarkdownEditor
            savedItems={savedItems}
            onMarkdownChange={handleMarkdownChange}
          />
        </Box>

        <Box
          sx={{
            width: '50%',
            paddingLeft: '1rem',
            borderLeft: '1px solid #ddd',
          }}
        >
          {ReactMarkdown && rehypeDocument && remarkGfm && (
            <MarkdownPreview
              markdownText={savedItems.join('\n\n')}
              ReactMarkdown={ReactMarkdown}
              rehypeDocument={rehypeDocument}
              remarkGfm={remarkGfm}
            />
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Playground;
