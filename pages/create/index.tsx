import { css } from '@emotion/react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import type { NextPage } from 'next';
import { useContext, useState } from 'react';
import Input from '../../components/Form/Input';
import { postData } from '../api';
import { useRouter } from 'next/router';
import { GlobalContext } from '../../contexts';

const CreateAccount: NextPage = () => {
  const [password, setPassword] = useState('');
  const { setLogin, setModalOpen } = useContext(GlobalContext);
  const router = useRouter();

  type Response = {
    msg: string;
    result: {
      address: string;
      mnemonic: string;
      token: string;
    };
  };

  const { mutate } = useMutation(
    ({ url, data }: { url: string; data: Record<string, string> }) =>
      postData(url, data),
    {
      onSuccess: (data) => {
        const mnemonic = (data as Response).result.mnemonic;
        setLogin(mnemonic);
        setPassword('');
        router.push({
          pathname: '/create/check',
        });
      },
    },
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ url: '/mnemonics', data: { password } });
  };

  return (
    <div css={container}>
      <form onSubmit={handleSubmit} css={formStyle}>
        <h1>비밀번호 입력</h1>
        <Input type="password" value={password} onChange={handleChange} />
        <button css={buttonStyle} type="submit">
          Next Step
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;

const container = css({
  background: 'white',
  borderRadius: '10px',
  boxShadow: '2px 2px 1px #d0d1d2',
  padding: '2rem',
});

const formStyle = css({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '400px',
  margin: '0 auto',

  '& h1': {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },
});

const buttonStyle = css({
  width: '100%',
  height: '45px',
  marginTop: '2rem',
});
