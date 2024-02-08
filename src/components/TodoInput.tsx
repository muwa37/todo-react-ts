import { ChangeEvent, useState } from 'react';
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
				onKeyPress={e => {
					if (e.key === 'Enter') {
						addTask(newTaskTitle);
						setNewTaskTitle('');
					}
				}}
			/>
			<Button text='add' onClick={onCliclHandler} />
		</div>
	);
};
