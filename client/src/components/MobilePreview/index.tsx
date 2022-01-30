import React, { useCallback, useRef, useState } from 'react';
import { useSpring, config, useTransition } from 'react-spring';
import useDraggableScroll from 'use-draggable-scroll';

import Icon from '../Unicons';

import { MobileNotificationMessage } from '../../hooks/context/mobileRoute';

import {
  Container,
  MobileNotification,
  MobileSnatch,
  MobileView,
} from './styles';

interface MobileProps {
  message?: MobileNotificationMessage;
}

const icons = {
  info: <Icon icon="UilInfoCircle" />,
  error: <Icon icon="UilExclamationOctagon" />,
  success: <Icon icon="UilCheckCircle" />,
};

const MobilePreview: React.FC<MobileProps> = ({
  message,
  children,
  ...rest
}) => {
  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref);

  const [showMobile, setShowMobile] = useState(false);

  const { y } = useSpring({
    from: { y: '0%' },
    to: { y: '95%' },
    reverse: showMobile,
    config: config.stiff,
  });

  const exibitionNotificationMobile = useTransition(message?.isActive, {
    from: { opacity: 0, y: '-80%' },
    enter: { opacity: 1, y: '0' },
    leave: { opacity: 0, y: '-80%' },
    config: config.gentle,
  });

  const handleMobileVisibility = useCallback(() => {
    setShowMobile((state) => !state);
  }, []);

  return (
    <Container style={{ y }} {...rest}>
      <MobileView ref={ref} onMouseDown={onMouseDown}>
        {exibitionNotificationMobile(
          (styles, item) =>
            item && (
              <MobileNotification style={styles} type={message?.type}>
                {icons[message?.type || 'info']}

                <div>
                  <strong>{message?.title}</strong>
                  <p>{message?.description}</p>
                </div>
              </MobileNotification>
            )
        )}

        {children}
      </MobileView>
      <MobileSnatch>
        <div onClick={handleMobileVisibility}>
          {showMobile ? 'Hide' : 'Show'}
        </div>
      </MobileSnatch>
    </Container>
  );
};

export default MobilePreview;
