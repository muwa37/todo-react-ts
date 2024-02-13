import { v1 } from 'uuid';
import { TasksActions } from '../../types/tasks-action-types';
import { Task, TasksState } from '../../types/types';

export const tasksReducer = (
  state: TasksState,
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
      const newTask: Task = { id: v1(), title: action.title, isDone: false };
      state[action.todoListId] = [...state[action.todoListId], newTask];
      return { ...state };
    }
    case 'CHANGE-TASK-TITLE': {
      const task = state[action.todoListId].find(t => t.id === action.taskId);
      if (task) {
        task.title = action.title;
        state[action.todoListId] = [...state[action.todoListId]];
      }
      return { ...state };
    }

    case 'CHANGE-TASK-STATUS': {
      let task = state[action.todoListId].find(t => t.id === action.taskId);
      if (task) {
        task.isDone = action.status;
        state[action.todoListId] = [...state[action.todoListId]];
      }
      return { ...state };
    }

    default:
      throw new Error('not valid action type');
  }
};
