import styled from 'styled-components';

import { device } from '../../../../styles/device';
import { Container as ContainerStyle } from '../../../../styles/variables';

export const Container = styled.div`
  ${/*inherithed*/ ContainerStyle}

  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 50px;
`;

export const GameContent = styled.div`
  @media ${device.tabletMin} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.laptopMin} {
    background-color: ${(props) => props.theme.colors.secundary};
    border-radius: 1rem;
    padding: 2rem 2.5rem 0;
    grid-template-columns: 1fr max-content;
    column-gap: 3rem;
  }

  h1 {
  }
`;
