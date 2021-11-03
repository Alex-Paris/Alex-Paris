import React, { ButtonHTMLAttributes, useCallback, useState } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  href?: string;
  isFlex?: boolean;
  isSimple?: boolean;
  isActive?: boolean;
  isWhite?: boolean;
  isSmall?: boolean;
  isLink?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  href,
  isFlex,
  isSimple,
  isActive,
  isWhite,
  isSmall,
  isLink,
  ...rest
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleOnClick = useCallback(() => {
    setIsPressed(true);

    if (href) {
      open(href, '_blank');
    }

    setTimeout(() => {
      setIsPressed(false);
    }, 150);
  }, [href]);

  return (
    <Container
      type="button"
      onClick={handleOnClick}
      isFlex={isFlex}
      isSimple={isSimple}
      isPressed={isPressed}
      isActive={isActive}
      isWhite={isWhite}
      isSmall={isSmall}
      isLink={isLink}
      {...rest}
    >
      {loading ? 'Carregando...' : children}
    </Container>
  );
};

export default Button;
