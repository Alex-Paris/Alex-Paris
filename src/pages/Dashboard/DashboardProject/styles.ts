import styled from 'styled-components';

import {
  Section,
  Container,
  Grid,
  H2FontSize,
  FirstColorSecond,
  Mb075,
  Mb15,
} from '../../../styles/variables';

export const Project = styled.section`
  ${/*inherithed*/ Section}

  text-align: center;

  > div {
    background-color: ${FirstColorSecond};
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
