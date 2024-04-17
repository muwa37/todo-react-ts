import { TextField } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import { EditableSpanProps } from '../../types/props';

export const EditableSpan: React.FC<EditableSpanProps> = React.memo(
  ({ title, changeTitle }: EditableSpanProps) => {
    const [editMode, setEditMode] = useState(false);
    const [inputTitle, setInputTitle] = useState('');
    const activateEditMode = () => {
      setEditMode(true);
      setInputTitle(title);
    };
    const activateViewMode = () => {
      setEditMode(false);
      changeTitle(inputTitle);
    };
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setInputTitle(e.currentTarget.value);
    };

    return editMode ? (
      <TextField
        value={inputTitle}
        onChange={onChangeTitleHandler}
        onBlur={activateViewMode}
        autoFocus={true}
        variant={'standard'}
        label={'todo title'}
      />
    ) : (
      <span onDoubleClick={activateEditMode}>{title}</span>
    );
  }
);
