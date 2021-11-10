import styled from 'styled-components';

import {
  Section,
  Container,
  Grid,
  Mb2,
  TitleColor,
  SectionTitle,
  SectionSubtitle,
  SmallerFontSize,
  FirstColor,
  Mb075,
  H3FontSize,
  SmallFontSize,
  TextColorLight,
  InputColor,
  TextColor,
  BodyFont,
  NormalFontSize,
} from '../../../styles/variables';

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
`;

export const ContactInformation = styled.div`
  display: flex;
  margin-bottom: ${Mb2};

  > svg {
    color: ${FirstColor};
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
      color: ${TextColorLight};
    }
  }
`;

export const ContactForm = styled.form`
  ${/*inherithed*/ Grid}
`;

export const ContactInputs = styled.div`
  ${/*inherithed*/ Grid}
`;

export const ContactContent = styled.div`
  background-color: ${InputColor};
  border-radius: 0.5rem;
  padding: 0.75rem 1rem 0.25rem;

  label {
    ${SmallerFontSize}
    color: ${TitleColor};
  }

  input,
  textarea {
    ${NormalFontSize}
    width: 100%;
    background-color: ${InputColor};
    color: ${TextColor};
    font-family: ${BodyFont};
    border: none;
    outline: none;
    padding: 0.25rem 0.5rem 0.5rem 0;
  }
`;
