import React, { ButtonHTMLAttributes } from 'react';

import { ComponentButton } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  description: string;
  icon?: string;
}

const Button: React.FC<IButtonProps> = ({ description, icon, ...rest }) => {
  return (
    <ComponentButton {...rest}>
      {description}
      {icon && <img src={icon} />}
    </ComponentButton>
  );
};

export default Button;
