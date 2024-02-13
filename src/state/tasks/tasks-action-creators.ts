import {
  AddTaskAction,
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
