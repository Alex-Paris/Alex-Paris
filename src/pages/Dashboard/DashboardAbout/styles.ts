import styled from 'styled-components';

import {
  Section,
  Container,
  Grid,
  Mb2,
  TitleColor,
  Mb05,
  SectionTitle,
  SectionSubtitle,
  Mb25,
  SmallerFontSize,
  H2FontSize,
  FontSemiBold,
} from '../../../styles/variables';

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
  }
`;

export const AboutData = styled.div`
  p {
    text-align: center;
    margin-bottom: ${Mb25};
  }
`;

export const AboutInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: ${Mb25};
`;

export const AboutInfoTitle = styled.div`
  ${H2FontSize}
  font-weight: ${FontSemiBold};
  color: ${TitleColor};
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
`;
