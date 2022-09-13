import React, { MouseEvent } from 'react';

import Todo from '../Todo';
import { ITodoDTO } from '../../dtos/ITodoDTO';

import clipboardImg from '../../assets/clipboard.svg';

import { ComponentTodoList, EmptyList, Header } from './styles';

interface ITodoListProps {
  todos: ITodoDTO[];
  onCheckTodo: (description: string) => void;
  onDeleteTodo: (
    event: MouseEvent<HTMLButtonElement>,
    description: string
  ) => void;
}

const TodoList: React.FC<ITodoListProps> = ({
  todos,
  onCheckTodo,
  onDeleteTodo,
}) => {
  const amountTodosDone = todos.reduce((acc, curr) => {
    if (curr.done) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const doneTodosInfo = `${amountTodosDone} of ${todos.length}`;

  return (
    <ComponentTodoList>
      <Header>
        <div>
          <h5>Created tasks</h5>
          <span>{todos.length}</span>
        </div>
        <div>
          <h5>Done</h5>
          <span>{doneTodosInfo}</span>
        </div>
      </Header>

      {todos.length === 0 ? (
        <EmptyList>
          <img src={clipboardImg} />
          <h4>You don&lsquo;t have any created tasks</h4>
          <p>Create tasks and organize your to-do items</p>
        </EmptyList>
      ) : (
        <div>
          {todos.map((todo) => (
            <Todo
              key={todo.description}
              todo={todo}
              onCheckTodo={onCheckTodo}
              onDeleteTodo={onDeleteTodo}
            />
          ))}
        </div>
      )}
    </ComponentTodoList>
  );
};

export default TodoList;
