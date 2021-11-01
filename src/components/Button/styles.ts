import styled, { css } from 'styled-components';

import { FirstColor, FirstColorAlt, FontMedium } from '../../styles/variables';

interface ContainerProps {
  isFlex?: boolean;
  isSimple?: boolean;
  isActive?: boolean;
  isPressed: boolean;
}

export const Container = styled.button<ContainerProps>`
  border: 0;
  background-color: transparent;

  ${(props) =>
    !props.isSimple &&
    css`
      display: inline-block;
      align-items: center;
      background-color: ${FirstColor};
      color: #fff;
      padding: 1rem;
      border-radius: 0.5rem;
      font-weight: ${FontMedium};
      transition: 0.1s;

      &:hover {
        background-color: ${FirstColorAlt};
      }

      ${props.isPressed &&
      css`
        transform: translateY(0.2rem);
      `}
    `}

  ${(props) =>
    props.isFlex &&
    css`
      display: inline-flex;
      align-items: center;
    `}

  ${(props) =>
    props.isSimple &&
    props.isActive &&
    css`
      color: ${FirstColor};
    `}
`;
