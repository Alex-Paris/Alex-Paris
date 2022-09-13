import React, { InputHTMLAttributes } from 'react';

import { ComponentInput } from './styles';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...rest
}) => {
  return <ComponentInput type="text" {...rest} />;
};

export default Input;
