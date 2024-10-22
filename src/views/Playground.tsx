import AutorenewIcon from '@mui/icons-material/Autorenew';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import EditNoteIcon from '@mui/icons-material/EditNote';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
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
import MarkdownManager from 'components/MarkdownManager';
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
  const [isManaging, setIsManaging] = React.useState<boolean>(false);

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
  const handleReorderItems = (updatedItems: string[]) => {
    setSavedItems(updatedItems);
    setMarkdownText(updatedItems.join('\n\n'));
  };

  const handleManagingElement = () => {
    setIsManaging(true);
  };
  const handleEditingElement = () => {
    setIsManaging(false);
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mX: 2,
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          gap: {
            xs: 2,
            sm: 0,
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: {
              xs: '1.3rem',
              sm: '1.8rem',
            },
          }}
        >
          Markdown Playground
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 2,
            marginBottom: '.5rem',
            width: {
              xs: '100%',
              sm: '50%',
            },
          }}
        >
          <Tooltip title="Click to reset README file">
            <Button
              onClick={handleResetFile}
              variant="contained"
              sx={{
                py: 0.3,
                px: 1.3,
                fontSize: {
                  xs: '.6rem',
                  sm: '.8rem',
                },
              }}
            >
              Reset <AutorenewIcon sx={{ ml: 0.3 }} />
            </Button>
          </Tooltip>
          <Tooltip title="Click to download README file">
            <Button
              onClick={downloadMarkdown}
              variant="contained"
              sx={{
                py: 0.3,
                px: 1.3,
                fontSize: {
                  xs: '.6rem',
                  sm: '.8rem',
                },
              }}
            >
              Download <CloudDownloadIcon sx={{ ml: 1 }} />
            </Button>
          </Tooltip>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          height: '100%',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '1rem',
          overflowY: 'hidden',
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: {
              xs: '100%',
              sm: '50%',
            },
            paddingRight: { xs: 0, sm: '1rem' },
            height: '100%',
            overflowY: 'auto',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {!isManaging ? (
              <>
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
                  Editor
                </Typography>
                <Tooltip title="Click to manage README Items">
                  <LowPriorityIcon
                    color="secondary"
                    onClick={handleManagingElement}
                  />
                </Tooltip>
              </>
            ) : (
              <>
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
                  Reorder or delete items
                </Typography>

                <Tooltip title="Click to Edit README">
                  <EditNoteIcon
                    color="secondary"
                    onClick={handleEditingElement}
                  />
                </Tooltip>
              </>
            )}
          </Box>

          {!isManaging ? (
            <MarkdownEditor
              savedItems={savedItems}
              onMarkdownChange={handleMarkdownChange}
            />
          ) : (
            <MarkdownManager onReorderItems={handleReorderItems} />
          )}
        </Box>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            display: { xs: 'none', sm: 'block' },
          }}
        />
        <Box
          sx={{
            width: {
              xs: '100%',
              sm: '50%',
            },
            height: '100%',
            overflowY: 'auto',
            paddingLeft: { xs: 0, sm: '1rem' },
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
