import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export type NameFormInputs = {
  name: string;
};

export const useProfile = () => {
  const [name, setName] = useState('');
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
  }, []);

  return {
    name,
    nameForm,
    onSubmit
  };
};
