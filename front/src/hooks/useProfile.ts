import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { NameFormInputs } from '../types';

export const useProfile = () => {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const nameForm = useForm<NameFormInputs>({
    defaultValues: {
      name: ''
    }
  });

  const onSubmit: SubmitHandler<NameFormInputs> = ({ name }) => {
    setName(name);
    localStorage.setItem('name', name);
  };

  useEffect(() => {
    setName(localStorage.getItem('name') || 'Guest');
    const userIdFromStorage = localStorage.getItem('userId');

    if (userIdFromStorage) {
      setUserId(userIdFromStorage);
    } else {
      const newId = uuidv4();
      localStorage.setItem('userId', newId);
      setUserId(newId);
    }
  }, []);

  return {
    name,
    userId,
    nameForm,
    onSubmit
  };
};
