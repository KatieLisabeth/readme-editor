import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  Box,
  Drawer,
  FormControl,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tooltip,
} from '@mui/material';
import logo from 'assets/logo.png';
import MarkdownManager from 'components/MarkdownManager';
import MarkdownSection from 'components/MarkdownSection';
import { useMarkdownContext } from 'config/Context';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import templates from 'utils/templates';

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);
  const [isManaging, setIsManaging] = React.useState<boolean>(false);
  const [selectedSectionId, setSelectedSectionId] = React.useState<string>('');
  const { setMarkdownText, setSavedItems, savedItems } = useMarkdownContext();
  const location = useLocation();

  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleSectionSelect = (event: SelectChangeEvent<string>) => {
    const sectionId = event.target.value;
    setSelectedSectionId(sectionId);
  };

  const handleSelectElement = (syntax: string[]) => {
    const combinedSyntax = syntax.join('\n\n');
    const updatedItems = [...savedItems, combinedSyntax];
    setSavedItems(updatedItems);
    setMarkdownText(updatedItems.join('\n\n'));
  };

  const handleManagingElement = () => {
    setIsManaging((prev) => !prev);
  };
  const handleReorderItems = (updatedItems: string[]) => {
    setSavedItems(updatedItems);
    setMarkdownText(updatedItems.join('\n\n'));
  };

  const selectedSection =
    templates.sections?.find((section) => section.id === selectedSectionId) ||
    null;

  const isPlayground = location.pathname === '/playground';

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: isExpanded ? 300 : 60,
          display: 'flex',
          justifyContent: isExpanded ? 'end' : 'center',
          padding: 0,
          '& .MuiDrawer-paper': {
            width: isExpanded ? 300 : 60,
            transition: 'width 0.3s ease',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '0.5rem',
          }}
        >
          {/* App Logo */}
          <img
            src={logo}
            alt="App Logo"
            style={{
              width: isExpanded ? '60px' : '40px',
              height: isExpanded ? '55px' : '35px',
            }}
          />
        </Box>
        <List>
          {/* Home link */}
          <ListItem onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
            <Tooltip title="Home page">
              <HomeIcon color="secondary" />
            </Tooltip>
            {isExpanded && (
              <ListItemText
                secondary="Home"
                sx={{ px: 2, cursor: 'pointer' }}
              />
            )}
          </ListItem>
          {/* Playground link */}
          <ListItem
            onClick={() => navigate('/playground')}
            sx={{ cursor: 'pointer' }}
          >
            <Tooltip title="Playground page">
              <SettingsIcon color="secondary" />
            </Tooltip>
            {isExpanded && (
              <ListItemText
                secondary="Playground"
                sx={{ px: 2, cursor: 'pointer' }}
              />
            )}
          </ListItem>
          {/* Section Selector for Playground */}
          {isPlayground && (
            <ListItem>
              <Tooltip title="Click to select">
                <ListAltIcon color="secondary" sx={{ cursor: 'pointer' }} />
              </Tooltip>
              {isExpanded && (
                <FormControl fullWidth>
                  <InputLabel id="section-select-label">Select</InputLabel>
                  <Select
                    labelId="section-select-label"
                    value={selectedSectionId}
                    onChange={handleSectionSelect}
                    label="Select"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {templates.sections?.map((section) => (
                      <MenuItem key={section.id} value={section.id}>
                        {section.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </ListItem>
          )}
          {isPlayground && savedItems.length > 1 && (
            <ListItem
              onClick={handleManagingElement}
              sx={{ cursor: 'pointer' }}
            >
              <Tooltip title="Click to manage">
                <LowPriorityIcon color="secondary" />
              </Tooltip>
              {isExpanded && (
                <ListItemText
                  secondary="Manage"
                  sx={{ px: 2, cursor: 'pointer' }}
                />
              )}
            </ListItem>
          )}
        </List>

        {/* Scrollable MarkdownSection when expanded */}
        <Box
          sx={{
            marginTop: '4rem',
            overflowY: 'auto',
            paddingX: isExpanded ? 2.5 : 0,
          }}
        >
          {isPlayground && isExpanded && !isManaging && selectedSection && (
            <MarkdownSection
              section={selectedSection}
              onSelectElement={handleSelectElement}
            />
          )}
          {isPlayground && isExpanded && isManaging && (
            <MarkdownManager onReorderItems={handleReorderItems} />
          )}
        </Box>

        {/* Sidebar Footer with Expand/Collapse Toggle */}
        <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: isExpanded ? 300 : 60,
            display: 'flex',
            justifyContent: isExpanded ? 'end' : 'center',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <IconButton onClick={toggleSidebar}>
            {isExpanded ? (
              <Tooltip title="Click to close">
                <ArrowBackIosIcon />
              </Tooltip>
            ) : (
              <Tooltip title="Click to open">
                <ArrowForwardIosIcon />
              </Tooltip>
            )}
          </IconButton>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
