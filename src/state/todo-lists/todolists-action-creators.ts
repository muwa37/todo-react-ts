import {
  AddTodoListAction,
  RemoveTodoListAction,
  ChangeTodoListTitleAction,
  ChangeTodoListFilterAction,
} from "../../types/todolist-action-types";
import { FilterValues } from "../../types/types";

export const removeTodoListAC = (todoListId: string): RemoveTodoListAction => {
  return { type: "REMOVE-TODOLIST", todoListId: todoListId };
};

export const addTodoListAC = (title: string): AddTodoListAction => {
  return { type: "ADD-TODOLIST", title: title };
};

export const changeTodoListTitleAC = (
  todoListId: string,
  title: string
): ChangeTodoListTitleAction => {
  return {
    type: "CHANGE-TODOLIST-TITLE",
    todoListId: todoListId,
    title: title,
  };
};

export const changeTodoListFilterAC = (
  todoListId: string,
  filter: FilterValues
): ChangeTodoListFilterAction => {
  return {
    type: "CHANGE-TODOLIST-FILTER",
    todoListId: todoListId,
    filter: filter,
  };
};
