import { TodoFilterProps } from '../types/types';
import { Button } from './ui/Button';

export const TodoFilter: React.FC<TodoFilterProps> = ({
	id,
	todoListId,
	changeFilter,
}: TodoFilterProps) => {
	const onAllClickHandler = () => {
		changeFilter('all', id, todoListId);
	};
	const onActiveClickHandler = () => {
		changeFilter('active', id, todoListId);
	};
	const onCompletedClickHandler = () => {
		changeFilter('completed', id, todoListId);
	};

	//TODO: style for active btn
	return (
		<div>
			<Button text='all' onClick={onAllClickHandler} />
			<Button text='active' onClick={onActiveClickHandler} />
			<Button text='completed' onClick={onCompletedClickHandler} />
		</div>
	);
};
