import React, { ReactNode } from 'react';
import { css } from '@emotion/react';

type Props = {
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const inputStyle = css({
  height: '45px',
  width: '100%',
  borderRadius: '5px',
  border: '1px solid #d5d3d3',
  '&:focus': {
    outline: 'none',
  },
});

const Input: React.FC<Props> = ({ type, value, onChange }) => {
  return (
    <input type={type} value={value} onChange={onChange} css={inputStyle} />
  );
};

export default Input;
