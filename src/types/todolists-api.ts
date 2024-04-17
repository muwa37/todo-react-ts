export type TodoListType = {
  id: string;
  title: string;
  addedDate: string;
  order: number;
};

export type Task = {
  description: string;
  title: string;
  status: number;
  priority: number;
  startDate: string;
  deadline: string;
  id: string;
  todoListId: string;
  order: number;
  addedDate: string;
};

export type UpdateTaskModel = {
  description: string;
  title: string;
  status: number;
  priority: number;
  startDate: string;
  deadline: string;
};

export type GetTasksResponse = {
  error: string | null;
  totalCount: number;
  items: Task[];
};

export type Response<D = {}> = {
  resultCode: number;
  messages: string[];
  data: D;
};
