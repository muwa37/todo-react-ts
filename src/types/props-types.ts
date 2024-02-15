import { FilterValues } from './common-types';

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

export type EditableSpanProps = {
  title: string;
  changeTitle: (newTitle: string) => void;
};

export type AddItemFormProps = {
  addItem: (title: string) => void;
};
