import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineSend } from 'react-icons/ai';
import styles from '../styles/ChatInput.module.scss';

interface Props {
  postMessage: (message: string) => void;
}

interface MessageForm {
  message: string;
}

const ChatInput: React.FC<Props> = ({ postMessage }) => {
  const messageForm = useForm<MessageForm>({
    defaultValues: {
      message: ''
    }
  });

  const input = useRef<HTMLTextAreaElement | null>(null);

  const onSubmit = (data: MessageForm) => {
    postMessage(data.message);
    messageForm.setValue('message', '');
  };

  const { ref, ...rest } = messageForm.register('message');

  return (
    <div className={styles.container}>
      <textarea
        className={styles.messageInput}
        role="msgInput"
        autoFocus
        placeholder="Message"
        spellCheck="false"
        autoComplete="off"
        onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && messageForm.handleSubmit(onSubmit)()}
        {...rest}
        name="message"
        ref={(e) => {
          ref(e);
          input.current = e;
        }}
      />
      <div role="inputBtn" className={styles.sendButton} onClick={() => messageForm.handleSubmit(onSubmit)()}>
        <AiOutlineSend className={styles.icon} />
      </div>
    </div>
  );
};

export default ChatInput;
