import {
  AddTodoListAction,
  RemoveTodoListAction,
  ChangeTodoListTitleAction,
  ChangeTodoListFilterAction,
} from "../../types/todolist-action-types";
import { FilterValues } from "../../types/types";

export const RemoveTodoListAC = (todoListId: string): RemoveTodoListAction => {
  return { type: "REMOVE-TODOLIST", todoListId: todoListId };
};

export const AddTodoListAC = (title: string): AddTodoListAction => {
  return { type: "ADD-TODOLIST", title: title };
};

export const ChangeTodoListTitleAC = (
  todoListId: string,
  title: string
): ChangeTodoListTitleAction => {
  return {
    type: "CHANGE-TODOLIST-TITLE",
    todoListId: todoListId,
    title: title,
  };
};

export const ChangeTodoListFilterAC = (
  todoListId: string,
  filter: FilterValues
): ChangeTodoListFilterAction => {
  return {
    type: "CHANGE-TODOLIST-FILTER",
    todoListId: todoListId,
    filter: filter,
  };
};
