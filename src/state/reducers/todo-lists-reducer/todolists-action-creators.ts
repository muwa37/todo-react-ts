import { v1 } from 'uuid';
import { FilterValues } from '../../../types/common-types';
import {
  AddTodoListAction,
  ChangeTodoListFilterAction,
  ChangeTodoListTitleAction,
  RemoveTodoListAction,
} from '../../../types/todolist-action-types';

export const removeTodoListAC = (todoListId: string): RemoveTodoListAction => {
  return { type: 'REMOVE-TODOLIST', todoListId };
};

export const addTodoListAC = (title: string): AddTodoListAction => {
  return { type: 'ADD-TODOLIST', title, todoListId: v1() };
};

export const changeTodoListTitleAC = (
  todoListId: string,
  title: string
): ChangeTodoListTitleAction => {
  return {
    type: 'CHANGE-TODOLIST-TITLE',
    todoListId,
    title,
  };
};

export const changeTodoListFilterAC = (
  todoListId: string,
  filter: FilterValues
): ChangeTodoListFilterAction => {
  return {
    type: 'CHANGE-TODOLIST-FILTER',
    todoListId,
    filter,
  };
};
