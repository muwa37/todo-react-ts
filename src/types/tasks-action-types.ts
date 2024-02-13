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

export type TasksActions = RemoveTaskAction | AddTaskAction;
