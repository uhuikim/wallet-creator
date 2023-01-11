import { css } from '@emotion/react';
import React, { ReactNode } from 'react';

const sideStyle = css({
  height: '100%',
  width: '150px',
  position: 'absolute',
  left: 0,
  top: 0,
  padding: '1rem',
});

const Layout: React.FC = () => {
  return <aside css={sideStyle}>이것은 사이드바</aside>;
};

export default Layout;
