import { Grid } from '@mui/material';
import { TodoListsProps } from '../types/types';
import { TodoList } from './TodoList';

export const TodoLists: React.FC<TodoListsProps> = ({
	todoLists,
	tasks,
	removeTask,
	changeFilter,
	changeTaskStatus,
	addTask,
	removeTodoList,
	changeTaskTitle,
	changeTodoListTitle
}: TodoListsProps) => {
	return (
		<Grid container spacing={5}>
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
						removeTodoList={removeTodoList}
						changeTaskTitle={changeTaskTitle}
						changeTodoListTitle={changeTodoListTitle}
						filter={tl.filter}
					/>
				
				);
			})}
		</Grid>
	);
};
