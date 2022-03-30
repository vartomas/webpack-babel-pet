import { Message } from '../types';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import styles from '../styles/ChatBox.module.scss';

interface Props {
  messages: Message[];
  messagesBottomRef: React.RefObject<HTMLDivElement>;
  postMessage: (message: string) => void;
  loadMoreMessages: () => void;
}

const ChatBox: React.FC<Props> = ({ messages, messagesBottomRef, postMessage, loadMoreMessages }) => {
  return (
    <div className={styles.container}>
      <ChatMessages messages={messages} messagesBottomRef={messagesBottomRef} loadMoreMessages={loadMoreMessages} />
      <ChatInput postMessage={postMessage} />
    </div>
  );
};

export default ChatBox;
