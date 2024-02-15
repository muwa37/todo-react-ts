import { v1 } from 'uuid';
import { TodoListActions } from '../../../types/todolist-action-types';
import { TodoList } from '../../../types/types';

export const todoListId1 = v1();
export const todoListId2 = v1();

const initialState: TodoList[] = [
  { id: todoListId1, title: '1st todo list title', filter: 'active' },
  { id: todoListId2, title: '2nd todo list title', filter: 'completed' },
];

export const todoListsReducer = (
  state: TodoList[] = initialState,
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
      return state;
  }
};
