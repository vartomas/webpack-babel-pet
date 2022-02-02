import { useEffect, useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Divider, IconButton, Menu, MenuItem, Paper, Typography } from '@mui/material';
import { User } from '../types';
import DesktopUserList from './DesktopUserList';
import MobileUserList from './MobileUserList';

interface Props {
  name: string;
  users: User[];
  menuOpen: boolean;
  menuAnchor: HTMLElement | null;
  onMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  onMenuClose: () => void;
  onNameChangeOpen: () => void;
}

const ChatSidebar: React.FC<Props> = ({ name, users, menuOpen, menuAnchor, onMenuOpen, onMenuClose, onNameChangeOpen }) => {
  const [width, setWidth] = useState(0);
  const [mobileUsersListOpen, setMobileUsersListOpen] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', function () {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <Paper sx={{ width: [1, 1, 250], height: [50, 50, 1] }}>
      <Box sx={{ px: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 50 }}>
        <Typography>{name}</Typography>

        <IconButton size="small" onClick={onMenuOpen}>
          <SettingsIcon fontSize="small" />
        </IconButton>

        <Menu anchorEl={menuAnchor} open={menuOpen} onClose={onMenuClose}>
          <MenuItem key="name" onClick={onNameChangeOpen}>
            Change name
          </MenuItem>
          {width < 900 && (
            <MenuItem
              key="users"
              onClick={() => {
                onMenuClose();
                setMobileUsersListOpen(true);
              }}
            >
              Users
            </MenuItem>
          )}
        </Menu>
      </Box>

      <Divider />

      {width > 899 && <DesktopUserList users={users} />}
      {width < 900 && <MobileUserList users={users} open={mobileUsersListOpen} onClose={() => setMobileUsersListOpen(false)} />}
    </Paper>
  );
};

export default ChatSidebar;
