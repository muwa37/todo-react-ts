import { v1 } from 'uuid';
import { TodoListType } from '../../../types/common-types';
import { TodoListActions } from '../../../types/todolist-action-types';

export const todoListId1 = v1();
export const todoListId2 = v1();

const initialState: TodoListType[] = [];

//FIXME: Rewrite with clear func rules

export const todoListsReducer = (
  state: TodoListType[] = initialState,
  action: TodoListActions
): TodoListType[] => {
  switch (action.type) {
    case 'REMOVE-TODOLIST': {
      return state.filter(tl => tl.id !== action.todoListId);
    }
    case 'ADD-TODOLIST': {
      return [
        {
          id: action.todoListId,
          title: action.title,
          filter: 'all',
        },
        ...state,
      ];
    }

    case 'CHANGE-TODOLIST-TITLE': {
      const todoList = state.find(tl => tl.id === action.todoListId);
      if (todoList) {
        todoList.title = action.title;
      }
      return [...state];
    }

    case 'CHANGE-TODOLIST-FILTER': {
      const todoList = state.find(tl => tl.id === action.todoListId);
      if (todoList) {
        todoList.filter = action.filter;
      }
      return [...state];
    }

    default:
      return state;
  }
};
