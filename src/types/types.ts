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
