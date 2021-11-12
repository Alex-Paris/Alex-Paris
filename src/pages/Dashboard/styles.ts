import styled, { css } from 'styled-components';

import { ZToolTip } from '../../styles/variables';

interface ScrollUpProps {
  scrollUp: boolean;
}

export const Content = styled.main``;

export const ScrollUp = styled.div<ScrollUpProps>`
  position: fixed;
  right: 1rem;
  bottom: -20%;
  background-color: ${(props) => props.theme.colors.primary};
  opacity: 0.8;
  padding: 0 0.3rem;
  border-radius: 0.4rem;
  z-index: ${ZToolTip};
  transition: 0.4s;
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.35);

  ${(props) =>
    props.scrollUp &&
    css`
      bottom: 4rem;
    `}

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryAlt};
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 0.3rem;
    color: #fff;
  }
`;
