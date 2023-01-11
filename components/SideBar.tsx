import { css } from '@emotion/react';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import palette from '../styles/palette';

const sideStyle = css({
  height: '100%',
  width: '250px',
  position: 'absolute',
  left: 0,
  top: 0,
  padding: '2rem',
  background: palette.primary,
  color: palette.white,
});

const navLIist = css({
  '& li': {
    padding: '1rem 0',
  },
});
const logo = css({
  fontSize: '1.5rem',
  marginBottom: '2rem',
});

const Layout: React.FC = () => {
  return (
    <aside css={sideStyle}>
      <h1 css={logo}>
        <Link href="/">Wallet Creator</Link>
      </h1>
      <ul css={navLIist}>
        <li>
          <Link href="account">Create Account</Link>
        </li>
        <li>
          <Link href="account">View Account Info</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Layout;
