import { TodoListProps } from '../types/types';
import { TodoFilter } from './TodoFilter';
import { TodoInput } from './TodoInput';
import { TodoItem } from './TodoItem';

export const TodoList: React.FC<TodoListProps> = ({
	title,
	tasks,
	removeTask,
	changeFilter,
	addTask,
}: TodoListProps) => {
	return (
		<div>
			<h3>{title}</h3>

			<TodoInput addTask={addTask} />
			<ul>
				{tasks.map(task => (
					<TodoItem
						key={task.id}
						id={task.id}
						title={task.title}
						isDone={task.isDone}
						removeTask={removeTask}
					/>
				))}
			</ul>
			<TodoFilter changeFilter={changeFilter} />
		</div>
	);
};
