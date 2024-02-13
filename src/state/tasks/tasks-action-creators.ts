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
  newTitle: string,
  taskId: string,
  todoListId: string
): ChangeTaskTitleAction => {
  return { type: 'CHANGE-TASK-TITLE', newTitle, taskId, todoListId };
};

export const changeTaskStatusAC = (
  isDone: boolean,
  taskId: string,
  todoListId: string
): ChangeTaskStatusAction => {
  return { type: 'CHANGE-TASK-STATUS', isDone, taskId, todoListId };
};
