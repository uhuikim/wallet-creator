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
  padding: '1rem',
  background: palette.primary,
  color: palette.white,
});

const logo = css({
  fontSize: '1.5rem',
});

const Layout: React.FC = () => {
  return (
    <aside css={sideStyle}>
      <h1 css={logo}>
        <Link href="/">Wallet Creator</Link>
      </h1>
      <div>
        <Link href="account">Create Account</Link>
        <Link href="account">View Account Info</Link>
      </div>
    </aside>
  );
};

export default Layout;
