import styled, { css } from 'styled-components';

interface TaskProps {
  isDone?: boolean;
}

export const ComponentTodo = styled.a`
  width: 100%;
  cursor: pointer;

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    margin-bottom: 0.75rem;
    gap: 0.75rem;
    background: var(--gray-500);
    border: 1px solid #333333;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
    border-radius: 8px;

    transition: color 0.1s;
  }

  p {
    flex: 1;
    font-size: 0.875rem;
  }

  svg {
    transition: color 0.1s;
  }
`;

export const Task = styled.div<TaskProps>`
  > svg {
    color: var(--blue);
  }

  :hover {
    > svg {
      color: var(--blue-dark);
    }
  }

  ${(props) =>
    props.isDone &&
    css`
      border: 1px solid var(--gray-500);

      p {
        color: var(--gray-300);
        text-decoration-line: line-through;
      }

      > svg {
        color: var(--purple-dark);
      }

      :hover {
        > svg {
          color: var(--purple);
        }
      }
    `}
`;

export const TaskButton = styled.button`
  > svg {
    color: var(--gray-300);
  }

  :hover {
    > svg {
      color: var(--danger);
    }
  }
`;
