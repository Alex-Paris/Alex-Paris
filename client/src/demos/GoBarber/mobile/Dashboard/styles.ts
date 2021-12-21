import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: #312e38;
`;

export const Header = styled.header`
  padding: 32px 0;
  padding-top: 40px;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  align-items: center;

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    background: #3e3b47;
    border-radius: 10px;
    padding: 16px;
    flex-direction: row;
    align-items: center;

    font-size: 18px;
    color: #f4ede8;
  }

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-left: 20px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    line-height: 28px;

    span {
      color: #f4ede8;
    }

    strong {
      text-decoration: none;
      color: #ff9000;
    }
  }
`;
