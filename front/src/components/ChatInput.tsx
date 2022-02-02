import { useForm } from 'react-hook-form';
import SendIcon from '@mui/icons-material/Send';
import { Box, IconButton, TextField } from '@mui/material';

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

  const onSubmit = (data: MessageForm) => {
    postMessage(data.message);
    messageForm.reset();
  };

  return (
    <Box sx={{ p: 1, display: 'flex', alignItems: 'center' }}>
      <TextField
        fullWidth
        autoFocus
        label="Message"
        spellCheck="false"
        autoComplete="off"
        onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && messageForm.handleSubmit(onSubmit)()}
        {...messageForm.register('message', { required: true })}
      />
      <IconButton size="large" sx={{ ml: 1 }} onClick={() => messageForm.handleSubmit(onSubmit)()}>
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default ChatInput;
