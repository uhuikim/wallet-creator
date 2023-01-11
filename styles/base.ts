import { css } from '@emotion/react';
import palette from './palette';

const base = css`
  html,
  body,
  #__next {
    background: ${palette.background};
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default base;
