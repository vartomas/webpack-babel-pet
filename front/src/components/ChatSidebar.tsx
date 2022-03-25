import { useEffect, useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import { User } from '../types';
import DesktopUserList from './DesktopUserList';
import Menu from './Menu';
import MobileUserList from './MobileUserList';
import styles from '../styles/ChatSidebar.module.scss';

interface Props {
  name: string;
  users: User[];
  menuOpen: boolean;
  onMenuOpen: () => void;
  onMenuClose: () => void;
  onNameChangeOpen: () => void;
}

const ChatSidebar: React.FC<Props> = ({ name, users, menuOpen, onMenuOpen, onMenuClose, onNameChangeOpen }) => {
  const [width, setWidth] = useState(0);
  const [mobileUsersListOpen, setMobileUsersListOpen] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', function () {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.nameContainer}>
        <p>{name}</p>

        <div className={styles.iconButtonContainer} onClick={onMenuOpen}>
          <FiSettings className={styles.icon} />
          <Menu
            open={menuOpen}
            onMenuClose={onMenuClose}
            onChangeName={onNameChangeOpen}
            onUserListOpen={() => setMobileUsersListOpen(true)}
          />
        </div>
      </div>

      <div className={styles.divider} />

      {width > 899 && <DesktopUserList users={users} />}
      {width < 900 && <MobileUserList users={users} open={mobileUsersListOpen} onClose={() => setMobileUsersListOpen(false)} />}
    </div>
  );
};

export default ChatSidebar;
