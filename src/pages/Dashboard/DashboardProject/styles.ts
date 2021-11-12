import styled from 'styled-components';

import {
  Section,
  Container,
  Grid,
  H2FontSize,
  Mb075,
  Mb15,
} from '../../../styles/variables';
import { device } from '../../../styles/device';

export const Project = styled.section`
  ${/*inherithed*/ Section}

  text-align: center;

  > div {
    background-color: ${(props) => props.theme.colors.secundary};
    padding-top: 3rem;

    @media ${device.laptopMin} {
      background: none;
    }
  }

  @media ${device.laptopMin} {
    text-align: initial;
  }
`;

export const ProjectContainer = styled.div`
  ${/*inherithed*/ Container}
  ${/*inherithed*/ Grid}

  > img {
    width: 232px;
    border-radius: 0.5rem;
    justify-self: center;
    align-self: center;

    @media ${device.mobileMax} {
      width: 180px;
    }
  }

  @media ${device.tabletMin} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.laptopMin} {
    background-color: ${(props) => props.theme.colors.secundary};
    border-radius: 1rem;
    padding: 3rem 2.5rem 0;
    grid-template-columns: 1fr max-content;
    column-gap: 3rem;
  }
`;

export const ProjectData = styled.div`
  > h2 {
    ${H2FontSize}
    margin-bottom: ${Mb075};
    color: #fff;
  }

  > p {
    color: #fff;
    margin-bottom: ${Mb15};
  }

  @media ${device.laptopMin} {
    padding-top: 0.8rem;
  }
`;
