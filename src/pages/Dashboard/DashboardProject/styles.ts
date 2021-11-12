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

    @media ${device.mobileM} {
      width: 180px;
    }
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
`;
