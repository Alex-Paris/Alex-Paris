import styled, { css } from 'styled-components';
import Unity from 'react-unity-webgl';

import { device } from '../../styles/device';

interface UnityCanvas {
  isLoaded: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UnityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #231f20;
  width: 768px;
  height: 432px;

  border-radius: 12px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);

  @media ${device.laptopMax} {
    width: 100%;
    height: 100%;
  }
`;

export const UnityLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  > div {
    width: 150px;
    height: 10px;
    background-color: rgb(99, 99, 99);
    border-radius: 5px;
    overflow: hidden;

    > div {
      height: 10px;
      background-color: rgb(190, 190, 190);
      transition: width 0.5s ease;
    }
  }
`;

export const UnityCanvas = styled(Unity)<UnityCanvas>`
  border-radius: 12px;

  ${(props) =>
    props.isLoaded
      ? css`
          visibility: show;
          width: 100%;
          height: 100%;
        `
      : css`
          visibility: hidden;
          width: 0%;
          height: 0%;
        `}
`;
