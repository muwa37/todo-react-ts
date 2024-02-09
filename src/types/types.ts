import { ChangeEvent, KeyboardEvent } from "react";

export type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export type InputProps = {
  placeholder: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
};

export type Task = {
  id: string;
  title: string;
  isDone: boolean;
};

export type TodoListProps = {
  id: string;
  title: string;
  tasks: Task[];
  removeTask: (id: string) => void;
  changeFilter: (value: FilterValues, id: string) => void;
  addTask: (title: string) => void;
  changeTaskStatus: (id: string, status: boolean) => void;
  currentFilter: FilterValues;
};

export type TodoItemProps = {
  id: string;
  title: string;
  isDone: boolean;
  removeTask: (id: string) => void;
  changeTaskStatus: (id: string, status: boolean) => void;
};

export type TodoFilterProps = {
  id: string;
  changeFilter: (value: FilterValues, id: string) => void;
  currentFilter: FilterValues;
};

export type FilterValues = "all" | "completed" | "active";

export type TodoInputProps = {
  addTask: (title: string) => void;
};

export type TodoListType = {
  id: string;
  title: string;
  filter: FilterValues;
};

export type TodoListsProps = {
  todoLists: TodoListType[];
  tasks: Task[];
  removeTask: (id: string) => void;
  changeFilter: (value: FilterValues, id: string) => void;
  addTask: (title: string) => void;
  changeTaskStatus: (id: string, status: boolean) => void;
  currentFilter: FilterValues;
};
