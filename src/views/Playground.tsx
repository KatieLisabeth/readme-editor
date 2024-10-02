// MarkdownPlayground.tsx
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Container, IconButton, Typography } from '@mui/material';
import MarkdownEditor from 'components/MarkdownEditor';
import MarkdownPreview from 'components/MarkdownPreview';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Playground: React.FC = () => {
  const [markdownText, setMarkdownText] = useState<string>('');
  const [isEditorView, setIsEditorView] = useState<boolean>(true);
  const [ReactMarkdown, setReactMarkdown] = useState<any>(null);
  const [rehypeDocument, setRehypeDocument] = useState<any>(null);
  const [remarkGfm, setRemarkGfm] = useState<any>(null);

  const navigate = useNavigate();

  // Load saved content from session storage on initial render and dynamically import modules
  useEffect(() => {
    const savedMarkdown = sessionStorage.getItem('markdownContent');
    if (savedMarkdown) {
      setMarkdownText(savedMarkdown);
    }

    // Dynamically import ReactMarkdown, rehypeDocument, and remarkGfm
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

  // Save markdown content to session storage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('markdownContent', markdownText);
  }, [markdownText]);

  const handleMarkdownChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setMarkdownText(event.target.value);
  };

  const toggleView = () => {
    setIsEditorView((prev) => !prev);
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <Container maxWidth={'lg'}>
      <div style={{ position: 'absolute', top: 10, left: 16 }}>
        <IconButton onClick={handleGoBack} color="inherit">
          <ArrowBackIcon />
        </IconButton>
      </div>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          textAlign: 'center',
          mx: 4,
        }}
      >
        <Typography variant="h4">Markdown Playground</Typography>
      </Box>

      <Box
        sx={{
          height: '100%',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '1rem',
          overflowY: 'auto',
        }}
      >
        {isEditorView ? (
          <MarkdownEditor
            markdownText={markdownText}
            onMarkdownChange={handleMarkdownChange}
            onToggleView={toggleView}
          />
        ) : (
          ReactMarkdown &&
          rehypeDocument &&
          remarkGfm && (
            <MarkdownPreview
              markdownText={markdownText}
              ReactMarkdown={ReactMarkdown}
              rehypeDocument={rehypeDocument}
              remarkGfm={remarkGfm}
              onToggleView={toggleView}
            />
          )
        )}
      </Box>
    </Container>
  );
};

export default Playground;
