import { TodoFilter } from './TodoFilter';
import { TodoInput } from './TodoInput';
import { TodoItem } from './TodoItem';

export const TodoList: React.FC = () => {
  return (
    <div>
        <h3>todo list name</h3>
        
        <TodoInput/>
      <ul>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </ul>
        <TodoFilter/>
    </div>
  );
};


