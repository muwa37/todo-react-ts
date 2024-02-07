import React, { useState } from "react";
import { TodoList } from "./components/TodoList";
import { FilterValues, Task } from "./types/types";

export const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "todo 1st sample",
      isDone: true,
    },
    {
      id: 2,
      title: "todo 2nd sample",
      isDone: false,
    },
    {
      id: 3,
      title: "todo 3rd sample",
      isDone: true,
    },
  ]);

  const [filter, setFilter] = useState<FilterValues>("all");

  const changeFilter = (value: FilterValues) => {
    setFilter(value);
  };

  let filteredTasks = tasks;
  if (filter === "active") {
    filteredTasks = tasks.filter((t) => t.isDone === false);
  }
  if (filter === "completed") {
    filteredTasks = tasks.filter((t) => t.isDone === true);
  }

  const removeTask = (id: number) => {
    const clearedTasks = tasks.filter((t) => t.id !== id);
    setTasks(clearedTasks);
  };

  return (
    <div className="App">
      app
      <TodoList
        title="first"
        tasks={filteredTasks}
        removeTask={removeTask}
        changeFilter={changeFilter}
      />
    </div>
  );
};
