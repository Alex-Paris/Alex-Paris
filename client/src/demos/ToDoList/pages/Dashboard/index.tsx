import React, { useState, MouseEvent } from 'react';

import Header from '../../components/Header';
import TodoList from '../../components/TodoList';

import { ITodoDTO } from '../../dtos/ITodoDTO';

import { App } from './styles';

const Dashboard: React.FC = () => {
  const [todos, setTodos] = useState<ITodoDTO[]>([]);

  function onAddTodo(description: string): void {
    setTodos([...todos, { description }]);
  }

  function onCheckTodo(description: string): void {
    const indexTodo = todos.findIndex(
      (todo) => todo.description === description
    );

    todos[indexTodo].done = !todos[indexTodo].done;
    setTodos([...todos]);
  }

  function onDeleteTodo(
    event: MouseEvent<HTMLButtonElement>,
    description: string
  ): void {
    event.stopPropagation();

    const filteredTodos = todos.filter(
      (todo) => todo.description !== description
    );

    setTodos([...filteredTodos]);
  }

  return (
    <App>
      <Header onAddTodo={onAddTodo} />

      <main>
        <TodoList
          todos={todos}
          onCheckTodo={onCheckTodo}
          onDeleteTodo={onDeleteTodo}
        />
      </main>
    </App>
  );
};

export default Dashboard;
