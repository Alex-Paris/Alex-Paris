import styled from 'styled-components';
import { device } from '../../styles/device';

import {
  Container,
  Grid,
  ZFixed,
  BodyColor,
  HeaderHeight,
  TitleColor,
  FontMedium,
  FirstColor,
  SmallFontSize,
  FirstColorAlt,
} from '../../styles/variables';

export const Header = styled.header`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: ${ZFixed};
  background-color: ${BodyColor};
`;

export const Nav = styled.nav`
  ${/*inherited*/ Container}

  max-width: 968px;
  height: ${HeaderHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    color: ${TitleColor};
    font-weight: ${FontMedium};

    &:hover {
      color: ${FirstColor};
    }
  }
`;

export const NavMenu = styled.div`
  @media ${device.tablet} {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${BodyColor};
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: 0.3s;
  }

  > svg {
    position: absolute;
    right: 1.3rem;
    bottom: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${FirstColor};

    &:hover {
      color: ${FirstColorAlt};
    }
  }

  ul {
    ${Grid}
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

export const NavToggle = styled.div`
  color: ${TitleColor};
  font-weight: ${FontMedium};
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    color: ${FirstColor};
  }
`;

export const NavItem = styled.li`
  a {
    ${SmallFontSize}
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${TitleColor};
    font-weight: ${FontMedium};

    svg {
      font-size: 1.2rem;
    }

    &:hover {
      color: ${FirstColor};
    }
  }
`;
