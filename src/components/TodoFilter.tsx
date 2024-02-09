import { TodoFilterProps } from '../types/types';
import { Button } from './ui/Button';

export const TodoFilter: React.FC<TodoFilterProps> = ({
	id,
	changeFilter,
	currentFilter
}: TodoFilterProps) => {
	const onAllClickHandler = () => {
		changeFilter('all', id);
	};
	const onActiveClickHandler = () => {
		changeFilter('active', id);
	};
	const onCompletedClickHandler = () => {
		changeFilter('completed', id);
	};

	//TODO: style for active btn
	return (
		<div>
			<span>task filter: {currentFilter}</span>
			<div>
				
				
				<Button text='all' onClick={onAllClickHandler} />
				<Button text='active' onClick={onActiveClickHandler} />
				<Button text='completed' onClick={onCompletedClickHandler} />
			</div>
		</div>
	);
};
