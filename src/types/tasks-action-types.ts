export type RemoveTaskAction = {
  type: 'REMOVE-TASK';
  todoListId: string;
  taskId: string;
};

export type AddTaskAction = {
  type: 'ADD-TASK';
  title: string;
  todoListId: string;
};

export type ChangeTaskTitleAction = {
  type: 'CHANGE-TASK-TITLE';
  title: string;
  taskId: string;
  todoListId: string;
};

export type ChangeTaskStatusAction = {
  type: 'CHANGE-TASK-STATUS';
  status: boolean;
  taskId: string;
  todoListId: string;
};

export type TasksActions =
  | RemoveTaskAction
  | AddTaskAction
  | ChangeTaskTitleAction
  | ChangeTaskStatusAction;
