import { css } from '@emotion/react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import type { NextPage } from 'next';
import { useContext, useState } from 'react';
import { GlobalContext } from '../../../contexts';

const CreateAccount: NextPage = () => {
  const [password, setPassword] = useState('');
  const {
    state: { nemonic },
  } = useContext(GlobalContext);

  return (
    <div css={container}>
      <h1>비밀 복구 구문</h1>
      <p>
        비밀 백업 구문을 이용하면 계정을 쉽게 백업하고 복구 할 수 있습니다.
        경고: 비밀 복구 구문은 절대로 공개하지 마세요.이 구문이 있는 사람은
        귀하의 Ether를 영원히 소유할 수 있습니다.
      </p>
      <p>{nemonic}</p>
      <button>확인완료</button>
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
