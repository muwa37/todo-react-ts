import { TodoListProps } from "../types/types";
import { TodoFilter } from "./TodoFilter";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC<TodoListProps> = ({
  title,
  tasks,
  removeTask,
  changeFilter,
}: TodoListProps) => {
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
            removeTask={removeTask}
          />
        ))}
      </ul>
      <TodoFilter changeFilter={changeFilter} />
    </div>
  );
};
