import { FilterValues } from './types';

export type RemoveTodoListAction = {
  type: 'REMOVE-TODOLIST';
  todoListId: string;
};

export type AddTodoListAction = {
  type: 'ADD-TODOLIST';
  title: string;
};

export type ChangeTodoListTitleAction = {
  type: 'CHANGE-TODOLIST-TITLE';
  todoListId: string;
  title: string;
};

export type ChangeTodoListFilterAction = {
  type: 'CHANGE-TODOLIST-FILTER';
  todoListId: string;
  filter: FilterValues;
};

export type TodoListActions =
  | RemoveTodoListAction
  | AddTodoListAction
  | ChangeTodoListTitleAction
  | ChangeTodoListFilterAction;
