import styled, { css } from 'styled-components';

import {
  Section,
  Container,
  Grid,
  SectionTitle,
  SectionSubtitle,
  Mb1,
  H3FontSize,
  FontMedium,
  SmallFontSize,
  ZModal,
  Mb15,
  Mb025,
} from '../../../styles/variables';
import { device } from '../../../styles/device';

interface GamesModalProps {
  isOpened?: boolean;
}

export const Games = styled.section`
  ${/*inherithed*/ Section}

  > h2 {
    ${SectionTitle}
  }

  > span {
    ${SectionSubtitle}
  }
`;

export const GamesContainer = styled.div`
  ${/*inherithed*/ Container}
  ${/*inherithed*/ Grid}

  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);

  @media ${device.mobileMax} {
    grid-template-columns: max-content;
    justify-content: center;
  }

  @media ${device.laptopMin} {
    grid-template-columns: repeat(3, 218px);
    justify-content: center;
  }

  @media ${device.desktopMin} {
    grid-template-columns: repeat(3, 238px);
  }
`;

export const GamesContent = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.container};
  padding: 3.5rem 0.5rem 1.25rem 1.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: 0.3s;
  padding: 1rem 0 1rem 1rem;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  > div {
    > h3 {
      ${H3FontSize}
      font-weight: ${FontMedium};
    }

    > p {
      margin-bottom: ${Mb1};
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

export const GamesIcon = styled.i`
  ${/*inherithed*/ Grid}
  display: block;
  margin-bottom: ${Mb1};

  padding-right: 1rem;

  > img {
    border-radius: 0.5rem;
    justify-self: center;
    width: 320px;
  }
`;

export const GamesModal = styled.div<GamesModalProps>`
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

  @media ${device.mobileMax} {
    padding: 0 0.5rem;
  }
`;

export const GamesModalContent = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.container};
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
    color: ${(props) => props.theme.colors.primary};

    > svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  @media ${device.laptopMin} {
    width: 768px;
  }
`;

export const GamesModalDescription = styled.div`
  ${/*inherithed*/ Grid}

  margin-top: ${Mb15};
  row-gap: 1rem;
`;

export const GamesModalGame = styled.li`
  display: flex;
`;

export const GamesModalIcon = styled.i`
  color: ${(props) => props.theme.colors.primary};
  margin-right: ${Mb025};
`;
