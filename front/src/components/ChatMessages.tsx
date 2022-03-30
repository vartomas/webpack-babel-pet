import * as React from 'react';
import { format } from 'date-fns';
import { Message } from '../types';
import styles from '../styles/ChatMessages.module.scss';

interface Props {
  messages: Message[];
  messagesBottomRef: React.RefObject<HTMLDivElement>;
  loadMoreMessages: () => void;
}

const ChatMessages: React.FC<Props> = ({ messages, messagesBottomRef, loadMoreMessages }) => {
  const userId = localStorage.getItem('userId');

  return (
    <div className={styles.container}>
      <div ref={messagesBottomRef} />
      {messages.map((x) => (
        <div key={x._id} className={styles.message} style={{ alignSelf: userId === x.userId ? 'end' : 'start' }}>
          <div className={styles.messageTitleContainer}>
            <p>{x.username}</p>
            <p className={styles.messageDate}>{format(new Date(x.date), 'dd-MM-yyyy')}</p>
          </div>
          <p className={styles.messageBody}>{x.body}</p>
        </div>
      ))}
      <p className={styles.loadMoreText} onClick={loadMoreMessages}>
        Load older messages
      </p>
    </div>
  );
};

export default ChatMessages;
