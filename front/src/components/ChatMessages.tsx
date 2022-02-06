import { Box, Paper, Typography } from '@mui/material';
import { format } from 'date-fns';
import { Message } from '../types';

interface Props {
  messages: Message[];
  loadMoreMessages: () => void;
}

const ChatMessages: React.FC<Props> = ({ messages, loadMoreMessages }) => {
  const userId = localStorage.getItem('userId');

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column-reverse',
        maxHeight: [12 / 13 - 50, 12 / 13 - 50, 12 / 13],
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
          width: '0.4em'
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'grey.700'
        }
      }}
    >
      {messages.map((x) => (
        <Paper key={x._id} sx={{ p: 2, mx: 1, my: 0.5, maxWidth: 2 / 3, alignSelf: userId === x.userId ? 'end' : 'start' }}>
          <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 1 }}>
            <Typography variant="subtitle1">{x.username}</Typography>
            <Typography variant="subtitle2" sx={{ ml: 1, fontSize: 10 }}>
              {format(new Date(x.date), 'dd-MM-yyyy')}
            </Typography>
          </Box>
          <Typography>{x.body}</Typography>
        </Paper>
      ))}
      <Typography
        variant="caption"
        sx={{
          m: 2,
          cursor: 'pointer',
          alignSelf: 'end',
          '&:hover': {
            textDecoration: 'underline'
          }
        }}
        onClick={loadMoreMessages}
      >
        Load older messages
      </Typography>
    </Box>
  );
};

export default ChatMessages;
