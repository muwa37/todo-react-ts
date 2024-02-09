import { ChangeEvent, KeyboardEvent } from 'react';

//TODO: Types refactoring

export type ButtonProps = {
	text: string;
	onClick?: () => void;
};

export type InputProps = {
	placeholder: string;
	value: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
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
	removeTask: (id: string, todoListId: string) => void;
	changeFilter: (value: FilterValues, id: string, todoListId: string) => void;
	addTask: (title: string, todoListId: string) => void;
	changeTaskStatus: (id: string, status: boolean, todoListId: string) => void;
	removeTodoList: (todoListId: string) => void;
};

export type TodoItemProps = {
	id: string;
	todoListId: string;
	title: string;
	isDone: boolean;
	removeTask: (id: string, todoListId: string) => void;
	changeTaskStatus: (id: string, status: boolean, todoListId: string) => void;
};

export type TodoFilterProps = {
	id: string;
	todoListId: string;
	changeFilter: (value: FilterValues, id: string, todoListId: string) => void;
};

export type FilterValues = 'all' | 'completed' | 'active';

export type TodoInputProps = {
	todoListId: string;
	addTask: (title: string, todoListId: string) => void;
};

export type TodoListType = {
	id: string;
	title: string;
	filter: FilterValues;
};

export type TodoListsProps = {
	todoLists: TodoListType[];
	tasks: tasksObj;
	removeTask: (id: string, todoListId: string) => void;
	changeFilter: (value: FilterValues, id: string, todoListId: string) => void;
	addTask: (title: string, todoListId: string) => void;
	changeTaskStatus: (id: string, status: boolean, todoListId: string) => void;
	removeTodoList: (todoListId: string) => void;
};

export type tasksObj = {
	[x: string]: {
		id: string;
		title: string;
		isDone: boolean;
	}[];
};
