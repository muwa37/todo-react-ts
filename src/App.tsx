import React, { useState } from 'react';
import { v1 } from 'uuid';
import { TodoList } from './components/TodoList';
import { FilterValues, Task } from './types/types';

export const App: React.FC = () => {
	const [tasks, setTasks] = useState<Task[]>([
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
	]);
	const [filter, setFilter] = useState<FilterValues>('all');

  const changeTaskStatus = (id: string, status: boolean) => {
    let task = tasks.find((t) => t.id === id);
    if (task) {
      task.isDone = status;
    }
    removeTask(id);
    setTasks([...tasks]);
  }

	const addTask = (title: string) => {
		const newTask = {
			id: v1(),
			title: title,
			isDone: false,
		};
		setTasks([newTask, ...tasks]);
	};


	const changeFilter = (value: FilterValues) => {
		setFilter(value);
	};

	let filteredTasks = tasks;
	if (filter === 'active') {
		filteredTasks = tasks.filter(t => t.isDone === false);
	}
	if (filter === 'completed') {
		filteredTasks = tasks.filter(t => t.isDone === true);
	}

	const removeTask = (id: string) => {
		const clearedTasks = tasks.filter(t => t.id !== id);
		setTasks(clearedTasks);
	};

	return (
		<div className='App'>
			app
			<TodoList
				title='first'
				tasks={filteredTasks}
				removeTask={removeTask}
				changeFilter={changeFilter}
				addTask={addTask}
        changeTaskStatus={changeTaskStatus}
        currentFilter={filter}
			/>
		</div>
	);
};
