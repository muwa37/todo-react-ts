import { v1 } from "uuid";
import { TodoList } from "../../types/types";
import { Actions } from "../../types/todolist-action-types";

export const todoListsReducer = (
  state: TodoList[],
  action: Actions
): TodoList[] => {
  switch (action.type) {
    case "REMOVE-TODOLIST": {
      return state.filter((tl) => tl.id !== action.todoListId);
    }
    case "ADD-TODOLIST": {
      return [
        ...state,
        {
          id: v1(),
          title: action.title,
          filter: "all",
        },
      ];
    }

    case "CHANGE-TODOLIST-TITLE": {
      const todoList = state.find((tl) => tl.id === action.todoListId);
      if (todoList) {
        todoList.title = action.title;
      }
      return [...state];
    }

    case "CHANGE-TODOLIST-FILTER": {
      const todoList = state.find((tl) => tl.id === action.todoListId);
      if (todoList) {
        todoList.filter = action.filter;
      }
      return [...state];
    }

    default:
      throw new Error("not valid action type");
  }
};
