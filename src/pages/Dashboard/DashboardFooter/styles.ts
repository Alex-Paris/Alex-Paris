import styled from 'styled-components';

import {
  Container,
  Grid,
  FirstColorSecond,
  H1FontSize,
  Mb025,
  SmallFontSize,
  FirstColorLighter,
  Mb15,
  SmallerFontSize,
  TextColorLight,
  Mb3,
} from '../../../styles/variables';

export const Footer = styled.footer`
  padding-top: 2rem;

  > div {
    background-color: ${FirstColorSecond};
    padding: 2rem 0 3rem;

    > p {
      ${SmallerFontSize}
      text-align: center;
      color: ${TextColorLight};
      margin-top: ${Mb3};
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
`;

export const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  li {
    a {
      color: #fff;

      :hover {
        color: ${FirstColorLighter};
      }
    }
  }
`;

export const FooterSocials = styled.ul`
  a {
    font-size: 1.25rem;
    margin-right: ${Mb15};
    color: #fff;

    :hover {
      color: ${FirstColorLighter};
    }
  }
`;
