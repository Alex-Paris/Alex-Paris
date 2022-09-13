import React, { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import Input from '../Input';
import Button from '../Button';

import logoImg from '../../assets/logo.svg';
import plusImg from '../../assets/plus.svg';

import { ComponentHeader } from './styles';

interface IHeaderProps {
  onAddTodo: (description: string) => void;
}

const Header: React.FC<IHeaderProps> = ({ onAddTodo }) => {
  const [newTask, setNewTask] = useState('');

  function handleAddNewTask(event: FormEvent): void {
    event.preventDefault();

    onAddTodo(newTask);
    setNewTask('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>): void {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>): void {
    event.target.setCustomValidity('Required field');
  }

  return (
    <ComponentHeader>
      <img src={logoImg} alt="ToDo List logo" />

      <form onSubmit={handleAddNewTask}>
        <Input
          placeholder="Add a new task"
          value={newTask}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <Button description="Create" icon={plusImg} />
      </form>
    </ComponentHeader>
  );
};

export default Header;
