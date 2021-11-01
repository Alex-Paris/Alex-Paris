import React, { ButtonHTMLAttributes, useCallback, useState } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  isFlex?: boolean;
  isSimple?: boolean;
  isActive?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  isFlex,
  isSimple,
  isActive,
  ...rest
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleOnClick = useCallback(() => {
    setIsPressed(true);

    setTimeout(() => {
      setIsPressed(false);
    }, 150);
  }, []);

  return (
    <Container
      type="button"
      onClick={handleOnClick}
      isFlex={isFlex}
      isSimple={isSimple}
      isPressed={isPressed}
      isActive={isActive}
      {...rest}
    >
      {loading ? 'Carregando...' : children}
    </Container>
  );
};

export default Button;
