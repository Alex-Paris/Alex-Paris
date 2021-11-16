import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import {
  BodyFont,
  NormalFontSize,
  SmallerFontSize,
  SmallFontSize,
} from '../../styles/variables';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.theme.colors.input};
  transition: 0.2s;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem 0.25rem;
  border: 2px solid transparent;

  /* & + div {
    margin-top: -80px;
  } */

  label {
    ${SmallerFontSize}
    color: ${(props) => props.theme.colors.title};
  }

  p {
    ${SmallFontSize}
    height: 20px;
    font-style: italic;
    color: ${lighten(0.2, '#c53030')};
    font-family: ${BodyFont};
  }

  input,
  textarea {
    ${NormalFontSize}
    width: 100%;
    background-color: ${(props) => props.theme.colors.input};
    color: ${(props) => props.theme.colors.text};
    font-family: ${BodyFont};
    border: none;
    outline: none;
    padding: 0.25rem 0.5rem 0.5rem 0;
  }

  ${(props) =>
    props.isFilled &&
    css`
      border-color: ${lighten(0.2, props.theme.colors.primary)};
    `}

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${lighten(0.2, '#c53030')};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${props.theme.colors.primary};
    `}
`;
