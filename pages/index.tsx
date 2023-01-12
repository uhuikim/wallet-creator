import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useContext } from 'react';
import { GlobalContext } from './_app';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';

const container = css({
  width: '960px',
  margin: '0 auto',
  padding: '2rem',
});

const box = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  '& h1': {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '3rem',
  },
});

const walletContainer = css({
  display: 'flex',
  gap: '20px',
  justifyContent: 'center',
  width: '100%',
});

const walletBox = css({
  display: 'flex',
  alignItems: 'center',
  width: '400px',
  padding: '2rem 1rem',
  boxShadow: '2px 2px 1px #d0d1d2',
  borderRadius: '5px',
  flexDirection: 'column',
  background: 'white',

  '& svg': {
    width: '35px',
    height: '35px',
    marginBottom: '1rem',
  },

  '& p': {
    marginBottom: '1rem',
  },
});

const buttonStyle = css({
  padding: '0.5rem 1rem',
});

const Home: NextPage = () => {
  const { isLogin, setIsLogin } = useContext(GlobalContext);

  return (
    <div css={container}>
      <div css={box}>
        <h1>Welcome to GoWallet</h1>
        <div css={walletContainer}>
          <div css={walletBox}>
            <UploadFileOutlinedIcon />
            <p>이미 비밀 복구 구문이 있습니다.</p>
            <button css={buttonStyle}>지갑 가져오기</button>
          </div>
          <div css={walletBox}>
            <AddOutlinedIcon />
            <p>Account 생성하기</p>
            <button css={buttonStyle}>지갑 생성하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
