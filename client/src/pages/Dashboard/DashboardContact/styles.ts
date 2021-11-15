import styled from 'styled-components';

import {
  Section,
  Container,
  Grid,
  Mb2,
  SectionTitle,
  SectionSubtitle,
  SmallerFontSize,
  Mb075,
  H3FontSize,
  SmallFontSize,
  BodyFont,
  NormalFontSize,
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

export const ContactForm = styled.form`
  ${/*inherithed*/ Grid}

  @media ${device.desktopMin} {
    width: 460px;
  }
`;

export const ContactInputs = styled.div`
  ${/*inherithed*/ Grid}

  @media ${device.desktopMin} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ContactContent = styled.div`
  background-color: ${(props) => props.theme.colors.input};
  border-radius: 0.5rem;
  padding: 0.75rem 1rem 0.25rem;

  label {
    ${SmallerFontSize}
    color: ${(props) => props.theme.colors.title};
  }

  input,
  textarea {
    ${NormalFontSize}
    width: 100%;
    background-color: ${(props) => props.theme.colors.input};
    color: ${(props) => props.theme.colors.text};
    font-family: ${BodyFont};
    border: none;
    outline: none;
    padding: 0.25rem 0.5rem 0.5rem 0;
  }
`;