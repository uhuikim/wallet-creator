import React, { ReactNode } from 'react';
import Header from './Header';
import { css } from '@emotion/react';

type Props = {
  children: ReactNode;
};

const contentStyle = css({
  margin: '70px auto 0 auto',
  width: '960px',
  padding: '2rem',
});

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div css={contentStyle}>{children}</div>
    </div>
  );
};

export default Layout;
