import { ITodoListProps } from "../types/types";
import { TodoFilter } from "./TodoFilter";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC<ITodoListProps> = ({
  title,
  tasks,
}: ITodoListProps) => {
  return (
    <div>
      <h3>{title}</h3>

      <TodoInput />
      <ul>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            id={task.id}
            title={task.title}
            isDone={task.isDone}
          />
        ))}
      </ul>
      <TodoFilter />
    </div>
  );
};
