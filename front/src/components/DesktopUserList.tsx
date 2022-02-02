import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Typography } from '@mui/material';
import { User } from '../types';

interface Props {
  users: User[];
}

const DesktopUserList: React.FC<Props> = ({ users }) => (
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
);

export default DesktopUserList;
