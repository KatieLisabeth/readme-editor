import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { Box, Button, Container, Tooltip, Typography } from '@mui/material';
import MarkdownEditor from 'components/MarkdownEditor';
import MarkdownPreview from 'components/MarkdownPreview';
import { useMarkdownContext } from 'config/Context';
import React, { useEffect, useState } from 'react';

const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

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

  const debouncedHandleMarkdownChange = debounce((updatedItems: string[]) => {
    setSavedItems(updatedItems);
    setMarkdownText(updatedItems.join('\n'));
  }, 300);

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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mX: 2,
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
          overflowY: 'hidden',
        }}
      >
        <Box
          sx={{
            width: '50%',
            paddingRight: '1rem',
            height: '100%',
            overflowY: 'hidden',
          }}
        >
          <MarkdownEditor
            savedItems={savedItems}
            onMarkdownChange={debouncedHandleMarkdownChange}
          />
        </Box>

        <Box
          sx={{
            width: '50%',
            height: '100%',
            overflowY: 'hidden',
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
