import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
        </Menu>
      </Box>

      <Divider />

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
          <Box sx={{ display: 'flex', alignItems: 'center', py: 0.5, cursor: 'default', '&:hover': { backgroundColor: 'grey.800' } }}>
            <AccountCircleIcon fontSize="small" sx={{ mr: 1, ml: 2 }} />
            <Typography key={x.userId}>{x.name}</Typography>
          </Box>
        ))}
        {!users.length && (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1 }}>
            <Typography variant="subtitle2">No users connected</Typography>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default ChatSidebar;
