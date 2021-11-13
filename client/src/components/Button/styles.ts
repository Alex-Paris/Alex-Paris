import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import { FontMedium, Mb05 } from '../../styles/variables';

interface ContainerProps {
  isFlex?: boolean;
  isSimple?: boolean;
  isActive?: boolean;
  isWhite?: boolean;
  isSmall?: boolean;
  isLink?: boolean;
  isPressed: boolean;
}

export const Container = styled.button<ContainerProps>`
  border: 0;
  padding: 0;
  background-color: transparent;
  transition: 0.2s;
  color: ${(props) => props.theme.colors.title};

  > svg {
    margin-left: ${Mb05};
    width: 1.25rem;
    height: 1.25rem;
    transition: 0.3s;
  }

  ${(props) =>
    !props.isSimple &&
    css`
      display: inline-block;
      align-items: center;
      background-color: ${(props) => props.theme.colors.primary};
      color: #fff;
      padding: 1rem;
      border-radius: 0.5rem;
      font-weight: ${FontMedium};

      &:hover {
        background-color: ${(props) => props.theme.colors.primaryAlt};
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
      color: ${(props) => props.theme.colors.primary};
    `}

  ${(props) =>
    !props.isSimple &&
    props.isWhite &&
    css`
      background-color: #fff;
      color: ${(props) => props.theme.colors.primary};

      &:hover {
        background-color: ${(props) =>
          lighten(0.12, props.theme.colors.lighter)};
        color: ${(props) => props.theme.colors.primaryAlt};
      }
    `}

  ${(props) =>
    props.isSmall &&
    css`
      padding: 0.75rem 1rem;
    `}

  ${(props) =>
    props.isLink &&
    css`
      color: ${(props) => props.theme.colors.primary};

      &:hover {
        color: ${(props) => props.theme.colors.primaryAlt};
      }
    `}
`;
