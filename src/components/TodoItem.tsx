import { Delete } from '@mui/icons-material';
import { Checkbox, IconButton } from '@mui/material';
import { ChangeEvent } from 'react';
import { TodoItemProps } from '../types/types';
import { EditableSpan } from './EditableSpan';

export const TodoItem: React.FC<TodoItemProps> = ({
  id,
  todoListId,
  title,
  isDone,
  removeTask,
  changeTaskStatus,
  changeTaskTitle,
}: TodoItemProps) => {
  const onRemoveClickHandler = () => {
    removeTask(id, todoListId);
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    changeTaskStatus(id, e.currentTarget.checked, todoListId);
  };
  const onTitleChangeHandler = (newTitle: string) => {
    changeTaskTitle(id, newTitle, todoListId);
  };
  return (
    <div>
      <Checkbox
        onChange={onChangeHandler}
        checked={isDone}
        color={'secondary'}
      />
      <EditableSpan changeTitle={onTitleChangeHandler} title={title} />
      <IconButton onClick={onRemoveClickHandler}>
        <Delete />
      </IconButton>
    </div>
  );
};
