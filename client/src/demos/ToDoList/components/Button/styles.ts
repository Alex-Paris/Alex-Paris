import styled from 'styled-components';

export const ComponentButton = styled.button`
  display: flex;
  align-items: center;
  background: var(--blue-dark);
  border-radius: 8px;
  padding: 1rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--gray-100);

  transition: background-color 0.1s;

  :hover {
    background: var(--blue);
  }

  img {
    width: 1rem;
    height: 1rem;
    margin-left: 0.5rem;
  }
`;
