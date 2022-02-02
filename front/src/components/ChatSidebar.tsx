import { useEffect, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Divider, IconButton, Menu, MenuItem, Paper, Typography } from '@mui/material';
import { User } from '../types';

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
    <Paper sx={{ width: [1, 1, 200], height: [50, 50, 1] }}>
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

      {width > 899 && (
        <Box
          sx={{
            py: 0.5,
            height: 'calc(100vh - 51px)',
            overflowY: 'scroll',
            '&::-webkit-scrollbar': {
              width: '0.4em'
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'grey.700'
            }
          }}
        >
          {users.map((x) => (
            <Box
              key={x.userId}
              sx={{ display: 'flex', alignItems: 'center', py: 0.5, cursor: 'default', '&:hover': { backgroundColor: 'grey.800' } }}
            >
              <AccountCircleIcon fontSize="small" sx={{ mr: 1, ml: 2 }} />
              <Typography>{x.name}</Typography>
            </Box>
          ))}
          {!users.length && (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1 }}>
              <Typography variant="subtitle2">No users connected</Typography>
            </Box>
          )}
        </Box>
      )}
      {width < 900 && (
        <Paper
          sx={{
            position: 'absolute',
            width: '100vw',
            height: '100vh',
            top: mobileUsersListOpen ? 0 : '-100vh',
            left: 0,
            zIndex: 999,
            transition: 'top .2s ease-in-out',
            overflowY: 'scroll',
            '&::-webkit-scrollbar': {
              width: '0.4em'
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'grey.700'
            }
          }}
        >
          <Paper
            sx={{ position: 'fixed', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 50, px: 1, width: 1 }}
          >
            <Typography>Connected users</Typography>
            <IconButton onClick={() => setMobileUsersListOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Paper>
          <Divider />
          <Box sx={{ pt: '50px' }}>
            {users.map((x) => (
              <Box key={x.userId}>
                <Box sx={{ display: 'flex', alignItems: 'center', py: 0.5, cursor: 'default', '&:hover': { backgroundColor: 'grey.800' } }}>
                  <AccountCircleIcon fontSize="small" sx={{ mr: 1, ml: 2 }} />
                  <Typography>{x.name}</Typography>
                </Box>
                <Divider />
              </Box>
            ))}
            {!users.length && (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1 }}>
                <Typography variant="subtitle2">No users connected</Typography>
              </Box>
            )}
          </Box>
        </Paper>
      )}
    </Paper>
  );
};

export default ChatSidebar;
