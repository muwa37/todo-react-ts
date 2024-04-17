export type TodoListType = {
  id: string;
  title: string;
  addedDate: string;
  order: number;
};

export type CreateTodoListResponse = {
  resultCode: number;
  messages: string[];
  data: {
    item: TodoListType;
  };
};
