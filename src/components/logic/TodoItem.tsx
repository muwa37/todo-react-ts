import { Delete } from '@mui/icons-material';
import { Checkbox, IconButton } from '@mui/material';
import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import {
  changeTaskStatusAC,
  changeTaskTitleAC,
  removeTaskAC,
} from '../../state/reducers/tasks-reducer/tasks-action-creators';
import { TodoItemProps } from '../../types/props-types';
import { EditableSpan } from './../common/EditableSpan';

export const TodoItem: React.FC<TodoItemProps> = ({
  id,
  todoListId,
  title,
  isDone,
}: TodoItemProps) => {
  const dispatch = useDispatch();

  const onRemoveClickHandler = () => {
    dispatch(removeTaskAC(id, todoListId));
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeTaskStatusAC(e.currentTarget.checked, id, todoListId));
  };
  const onTitleChangeHandler = (newTitle: string) => {
    dispatch(changeTaskTitleAC(newTitle, id, todoListId));
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
