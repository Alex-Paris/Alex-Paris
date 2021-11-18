import React, { ButtonHTMLAttributes, useCallback, useState } from 'react';
import { useHistory } from 'react-router';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  hrefLink?: string;
  hrefPage?: string;
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
  hrefLink,
  hrefPage,
  isFlex,
  isSimple,
  isActive,
  isWhite,
  isSmall,
  isLink,
  ...rest
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const history = useHistory();

  const handleOnClick = useCallback(() => {
    setIsPressed(true);

    if (hrefLink) {
      open(hrefLink, '_blank');
    }

    if (hrefPage) {
      history.push(hrefPage);
    }

    setTimeout(() => {
      setIsPressed(false);
    }, 150);
  }, [hrefLink, hrefPage, history]);

  return (
    <Container
      type="button"
      disabled={loading}
      onClick={handleOnClick}
      isLoading={loading}
      isFlex={isFlex}
      isSimple={isSimple}
      isPressed={isPressed}
      isActive={isActive}
      isWhite={isWhite}
      isSmall={isSmall}
      isLink={isLink}
      {...rest}
    >
      {loading ? 'Loading...' : children}
    </Container>
  );
};

export default Button;
