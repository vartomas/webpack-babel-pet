import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

export const useChat = () => {
  const [menuAnchor, setmenuAnchor] = useState<null | HTMLElement>(null);
  const [nameChangeDialogOpen, setNameChangeDialogOpen] = useState(false);
  const menuOpen = Boolean(menuAnchor);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setmenuAnchor(event.currentTarget);
  };

  useEffect(() => {
    if (nameChangeDialogOpen) {
      setmenuAnchor(null);
    }
  }, [nameChangeDialogOpen]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log(socket.id);
    });

    socket.on('disconnect', () => {
      console.log(socket.id);
    });

    socket.on('message:new', (message) => console.log(message));
  }, []);

  return {
    menuAnchor,
    menuOpen,
    nameChangeDialogOpen,
    setmenuAnchor,
    handleMenuOpen,
    setNameChangeDialogOpen
  };
};
