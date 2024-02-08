import { ChangeEvent, KeyboardEvent } from 'react';

export type ButtonProps = {
	text: string;
	onClick?: () => void;
};

export type InputProps = {
	placeholder: string;
	value: string;
	onChange?: ChangeEvent<HTMLInputElement>;
	onKeyPress?: KeyboardEvent<HTMLInputElement>;
};

export type Task = {
	id: string;
	title: string;
	isDone: boolean;
};

export type TodoListProps = {
	title: string;
	tasks: Task[];
	removeTask: (id: string) => void;
	changeFilter: (value: FilterValues) => void;
	addTask: (title: string) => void;
};

export type TodoItemProps = {
	id: string;
	title: string;
	isDone: boolean;
	removeTask: (id: string) => void;
};

export type TodoFilterProps = {
	changeFilter: (value: FilterValues) => void;
};

export type FilterValues = 'all' | 'completed' | 'active';

export type TodoInputProps = {
	addTask: (title: string) => void;
};
