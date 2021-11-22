import styled, { css, keyframes } from 'styled-components';
import { shade } from 'polished';

import { FontMedium, H3FontSize, Mb15 } from '../../../../styles/variables';
import { device } from '../../../../styles/device';

import signInBackgroundImg from '../../assets/sign-in-background.png';

interface FakeMaillProps {
  isOpened?: boolean;
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* place-content: center; */

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg});
  background-size: cover;
`;

export const FakeMail = styled.div<FakeMaillProps>`
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

export const FakeMailContent = styled.div`
  position: relative;
  background-color: #312e38;
  padding: 1.5rem;
  border-radius: 0.5rem;

  > h4 {
    ${H3FontSize}
    font-weight: ${FontMedium};
    margin-bottom: ${Mb15};
  }

  @media ${device.laptopMin} {
    width: 650px;
  }
`;
