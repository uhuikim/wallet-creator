import { css } from '@emotion/react';
import Link from 'next/link';
import { useContext } from 'react';
import { GlobalContext } from '../pages/_app';
import palette from '../styles/palette';

const sideStyle = css({
  height: '70px',
  width: '100%',
  position: 'absolute',
  left: 0,
  top: 0,
  background: palette.primary,
  color: palette.white,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 1.5rem',
});

const logo = css({
  fontSize: '1.5rem',

  '& span': {
    fontSize: '0.5rem',
    marginLeft: '0.3rem',
  },
});

const Header: React.FC = () => {
  const { isLogin } = useContext(GlobalContext);
  console.log(isLogin);
  return (
    <aside css={sideStyle}>
      <h1 css={logo}>
        <Link href="/">GoWallet</Link>
        <span>Goerli Testnet</span>
      </h1>

      {isLogin && <div>프로필 정보</div>}
    </aside>
  );
};

export default Header;
