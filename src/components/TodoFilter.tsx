import { TodoFilterProps } from '../types/types';
import { Button } from './ui/Button';

export const TodoFilter: React.FC<TodoFilterProps> = ({
	changeFilter,
}: TodoFilterProps) => {
	const onAllClickHandler = () => {
		changeFilter('all');
	};
	const onActiveClickHandler = () => {
		changeFilter('active');
	};
	const onCompletedClickHandler = () => {
		changeFilter('completed');
	};
	return (
		<div>
			<Button text='all' onClick={onAllClickHandler} />
			<Button text='active' onClick={onActiveClickHandler} />
			<Button text='completed' onClick={onCompletedClickHandler} />
		</div>
	);
};
