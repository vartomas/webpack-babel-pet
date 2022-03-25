import { User } from '../types';
import styles from '../styles/DesktopUserList.module.scss';

interface Props {
  users: User[];
}

const DesktopUserList: React.FC<Props> = ({ users }) => (
  <div className={styles.container}>
    {users.map((x) => (
      <div key={x.userId} className={styles.usersContainer}>
        <p>{x.name}</p>
      </div>
    ))}
    {!users.length && (
      <div className={styles.emptyContainer}>
        <p>No users connected</p>
      </div>
    )}
  </div>
);

export default DesktopUserList;
