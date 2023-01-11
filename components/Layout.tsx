import React, { ReactNode } from 'react';
import SideBar from './SideBar';
import { css } from '@emotion/react';

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <SideBar />
      <div css={contentStyle}>{children}</div>
    </div>
  );
};

export default Layout;

const contentStyle = css({
  marginLeft: '250px',
});
