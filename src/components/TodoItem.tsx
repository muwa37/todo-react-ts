import { ChangeEvent } from 'react';
import { TodoItemProps } from '../types/types';
import { Button } from './ui/Button';

export const TodoItem: React.FC<TodoItemProps> = ({
	id,
	title,
	isDone,
	removeTask,
	changeTaskStatus
}: TodoItemProps) => {
	const onRemoveClickHandler = () => {
		removeTask(id);
	};
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		changeTaskStatus(id, e.currentTarget.checked)
	}
	return (
		<li>
			<input type='checkbox' onChange={onChangeHandler} checked={isDone} />
			<span>{title}</span>
			<Button text='x' onClick={onRemoveClickHandler} />
		</li>
	);
};
