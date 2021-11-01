import styled from 'styled-components';

import {
  Section,
  Container,
  Grid,
  FirstColor,
  FirstColorAlt,
  BigFontSize,
  H3FontSize,
  TextColor,
  FontMedium,
  Mb075,
  Mb2,
  SmallFontSize,
  TitleColor,
  Mb025,
  Mb05,
} from '../../../styles/variables';

export const Home = styled.section`
  ${/*inherithed*/ Section}
`;

export const HomeContainer = styled.div`
  ${/*inherithed*/ Container}
  gap: 1rem;
`;

export const HomeContent = styled.div`
  ${/*inherithed*/ Grid}
  grid-template-columns: .5fr 3fr;
  padding-top: 3.5rem;
  align-items: center;
`;

export const HomeSocial = styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;

  a {
    font-size: 1.25rem;
    color: ${FirstColor};

    &:hover {
      color: ${FirstColorAlt};
    }
  }
`;

export const HomeImg = styled.div`
  svg {
    width: 200px;
    fill: ${FirstColor};

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
    color: ${TextColor};
    font-weight: ${FontMedium};
    margin-bottom: ${Mb075};
  }

  p {
    margin-bottom: ${Mb2};
  }

  button {
    margin-bottom: ${Mb2};

    svg {
      margin-left: ${Mb05};
    }
  }
`;

export const HomeScroll = styled.div`
  /* display: none; */

  button {
    color: ${FirstColor};
    transition: 0.3s;

    &:hover {
      transform: translateY(0.25rem);
    }

    span {
      ${SmallFontSize}
      color: ${TitleColor};
      font-weight: ${FontMedium};
      margin-right: ${Mb025};
    }
  }
`;
