import { ControlPoint } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { AddItemFormProps } from '../../types/props-types';

export const AddItemForm: React.FC<AddItemFormProps> = ({
  addItem,
}: AddItemFormProps) => {
  const [title, setNewTitle] = useState('');
  const [titleError, setTitleError] = useState<string | null>(null);
  const addValidatedItem = () => {
    if (title.trim() === '') {
      setTitleError('title required');
      return;
    }
    addItem(title);
    setNewTitle('');
  };

  //TODO: separate handlers

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.currentTarget.value);
  };
  const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (titleError !== null) setTitleError(null);
    if (e.key === 'Enter') {
      addValidatedItem();
      setNewTitle('');
    }
  };
  const onClickHandler = () => {
    addValidatedItem();
    setNewTitle('');
  };

  //TODO: debounce on change
  return (
    <div>
      <TextField
        value={title}
        variant={'outlined'}
        label={'type value'}
        onChange={onChangeHandler}
        onKeyPress={onEnterPressHandler}
        error={!!titleError}
        helperText={titleError}
      />
      <IconButton onClick={onClickHandler} color={'primary'}>
        <ControlPoint />
      </IconButton>
    </div>
  );
};
