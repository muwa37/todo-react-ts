export type Task = {
  id: string;
  title: string;
  isDone: boolean;
};

export type FilterValues = 'all' | 'completed' | 'active';

export type TodoListType = {
  id: string;
  title: string;
  filter: FilterValues;
};

export type TasksState = {
  [key: string]: Task[];
};
