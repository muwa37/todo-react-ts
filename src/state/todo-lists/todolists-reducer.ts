import { TodoListActions } from '../../types/todolist-action-types';
import { TodoList } from '../../types/types';

export const todoListsReducer = (
  state: TodoList[],
  action: TodoListActions
): TodoList[] => {
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
      throw new Error('not valid action type');
  }
};
