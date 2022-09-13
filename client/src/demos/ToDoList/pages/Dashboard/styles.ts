import styled from 'styled-components';

export const App = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  main {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100%;
    max-width: var(--max-width);
    padding: var(--main-padding);
    margin-top: 5.75rem;
  }
`;
