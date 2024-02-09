import React, { useState } from "react";
import { v1 } from "uuid";
import { TodoList } from "./components/TodoList";
import { TodoLists } from "./components/TodoLists";
import { FilterValues, Task, TodoListType } from "./types/types";

export const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: v1(),
      title: "todo 1st sample",
      isDone: true,
    },
    {
      id: v1(),
      title: "todo 2nd sample",
      isDone: false,
    },
    {
      id: v1(),
      title: "todo 3rd sample",
      isDone: true,
    },
  ]);

  const [todoLists, setTodoLists] = useState<TodoListType[]>([
    { id: v1(), title: "1st todo list title", filter: "active" },
    { id: v1(), title: "2nd todo list title", filter: "completed" },
  ]);
  const [filter, setFilter] = useState<FilterValues>("all");

  const changeTaskStatus = (id: string, status: boolean) => {
    let task = tasks.find((t) => t.id === id);
    if (task) {
      task.isDone = status;
    }
    removeTask(id);
    setTasks([...tasks]);
  };

  const addTask = (title: string) => {
    const newTask = {
      id: v1(),
      title: title,
      isDone: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const changeFilter = (value: FilterValues, id: string) => {
    const todoList = todoLists.find((tl) => tl.id === id);
    if (todoList) {
      todoList.filter = value;
      setTodoLists([...todoLists]);
    }
  };

  const removeTask = (id: string) => {
    const clearedTasks = tasks.filter((t) => t.id !== id);
    setTasks(clearedTasks);
  };

  return (
    <div className="App">
      app
      <TodoLists
      tasks={tasks}
        todoLists={todoLists}
        changeTaskStatus={changeTaskStatus}
        addTask={addTask}
        changeFilter={changeFilter}
        removeTask={removeTask}
        currentFilter={filter}
      />
    </div>
  );
};
