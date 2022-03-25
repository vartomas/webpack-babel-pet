import { useEffect, useRef } from 'react';
import styles from '../styles/Menu.module.scss';

interface Props {
  open: boolean;
  onMenuClose: () => void;
  onChangeName: () => void;
  onUserListOpen: () => void;
}

const Menu: React.FC<Props> = ({ open, onMenuClose, onChangeName, onUserListOpen }) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (open && container.current && !container.current.contains(event.target as Node)) {
        onMenuClose();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [container, open]);

  return (
    <div ref={container} className={styles.container} style={{ display: open ? 'block' : 'none' }}>
      <ul className={styles.list}>
        <li
          className={styles.listItem}
          onClick={() => {
            onMenuClose();
            onChangeName();
          }}
        >
          Change name
        </li>
        <li
          className={styles.listItem}
          onClick={() => {
            onMenuClose();
            onUserListOpen();
          }}
        >
          Users
        </li>
      </ul>
    </div>
  );
};

export default Menu;
