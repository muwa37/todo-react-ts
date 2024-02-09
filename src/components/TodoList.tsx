import { TodoListProps } from '../types/types';
import { TodoFilter } from './TodoFilter';
import { TodoInput } from './TodoInput';
import { TodoItem } from './TodoItem';

export const TodoList: React.FC<TodoListProps> = ({
	id,
	todoListId,
	title,
	tasks,
	removeTask,
	changeFilter,
	addTask,
	changeTaskStatus,
}: TodoListProps) => {
	return (
		<div>
			<h3>{title}</h3>

			<TodoInput todoListId={todoListId} addTask={addTask} />
			<ul>
				{tasks.map(task => (
					<TodoItem
						todoListId={todoListId}
						key={task.id}
						id={task.id}
						title={task.title}
						isDone={task.isDone}
						removeTask={removeTask}
						changeTaskStatus={changeTaskStatus}
					/>
				))}
			</ul>
			<TodoFilter todoListId={todoListId} id={id} changeFilter={changeFilter} />
		</div>
	);
};
