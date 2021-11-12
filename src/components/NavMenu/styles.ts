import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

import { device } from '../../styles/device';

import {
  Container,
  Grid,
  ZFixed,
  HeaderHeight,
  FontMedium,
  SmallFontSize,
  Mb1,
} from '../../styles/variables';

interface HeaderProps {
  isBordered: boolean;
}

export const Header = styled.header<HeaderProps>`
  width: 100%;
  position: fixed;
  bottom: 0;
  transition: 0.3s;
  left: 0;
  z-index: ${ZFixed};
  background-color: ${(props) => props.theme.colors.background};

  ${(props) =>
    props.isBordered &&
    css`
      box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    `}
`;

export const Nav = styled.nav`
  ${/*inherited*/ Container}

  max-width: 968px;
  height: ${HeaderHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    color: ${(props) => props.theme.colors.title};
    font-weight: ${FontMedium};
    transition: 0.3s;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const NavList = styled(animated.div)`
  @media ${device.tablet} {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${(props) => props.theme.colors.background};
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: 0.3s;
  }

  @media ${device.mobileM} {
    padding: 2rem 0.25rem 4rem;
  }

  > svg {
    position: absolute;
    right: 1.3rem;
    bottom: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary};

    &:hover {
      color: ${(props) => props.theme.colors.primaryAlt};
    }
  }

  ul {
    ${Grid}
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media ${device.mobileM} {
      column-gap: 0;
    }
  }
`;

export const NavToggle = styled.div`
  color: ${(props) => props.theme.colors.title};
  font-weight: ${FontMedium};
  font-size: 1.1rem;
  width: 1.1rem;
  height: 1.1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const NavItem = styled.li`
  a {
    ${SmallFontSize}
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => props.theme.colors.title};
    font-weight: ${FontMedium};
    transition: 0.3s;

    svg {
      font-size: 1.2rem;
    }

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  > .active {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const NavBtns = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: ${(props) => props.theme.colors.title};
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
    margin-right: ${Mb1};
    transition: 0.3s;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;
