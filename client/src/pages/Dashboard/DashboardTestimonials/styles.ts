import styled from 'styled-components';
import { device } from '../../../styles/device';

import {
  Section,
  Container,
  SectionTitle,
  SectionSubtitle,
  Mb25,
  Mb1,
  Mb075,
  H3FontSize,
  FontMedium,
  SmallFontSize,
  Mb025,
} from '../../../styles/variables';

export const Testimonials = styled.section`
  ${/*inherithed*/ Section}

  //Doesnt have testimonials yet
  display: none;

  > h2 {
    ${SectionTitle}
  }

  > span {
    ${SectionSubtitle}
  }
`;

export const TestimonialsContainer = styled.div`
  ${/*inherithed*/ Container}
`;

export const TestimonialsContent = styled.div``;

export const TestimonialsData = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${Mb1};

  > div {
    svg {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  @media ${device.mobileMax} {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const TestimonialsHeader = styled.div`
  display: flex;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: ${Mb075};

    @media ${device.mobileMax} {
      margin-right: 0;
      margin-bottom: ${Mb025};
    }
  }

  > div {
    h3 {
      ${H3FontSize}
      font-weight: ${FontMedium}
    }

    span {
      ${SmallFontSize}
      color: ${(props) => props.theme.colors.textLight};
    }
  }

  @media ${device.mobileMax} {
    flex-direction: column;
    align-items: center;
  }
`;

export const TestimonialsDescription = styled.p`
  margin-bottom: ${Mb25};

  @media ${device.mobileMax} {
    text-align: center;
  }
`;
