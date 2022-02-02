import { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';
import { io } from 'socket.io-client';
import { User } from '../types';

const socket = io('http://localhost:5000');

export const useChat = (name: string, userId: string) => {
  const [menuAnchor, setmenuAnchor] = useState<null | HTMLElement>(null);
  const [nameChangeDialogOpen, setNameChangeDialogOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const menuOpen = Boolean(menuAnchor);
  const firstTime = useRef(true);
  const postMessageApi = useMutation((message) => {
    return axios.post('http://localhost:5000/message/', message);
  });

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setmenuAnchor(event.currentTarget);
  };

  useEffect(() => {
    if (nameChangeDialogOpen) {
      setmenuAnchor(null);
    }
  }, [nameChangeDialogOpen]);

  useEffect(() => {
    if (name && userId && firstTime.current) {
      socket.on('connect', () => {
        socket.emit('user:connect', { name, userId });
        socket.on('user:list', (users) => setUsers(users));
        socket.on('message:new', (message) => console.log(message));
      });

      firstTime.current = false;
    }
  }, [name, userId, firstTime.current]);

  const nameChangeEmit = (name: string) => {
    socket.emit('name:change', { name, userId });
  };

  const postMessage = (message: string) => {
    // @ts-expect-error
    postMessageApi.mutate({ body: message, date: new Date(), socketId: socket.id, username: name, userId });
  };

  return {
    users: users.filter((x) => x.userId !== userId),
    menuAnchor,
    menuOpen,
    nameChangeDialogOpen,
    setmenuAnchor,
    handleMenuOpen,
    setNameChangeDialogOpen,
    nameChangeEmit,
    postMessage
  };
};
