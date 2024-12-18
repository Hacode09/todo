import React from 'react';
import { useDispatch } from 'react-redux';
import { Check, Trash2, Square } from 'lucide-react';
import { toggleTodo, deleteTodo } from '../store/todoSlice';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo-item">
      <div className="todo-content">
        <button
          onClick={() => dispatch(toggleTodo(todo.id))}
          className={`toggle-button ${todo.completed ? 'completed' : ''}`}
        >
          {todo.completed ? <Check size={20} /> : <Square size={20} />}
        </button>
        <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="delete-button"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};