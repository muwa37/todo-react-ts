import { TodoItemProps } from '../types/types';
import { Button } from './ui/Button';

export const TodoItem: React.FC<TodoItemProps> = ({
	id,
	title,
	isDone,
	removeTask,
}: TodoItemProps) => {
	const onRemoveClickHandler = () => {
		removeTask(id);
	};
	return (
		<li>
			<input type='checkbox' checked={isDone} />
			<span>{title}</span>
			<Button text='x' onClick={onRemoveClickHandler} />
		</li>
	);
};
