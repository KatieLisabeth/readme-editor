import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import logo from 'assets/logo.png';

const Sidebar: React.FC<ISidebar> = ({ isExpanded }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: isExpanded ? 220 : 60,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: isExpanded ? 220 : 60,
            boxSizing: 'border-box',
            transition: 'width 0.3s',
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
          {/* Navigation Items */}
          <ListItem component="a" href="/#/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Home" />}
          </ListItem>

          <ListItem component="a" href="/#/playground">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Playground" />}
          </ListItem>

          <ListItem component="a" href="#">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="About" />}
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
