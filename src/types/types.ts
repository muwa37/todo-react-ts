import { ChangeEvent, KeyboardEvent, FocusEvent } from 'react';

//TODO: Types refactoring

export type ButtonProps = {
	text: string;
	onClick?: () => void;
};

export type InputProps = {
	value: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onBlur?:(e: FocusEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
};

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
	changeFilter: (value: FilterValues, id: string, todoListId: string) => void;
	addTask: (title: string, todoListId: string) => void;
	changeTaskStatus: (id: string, status: boolean, todoListId: string) => void;
	removeTodoList: (todoListId: string) => void;
  changeTaskTitle: (id: string, title:string, todoListId:string) => void;
  changeTodoListTitle: (todoListId:string, title:string) => void;
};

export type TodoItemProps = {
	id: string;
	todoListId: string;
	title: string;
	isDone: boolean;
	removeTask: (id: string, todoListId: string) => void;
	changeTaskStatus: (id: string, status: boolean, todoListId: string) => void;
  changeTaskTitle: (id: string, title:string, todoListId:string) => void;
};

export type TodoFilterProps = {
	id: string;
	todoListId: string;
  filter: FilterValues;
	changeFilter: (value: FilterValues, id: string, todoListId: string) => void;
};

export type FilterValues = 'all' | 'completed' | 'active';

export type AddItemFormProps = {
	addItem: (title: string) => void;
};

export type TodoListType = {
	id: string;
	title: string;
	filter: FilterValues;
};

export type TodoListsProps = {
	todoLists: TodoListType[];
	tasks: TasksStateType;
	removeTask: (id: string, todoListId: string) => void;
	changeFilter: (value: FilterValues, id: string, todoListId: string) => void;
	addTask: (title: string, todoListId: string) => void;
	changeTaskStatus: (id: string, status: boolean, todoListId: string) => void;
	removeTodoList: (todoListId: string) => void;
  changeTaskTitle: (id: string, title:string, todoListId:string) => void;
  changeTodoListTitle: (todoListId:string, title:string) => void;
};

export type TasksStateType = {
	[key: string]: Task[];
};

export type EditableSpanProps = {
  title:string;
  changeTitle: (newTitle: string) => void;
}
