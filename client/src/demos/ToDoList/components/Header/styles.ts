import styled from 'styled-components';

export const ComponentHeader = styled.header`
  background: var(--gray-700);
  width: 100%;
  height: 12.5rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  > img {
    height: 3rem;
  }

  form {
    position: absolute;
    width: 100%;
    max-width: var(--max-width);
    padding: var(--main-padding);
    margin-top: 12.5rem;
    display: flex;
    gap: 0.5rem;
  }
`;
