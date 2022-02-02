import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Divider, IconButton, Paper, Typography } from '@mui/material';
import { User } from '../types';

interface Props {
  users: User[];
  open: boolean;
  onClose: () => void;
}

const MobileUserList: React.FC<Props> = ({ users, open, onClose }) => (
  <Paper
    sx={{
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      top: open ? 0 : '-100vh',
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
    <Paper sx={{ position: 'fixed', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 50, px: 1, width: 1 }}>
      <Typography>Connected users</Typography>
      <IconButton onClick={onClose}>
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
);

export default MobileUserList;
