import type { NextPage } from 'next';
import { useState } from 'react';

const CreateAccount: NextPage = () => {
  const [password, setPassword] = useState('');

  const handleSubmit = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="password" value={password} />
        <button type="submit">Next Step</button>
      </form>
    </div>
  );
};

export default CreateAccount;
