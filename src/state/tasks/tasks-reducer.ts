import { v1 } from "uuid";
import { TasksState } from "../../types/types";
import { Actions } from "../../types/tasks-action-types";

export const tasksReducer = (
  state: TasksState,
  action: Actions
): TasksState => {
  switch (action.type) {
    case '1': {
        return {...state}
    }
    case '2': {
        return {...state}
    }
    default:
      throw new Error("not valid action type");
  }
};
