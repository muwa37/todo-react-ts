//TODO: Types refactoring

export type Task = {
  id: string;
  title: string;
  isDone: boolean;
};

export type TodoListProps = {
  todoListId: string;
  title: string;
  filter: FilterValues;
};

export type TodoItemProps = {
  id: string;
  todoListId: string;
  title: string;
  isDone: boolean;
  removeTask: (id: string, todoListId: string) => void;
  changeTaskStatus: (
    isDone: boolean,
    taskId: string,
    todoListId: string
  ) => void;
  changeTaskTitle: (id: string, title: string, todoListId: string) => void;
};

export type TodoFilterProps = {
  todoListId: string;
  filter: FilterValues;
};

export type FilterValues = 'all' | 'completed' | 'active';

export type AddItemFormProps = {
  addItem: (title: string) => void;
};

export type TodoListType = {
  id: string;
  title: string;
  filter: FilterValues;
};

export type TasksState = {
  [key: string]: Task[];
};

export type EditableSpanProps = {
  title: string;
  changeTitle: (newTitle: string) => void;
};
