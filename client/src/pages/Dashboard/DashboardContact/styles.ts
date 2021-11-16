import styled from 'styled-components';

import {
  Section,
  Container,
  Grid,
  Mb2,
  SectionTitle,
  SectionSubtitle,
  Mb075,
  H3FontSize,
  SmallFontSize,
} from '../../../styles/variables';
import { device } from '../../../styles/device';

export const Contact = styled.section`
  ${/*inherithed*/ Section}

  > h2 {
    ${SectionTitle}
  }

  > span {
    ${SectionSubtitle}
  }
`;

export const ContactContainer = styled.div`
  ${/*inherithed*/ Container}
  ${/*inherithed*/ Grid}

  row-gap: 3rem;

  @media ${device.tabletMin} {
    grid-template-columns: repeat(2, 1fr);
  }

  form {
    ${/*inherithed*/ Grid}

    @media ${device.desktopMin} {
      width: 460px;
    }
  }
`;

export const ContactInformation = styled.div`
  display: flex;
  margin-bottom: ${Mb2};

  > svg {
    color: ${(props) => props.theme.colors.primary};
    margin-right: ${Mb075};
    width: 2rem;
    height: 2rem;
  }

  > div {
    h3 {
      ${H3FontSize}
    }

    span {
      ${SmallFontSize}
      color: ${(props) => props.theme.colors.textLight};
    }
  }
`;

export const ContactInputs = styled.div`
  ${/*inherithed*/ Grid}

  @media ${device.desktopMin} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
