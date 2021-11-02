import styled, { css } from 'styled-components';

import {
  Section,
  Container,
  Grid,
  SectionTitle,
  SectionSubtitle,
  ContainerColor,
  FirstColor,
  Mb1,
  H3FontSize,
  FontMedium,
  SmallFontSize,
  ZModal,
  Mb15,
  Mb025,
} from '../../../styles/variables';

interface ServicesModalProps {
  isOpened?: boolean;
}

export const Services = styled.section`
  ${/*inherithed*/ Section}

  > h2 {
    ${SectionTitle}
  }

  > span {
    ${SectionSubtitle}
  }
`;

export const ServicesContainer = styled.div`
  ${/*inherithed*/ Container}
  ${/*inherithed*/ Grid}

  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
`;

export const ServicesContent = styled.div`
  position: relative;
  background-color: ${ContainerColor};
  padding: 3.5rem 0.5rem 1.25rem 1.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  > div {
    > h3 {
      ${H3FontSize}
      margin-bottom: ${Mb1};
      font-weight: ${FontMedium};
    }
  }

  > button {
    ${SmallFontSize}

    svg {
      transition: 0.2s;
    }

    &:hover {
      svg {
        transform: translateX(0.35rem);
      }
    }
  }
`;

export const ServicesIcon = styled.i`
  display: block;
  color: ${FirstColor};
  margin-bottom: ${Mb1};
`;

export const ServicesModal = styled.div<ServicesModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  z-index: ${ZModal};
  transition: 0.3s;
  opacity: 0;
  visibility: hidden;

  ${(props) =>
    props.isOpened &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

export const ServicesModalContent = styled.div`
  position: relative;
  background-color: ${ContainerColor};
  padding: 1.5rem;
  border-radius: 0.5rem;

  > h4 {
    ${H3FontSize}
    font-weight: ${FontMedium};
    margin-bottom: ${Mb15};
  }

  > button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: ${FirstColor};
  }
`;

export const ServicesModalServices = styled.ul`
  ${/*inherithed*/ Grid}

  row-gap: 1rem;
`;

export const ServicesModalService = styled.li`
  display: flex;
`;

export const ServicesModalIcon = styled.i`
  color: ${FirstColor};
  margin-right: ${Mb025};
`;