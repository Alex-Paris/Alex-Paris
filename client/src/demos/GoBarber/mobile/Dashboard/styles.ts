import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: #312e38;
  font-weight: 400;
`;

export const Header = styled.header`
  padding: 24px 0;
  padding-top: 40px;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  margin-left: 20px;
  margin-right: 20px;
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

  a {
    width: 56px;
    height: 56px;
    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      margin-left: 10px;
    }
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

    color: #f4ede8;
    font-size: 20px;

    span {
      color: #f4ede8;
    }

    strong {
      text-decoration: none;
      color: #ff9000;
    }
  }
`;

export const ProvidersList = styled.div`
  padding: 32px 24px 16px;

  > p {
    font-size: 24px;
    color: #f4ede8;
    margin-bottom: 24px;
  }
`;

export const ProvidersContainer = styled.a`
  background: #3e3b47;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  img {
    width: 72px;
    height: 72px;
    border-radius: 36px;
  }

  > div {
    flex: 1;
    margin-left: 20px;

    strong {
      font-size: 18px;
      color: #f4ede8;
    }
  }
`;

export const ProvidersMeta = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  margin-top: 8px;

  p {
    margin-left: 8px;
    color: #999591;
  }
`;
