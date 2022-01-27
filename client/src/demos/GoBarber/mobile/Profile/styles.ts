import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #f4ede8;
  font-size: 20px;
  font-weight: 400;

  height: 100%;
  background: #312e38;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  > button {
    width: 48px;
    height: 48px;
    border-radius: 24px;

    justify-content: center;
    align-items: center;

    background: #312e38;

    border: none;
    outline: none;
    margin-right: 82%;
    margin-top: 32px;
  }

  > label {
    margin-top: -34px;
    border-radius: 50%;
    cursor: pointer;

    img {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      align-self: center;
    }

    input {
      display: none;
    }
  }

  form {
    margin: 20px 0;
    width: 320px;
    text-align: center;

    p {
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
`;
