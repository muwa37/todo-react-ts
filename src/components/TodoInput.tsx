import { useState } from 'react';
import { TodoInputProps } from '../types/types';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

export const TodoInput: React.FC<TodoInputProps> = ({
	addTask,
}: TodoInputProps) => {
	const [newTaskTitle, setNewTaskTitle] = useState('');

	//debounce on change
	return (
		<div>
			<Input
				placeholder='todo name'
				value={newTaskTitle}
				onChange={e => {
					const target = e.currentTarget as HTMLInputElement;
					setNewTaskTitle(target.value);
				}}
			/>
			<Button text='add' onClick={() => addTask(newTaskTitle)} />
		</div>
	);
};
