import ChatBox from '../components/ChatBox';
import ChatSidebar from '../components/ChatSidebar';
import NameChangeDialog from '../components/NameChangeDialog';
import { useChat } from '../hooks/useChat';
import { useProfile } from '../hooks/useProfile';
import styles from '../styles/ChatPage.module.scss';

const ChatPage = () => {
  const { name, userId, nameForm, onSubmit } = useProfile();
  const {
    users,
    messages,
    menuAnchor,
    menuOpen,
    nameChangeDialogOpen,
    messagesBottomRef,
    setmenuAnchor,
    handleMenuOpen,
    setNameChangeDialogOpen,
    nameChangeEmit,
    postMessage,
    loadMoreMessages
  } = useChat(name, userId);

  return (
    <div className={styles.container}>
      <ChatSidebar
        name={name}
        users={users}
        menuAnchor={menuAnchor}
        menuOpen={menuOpen}
        onMenuOpen={handleMenuOpen}
        onMenuClose={() => setmenuAnchor(null)}
        onNameChangeOpen={() => setNameChangeDialogOpen(true)}
      />

      <ChatBox messages={messages} messagesBottomRef={messagesBottomRef} postMessage={postMessage} loadMoreMessages={loadMoreMessages} />

      <NameChangeDialog
        open={nameChangeDialogOpen}
        nameForm={nameForm}
        onClose={() => setNameChangeDialogOpen(false)}
        onSubmit={onSubmit}
        onNameChange={nameChangeEmit}
      />
    </div>
  );
};

export default ChatPage;
