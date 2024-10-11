import DeleteIcon from '@mui/icons-material/Delete';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { Box, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles'; // Correct import for MUI themes
import { useMarkdownContext } from 'config/Context';
import { useState } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js';

const MarkdownManager: React.FC<IMarkdownManager> = ({ onReorderItems }) => {
  const { savedItems, setSavedItems } = useMarkdownContext();
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  // Get theme from Material-UI
  const theme = useTheme();

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (dropIndex: number) => {
    if (draggedIndex === null || draggedIndex === dropIndex) return;

    const updatedItems = [...savedItems];
    const draggedItem = updatedItems[draggedIndex];

    updatedItems.splice(draggedIndex, 1);
    updatedItems.splice(dropIndex, 0, draggedItem);
    onReorderItems(updatedItems);
    setDraggedIndex(null);
  };

  const handleDeletingItem = (index: number) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      confirmButtonColor: theme.palette.secondary.main,
      cancelButtonColor: 'red',
      color: theme.palette.mode === 'light' ? '#333' : '#fff',
      background:
        theme.palette.mode === 'light'
          ? '#ffc'
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
              padding: '0.2rem',
              border: '1px solid #ddd',
              borderRadius: '5px',
              marginBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'grab',
              wordWrap: 'wrap',
            }}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
          >
            <Typography
              variant="body1"
              sx={{ display: 'flex', alignItems: 'center', cursor: 'grab' }}
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
            </Typography>
            <IconButton
              aria-label="delete"
              onClick={() => handleDeletingItem(index)}
            >
              <DeleteIcon sx={{ color: theme.palette.error.main }} />{' '}
            </IconButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MarkdownManager;
