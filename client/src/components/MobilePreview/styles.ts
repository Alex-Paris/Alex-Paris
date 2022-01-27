import { shade } from 'polished';
import styled from 'styled-components';

interface ContainerProps {
  isLoading?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  /* visibility: hidden; */
  width: 390px;
  height: 682px;
  right: 20px;
  bottom: -580px;

  background: #4f4e55;
  border-radius: 45px;
  border: 0;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const MobileView = styled.div<ContainerProps>`
  position: absolute;
  overflow: auto;
  width: 375px;
  height: 667px;
  right: 7px;
  bottom: 7px;

  background: #26252d;
  border-radius: 43px;
  border: 0;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MobileSnatch = styled.div<ContainerProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 30px;
  left: 25%;
  top: 5px;

  background: #4f4e55;
  border-radius: 0px 0px 21px 21px;
  border: 0;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 25px;
    left: 25%;
    top: 5px;
    border-radius: 0px 0px 10px 10px;
    background-image: linear-gradient(
      to top,
      ${shade(0.3, '#4f4e55')},
      #4f4e55,
      #4f4e55
    );
  }
`;
