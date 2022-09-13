import styled from 'styled-components';

export const ComponentTodoList = styled.div`
  width: 100%;

  > div {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: 1.5rem;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  div + div {
    h5 {
      color: var(--purple);
    }
  }

  h5 {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--blue);
  }

  span {
    border-radius: 999px;
    background: var(--gray-400);
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--gray-200);
    padding: 2px 8px;
    line-height: normal;
  }
`;

export const EmptyList = styled.div`
  padding: 4rem 1.5rem;
  border-top: 1px solid var(--gray-400);
  border-radius: 8px;
  gap: 1rem;
  color: var(--gray-300);

  img {
    width: 3.5rem;
    height: 3.5rem;
  }
`;
