import { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { getMessages, sendMessage } from '../api/api';
import { socket } from '../api/socket';
import { Message, PostMessage, User } from '../types';

export const useChat = (name: string, userId: string) => {
  const [menuAnchor, setmenuAnchor] = useState<null | HTMLElement>(null);
  const [nameChangeDialogOpen, setNameChangeDialogOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const menuOpen = Boolean(menuAnchor);

  const firstTime = useRef(true);

  const postMessageApi = useMutation<AxiosResponse, AxiosError, PostMessage>((message) => {
    return sendMessage(message);
  });

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setmenuAnchor(event.currentTarget);
  };

  const callMessages = async () => {
    const response = await getMessages();
    setMessages(response.data);
  };

  useEffect(() => {
    callMessages();
  }, []);

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
        socket.on('message:new', (message) => {
          setMessages((prev) => [message, ...prev]);
        });
      });

      firstTime.current = false;
    }
  }, [name, userId, firstTime.current]);

  const nameChangeEmit = (name: string) => {
    socket.emit('name:change', { name, userId });
  };

  const postMessage = (message: string) => {
    postMessageApi.mutate({ body: message, date: new Date(), socketId: socket.id, username: name, userId });
  };

  const loadMoreMessages = async () => {
    const response = await getMessages(messages.length);
    setMessages((prev) => [...prev, ...response.data]);
  };

  return {
    users: users.filter((x) => x.userId !== userId),
    messages,
    menuAnchor,
    menuOpen,
    nameChangeDialogOpen,
    setmenuAnchor,
    handleMenuOpen,
    setNameChangeDialogOpen,
    nameChangeEmit,
    postMessage,
    loadMoreMessages
  };
};
