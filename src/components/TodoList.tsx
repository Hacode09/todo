import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { TodoItem } from './TodoItem';

export const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="empty-message">No todos yet. Add one above!</p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
};