import styled from 'styled-components';

import {
  Container,
  Grid,
  H1FontSize,
  Mb025,
  SmallFontSize,
  Mb15,
  SmallerFontSize,
  Mb3,
} from '../../../styles/variables';
import { device } from '../../../styles/device';

export const Footer = styled.footer`
  padding-top: 2rem;

  > div {
    background-color: ${(props) => props.theme.colors.secundary};
    padding: 2rem 0 3rem;

    > p {
      ${SmallerFontSize}
      text-align: center;
      color: ${(props) => props.theme.colors.textLight};
      margin-top: ${Mb3};

      @media ${device.laptopMin} {
        margin-top: 4.5rem;
      }
    }

    @media ${device.laptopMin} {
      padding: 3rem 0 3.5rem;
    }
  }
`;

export const FooterContainer = styled.div`
  ${/*inherithed*/ Container}
  ${/*inherithed*/ Grid}

  row-gap: 3.5rem;

  > div {
    h1 {
      ${H1FontSize}
      margin-bottom: ${Mb025};
      color: #fff;
    }

    span {
      ${SmallFontSize}
      color: #fff;
    }
  }

  @media ${device.tabletMin} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.laptopMin} {
    padding: 0 1rem;
  }

  @media ${device.laptopMin} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  li {
    a {
      color: #fff;
      transition: 0.3s;

      :hover {
        color: ${(props) => props.theme.colors.lighter};
      }
    }
  }

  @media ${device.laptopMin} {
    flex-direction: row;
    column-gap: 2rem;
  }
`;

export const FooterSocials = styled.ul`
  a {
    font-size: 1.25rem;
    margin-right: ${Mb15};
    color: #fff;
    transition: 0.3s;

    :hover {
      color: ${(props) => props.theme.colors.lighter};
    }
  }

  @media ${device.laptopMin} {
    justify-self: flex-end;
  }
`;
