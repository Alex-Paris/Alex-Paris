import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  font-size: 14px;
  font-weight: 400;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* place-content: center; */

  width: 100%;
  max-width: 700px;

  > img {
    width: 200px;
  }

  form {
    margin: 60px 0;
    width: 320px;
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
`;

export const CreateAccountButton = styled.div`
  display: flex;
  border-top: 4px solid #232129;
  width: 100%;
  align-items: center;
  justify-content: center;

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    font-size: 18px;
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
