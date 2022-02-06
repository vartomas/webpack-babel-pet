import { Box } from '@mui/material';
import { Message } from '../types';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';

interface Props {
  messages: Message[];
  postMessage: (message: string) => void;
  loadMoreMessages: () => void;
}

const ChatBox: React.FC<Props> = ({ messages, postMessage, loadMoreMessages }) => {
  return (
    <Box sx={{ width: 1, height: ['calc(100% - 50px)', 'calc(100% - 50px)', 1], display: 'flex', flexDirection: 'column' }}>
      <ChatMessages messages={messages} loadMoreMessages={loadMoreMessages} />
      <ChatInput postMessage={postMessage} />
    </Box>
  );
};

export default ChatBox;
