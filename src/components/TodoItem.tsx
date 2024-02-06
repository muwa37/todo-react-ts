import { ITodoItem } from '../types/types';


export const TodoItem: React.FC<ITodoItem> = ({title, isDone}:ITodoItem) => {
  return (
    <li>
      <input type="checkbox" checked={isDone} />
      <span>{title}</span>
    </li>
  );
};
