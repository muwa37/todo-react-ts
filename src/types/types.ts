export type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export type InputProps = {
  placeholder: string;
};

export type Task = {
  id: number;
  title: string;
  isDone: boolean;
};

export type TodoListProps = {
  title: string;
  tasks: Task[];
  removeTask: (id: number) => void;
  changeFilter: (value: FilterValues) => void;
};

export type TodoItemProps = {
  id: number;
  title: string;
  isDone: boolean;
  removeTask: (id: number) => void;
};

export type TodoFilterProps = {
  changeFilter: (value: FilterValues) => void;
};

export type FilterValues = "all" | "completed" | "active";
