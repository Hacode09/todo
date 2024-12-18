import { Provider } from 'react-redux';
import { store } from './store/store';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { CheckSquare } from 'lucide-react';

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <div className="todo-container">
          <div className="app-header">
            <CheckSquare className="app-icon" size={32} />
            <h1 className="app-title">Todo App</h1>
          </div>
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </Provider>
  );
}

export default App;