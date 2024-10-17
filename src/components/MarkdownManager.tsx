import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMarkdownContext } from 'config/Context';
import { useState } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js';

const MarkdownManager: React.FC<IMarkdownManager> = ({ onReorderItems }) => {
  const { savedItems, setSavedItems } = useMarkdownContext();
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // New state to track hover index
  const theme = useTheme();

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    event.preventDefault();
    setHoveredIndex(index);
  };

  const handleDrop = (dropIndex: number) => {
    if (draggedIndex === null || draggedIndex === dropIndex) return;

    const updatedItems = [...savedItems];
    const draggedItem = updatedItems[draggedIndex];

    updatedItems.splice(draggedIndex, 1);
    updatedItems.splice(dropIndex, 0, draggedItem);

    onReorderItems(updatedItems);
    setSavedItems(updatedItems);

    // Reset drag-related states
    setDraggedIndex(null);
    setHoveredIndex(null);
  };

  const handleDragLeave = () => {
    setHoveredIndex(null);
  };

  const handleDeletingItem = (index: number) => {
    Swal.fire({
      title: 'Confirm Deletion?',
      text: 'The selected item will be permanently removed. Proceed?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
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
        handleDelete(index);
      }
    });
  };

  const handleDelete = (index: number) => {
    const updatedItems = savedItems.filter((_, i) => i !== index);
    setSavedItems(updatedItems);
    onReorderItems(updatedItems);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Reorder or delete items
      </Typography>

      <Box sx={{ marginTop: '1rem' }}>
        {savedItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              padding: hoveredIndex === index ? '0.5rem' : '0.2rem',
              border:
                hoveredIndex === index ? '2px dashed #09c' : '1px solid #ddd',
              borderRadius: '5px',
              marginBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'grab',
              wordWrap: 'wrap',
              transition: 'background-color 0.3s ease',
              backgroundColor: hoveredIndex === index ? '#eee' : 'inherit',
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
                color: theme.palette.mode === 'light' ? '#333' : '#37B7C3',
              },
            }}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(event) => handleDragOver(event, index)}
            onDrop={() => handleDrop(index)}
            onDragLeave={handleDragLeave}
          >
            <Typography
              variant="body1"
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'grab',
                '&:hover': {
                  color: theme.palette.mode === 'light' ? '#333' : '#114ee9',
                },
              }}
            >
              <span
                style={{
                  cursor: 'grab',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                <DragIndicatorIcon
                  color="secondary"
                  sx={{
                    marginRight: '0.5rem',
                    fontSize: '2em',
                    padding: 0,
                  }}
                />
                {item.substring(0, 21)}...
              </span>
            </Typography>
            <IconButton
              aria-label="delete"
              onClick={() => handleDeletingItem(index)}
              sx={{
                '&:hover': {
                  color: theme.palette.error.main,
                },
              }}
            >
              <Tooltip title="Click to delete">
                <DeleteForeverTwoToneIcon
                  sx={{ color: theme.palette.error.main }}
                />
              </Tooltip>
            </IconButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MarkdownManager;
