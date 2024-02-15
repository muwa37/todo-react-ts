import { v1 } from 'uuid';
import { TasksActions } from '../../../types/tasks-action-types';
import { Task, TasksState } from '../../../types/types';
import {
  todoListId1,
  todoListId2,
} from '../todo-lists-reducer/todolists-reducer';

const initialState: TasksState = {
  [todoListId1]: [
    {
      id: v1(),
      title: 'todo 1st sample',
      isDone: true,
    },
    {
      id: v1(),
      title: 'todo 2nd sample',
      isDone: false,
    },
    {
      id: v1(),
      title: 'todo 3rd sample',
      isDone: true,
    },
  ],
  [todoListId2]: [
    {
      id: v1(),
      title: 'todo 4st sample',
      isDone: true,
    },
    {
      id: v1(),
      title: 'todo 5nd sample',
      isDone: false,
    },
  ],
};

export const tasksReducer = (
  state: TasksState = initialState,
  action: TasksActions
): TasksState => {
  switch (action.type) {
    case 'REMOVE-TASK': {
      state[action.todoListId] = state[action.todoListId].filter(
        t => t.id !== action.taskId
      );
      return { ...state };
    }
    case 'ADD-TASK': {
      const newTask: Task = {
        id: v1(),
        title: action.title,
        isDone: false,
      };
      state[action.todoListId] = [...state[action.todoListId], newTask];
      return { ...state };
    }
    case 'CHANGE-TASK-TITLE': {
      const task = state[action.todoListId].find(t => t.id === action.taskId);
      if (task) {
        task.title = action.newTitle;
        state[action.todoListId] = [...state[action.todoListId]];
      }
      return { ...state };
    }

    case 'CHANGE-TASK-STATUS': {
      let task = state[action.todoListId].find(t => t.id === action.taskId);
      if (task) {
        task.isDone = action.isDone;
        state[action.todoListId] = [...state[action.todoListId]];
      }
      return { ...state };
    }

    case 'ADD-TODOLIST': {
      state[action.todoListId] = [];
      return { ...state };
    }

    case 'REMOVE-TODOLIST': {
      delete state[action.todoListId];
      return { ...state };
    }

    default:
      return state;
  }
};
