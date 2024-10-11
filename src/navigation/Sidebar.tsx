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
    console.log(isManaging);
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
          width: isExpanded ? 280 : 60,
          display: 'flex',
          justifyContent: isExpanded ? 'end' : 'center',
          padding: 0,
          '& .MuiDrawer-paper': {
            width: isExpanded ? 280 : 60,
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
            <HomeIcon color="secondary" />

            {isExpanded && <ListItemText secondary="Home" sx={{ px: 2 }} />}
          </ListItem>
          {/* Playground link */}
          <ListItem
            onClick={() => navigate('/playground')}
            sx={{ cursor: 'pointer' }}
          >
            <SettingsIcon color="secondary" />

            {isExpanded && (
              <ListItemText secondary="Playground" sx={{ px: 2 }} />
            )}
          </ListItem>
          {/* Section Selector for Playground */}
          {isPlayground && (
            <ListItem>
              <ListAltIcon color="secondary" />

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
              <LowPriorityIcon color="secondary" />

              {isExpanded && <ListItemText secondary="Manage" sx={{ px: 2 }} />}
            </ListItem>
          )}
        </List>

        {/* Scrollable MarkdownSection when expanded */}
        <Box
          sx={{
            // flexGrow: 1,
            marginTop: '4rem',
            overflowY: 'auto',
            paddingX: isExpanded ? 5 : 0,
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
            width: isExpanded ? 280 : 60,
            display: 'flex',
            justifyContent: isExpanded ? 'end' : 'center',
            alignItems: 'center',
            mb: 2,
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
