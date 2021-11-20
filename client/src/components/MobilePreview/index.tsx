import React, { useRef } from 'react';
import useDraggableScroll from 'use-draggable-scroll';

import { Container, MobileSnatch, MobileView } from './styles';

import SignIn from '../../demos/GoBarber/pages/SignIn';

interface MobileProps {
  preview?: boolean;
}

const MobilePreview: React.FC<MobileProps> = ({ children, ...rest }) => {
  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref);

  return (
    <Container {...rest}>
      <MobileView ref={ref} onMouseDown={onMouseDown}>
        <SignIn />
      </MobileView>
      <MobileSnatch />
      {children}
    </Container>
  );
};

export default MobilePreview;
