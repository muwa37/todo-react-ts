import {
  AddTaskAction,
  ChangeTaskStatusAction,
  ChangeTaskTitleAction,
  RemoveTaskAction,
} from '../../types/tasks-action-types';

export const removeTaskAC = (
  taskId: string,
  todoListId: string
): RemoveTaskAction => {
  return { type: 'REMOVE-TASK', taskId, todoListId };
};

export const addTaskAC = (title: string, todoListId: string): AddTaskAction => {
  return { type: 'ADD-TASK', title, todoListId };
};

export const changeTaskTitleAC = (
  title: string,
  taskId: string,
  todoListId: string
): ChangeTaskTitleAction => {
  return { type: 'CHANGE-TASK-TITLE', title, taskId, todoListId };
};

export const changeTaskStatusAC = (
  status: boolean,
  taskId: string,
  todoListId: string
): ChangeTaskStatusAction => {
  return { type: 'CHANGE-TASK-STATUS', status, taskId, todoListId };
};
