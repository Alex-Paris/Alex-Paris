import styled from 'styled-components';

export const ComponentInput = styled.input`
  width: 100%;
  padding: 1rem;
  background: var(--gray-500);
  border: 1px solid var(--gray-700);
  border-radius: 8px;
  color: var(--gray-300);

  :not([value='']) {
    color: var(--gray-100);
  }

  :focus {
    border: 1px solid var(--purple-dark);
    color: var(--gray-100);
  }
`;
