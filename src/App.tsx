import React, { useState } from 'react';
import { v1 } from 'uuid';
import { TodoLists } from './components/TodoLists';
import { FilterValues, TodoListType } from './types/types';

export const App: React.FC = () => {
	const todoListId1 = v1();
	const todoListId2 = v1();

	const [tasksObj, setTasksObj] = useState({
		[todoListId1]: [
			{
				id: v1(),
				title: 'todo 1st sample',
				isDone: true,
			},
			{
				id: v1(),
				title: 'todo 2nd sample',
				isDone: false,
			},
			{
				id: v1(),
				title: 'todo 3rd sample',
				isDone: true,
			},
		],
		[todoListId2]: [
			{
				id: v1(),
				title: 'todo 4st sample',
				isDone: true,
			},
			{
				id: v1(),
				title: 'todo 5nd sample',
				isDone: false,
			},
		],
	});

	const [todoLists, setTodoLists] = useState<TodoListType[]>([
		{ id: todoListId1, title: '1st todo list title', filter: 'active' },
		{ id: todoListId2, title: '2nd todo list title', filter: 'completed' },
	]);

	const changeTaskStatus = (
		id: string,
		status: boolean,
		todoListId: string
	) => {
		const tasks = tasksObj[todoListId];
		let task = tasks.find(t => t.id === id);
		if (task) {
			task.isDone = status;
			tasksObj[todoListId] = [...tasks];
			setTasksObj({ ...tasksObj });
		}
	};

	const addTask = (title: string, todoListId: string) => {
		const tasks = tasksObj[todoListId];
		const newTask = {
			id: v1(),
			title: title,
			isDone: false,
		};
		const newTasks = [newTask, ...tasks];
		tasksObj[todoListId] = newTasks;
		setTasksObj({ ...tasksObj });
	};

	const changeFilter = (value: FilterValues, id: string) => {
		const todoList = todoLists.find(tl => tl.id === id);
		if (todoList) {
			todoList.filter = value;
			setTodoLists([...todoLists]);
		}
	};

	const removeTask = (id: string, todoListId: string) => {
		const tasks = tasksObj[todoListId];
		const clearedTasks = tasks.filter(t => t.id !== id);
		tasksObj[todoListId] = clearedTasks;
		setTasksObj({ ...tasksObj });
	};

	const removeTodoList = (todoListId: string) => {
		const clearedTodoLists = todoLists.filter(tl => tl.id !== todoListId);
		setTodoLists(clearedTodoLists);
		delete tasksObj[todoListId];
		setTasksObj({ ...tasksObj });
	};

	return (
		<div className='App'>
			app
			<TodoLists
				tasks={tasksObj}
				todoLists={todoLists}
				changeTaskStatus={changeTaskStatus}
				addTask={addTask}
				changeFilter={changeFilter}
				removeTask={removeTask}
				removeTodoList={removeTodoList}
			/>
		</div>
	);
};
