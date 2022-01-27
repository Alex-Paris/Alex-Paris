import React, { useCallback, useRef, useState } from 'react';
import { useSpring, config } from 'react-spring';
import useDraggableScroll from 'use-draggable-scroll';

import { Container, MobileSnatch, MobileView } from './styles';

interface MobileProps {
  preview?: boolean; //Maybe I don't need this
}

const MobilePreview: React.FC<MobileProps> = ({ children, ...rest }) => {
  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref);

  const [show, setShow] = useState(false);

  const { y } = useSpring({
    from: { y: '0%' },
    to: { y: '95%' },
    reverse: show,
    config: config.stiff,
  });

  const handleToggleVisibility = useCallback(() => {
    setShow((state) => !state);
  }, []);

  return (
    <Container style={{ y }} {...rest}>
      <MobileView ref={ref} onMouseDown={onMouseDown}>
        {children}
      </MobileView>
      <MobileSnatch>
        <div onClick={handleToggleVisibility}>{show ? 'Hide' : 'Show'}</div>
      </MobileSnatch>
    </Container>
  );
};

export default MobilePreview;
