import styled, { css } from 'styled-components';

// import { device } from '../../styles/device';
import {
  Section,
  Container,
  Grid,
  FirstColor,
  FirstColorAlt,
  BigFontSize,
  H3FontSize,
  TextColor,
  FontMedium,
  Mb075,
  Mb2,
  SmallFontSize,
  TitleColor,
  Mb025,
  Mb05,
  SectionTitle,
  SectionSubtitle,
  Mb25,
  SmallerFontSize,
  H2FontSize,
  FontSemiBold,
  TextColorLight,
  NormalFontSize,
  FirstColorLighter,
} from '../../styles/variables';

interface SkillsItemListBarProps {
  porcent?: number;
}

export const Content = styled.main``;

export const Home = styled.section`
  ${/*inherithed*/ Section}
`;

export const HomeContainer = styled.div`
  ${/*inherithed*/ Container}
  gap: 1rem;
`;

export const HomeContent = styled.div`
  ${/*inherithed*/ Grid}
  grid-template-columns: .5fr 3fr;
  padding-top: 3.5rem;
  align-items: center;
`;

export const HomeSocial = styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;

  a {
    font-size: 1.25rem;
    color: ${FirstColor};

    &:hover {
      color: ${FirstColorAlt};
    }
  }
`;

export const HomeImg = styled.div`
  svg {
    width: 200px;
    fill: ${FirstColor};

    image {
      width: 200px;
    }
  }
`;

export const HomeData = styled.div`
  grid-column: 1/3;

  h1 {
    ${BigFontSize}
  }

  h3 {
    ${H3FontSize}
    color: ${TextColor};
    font-weight: ${FontMedium};
    margin-bottom: ${Mb075};
  }

  p {
    margin-bottom: ${Mb2};
  }

  button {
    margin-bottom: ${Mb2};

    svg {
      margin-left: ${Mb05};
    }
  }
`;

export const HomeScroll = styled.div`
  /* display: none; */

  button {
    color: ${FirstColor};
    transition: 0.3s;

    &:hover {
      transform: translateY(0.25rem);
    }

    span {
      ${SmallFontSize}
      color: ${TitleColor};
      font-weight: ${FontMedium};
      margin-right: ${Mb025};
    }
  }
`;

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

export const Skills = styled.section`
  ${/*inherithed*/ Section}

  h2 {
    ${SectionTitle}
  }

  span {
    ${SectionSubtitle}
  }
`;

export const SkillsContainer = styled.div`
  ${/*inherithed*/ Container}
  ${/*inherithed*/ Grid}

  row-gap: 0;
`;

export const SkillsContent = styled.div``;

export const SkillsItemHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${Mb25};
  margin-top: 40px;
  cursor: pointer;

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

export const SkillsArrow = styled.i`
  margin-left: auto;
  transition: 0.4s;
`;

export const SkillsItemList = styled.div`
  row-gap: 1.5rem;
  padding-left: 2.7rem;
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
