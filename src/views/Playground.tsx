import AutorenewIcon from '@mui/icons-material/Autorenew';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import {
  Box,
  Button,
  Container,
  Divider,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import MarkdownEditor from 'components/MarkdownEditor';
import MarkdownPreview from 'components/MarkdownPreview';
import { useMarkdownContext } from 'config/Context';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js';

const Playground: React.FC = () => {
  const { savedItems, setSavedItems, setMarkdownText, resetMarkdown } =
    useMarkdownContext();
  const [ReactMarkdown, setReactMarkdown] = useState<any>(null);
  const [rehypeDocument, setRehypeDocument] = useState<any>(null);
  const [remarkGfm, setRemarkGfm] = useState<any>(null);

  const theme = useTheme();

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
    setMarkdownText(updatedItems.join('\n'));
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

  const handleResetFile = () => {
    Swal.fire({
      title: 'Reset Confirmation',
      text: 'This will remove all selected items from your README. Do you wish to proceed?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, reset it!',
      cancelButtonText: 'No, cancel!',
      cancelButtonColor: theme.palette.error.main,
      confirmButtonColor: theme.palette.secondary.main,
      color: theme.palette.mode === 'light' ? '#333' : '#fff',
      background:
        theme.palette.mode === 'light'
          ? '#F5F7F8'
          : theme.customBackground.gradient,
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        resetMarkdown();
      }
    });
  };

  return (
    <Container>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mX: 2,
        }}
      >
        <Typography variant="h4">Markdown Playground</Typography>
        <Box>
          <Tooltip title="Click to reset README file">
            <Button
              onClick={handleResetFile}
              variant="contained"
              sx={{ mr: 2, py: 0.3, px: 1.3 }}
            >
              Reset <AutorenewIcon sx={{ ml: 0.3 }} />
            </Button>
          </Tooltip>
          <Tooltip title="Click to download README file">
            <Button
              onClick={downloadMarkdown}
              variant="contained"
              sx={{ py: 0.3, px: 1.3 }}
            >
              Download <CloudDownloadIcon sx={{ ml: 1 }} />
            </Button>
          </Tooltip>
        </Box>
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
            onMarkdownChange={handleMarkdownChange}
          />
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box
          sx={{
            width: '50%',
            height: '100%',
            overflowY: 'hidden',
            paddingLeft: '1rem',
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
