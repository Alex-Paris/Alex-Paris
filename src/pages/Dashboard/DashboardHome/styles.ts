import styled from 'styled-components';

import {
  Section,
  Container,
  Grid,
  BigFontSize,
  H3FontSize,
  FontMedium,
  Mb075,
  Mb2,
  SmallFontSize,
  Mb025,
} from '../../../styles/variables';
import { device } from '../../../styles/device';

export const Home = styled.section`
  ${/*inherithed*/ Section}
`;

export const HomeContainer = styled.div`
  ${/*inherithed*/ Container}
  gap: 1rem;
`;

export const HomeContent = styled.div`
  ${/*inherithed*/ Grid}
  grid-template-columns: 0.5fr 3fr;
  padding-top: 3.5rem;
  align-items: center;

  @media ${device.mobileM} {
    grid-template-columns: 0.25fr 3fr;
  }
`;

export const HomeSocial = styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;

  a {
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors.primary};
    padding: 0.3rem 0.3rem 0rem 0.3rem;
    border-radius: 0.25rem;
    transition: 0.3s;

    svg + svg {
      width: 1.1rem;
      height: 1.1rem;
      margin-left: 0.7rem;
      color: transparent;
      transition: 0.3s;
    }

    &:hover {
      color: ${(props) => props.theme.colors.primaryAlt};
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      svg + svg {
        width: 1.1rem;
        height: 1.1rem;
        margin-left: 0.7rem;
        color: ${(props) => props.theme.colors.primaryAlt};
      }
    }
  }
`;

export const HomeImg = styled.div`
  svg {
    width: 200px;
    fill: ${(props) => props.theme.colors.primary};

    @media ${device.mobileM} {
      width: 180px;
    }

    image {
      width: 200px;
    }
  }
`;

export const HomeData = styled.div`
  grid-column: 1/3;

  h1 {
    ${BigFontSize}
  }

  h3 {
    ${H3FontSize}
    color: ${(props) => props.theme.colors.text};
    font-weight: ${FontMedium};
    margin-bottom: ${Mb075};
  }

  p {
    margin-bottom: ${Mb2};
  }

  button {
    margin-bottom: ${Mb2};
  }
`;

export const HomeScroll = styled.div`
  /* display: none; */

  button {
    color: ${(props) => props.theme.colors.primary};
    transition: 0.3s;

    &:hover {
      transform: translateY(0.25rem);
    }

    svg {
      width: 2rem;
      height: 2rem;

      &:last-child {
        width: inherit;
        height: inherit;
      }
    }

    span {
      ${SmallFontSize}
      color: ${(props) => props.theme.colors.title};
      font-weight: ${FontMedium};
      margin-right: ${Mb025};
    }
  }
`;
