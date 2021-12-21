import React, { useRef } from 'react';
import useDraggableScroll from 'use-draggable-scroll';

import { Container, MobileSnatch, MobileView } from './styles';

interface MobileProps {
  preview?: boolean; //Maybe I don't need this
}

const MobilePreview: React.FC<MobileProps> = ({ children, ...rest }) => {
  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref);

  return (
    <Container {...rest}>
      <MobileView ref={ref} onMouseDown={onMouseDown}>
        {children}
      </MobileView>
      <MobileSnatch />
    </Container>
  );
};

export default MobilePreview;
