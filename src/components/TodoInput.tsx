import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { TodoInputProps } from '../types/types';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

export const TodoInput: React.FC<TodoInputProps> = ({
	addTask,
	todoListId,
}: TodoInputProps) => {
	const [newTaskTitle, setNewTaskTitle] = useState('');
	const [taskTitleError, setTaskTitleError] = useState<string | null>(null);
	const addValidatedTask = () => {
		if (newTaskTitle.trim() === '') {
			setTaskTitleError('task name required');
			return;
		}
		addTask(newTaskTitle, todoListId);
		setNewTaskTitle('');
	};

	//TODO: separate handlers

	const onChangeHadler = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTaskTitle(e.currentTarget.value);
	};
	const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		setTaskTitleError(null);
		if (e.key === 'Enter') {
			addValidatedTask();
			setNewTaskTitle('');
		}
	};
	const onCliclHandler = () => {
		addValidatedTask();
		setNewTaskTitle('');
	};

	//TODO: debounce on change
	return (
		<div>
			<div>
				<Input
					placeholder='todo name'
					value={newTaskTitle}
					onChange={onChangeHadler}
					onKeyPress={onEnterPressHandler}
				/>
				<Button text='add' onClick={onCliclHandler} />
			</div>
			{taskTitleError && <div>{taskTitleError}</div>}
		</div>
	);
};
