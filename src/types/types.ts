//TODO: Types refactoring

export type Task = {
  id: string;
  title: string;
  isDone: boolean;
};

export type TodoListProps = {
  id: string;
  todoListId: string;
  title: string;
  tasks: Task[];
  filter: FilterValues;
  removeTask: (id: string, todoListId: string) => void;
  changeTodoListFilter: (
    value: FilterValues,
    id: string,
    todoListId: string
  ) => void;
  addTask: (title: string, todoListId: string) => void;
  changeTaskStatus: (
    isDone: boolean,
    taskId: string,
    todoListId: string
  ) => void;
  removeTodoList: (todoListId: string) => void;
  changeTaskTitle: (id: string, title: string, todoListId: string) => void;
  changeTodoListTitle: (todoListId: string, title: string) => void;
};

export type TodoItemProps = {
  id: string;
  todoListId: string;
  title: string;
  isDone: boolean;
  removeTask: (id: string, todoListId: string) => void;
  changeTaskStatus: (
    isDone: boolean,
    taskId: string,
    todoListId: string
  ) => void;
  changeTaskTitle: (id: string, title: string, todoListId: string) => void;
};

export type TodoFilterProps = {
  id: string;
  todoListId: string;
  filter: FilterValues;
  changeTodoListFilter: (
    value: FilterValues,
    id: string,
    todoListId: string
  ) => void;
};

export type FilterValues = 'all' | 'completed' | 'active';

export type AddItemFormProps = {
  addItem: (title: string) => void;
};

export type TodoList = {
  id: string;
  title: string;
  filter: FilterValues;
};

export type TodoListsProps = {
  todoLists: TodoList[];
  tasks: TasksState;
  removeTask: (id: string, todoListId: string) => void;
  changeTodoListFilter: (
    value: FilterValues,
    id: string,
    todoListId: string
  ) => void;
  addTask: (title: string, todoListId: string) => void;
  changeTaskStatus: (
    isDone: boolean,
    taskId: string,
    todoListId: string
  ) => void;
  removeTodoList: (todoListId: string) => void;
  changeTaskTitle: (id: string, title: string, todoListId: string) => void;
  changeTodoListTitle: (todoListId: string, title: string) => void;
};

export type TasksState = {
  [key: string]: Task[];
};

export type EditableSpanProps = {
  title: string;
  changeTitle: (newTitle: string) => void;
};
