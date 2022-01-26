import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 13px;

  height: 100%;

  strong {
    color: #f4ede8;
    font-size: 32px;
    margin-top: 48px;
    text-align: center;
  }

  p {
    font-size: 18px;
    color: #999591;
    margin-top: 16px;
  }

  button {
    margin-top: 24px;
    padding: 12px 24px;
    font-size: 18px;
    color: #312e38;
  }
`;
