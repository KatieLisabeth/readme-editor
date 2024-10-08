import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  Box,
  Drawer,
  FormControl,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent, // Import the correct type
} from '@mui/material';
import MarkdownSection from 'components/MarkdownSection';
import { useMarkdownContext } from 'config/Context';
import markdown from 'config/markdown';
import React from 'react';
import { useLocation } from 'react-router-dom';
const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(true);
  const [selectedSectionId, setSelectedSectionId] = React.useState<string>(''); // Store section ID
  const { setMarkdownText } = useMarkdownContext();

  const location = useLocation();
  // Toggle sidebar expansion
  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  // Handle section selection from the Select dropdown
  const handleSectionSelect = (event: SelectChangeEvent<string>) => {
    const sectionId = event.target.value;
    setSelectedSectionId(sectionId);
  };

  const handleSelectElement = (syntax: string) => {
    setMarkdownText(syntax);
  };

  const selectedSection =
    markdown.sections?.find((section) => section.id === selectedSectionId) ||
    null;

  const isPlayground = location.pathname === '/playground';
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: isExpanded ? 280 : 60,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: isExpanded ? 280 : 60,
            boxSizing: 'border-box',
            transition: 'width 0.3s',
          },
        }}
      >
        <List>
          {/* Home link */}
          <ListItem component="a" href="/#/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText secondary="Home" />}
          </ListItem>
          {/* Playground link */}
          <ListItem component="a" href="/#/playground">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText secondary="Playground" />}
          </ListItem>
          {/* Section Selector */}
          {isPlayground && (
            <ListItem>
              <ListItemIcon>
                <ListAltIcon />
              </ListItemIcon>
              {isExpanded && (
                <FormControl fullWidth>
                  <InputLabel id="section-select-label">
                    Select Section
                  </InputLabel>
                  <Select
                    labelId="section-select-label"
                    value={selectedSectionId}
                    onChange={handleSectionSelect}
                    label="Select Section"
                  >
                    {markdown.sections?.map((section) => (
                      <MenuItem key={section.id} value={section.id}>
                        {section.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </ListItem>
          )}
        </List>
        <Box
          sx={{
            overflowY: 'auto',
          }}
        >
          {/* Display the MarkdownSection for the selected section */}
          {isExpanded && selectedSection && (
            <MarkdownSection
              section={selectedSection}
              onSelectElement={handleSelectElement}
            />
          )}
        </Box>

        {/* Sidebar Footer with Expand/Collapse Toggle */}
        <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: isExpanded ? 280 : 60,
            display: 'flex',
            justifyContent: isExpanded ? 'end' : 'center',
            alignItems: 'center',
            background: 'primary',
            mb: 2, // Add some margin
          }}
        >
          <IconButton onClick={toggleSidebar}>
            {isExpanded ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
          </IconButton>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
