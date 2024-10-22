import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListAltIcon from '@mui/icons-material/ListAlt';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  SelectChangeEvent,
  Tooltip,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import logo from 'assets/logo.png';
import Section from 'components/Section';
import Selector from 'components/Selector';
import { useMarkdownContext } from 'config/Context';
import React from 'react';
import { useLocation } from 'react-router-dom';
import templates from 'utils/templates';

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

  const [selectedSectionId, setSelectedSectionId] = React.useState<string>('');
  const { setMarkdownText, setSavedItems, savedItems } = useMarkdownContext();
  const location = useLocation();
  const theme = useTheme();

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

  const selectedSection =
    templates.sections?.find((section) => section.id === selectedSectionId) ||
    null;

  const isPlayground = location.pathname === '/playground';

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: isExpanded && isPlayground ? 333 : 60,
          display: 'flex',
          justifyContent: isExpanded ? 'end' : 'center',
          padding: 0,

          '& .MuiDrawer-paper': {
            width: isExpanded ? 333 : 60,
            transition: 'width 0.3s ease',
            background: isPlayground
              ? theme.palette.background.paper
              : theme.palette.background.default,
            border: isPlayground ? '' : 'none',
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
          {/* Section Selector for Playground */}
          {isPlayground && (
            <ListItem>
              <Tooltip title="Click to select">
                <ListAltIcon
                  color="secondary"
                  sx={{ cursor: 'pointer' }}
                  onClick={toggleSidebar}
                />
              </Tooltip>

              {isExpanded && (
                <Selector
                  value={selectedSectionId}
                  onChange={handleSectionSelect}
                />
              )}
            </ListItem>
          )}
        </List>
        {isPlayground && <Divider />}
        {/* Scrollable Section when expanded */}
        <Box
          sx={{
            flex: 1,
            marginTop: '1rem',
            overflowY: 'auto',
            paddingX: isExpanded ? 2.5 : 0,
          }}
        >
          {isPlayground && isExpanded && selectedSection && (
            <Section
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
            left: isExpanded ? 332 : 10,
            background: isExpanded
              ? theme.palette.mode === 'light'
                ? `${theme.palette.background.paper}`
                : '#0f122c'
              : 'transparent',
            borderRight: isExpanded
              ? theme.palette.mode === 'light'
                ? '1px solid #D8D9DA'
                : '1px solid #45474B'
              : 'transparent',
            borderTop: isExpanded
              ? theme.palette.mode === 'light'
                ? '1px solid  #D8D9DA'
                : '1px solid #45474B'
              : 'transparent',
            borderBottom: isExpanded
              ? theme.palette.mode === 'light'
                ? '1px solid  #D8D9DA'
                : '1px solid #45474B'
              : 'transparent',
            borderRadius: isExpanded ? '0px 30px 30px 0px' : '',
            display: 'flex',
            justifyContent: isExpanded ? 'end' : 'center',
            mb: 1,
          }}
        >
          {isPlayground && (
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
          )}
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
