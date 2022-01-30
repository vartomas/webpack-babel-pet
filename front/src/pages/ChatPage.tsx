import { Box } from '@mui/material';
import ChatSidebar from '../components/ChatSidebar';
import NameChangeDialog from '../components/NameChangeDialog';
import { useChat } from '../hooks/useChat';
import { useProfile } from '../hooks/useProfile';

const ChatPage = () => {
  const { name, nameForm, onSubmit } = useProfile();
  const { menuAnchor, menuOpen, nameChangeDialogOpen, setmenuAnchor, handleMenuOpen, setNameChangeDialogOpen } = useChat();

  return (
    <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'], height: '100vh' }}>
      <ChatSidebar
        name={name}
        menuAnchor={menuAnchor}
        menuOpen={menuOpen}
        onMenuOpen={handleMenuOpen}
        onMenuClose={() => setmenuAnchor(null)}
        onNameChangeOpen={() => setNameChangeDialogOpen(true)}
      />

      <Box sx={{ flex: 1, height: 1 }}></Box>

      <NameChangeDialog
        open={nameChangeDialogOpen}
        nameForm={nameForm}
        onClose={() => setNameChangeDialogOpen(false)}
        onSubmit={onSubmit}
      />
    </Box>
  );
};

export default ChatPage;
