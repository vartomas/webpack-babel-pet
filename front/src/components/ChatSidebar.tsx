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

      {users.map((x) => (
        <Typography key={x.userId}>{x.name}</Typography>
      ))}
    </Paper>
  );
};

export default ChatSidebar;
