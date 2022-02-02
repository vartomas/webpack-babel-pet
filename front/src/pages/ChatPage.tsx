import { Box } from '@mui/material';
import ChatBox from '../components/ChatBox';
import ChatSidebar from '../components/ChatSidebar';
import NameChangeDialog from '../components/NameChangeDialog';
import { useChat } from '../hooks/useChat';
import { useProfile } from '../hooks/useProfile';

const ChatPage = () => {
  const { name, userId, nameForm, onSubmit } = useProfile();
  const { users, menuAnchor, menuOpen, nameChangeDialogOpen, setmenuAnchor, handleMenuOpen, setNameChangeDialogOpen, nameChangeEmit } =
    useChat(name, userId);

  return (
    <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'], height: '100vh' }}>
      <ChatSidebar
        name={name}
        users={users}
        menuAnchor={menuAnchor}
        menuOpen={menuOpen}
        onMenuOpen={handleMenuOpen}
        onMenuClose={() => setmenuAnchor(null)}
        onNameChangeOpen={() => setNameChangeDialogOpen(true)}
      />

      <ChatBox />

      <NameChangeDialog
        open={nameChangeDialogOpen}
        nameForm={nameForm}
        onClose={() => setNameChangeDialogOpen(false)}
        onSubmit={onSubmit}
        onNameChange={nameChangeEmit}
      />
    </Box>
  );
};

export default ChatPage;
