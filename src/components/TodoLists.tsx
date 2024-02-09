import { TodoListsProps } from '../types/types';
import { TodoList } from './TodoList';

export const TodoLists: React.FC<TodoListsProps> = ({
	todoLists,
	tasks,
	removeTask,
	changeFilter,
	changeTaskStatus,
	addTask,
}: TodoListsProps) => {
	return (
		<div>
			{todoLists.map(tl => {
				let filteredTasks = tasks[tl.id];
				if (tl.filter === 'active') {
					filteredTasks = filteredTasks.filter(t => t.isDone === false);
				}
				if (tl.filter === 'completed') {
					filteredTasks = filteredTasks.filter(t => t.isDone === true);
				}
				return (
					<TodoList
						todoListId={tl.id}
						key={tl.id}
						id={tl.id}
						title={tl.title}
						tasks={filteredTasks}
						removeTask={removeTask}
						changeFilter={changeFilter}
						addTask={addTask}
						changeTaskStatus={changeTaskStatus}
					/>
				);
			})}
		</div>
	);
};
