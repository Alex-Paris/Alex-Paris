import styled from 'styled-components';

interface ContainerProps {
  isLoading?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  width: 390px;
  height: 682px;
  right: 20px;
  bottom: 60px;

  background: #4f4e55;
  border-radius: 45px;
  border: 0;
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
  width: 200px;
  height: 30px;
  left: 25%;
  top: 5px;

  background: #4f4e55;
  border-radius: 0px 0px 21px 21px;
  border: 0;
`;
