import { Box } from '@mui/material';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';

const ChatBox = () => {
  return (
    <Box sx={{ width: 1, height: 1, display: 'flex', flexDirection: 'column' }}>
      <ChatMessages />
      <ChatInput />
    </Box>
  );
};

export default ChatBox;
