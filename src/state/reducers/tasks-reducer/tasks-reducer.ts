import { v1 } from 'uuid';
import { Task, TasksState } from '../../../types/common';
import { TasksActions } from '../../../types/tasks-action';

const initialState: TasksState = {};

export const tasksReducer = (
  state: TasksState = initialState,
  action: TasksActions
): TasksState => {
  switch (action.type) {
    case 'REMOVE-TASK': {
      const todoListTasks = state[action.todoListId];
      state[action.todoListId] = todoListTasks.filter(
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
      const todoListTasks = state[action.todoListId];
      state[action.todoListId] = [...todoListTasks, newTask];
      return { ...state };
    }

    case 'CHANGE-TASK-TITLE': {
      const todoListTasks = state[action.todoListId];
      state[action.todoListId] = todoListTasks.map(t =>
        t.id === action.taskId ? { ...t, title: action.newTitle } : t
      );
      return { ...state };
    }

    case 'CHANGE-TASK-STATUS': {
      const todoListTasks = state[action.todoListId];
      state[action.todoListId] = todoListTasks.map(t =>
        t.id === action.taskId ? { ...t, isDone: action.isDone } : t
      );
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
