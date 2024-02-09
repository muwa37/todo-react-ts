import { TodoListsProps } from "../types/types";
import { TodoList } from "./TodoList";

export const TodoLists: React.FC<TodoListsProps> = ({
  todoLists,
  tasks,
  removeTask,
  changeFilter,
  changeTaskStatus,
  currentFilter,
  addTask
}: TodoListsProps) => {
  return (
    <div>
      {todoLists.map((tl) => {
        let filteredTasks = tasks;
        if (tl.filter === "active") {
          filteredTasks = tasks.filter((t) => t.isDone === false);
        }
        if (tl.filter === "completed") {
          filteredTasks = tasks.filter((t) => t.isDone === true);
        }
        return (
          <TodoList
          key={tl.id}
            id={tl.id}
            title={tl.title}
            tasks={filteredTasks}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeTaskStatus={changeTaskStatus}
            currentFilter={currentFilter}
          />
        );
      })}
    </div>
  );
};
