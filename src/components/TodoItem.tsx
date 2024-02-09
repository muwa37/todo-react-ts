import { ChangeEvent } from 'react';
import { TodoItemProps } from '../types/types';
import { Button } from './ui/Button';

export const TodoItem: React.FC<TodoItemProps> = ({
	id,
	todoListId,
	title,
	isDone,
	removeTask,
	changeTaskStatus,
}: TodoItemProps) => {
	const onRemoveClickHandler = () => {
		removeTask(id, todoListId);
	};
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		changeTaskStatus(id, e.currentTarget.checked, todoListId);
	};
	return (
		<li>
			<input type='checkbox' onChange={onChangeHandler} checked={isDone} />
			<span>{title}</span>
			<Button text='x' onClick={onRemoveClickHandler} />
		</li>
	);
};
