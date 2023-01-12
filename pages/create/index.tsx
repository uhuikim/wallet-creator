import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import type { NextPage } from 'next';
import { useState } from 'react';
import { postData } from '../api';

const CreateAccount: NextPage = () => {
  const [password, setPassword] = useState('');

  const { mutate } = useMutation(
    ({ url, data }: { url: string; data: Record<string, string> }) =>
      postData(url, data),
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ url: '/mnemonics', data: { password } });
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="password" value={password} onChange={handleChange} />
        <button type="submit">Next Step</button>
      </form>
    </div>
  );
};

export default CreateAccount;
