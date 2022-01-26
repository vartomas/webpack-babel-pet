import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

type Inputs = {
  name: string;
};

export const useProfile = () => {
  const [name, setName] = useState('');
  const nameForm = useForm<Inputs>({
    defaultValues: {
      name: ''
    }
  });

  const onSubmit: SubmitHandler<Inputs> = ({ name }) => {
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
