import React, { ReactNode } from 'react';
import Header from './Header';
import { css } from '@emotion/react';

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div css={contentStyle}>{children}</div>
    </div>
  );
};

export default Layout;

const contentStyle = css({
  marginTop: '70px',
});
