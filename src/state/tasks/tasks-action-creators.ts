import { Action1, Action2 } from "../../types/tasks-action-types";

export const action1AC = (todoListId: string): Action1 => {
  return { type: "1", todoListId: todoListId };
};

export const action2AC = (title: string): Action2 => {
  return { type: "2", title: title };
};
