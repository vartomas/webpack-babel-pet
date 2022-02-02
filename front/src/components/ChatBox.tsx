import { Box } from '@mui/material';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';

interface Props {
  postMessage: (message: string) => void;
}

const ChatBox: React.FC<Props> = ({ postMessage }) => {
  return (
    <Box sx={{ width: 1, height: 1, display: 'flex', flexDirection: 'column' }}>
      <ChatMessages />
      <ChatInput postMessage={postMessage} />
    </Box>
  );
};

export default ChatBox;
