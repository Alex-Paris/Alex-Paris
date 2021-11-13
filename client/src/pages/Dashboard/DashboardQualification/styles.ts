import styled, { css } from 'styled-components';

import {
  Section,
  Container,
  SectionTitle,
  SectionSubtitle,
  Mb2,
  H3FontSize,
  FontMedium,
  Mb025,
  NormalFontSize,
  SmallFontSize,
  Mb1,
  SmallerFontSize,
} from '../../../styles/variables';
import { device } from '../../../styles/device';

interface QualificationContentProps {
  isSelected?: boolean;
}

export const Qualification = styled.section`
  ${/*inherithed*/ Section}

  > h2 {
    ${SectionTitle}
  }

  > span {
    ${SectionSubtitle}
  }
`;

export const QualificationContainer = styled.div`
  ${/*inherithed*/ Container}
`;

export const QualificationTabs = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: ${Mb2};

  button {
    ${H3FontSize}
    font-weight: ${FontMedium};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }

    @media ${device.laptopMin} {
      margin: 0 ${Mb1};
    }
  }

  @media ${device.laptopMin} {
    justify-content: center;
  }
`;

export const QualificationIcon = styled.i`
  margin-right: ${Mb025};

  svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

export const QualificationSections = styled.div`
  @media ${device.tabletMin} {
    display: grid;
    grid-template-columns: 0.6fr;
    justify-content: center;
  }

  @media ${device.laptopMin} {
    grid-template-columns: 0.5fr;
  }
`;

export const QualificationContent = styled.div<QualificationContentProps>`
  transition: 0.4s;

  ${(props) =>
    props.isSelected
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
`;

export const QualificationData = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;

  @media ${device.mobileMax} {
    gap: 0.5rem;
  }
`;

export const QualificationDescription = styled.div`
  h3 {
    ${NormalFontSize}
    font-weight: ${FontMedium};
  }

  span {
    ${SmallFontSize}
    display: inline-block;
    margin-bottom: ${Mb1};
  }
`;

export const QualificationCalendar = styled.div`
  ${SmallerFontSize}
  color: ${(props) => props.theme.colors.textLight};

  svg {
    width: 0.813rem;
    height: 0.813rem;
  }
`;

export const QualificationRounder = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
`;

export const QualificationLine = styled.span`
  display: block;
  width: 1px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  transform: translate(6px, -7px);
`;
