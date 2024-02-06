import React from "react";
import { TodoList } from "./components/TodoList";
import { ITodoItem } from "./types/types";

export const App: React.FC = () => {
  const tasks: ITodoItem[] = [
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
  ];

  return (
    <div className="App">
      app
      <TodoList title="first" tasks={tasks} />
      <TodoList title="second" tasks={tasks} />
      <TodoList title="third" tasks={tasks} />
    </div>
  );
};
