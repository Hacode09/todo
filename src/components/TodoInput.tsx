import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PlusCircle } from 'lucide-react';
import { addTodo } from '../store/todoSlice';

export const TodoInput: React.FC = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text.trim()));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo..."
          className="todo-input"
        />
        <button type="submit" className="add-button">
          <PlusCircle size={20} />
          Add
        </button>
      </div>
    </form>
  );
};