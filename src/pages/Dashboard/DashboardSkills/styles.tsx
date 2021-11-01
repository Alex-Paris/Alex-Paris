import styled, { css } from 'styled-components';

import {
  Section,
  Container,
  Grid,
  FirstColor,
  H3FontSize,
  FontMedium,
  Mb075,
  SmallFontSize,
  Mb05,
  SectionTitle,
  SectionSubtitle,
  Mb25,
  TextColorLight,
  NormalFontSize,
  FirstColorLighter,
} from '../../../styles/variables';

interface SkillsContentProps {
  isOpened: boolean;
}

interface SkillsItemListBarProps {
  porcent?: number;
}

export const Skills = styled.section`
  ${/*inherithed*/ Section}

  > h2 {
    ${SectionTitle}
  }

  > span {
    ${SectionSubtitle}
    margin-bottom: 10px;
  }
`;

export const SkillsContainer = styled.div`
  ${/*inherithed*/ Container}
  ${/*inherithed*/ Grid}

  row-gap: 0;
`;

export const SkillsContent = styled.div<SkillsContentProps>`
  ${(props) =>
    !props.isOpened &&
    css`
      height: 30px;
    `}
`;

export const SkillsItemHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${Mb25};
  cursor: pointer;
  margin-top: 40px;

  svg {
    color: ${FirstColor};
  }

  div {
    h1 {
      ${H3FontSize}
    }

    span {
      ${SmallFontSize}
      color: ${TextColorLight};
      margin-bottom: 0;
      text-align: left;
    }
  }
`;

export const SkillsIcon = styled.i`
  margin-right: ${Mb075};
`;

export const SkillsArrow = styled.i<SkillsContentProps>`
  margin-left: auto;
  transition: 0.4s;

  ${(props) =>
    props.isOpened &&
    css`
      transform: rotate(-180deg);
    `}
`;

export const SkillsItemList = styled.div<SkillsContentProps>`
  row-gap: 1.5rem;
  padding-left: 2.7rem;
  transition: 0.3s;

  ${(props) =>
    !props.isOpened
      ? css`
          height: 0;
          overflow: hidden;
        `
      : css`
          height: max-content;
          margin-bottom: ${Mb25};
        `}
`;

export const SkillsItemListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${Mb05};
  margin-top: 30px;

  h3 {
    ${NormalFontSize}
    font-weight: ${FontMedium};
  }

  span {
    margin-bottom: 0px;
  }
`;

export const SkillsItemListBar = styled.div<SkillsItemListBarProps>`
  height: 5px;
  border-radius: 0.25rem;
  background-color: ${FirstColorLighter};

  span {
    display: block;
    height: 5px;
    border-radius: 0.25rem;
    background-color: ${FirstColor};

    ${(props) => css`
      width: ${props.porcent}%;
    `}
  }
`;
