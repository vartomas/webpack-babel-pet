import { AiOutlineClose } from 'react-icons/ai';
import { User } from '../types';
import styles from '../styles/MobileUserList.module.scss';

interface Props {
  users: User[];
  open: boolean;
  onClose: () => void;
}

const MobileUserList: React.FC<Props> = ({ users, open, onClose }) => (
  <div className={styles.container} style={{ top: open ? 0 : '-100vh' }}>
    <div className={styles.headerContainer}>
      <p>Connected users</p>
      <div className={styles.iconButtonContainer} onClick={onClose}>
        <AiOutlineClose className={styles.icon} />
      </div>
    </div>

    <div className={styles.userList}>
      {users.map((x) => (
        <div key={x.userId}>
          <div className={styles.user}>
            <p>{x.name}</p>
          </div>
          <div className={styles.divider} />
        </div>
      ))}

      {!users.length && (
        <div className={styles.emptyUserList}>
          <p>No users connected</p>
        </div>
      )}
    </div>
  </div>
);

export default MobileUserList;
