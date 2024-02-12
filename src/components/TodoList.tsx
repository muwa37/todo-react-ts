import { TodoListProps } from '../types/types';
import { TodoFilter } from './TodoFilter';
import { AddItemForm } from './AddItemForm';
import { TodoItem } from './TodoItem';
import { Button } from './ui/Button';
import { EditableSpan } from './EditableSpan';

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
	changeTaskTitle,
	changeTodoListTitle
}: TodoListProps) => {
	const removeHandler = () => {
		removeTodoList(todoListId);
	};

	const addTaskHandler = (title:string) => {
		addTask(title, id);
	}

	const changeTodoListTitleHandler = (title:string) => {
		changeTodoListTitle(todoListId, title)
	}

	return (
		<div>
			<h3>
				<EditableSpan title={title} changeTitle={changeTodoListTitleHandler}/>
				<Button text='x' onClick={removeHandler}></Button>
			</h3>

			<AddItemForm addItem={addTaskHandler} />
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
						changeTaskTitle={changeTaskTitle}
					/>
				))}
			</ul>
			<TodoFilter todoListId={todoListId} id={id} changeFilter={changeFilter} />
		</div>
	);
};
