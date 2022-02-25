import { useCallback, useState } from 'react';

export const useSignEmail = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = useCallback((value: string) => setEmail(value), []);
  const onChangePassword = useCallback((value: string) => setPassword(value), []);

  return {
    email,
    password,
    onChangeEmail,
    onChangePassword,
  };
};
