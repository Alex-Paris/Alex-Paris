import React, { MouseEvent } from 'react';
import { ImRadioUnchecked } from 'react-icons/im';
import { HiCheckCircle } from 'react-icons/hi';
import { TbTrash } from 'react-icons/tb';

import { ITodoDTO } from '../../dtos/ITodoDTO';

import { ComponentTodo, Task, TaskButton } from './styles';

interface ITodoProps {
  todo: ITodoDTO;
  onCheckTodo: (description: string) => void;
  onDeleteTodo: (
    event: MouseEvent<HTMLButtonElement>,
    description: string
  ) => void;
}

const Todo: React.FC<ITodoProps> = ({ todo, onCheckTodo, onDeleteTodo }) => {
  return (
    <ComponentTodo onClick={() => onCheckTodo(todo.description)}>
      <Task isDone={todo.done}>
        {!todo.done ? (
          <ImRadioUnchecked size={24} />
        ) : (
          <HiCheckCircle size={24} />
        )}

        <p>{todo.description}</p>

        <TaskButton onClick={(e) => onDeleteTodo(e, todo.description)}>
          <TbTrash size={24} />
        </TaskButton>
      </Task>
    </ComponentTodo>
  );
};

export default Todo;
