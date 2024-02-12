import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { AddItemFormProps } from '../types/types';
import { Button } from '@mui/material'
import { Input } from './ui/Input';

export const AddItemForm: React.FC<AddItemFormProps> = ({
	addItem,
}: AddItemFormProps) => {
	const [title, setNewTaskTitle] = useState('');
	const [titleError, setTitleError] = useState<string | null>(null);
	const addValidatedItem = () => {
		if (title.trim() === '') {
			setTitleError('title required');
			return;
		}
		addItem(title);
		setNewTaskTitle('');
	};

	//TODO: separate handlers

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTaskTitle(e.currentTarget.value);
	};
	const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		setTitleError(null);
		if (e.key === 'Enter') {
			addValidatedItem();
			setNewTaskTitle('');
		}
	};
	const onClickHandler = () => {
		addValidatedItem();
		setNewTaskTitle('');
	};

	//TODO: debounce on change
	return (
		<div>
			<div>
				<Input
					value={title}
					onChange={onChangeHandler}
					onKeyPress={onEnterPressHandler}
				/>
				<Button onClick={onClickHandler} variant='contained'  >+</Button>
			</div>
			{titleError && <div>{titleError}</div>}
		</div>
	);
};
