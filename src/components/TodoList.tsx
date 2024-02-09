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
	changeTaskStatus,
	currentFilter
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
						changeTaskStatus={changeTaskStatus}
					/>
				))}
			</ul>
			<TodoFilter changeFilter={changeFilter} currentFilter={currentFilter}/>
		</div>
	);
};
