import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { TodoInputProps } from '../types/types';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

export const TodoInput: React.FC<TodoInputProps> = ({
	addTask,
}: TodoInputProps) => {
	const [newTaskTitle, setNewTaskTitle] = useState('');

	const onChangeHadler = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTaskTitle(e.currentTarget.value);
	};
	const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			addTask(newTaskTitle);
			setNewTaskTitle('');
		}
	};
	const onCliclHandler = () => {
		addTask(newTaskTitle);
		setNewTaskTitle('');
	};

	//debounce on change
	return (
		<div>
			<Input
				placeholder='todo name'
				value={newTaskTitle}
				onChange={onChangeHadler}
				onKeyPress={onEnterPressHandler}
			/>
			<Button text='add' onClick={onCliclHandler} />
		</div>
	);
};
