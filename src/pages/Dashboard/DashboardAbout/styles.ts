import styled from 'styled-components';

import {
  Section,
  Container,
  Grid,
  Mb2,
  Mb05,
  SectionTitle,
  SectionSubtitle,
  Mb25,
  SmallerFontSize,
  H2FontSize,
  FontSemiBold,
} from '../../../styles/variables';
import { device } from '../../../styles/device';

export const About = styled.section`
  ${/*inherithed*/ Section}

  h2 {
    ${SectionTitle}
  }

  span {
    ${SectionSubtitle}
  }
`;

export const AboutContainer = styled.div`
  ${/*inherithed*/ Container}
  ${/*inherithed*/ Grid}

  img {
    width: 200px;
    border-radius: 0.5rem;
    justify-self: center;
    align-self: center;

    @media ${device.laptopMin} {
      width: 350px;
    }
  }

  @media ${device.tabletMin} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.laptopMin} {
    column-gap: 5rem;
  }
`;

export const AboutData = styled.div`
  p {
    text-align: center;
    margin-bottom: ${Mb25};

    @media ${device.laptopMin} {
      text-align: initial;
    }
  }
`;

export const AboutInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: ${Mb25};

  @media ${device.laptopMin} {
    justify-content: space-between;
  }
`;

export const AboutInfoTitle = styled.div`
  ${H2FontSize}
  font-weight: ${FontSemiBold};
  color: ${(props) => props.theme.colors.title};
  display: block;
  text-align: center;
`;

export const AboutInfoName = styled.div`
  ${SmallerFontSize}

  display: block;
  text-align: center;
`;

export const AboutButtons = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin-bottom: ${Mb2};

    svg {
      margin-left: ${Mb05};
    }
  }

  @media ${device.laptopMin} {
    justify-content: initial;
  }
`;
