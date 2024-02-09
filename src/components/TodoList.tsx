import { TodoListProps } from '../types/types';
import { TodoFilter } from './TodoFilter';
import { TodoInput } from './TodoInput';
import { TodoItem } from './TodoItem';
import { Button } from './ui/Button';

export const TodoList: React.FC<TodoListProps> = ({
	id,
	todoListId,
	title,
	tasks,
	removeTask,
	changeFilter,
	addTask,
	changeTaskStatus,
	removeTodoList,
}: TodoListProps) => {
	const removeHandler = () => {
		removeTodoList(todoListId);
	};
	return (
		<div>
			<h3>
				{title}
				<Button text='x' onClick={removeHandler}></Button>
			</h3>

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
