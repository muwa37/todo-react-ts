import { ChangeEvent } from 'react';
import { TodoItemProps } from '../types/types';
import { EditableSpan } from './EditableSpan';
import { Button } from './ui/Button';

export const TodoItem: React.FC<TodoItemProps> = ({
	id,
	todoListId,
	title,
	isDone,
	removeTask,
	changeTaskStatus,
	changeTaskTitle
}: TodoItemProps) => {
	const onRemoveClickHandler = () => {
		removeTask(id, todoListId);
	};
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		changeTaskStatus(id, e.currentTarget.checked, todoListId);
	};
	const onTitleChangeHandler = (newTitle: string) => {
		changeTaskTitle(id, newTitle)
	}
	return (
		<li>
			<input type='checkbox' onChange={onChangeHandler} checked={isDone} />
			<EditableSpan changeTitle={onTitleChangeHandler} title={title}/>
			<Button text='x' onClick={onRemoveClickHandler} />
		</li>
	);
};

